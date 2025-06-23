"use client";

import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Card, CardContent } from "@/components/ui/card";

export const PortfolioMetricsSection = (): JSX.Element => {
  // Metrics data
  const metrics = [
    {
      title: "Target Assets Under Management",
      value: "$5B",
      image: "/Solar-Energy-Farm-Landowner-Landlord-Lease 2 (2).png",
    },
    {
      title: "Renewable Energy Deployed",
      value: "200MW",
      image: "/frame-1272638065.png",
    },
    {
      title: "Mini-grids Installed Across Africa",
      value: "100",
      image: "/Solar-Energy-Farm-Landowner-Landlord-Lease 2 (2).png",
    },
  ];

  const [sectionRef, sectionInView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  return (
    <section className="w-full bg-gray-50 py-[80px] px-[60px]">
      <div className="max-w-[1240px] mx-auto">
        <div className="text-center mb-12">
          <h2 className="font-outfit font-bold text-black text-[36px] leading-[44px] mb-4">
            Key Metrics & Achievements
          </h2>
          <p className="font-outfit font-normal text-bluecolor-4 text-[16px] leading-[24px] max-w-[600px] mx-auto">
            Our impact is measured through meaningful metrics that demonstrate our commitment to sustainable development across West Africa.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {metrics.map((metric, index) => (
            <Card key={index} className="bg-white rounded-[12px] border-none shadow-sm overflow-hidden">
              <CardContent className="p-0">
                <div className="h-[200px] overflow-hidden">
                  <img
                    className="w-full h-full object-cover"
                    src={metric.image}
                    alt={metric.title}
                  />
                </div>
                <div className="p-6 text-center">
                  <h3 className="font-outfit font-bold text-[48px] leading-[56px] text-goldcolor-8 mb-2">
                    {metric.value}
                  </h3>
                  <p className="font-outfit font-medium text-[16px] text-black">
                    {metric.title}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};