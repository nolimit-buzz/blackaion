"use client";

import React from "react";

export const PortfolioPartnersSection = (): JSX.Element => {
  // Partner logos data
  const partners = [
    { name: "KPMG", logo: "/white.png" },
    { name: "UBA", logo: "/white.png" },
    { name: "Partner 3", logo: "/white.png" },
    { name: "Partner 4", logo: "/white.png" },
    { name: "Partner 5", logo: "/white.png" },
    { name: "Partner 6", logo: "/white.png" },
  ];

  return (
    <section className="w-full bg-black py-[60px] px-[60px]">
      <div className="max-w-[1240px] mx-auto text-center">
        <h2 className="font-outfit font-bold text-white text-[32px] leading-[40px] mb-4">
          Our Partners
        </h2>
        <p className="font-outfit font-normal text-white/70 text-[16px] leading-[24px] mb-12 max-w-[600px] mx-auto">
          We collaborate with leading organizations and institutions to deliver exceptional results across our portfolio companies.
        </p>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center">
          {partners.map((partner, index) => (
            <div key={index} className="flex items-center justify-center p-4">
              <img
                className="h-12 w-auto opacity-70 hover:opacity-100 transition-opacity duration-300 filter brightness-0 invert"
                src={partner.logo}
                alt={partner.name}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};