"use client";

import React, { useEffect, useState } from "react";
import { Services } from "./sections/Services/Services";
import { Hero } from "./sections/Hero/Hero";
import { Mandate } from "./sections/Mandate/Mandate";
import { ESGImpact } from "./sections/ESGImpact/ESGImpact";
import { fetchHomePageData, HomePageData } from "@/lib/api";
import { Loader } from "@/components/Loader/Loader";

interface ElementProps {
  initialData?: HomePageData;
}

export const  Element = ({ initialData }: ElementProps): JSX.Element => {
  const [data, setData] = useState<HomePageData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
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
  }, []);

  return (
    <main className="bg-black flex flex-col w-full">
     {!data ? <></> : <>
      <Hero data={data.hero} navbar={data.navbar} />
      <Mandate data={data.mandate} />
      <Services data={data.what_we_do} />
      <ESGImpact data={data.esg_impact} />
      </>}
    </main>
  );
};