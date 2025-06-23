"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export const PortfolioMainSection = (): JSX.Element => {
  const [activeFilter, setActiveFilter] = useState("All");

  // Filter tabs
  const filterTabs = ["All", "Sectors", "Status"];

  // Portfolio projects data - exactly as shown in Figma
  const portfolioProjects = [
    {
      id: 1,
      title: "Ashlag Security Consultants Limited",
      sector: "SECURITY",
      status: "ACTIVE",
      location: "Lagos",
      year: "2023",
      image: "/Solar-Energy-Farm-Landowner-Landlord-Lease 2 (2).png",
      statusColor: "bg-blue-500",
      featured: false,
    },
    {
      id: 2,
      title: "Karu Waste Management",
      sector: "WASTE",
      status: "ACTIVE", 
      location: "Abuja",
      year: "2022",
      image: "/frame-1272638065.png",
      statusColor: "bg-blue-500",
      featured: false,
    },
    {
      id: 3,
      title: "Swap Station Mobility Limited",
      sector: "MOBILITY",
      status: "MANUFACTURING",
      location: "Lagos",
      year: "2024",
      image: "/Solar-Energy-Farm-Landowner-Landlord-Lease 2 (2).png",
      statusColor: "bg-red-500",
      featured: false,
    },
    {
      id: 4,
      title: "Blackaion Energy",
      sector: "RENEWABLE ENERGY",
      status: "ACTIVE",
      location: "Lagos",
      year: "2021",
      image: "/frame-1272638065.png",
      statusColor: "bg-blue-500",
      featured: false,
    },
    {
      id: 5,
      title: "Kano Electricity Distribution Company",
      sector: "ELECTRICITY",
      status: "ACTIVE",
      location: "Kano",
      year: "2020",
      image: "/Solar-Energy-Farm-Landowner-Landlord-Lease 2 (2).png",
      statusColor: "bg-orange-500",
      featured: false,
    },
    {
      id: 6,
      title: "Emerald Industrial CFZE",
      sector: "MANUFACTURING",
      status: "ACTIVE",
      location: "Lagos",
      year: "2019",
      image: "/frame-1272638065.png",
      statusColor: "bg-red-500",
      featured: false,
    },
    {
      id: 7,
      title: "Capsa Technology",
      sector: "FINTECH",
      status: "ACTIVE",
      location: "Lagos",
      year: "2022",
      image: "/Solar-Energy-Farm-Landowner-Landlord-Lease 2 (2).png",
      statusColor: "bg-yellow-500",
      featured: false,
    },
    {
      id: 8,
      title: "Kompakte Care",
      sector: "HEALTHCARE",
      status: "ACTIVE",
      location: "Lagos",
      year: "2023",
      image: "/frame-1272638065.png",
      statusColor: "bg-green-500",
      featured: false,
    },
  ];

  // Animation setup
  const [sectionRef, sectionInView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  return (
    <section className="flex flex-col w-full bg-white py-[40px] px-[60px]">
      <div className="max-w-[1240px] mx-auto w-full">
        {/* Filter Tabs */}
        <div className="flex items-center gap-8 mb-12">
          {filterTabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveFilter(tab)}
              className={`font-outfit font-medium text-[16px] pb-2 border-b-2 transition-all duration-300 ${
                activeFilter === tab
                  ? "text-black border-goldcolor-8"
                  : "text-gray-400 border-transparent hover:text-gray-600"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {portfolioProjects.map((project, index) => (
            <Card key={project.id} className="group bg-white rounded-[8px] border border-gray-200/50 shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden cursor-pointer">
              <CardContent className="p-0">
                {/* Project Image */}
                <div className="relative h-[200px] overflow-hidden">
                  <img
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    src={project.image}
                    alt={project.title}
                  />
                  
                  {/* Status Indicator */}
                  <div className="absolute top-3 left-3">
                    <div className={`w-3 h-3 rounded-full ${project.statusColor}`}></div>
                  </div>

                  {/* Sector Badge */}
                  <div className="absolute top-3 right-3">
                    <Badge className="bg-white/90 text-black text-[10px] font-outfit font-normal">
                      {project.sector}
                    </Badge>
                  </div>
                </div>

                {/* Project Content */}
                <div className="p-4">
                  <div className="flex flex-col gap-3">
                    {/* Title */}
                    <h3 className="font-outfit font-semibold text-[16px] leading-[20px] text-black group-hover:text-goldcolor-8 transition-colors duration-300">
                      {project.title}
                    </h3>

                    {/* Meta Info */}
                    <div className="flex items-center justify-between text-[12px] text-gray-500">
                      <div className="flex items-center gap-4">
                        <span className="flex items-center gap-1">
                          <div className="w-1 h-1 bg-gray-400 rounded-full"></div>
                          {project.status}
                        </span>
                        <span className="flex items-center gap-1">
                          <div className="w-1 h-1 bg-gray-400 rounded-full"></div>
                          {project.location}
                        </span>
                      </div>
                      <span>{project.year}</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Pagination */}
        <div className="flex items-center justify-center gap-2 mt-12">
          <button className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center">
            <span className="text-gray-600 text-sm">‹</span>
          </button>
          <button className="w-8 h-8 rounded-full bg-black text-white flex items-center justify-center text-sm">
            1
          </button>
          <button className="w-8 h-8 rounded-full bg-gray-200 text-gray-600 flex items-center justify-center text-sm">
            2
          </button>
          <button className="w-8 h-8 rounded-full bg-gray-200 text-gray-600 flex items-center justify-center text-sm">
            3
          </button>
          <button className="w-8 h-8 rounded-full bg-gray-200 text-gray-600 flex items-center justify-center text-sm">
            4
          </button>
          <button className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center">
            <span className="text-gray-600 text-sm">›</span>
          </button>
        </div>
      </div>
    </section>
  );
};