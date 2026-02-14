"use client";

import React from "react";
import { Services } from "./sections/Services/Services";
import { Hero } from "./sections/Hero/Hero";
import { Mandate } from "./sections/Mandate/Mandate";
import { ESGImpact } from "./sections/ESGImpact/ESGImpact";
import { HomePageData } from "@/lib/api";

interface ElementProps {
  data: HomePageData;
}

export const Element = ({ data }: ElementProps): JSX.Element => {
  return (
    <main className="bg-black flex flex-col w-full">
      <Hero data={data.hero} navbar={data.navbar} />
      <Mandate data={data.mandate} />
      <Services data={data.what_we_do} />
      <ESGImpact data={data.esg_impact} />
    </main>
  );
};