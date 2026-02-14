"use client";

import React, { useEffect, useState } from "react";
import { Portfolio } from "./sections/Portfolio/Portfolio";
import { Services } from "./sections/Services/Services";
import { FooterSubsection } from "./sections/Footer/Footer";
import { Hero } from "./sections/Hero/Hero";
import { Mandate } from "./sections/Mandate/Mandate";
import { ESGImpact } from "./sections/ESGImpact/ESGImpact";
import { fetchHomePageData, HomePageData } from "@/lib/api";

interface ElementProps {
  initialData?: HomePageData;
}

export const Element = ({ initialData }: ElementProps): JSX.Element => {
  const [data, setData] = useState<HomePageData | null>(initialData || null);
  const [loading, setLoading] = useState(!initialData);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    // Only fetch data if no initial data was provided
    if (initialData) {
      setData(initialData);
      setLoading(false);
      return;
    }

    const loadData = async () => {
      try {
        setLoading(true);
        const homePageData = await fetchHomePageData();
        setData(homePageData);
      } catch (err) {
        console.error('Failed to load home page data:', err);
        setError(err instanceof Error ? err.message : 'Failed to load data');
      } finally {
        setLoading(false);
      }
    };

    loadData();
  }, [initialData]);

  if (loading) {
    return (
      <main className="flex flex-col w-full p-4 items-center justify-center min-h-screen">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-gray-900 mx-auto"></div>
          <p className="mt-4 text-gray-600">Loading...</p>
        </div>
      </main>
    );
  }

  if (error || !data) {
    return (
      <main className="flex flex-col w-full p-4 items-center justify-center min-h-screen">
        <div className="text-center">
          <p className="text-red-600 mb-4">Error loading content</p>
          <p className="text-gray-600 text-sm">{error}</p>
        </div>
      </main>
    );
  }

  return (
    <main className="bg-black flex flex-col w-full">
      <Hero data={data.hero} navbar={data.navbar} />
      <Mandate data={data.mandate} />
      <Services data={data.what_we_do} />
      <ESGImpact data={data.esg_impact} />
    </main>
  );
};