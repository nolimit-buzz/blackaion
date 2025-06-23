"use client";

import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";

export const FooterSubsection = (): JSX.Element => {
  // Animation setup
  const [sectionRef, sectionInView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const [newsletterRef, newsletterInView] = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });

  const [footerRef, footerInView] = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  // Grid lines data for background effect
  const gridLines = Array(60).fill(null);

  // Quick links data - matching Figma exactly
  const quickLinks = [
    "About Us",
    "Services", 
    "Impact",
    "Get Involved",
    "Resources",
    "Contact Us",
  ];

  // Legal links data
  const legalLinks = ["Privacy Policy", "Terms Of Service", "Cookie Policy"];

  // Office locations data - matching Figma layout
  const officeLocations = [
    {
      title: "NIGERIA OFFICE",
      address: "3 Maitama Sule Street, Ikoyi, Lagos, Nigeria.",
      contact: "+234 1 453 8228",
    },
    {
      title: "MAURITIUS OFFICE", 
      address: "Level 5, Maeva Tower, Bank Street, Cybercity, Ebene, Mauritius.",
      contact: "Info@blackoain.com",
    },
  ];

  // Social media icons
  const socialIcons = [
    { name: "LinkedIn", src: "/linkedin.svg" },
    { name: "Twitter", src: "/twitter.svg" },
    { name: "Facebook", src: "/facebook-rounded-svgrepo-com-1.svg" },
  ];

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.8,
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const newsletterVariants = {
    hidden: { 
      opacity: 0, 
      y: 60,
      scale: 0.95,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { 
        duration: 1,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  };

  const footerContentVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.46, 0.45, 0.94],
        staggerChildren: 0.15,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { 
      opacity: 0, 
      y: 20,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: { 
        duration: 0.6,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  };

  return (
    <footer className="relative w-full bg-black overflow-hidden">
      {/* Subtle background grid lines - very minimal on black */}
      <div className="absolute inset-0 opacity-[0.01] overflow-hidden">
        <div className="flex w-full items-center gap-[23.73px] absolute top-0 left-0 -rotate-45 transform-gpu">
          {gridLines.map((_, index) => (
            <div
              key={`grid-line-${index}`}
              className="w-[9.49px] bg-white/3 relative h-full"
            />
          ))}
        </div>
      </div>

      <motion.div
        ref={sectionRef}
        className="relative z-10"
        variants={containerVariants}
        initial="hidden"
        animate={sectionInView ? "visible" : "hidden"}
      >
        <div className="flex flex-col w-full max-w-[1440px] mx-auto items-start gap-[100px] py-16  px-5 sm:px-10 lg:px-16 xl:px-20">
          {/* Newsletter subscription card - Exact Figma match */}
          <motion.div
            ref={newsletterRef}
            variants={newsletterVariants}
            initial="hidden"
            animate={newsletterInView ? "visible" : "hidden"}
            className="w-full"
          >
            <Card className="flex flex-col h-[340px] items-center justify-center gap-2.5 relative w-full bg-[#121317] rounded-[10px] overflow-hidden border-none shadow-none">
              {/* Card background effects */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-goldcolor-8/5 via-transparent to-bluecolor-8/5"
                initial={{ opacity: 0 }}
                animate={newsletterInView ? { opacity: 1 } : { opacity: 0 }}
                transition={{ duration: 1.5, delay: 0.5 }}
              />

              <CardContent className="flex flex-col items-center justify-center gap-[22px] pt-6 w-full relative z-10">
                <motion.h2
                  className="relative w-full max-w-[791px]  font-bold text-white text-[32px] sm:text-[36px] lg:text-[40px] text-center tracking-[0] leading-[38px] sm:leading-[42px] lg:leading-[46px] px-4"
                  
                  initial={{ opacity: 0, y: 30 }}
                  animate={newsletterInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                  transition={{ delay: 0.3, duration: 0.8 }}
                >
                  <motion.span
                    className="inline-block"
                    initial={{ opacity: 0, y: 20 }}
                    animate={newsletterInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ delay: 0.5, duration: 0.6 }}
                  >
                    Navigating InfraTech{" "}
                  </motion.span>
                  {" "}
                  <motion.span
                    className="inline-block text-goldcolor-i"
                    initial={{ opacity: 0, y: 20 }}
                    animate={newsletterInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ delay: 0.7, duration: 0.6 }}
                  >
                    Frontiers
                  </motion.span>
                </motion.h2>

                <motion.p
                  className="relative w-full max-w-[600px]  font-normal text-bluecolor-4 text-[14px] sm:text-[15px] lg:text-[16px] text-center tracking-[0] leading-[22px] sm:leading-[24px] lg:leading-[25px] px-4"
                  
                  initial={{ opacity: 0, y: 20 }}
                  animate={newsletterInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ delay: 0.9, duration: 0.6 }}
                >
                  This is your concise guide to the evolving landscape of
                  Infrastructure and Technology (Infra-Tech) in West Africa.
                </motion.p>

                <motion.div
                  className="flex items-start relative"
                  initial={{ opacity: 0, y: 20, scale: 0.95 }}
                  animate={newsletterInView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 20, scale: 0.95 }}
                  transition={{ delay: 1.1, duration: 0.8 }}
                >
                  <Input
                    className="w-[220px] sm:w-[268px] h-[45px] rounded-[8px_0px_0px_8px]  font-normal text-bluecolor-4 text-[14px] tracking-[0] leading-5 focus-visible:ring-0 focus-visible:ring-offset-0 border-0 bg-white"
                    placeholder="Email"
                    
                  />
                  <Button className="w-[100px] sm:w-[118px] h-[45px] bg-goldcolor-8 hover:bg-goldcolor-9 rounded-[0px_8px_8px_0px]  font-bold text-bright text-[14px] sm:text-[16px] tracking-[0] leading-[25px] transition-all duration-300 hover:scale-[1.02]">
                    SUBSCRIBE
                  </Button>
                </motion.div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Footer content - Exact Figma layout */}
          <motion.div
            ref={footerRef}
            className="flex flex-col items-center justify-center gap-10 relative w-full"
            variants={footerContentVariants}
            initial="hidden"
            animate={footerInView ? "visible" : "hidden"}
          >
            <div className="flex flex-col w-full items-start gap-[60px] relative">
              {/* Main footer sections - Exact Figma spacing and layout */}
              <div className="flex flex-col lg:flex-row items-start gap-8 lg:gap-[80px] xl:gap-[152px] relative w-full">
                {/* Company info - Exact Figma positioning */}
                <motion.div
                  className="flex flex-col w-full lg:w-[271px] items-start gap-[30px] relative"
                  variants={itemVariants}
                >
                  <div className="flex flex-col items-start gap-10 relative">
                    {/* Logo placeholder - matching Figma dimensions */}
                    <motion.div
                      className="relative w-60 h-[55.3px] flex items-center justify-center"
                      whileHover={{ scale: 1.02 }}
                      transition={{ duration: 0.3 }}
                    >
                      <img src="/logo-white.png" alt="Blackaion Logo" className="w-full h-full object-contain" />
                    </motion.div>

                    <motion.p
                      className="relative w-full max-w-[260px]  font-normal text-bluecolor-4 text-[14px] text-justify tracking-[0] leading-[22px]"
                      
                      initial={{ opacity: 0, y: 15 }}
                      animate={footerInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 15 }}
                      transition={{ delay: 0.5, duration: 0.6 }}
                    >
                      Investment and advisory company with a focus on developing
                      and growing infrastructure, energy and technology ventures
                      across West Africa.
                    </motion.p>
                  </div>
                </motion.div>

                {/* Links and contact info - Exact Figma layout */}
                <div className="flex flex-col lg:flex-row w-full items-start justify-between relative">
                  {/* Quick links - Exact Figma styling */}
                  <motion.div
                    className="flex flex-col items-start gap-[22px] relative"
                    variants={itemVariants}
                  >
                    <h3 className="relative w-[165px]  font-bold text-white text-[16px] tracking-[1.00px] leading-5">
                      QUICK LINKS
                    </h3>

                    <div className="flex flex-col items-start gap-[15px] relative">
                      {quickLinks.map((link, index) => (
                        <motion.a
                          key={`quick-link-${index}`}
                          href="#"
                          className="w-[165px]  font-normal text-bluecolor-4 text-[16px] tracking-[0] leading-[25px] relative hover:text-white transition-colors duration-300"
                          
                          whileHover={{ x: 3 }}
                          transition={{ duration: 0.2 }}
                          initial={{ opacity: 0, x: -10 }}
                          animate={footerInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -10 }}
                          custom={index}
                        >
                          {link}
                        </motion.a>
                      ))}
                    </div>
                  </motion.div>

                  {/* Legal links - Exact Figma styling */}
                  <motion.div
                    className="flex flex-col items-start gap-[22px] relative"
                    variants={itemVariants}
                  >
                    <h3 className="w-[166px]  font-bold text-white tracking-[1.00px] leading-5 relative text-[16px]">
                      LEGAL
                    </h3>

                    <div className="flex flex-col items-start gap-[15px] relative">
                      {legalLinks.map((link, index) => (
                        <motion.a
                          key={`legal-link-${index}`}
                          href="#"
                          className="w-[166px]  font-normal text-bluecolor-4 text-[16px] tracking-[0] leading-[25px] relative hover:text-white transition-colors duration-300"
                          
                          whileHover={{ x: 3 }}
                          transition={{ duration: 0.2 }}
                          initial={{ opacity: 0, x: -10 }}
                          animate={footerInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -10 }}
                          custom={index}
                        >
                          {link}
                        </motion.a>
                      ))}
                    </div>
                  </motion.div>

                  {/* Office locations - Exact Figma layout */}
                  <motion.div
                    className="flex flex-col items-start gap-[44px] relative"
                    variants={itemVariants}
                  >
                    {officeLocations.map((office, index) => (
                      <div
                        key={`office-${index}`}
                        className="flex flex-col items-start gap-[22px] relative"
                      >
                        <h3 className="w-[200px]  font-bold text-white tracking-[1.00px] leading-5 relative text-[16px]">
                          {office.title}
                        </h3>

                        <div className="flex flex-col w-full max-w-[248px] items-start gap-[15px] relative">
                          <motion.p
                            className="relative w-full  font-normal text-bluecolor-4 text-[16px] tracking-[0] leading-[30px]"
                            
                            initial={{ opacity: 0, y: 10 }}
                            animate={footerInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
                            transition={{ delay: 0.7 + index * 0.2, duration: 0.6 }}
                          >
                            {office.address}
                            <br />
                            {office.contact}
                          </motion.p>
                        </div>
                      </div>
                    ))}
                  </motion.div>
                </div>
              </div>

              {/* Separator - Exact Figma styling */}
              <motion.div
                initial={{ scaleX: 0, opacity: 0 }}
                animate={footerInView ? { scaleX: 1, opacity: 1 } : { scaleX: 0, opacity: 0 }}
                transition={{ delay: 1, duration: 0.8, ease: "easeOut" }}
                style={{ originX: 0 }}
              >
                <Separator className="w-full bg-white/10" />
              </motion.div>

              {/* Footer bottom - Exact Figma layout */}
              <motion.div
                className="flex flex-col sm:flex-row w-full items-start sm:items-center gap-5 sm:gap-0 sm:justify-between relative"
                initial={{ opacity: 0, y: 20 }}
                animate={footerInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ delay: 1.2, duration: 0.6 }}
              >
                {/* Social media icons - Exact Figma positioning */}
                <div className="flex items-start gap-5 relative">
                  {socialIcons.map((icon, index) => (
                    <motion.img
                      key={`social-icon-${index}`}
                      className="relative w-5 h-5 cursor-pointer hover:opacity-80 transition-opacity duration-300"
                      alt={icon.name}
                      src={icon.src}
                      whileHover={{ scale: 1.1, y: -2 }}
                      transition={{ duration: 0.2 }}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={footerInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                      custom={index}
                    />
                  ))}
                </div>

                {/* Copyright - Exact Figma styling */}
                <motion.p
                  className="relative w-fit  font-normal text-bluecolor-4 text-[13.5px] tracking-[0] leading-[22px] whitespace-nowrap"
                  
                  initial={{ opacity: 0, x: 20 }}
                  animate={footerInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
                  transition={{ delay: 1.4, duration: 0.6 }}
                >
                  © 2023 BLACKAOIN. All Rights Reserved.
                </motion.p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </footer>
  );
};