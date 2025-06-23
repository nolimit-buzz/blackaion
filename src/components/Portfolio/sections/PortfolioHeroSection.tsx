"use client";

import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";

export const PortfolioHeroSection = (): JSX.Element => {
  // Navigation menu items data
  const navItems = [
    "About",
    "Services", 
    "Impact",
    "Get Involved",
    "Resources",
    "Contact Us",
  ];

  // Animation setup
  const [heroRef, heroInView] = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });

  return (
    <div className="flex flex-col w-full">
      {/* Header Section */}
      <header className="w-full h-[80px] bg-white flex justify-between items-center relative z-20 px-[60px]">
        <div>
          <img
            className="w-[120px] h-[28px] object-cover cursor-pointer"
            alt="Blackaion Logo"
            src="/white.png"
          />
        </div>

        <div className="flex items-center gap-8">
          <NavigationMenu>
            <NavigationMenuList className="flex items-center gap-8">
              {navItems.map((item, index) => (
                <NavigationMenuItem key={index}>
                  <NavigationMenuLink className="font-outfit text-black text-[14px] leading-[22px] tracking-[0px] cursor-pointer hover:text-goldcolor-8 transition-colors duration-300">
                    {item}
                  </NavigationMenuLink>
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>

          <img
            className="w-6 h-6 cursor-pointer"
            alt="Search"
            src="/frame-1.svg"
          />
        </div>
      </header>

      {/* Breadcrumb */}
      <div className="w-full bg-gray-50 py-4 px-[60px]">
        <p className="font-outfit text-[14px] text-gray-600">
          OUR PORTFOLIO
        </p>
      </div>

      {/* Hero Content */}
      <section className="w-full bg-white py-[60px] px-[60px]">
        <div className="max-w-[1240px] mx-auto">
          <div className="flex flex-col gap-6">
            <h1 className="font-outfit font-bold text-black text-[48px] leading-[56px] tracking-[-0.02em]">
              Explore Our Legacy: <span className="text-goldcolor-8">Blackaion's</span><br />
              Portfolio of Impactful Projects
            </h1>
            
            <p className="font-outfit font-normal text-bluecolor-4 text-[16px] leading-[24px] max-w-[600px]">
              We showcase our transformative infrastructure and technology projects across West Africa. Our work spans renewable energy, infrastructure development, and innovative solutions that drive sustainable growth.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};