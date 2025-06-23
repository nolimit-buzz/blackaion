import React from "react";
import { PortfolioHeroSection } from "./sections/PortfolioHeroSection";
import { PortfolioMainSection } from "./sections/PortfolioMainSection";
import { PortfolioMetricsSection } from "./sections/PortfolioMetricsSection";
import { PortfolioPartnersSection } from "./sections/PortfolioPartnersSection";
import { PortfolioNewsletterSection } from "./sections/PortfolioNewsletterSection";
import { FooterSubsection } from "../Element/sections/FooterSubsection/FooterSubsection";

export const PortfolioElement = (): JSX.Element => {
  return (
    <main className="flex flex-col w-full bg-white">
      <PortfolioHeroSection />
      <PortfolioMainSection />
      <PortfolioMetricsSection />
      <PortfolioPartnersSection />
      <PortfolioNewsletterSection />
      <FooterSubsection />
    </main>
  );
};