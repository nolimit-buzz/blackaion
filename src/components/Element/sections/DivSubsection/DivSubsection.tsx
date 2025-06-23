"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs";
import { SeeMoreArrowIcon } from "@/components/icons/SeeMoreArrowIcon";

export const DivSubsection = (): JSX.Element => {
  // Active project state
  const [activeProject, setActiveProject] = useState("02");

  // Portfolio projects data - matching Figma exactly
  const portfolioProjects = [
    {
      id: "01",
      name: "Kano Electricity Distribution Company",
      shortName: "KEDCO",
      isActive: false,
      overview: {
        description: "KEDCO is one of Nigeria's leading electricity distribution companies, serving millions of customers across Kano, Katsina, and Jigawa states. Our investment focuses on modernizing grid infrastructure and improving service delivery.",
        metrics: [
          {
            icon: "/ev-station-svgrepo-com-1.svg",
            label: "Customers Served",
            value: "2.1M",
          },
          {
            icon: "/dollar-minimalistic-svgrepo-com-1.svg",
            label: "Investment Value",
            value: "₦45B",
          },
          {
            icon: "/ev-rounded-svgrepo-com-1.svg",
            label: "Grid Coverage",
            value: "85%",
          },
        ]
      },
      about: "KEDCO operates as a key player in Nigeria's power sector, focusing on reliable electricity distribution and customer satisfaction through technological innovation.",
      maps: "Coverage spans across three northern Nigerian states with strategic distribution networks and substations."
    },
    {
      id: "02", 
      name: "Swap Station Mobility Limited",
      shortName: "SSM",
      isActive: true,
      overview: {
        description: "In May 2024, our portfolio company, Swap Station Mobility (\"SSM\") signed a Partnership Agreement with Glovo and SiltechWorld to move Glovo riders from petrol to electric bikes.\n\nWe plan to deploy over 500,000 two and three-wheeled EV's plus over 1,000 swap stations across West Africa by 2028.",
        metrics: [
          {
            icon: "/dollar-minimalistic-svgrepo-com-1.svg",
            label: "Operational Cost",
            value: "40%",
          },
          {
            icon: "/ev-station-svgrepo-com-1.svg", 
            label: "Swap Stations",
            value: "1000",
          },
          {
            icon: "/ev-rounded-svgrepo-com-1.svg",
            label: "EV'S Deployed", 
            value: "500,000",
          },
        ]
      },
      about: "SSM is revolutionizing urban mobility in West Africa through innovative battery swapping technology, making electric vehicles accessible and affordable for commercial riders.",
      maps: "Strategic deployment across major West African cities including Lagos, Accra, Abidjan, and Dakar with planned expansion to 15 cities by 2028."
    },
    {
      id: "03",
      name: "Karu Waste Management",
      shortName: "KWM",
      isActive: false,
      overview: {
        description: "KWM transforms waste management through innovative recycling technologies and sustainable waste-to-energy solutions, serving communities across the FCT and surrounding areas.",
        metrics: [
          {
            icon: "/ev-station-svgrepo-com-1.svg",
            label: "Waste Processed",
            value: "50K",
          },
          {
            icon: "/dollar-minimalistic-svgrepo-com-1.svg",
            label: "Energy Generated",
            value: "25MW",
          },
          {
            icon: "/ev-rounded-svgrepo-com-1.svg",
            label: "Communities",
            value: "150",
          },
        ]
      },
      about: "Leading waste management company focused on circular economy principles and sustainable environmental solutions.",
      maps: "Operations centered in Abuja FCT with expansion plans across North-Central Nigeria."
    },
    {
      id: "04",
      name: "Emerald Industrial CFZE",
      shortName: "EICFZE",
      isActive: false,
      overview: {
        description: "EICFZE develops world-class industrial infrastructure and free zone facilities, attracting international businesses and fostering economic growth through strategic industrial development.",
        metrics: [
          {
            icon: "/ev-station-svgrepo-com-1.svg",
            label: "Industrial Units",
            value: "200",
          },
          {
            icon: "/dollar-minimalistic-svgrepo-com-1.svg",
            label: "Investment",
            value: "$2.5B",
          },
          {
            icon: "/ev-rounded-svgrepo-com-1.svg",
            label: "Jobs Created",
            value: "15K",
          },
        ]
      },
      about: "Premier industrial free zone offering world-class infrastructure and business-friendly environment for manufacturing and logistics companies.",
      maps: "Located in strategic industrial corridor with access to major ports, airports, and transportation networks."
    },
  ];

  // Get current active project data
  const currentProject = portfolioProjects.find(p => p.id === activeProject) || portfolioProjects[1];

  // Animation setup with multiple intersection observers
  const [sectionRef, sectionInView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const [headerRef, headerInView] = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });

  const [contentRef, contentInView] = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  // Professional corporate animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.46, 0.45, 0.94],
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const headerVariants = {
    hidden: { 
      opacity: 0, 
      y: 50,
      scale: 0.98,
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

  const projectListVariants = {
    hidden: { opacity: 0, x: -80 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 1,
        ease: [0.25, 0.46, 0.45, 0.94],
        staggerChildren: 0.2,
        delayChildren: 0.4,
      },
    },
  };

  const projectItemVariants = {
    hidden: { 
      opacity: 0, 
      x: -40,
      scale: 0.95,
    },
    visible: {
      opacity: 1,
      x: 0,
      scale: 1,
      transition: { 
        duration: 0.8,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  };

  const cardVariants = {
    hidden: { 
      opacity: 0, 
      x: 80, 
      scale: 0.95,
      rotateY: -10,
    },
    visible: {
      opacity: 1,
      x: 0,
      scale: 1,
      rotateY: 0,
      transition: {
        duration: 1.2,
        ease: [0.25, 0.46, 0.45, 0.94],
        delay: 0.6,
      },
    },
  };

  // Content animation variants for smooth transitions
  const contentVariants = {
    hidden: { 
      opacity: 0, 
      y: 20,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: { 
        duration: 0.5,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
    exit: {
      opacity: 0,
      y: -20,
      transition: { 
        duration: 0.3,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  };

  const metricsVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.4,
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const metricItemVariants = {
    hidden: { 
      opacity: 0, 
      y: 15, 
      scale: 0.95,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { 
        duration: 0.6,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  };

  return (
    <section 
      ref={sectionRef}
      className="w-full max-w-[1440px] mx-auto py-[80px] sm:py-[100px] lg:py-[120px] text-white relative overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-full bg-[url('/grid-bg.svg')] bg-repeat bg-center opacity-5" />

        <motion.div
        className="w-full h-full relative"
        variants={containerVariants}
        initial="hidden"
        animate={sectionInView ? "visible" : "hidden"}
      >
        <div className="flex flex-col lg:flex-row gap-12 justify-between items-start">
          {/* Left Column: Title and Project List */}
        <motion.div
            className="flex flex-col gap-12"
          ref={headerRef}
          variants={headerVariants}
          initial="hidden"
          animate={headerInView ? "visible" : "hidden"}
        >
            <div className="flex flex-col gap-4">
              <div className="flex justify-between items-center">
                <h2 className="text-[36px] sm:text-[42px] lg:text-[48px] font-bold tracking-[-0.02em]">
                  Our Portfolio
                </h2>
                <Button className="lg:hidden bg-white/10 hover:bg-[#EFEFEF]/20 text-white rounded-full text-xs sm:text-sm px-4 py-2 flex items-center gap-2 transition-all duration-300">
                  <span>See All Projects</span>
                  <SeeMoreArrowIcon className="w-5 h-5" />
                </Button>
            </div>
              <p className="text-white/70 text-base sm:text-lg max-w-[450px]">
                A cross section of our completed flagship projects deals across Nigeria worth over NGN100 Billion.
              </p>
          </div>

          <motion.div
              className="flex flex-col"
          ref={contentRef}
            variants={projectListVariants}
            initial="hidden"
            animate={contentInView ? "visible" : "hidden"}
          >
              {portfolioProjects.map((project) => (
                <motion.div
                  key={project.id}
                  variants={projectItemVariants}
                  onClick={() => setActiveProject(project.id)}
                  className={`w-full cursor-pointer py-6 sm:py-7 border-t border-white/10 transition-colors duration-300 group ${
                    activeProject === project.id ? "text-white" : "text-white/40 hover:text-white"
                  }`}
                >
                  <div className="flex items-end gap-[10px] max-w-[380px]">
                    <span className="text-[16px] font-normal">{project.id}</span>
                    <h3 className="w-full max-w-[250px] font-medium text-xl sm:text-2xl lg:text-[24px] tracking-[0em]">
                      {project.name}
                    </h3>
                  </div>
                </motion.div>
              ))}
                  </motion.div>
          </motion.div>

          {/* Right Column: Project Details Card */}
          <motion.div
            className="w-full relative max-w-[600px]"
            variants={cardVariants}
            initial="hidden"
            animate={contentInView ? "visible" : "hidden"}
          >
            <div className="hidden lg:flex justify-end mb-6">
              <Button className="bg-white hover:bg-white/90 text-black rounded-full text-sm px-5 py-3 flex items-center gap-2 transition-all duration-300">
                <span>See All Projects</span>
                <SeeMoreArrowIcon className="w-5 h-5" />
              </Button>
            </div>

            <Card className="bg-[#1C1C1C]/60 border border-white/10 rounded-2xl py-6 sm:py-8 backdrop-blur-md shadow-2xl shadow-black/30">
                  <AnimatePresence mode="wait">
                    <motion.div
                
                      key={activeProject}
                      variants={contentVariants}
                      initial="hidden"
                      animate="visible"
                      exit="exit"
                    >
                  <Tabs defaultValue="overview" className="w-full px-0 ">
                    <TabsList className="bg-transparent px-6 sm:px-8 mb-6">
                      <TabsTrigger value="overview" className="text-white/60 data-[state=active]:text-white data-[state=active]:shadow-none px-4 py-3 text-sm font-normal bg-transparent relative after:content-[''] after:absolute after:bottom-[-20px] after:left-0 after:w-full after:h-0.5 after:bg-white after:scale-x-0 data-[state=active]:after:scale-x-100 after:transition-all after:duration-300">
                        OVERVIEW
                      </TabsTrigger>
                      <TabsTrigger value="about" className="text-white/60 data-[state=active]:text-white data-[state=active]:shadow-none px-4 py-3 text-sm font-normal bg-transparent relative after:content-[''] after:absolute after:bottom-[-20px] after:left-0 after:w-full after:h-0.5 after:bg-white after:scale-x-0 data-[state=active]:after:scale-x-100 after:transition-all after:duration-300">
                        ABOUT
                      </TabsTrigger>
                      <TabsTrigger value="maps" className="text-white/60 data-[state=active]:text-white data-[state=active]:shadow-none px-4 py-3 text-sm font-normal bg-transparent relative after:content-[''] after:absolute after:bottom-[-20px] after:left-0 after:w-full after:h-0.5 after:bg-white after:scale-x-0 data-[state=active]:after:scale-x-100 after:transition-all after:duration-300">
                        MAPS
                      </TabsTrigger>
                    </TabsList>
                    <Separator className="bg-white/10 mb-6" />

                    <TabsContent value="overview" className="mt-0 px-6 sm:px-8">
                      <div className="flex flex-col gap-6">
                        <p className="text-white/80 text-sm sm:text-base leading-relaxed whitespace-pre-line">
                          {currentProject.overview.description}
                        </p>
                        
                        <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 pt-4">
                        {currentProject.overview.metrics.map((metric, index) => (
                            <div key={index} className="flex flex-col gap-2">
                              <div className="flex items-center gap-2">
                                <img src={metric.icon} alt={metric.label} className="w-5 h-5" />
                                <span className="text-white/60 text-xs sm:text-sm">{metric.label}</span>
                              </div>
                              <span className="text-2xl sm:text-3xl font-semibold tracking-tight">{metric.value}</span>
                            </div>
                          ))}
                        </div>
                        
                        <div className="mt-6 flex justify-start">
                          <button className="flex items-center gap-2 text-white/80 hover:text-white transition-colors duration-300 group">
                            <span className="text-sm">View Project</span>
                          <motion.img
                              src="/arrow-up.svg" 
                              alt="arrow" 
                              className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1"
                            />
                          </button>
                        </div>
                      </div>
                </TabsContent>

                    <TabsContent value="about" className="mt-0 px-6 sm:px-8">
                       <div className="flex flex-col gap-6 text-left">
                        <h3 className="text-lg font-semibold text-white">About {currentProject.shortName}</h3>
                        <p className="text-white/80 text-sm sm:text-base leading-relaxed">{currentProject.about}</p>
                        <div className="bg-white/5 border border-white/10 rounded-lg p-4 flex items-center gap-4 mt-2">
                            <img src="/dollar-minimalistic-svgrepo-com-1.svg" alt="about" className="w-8 h-8 opacity-60" />
                            <div>
                                <h4 className="font-semibold text-white/90">Our Vision</h4>
                                <p className="text-white/60 text-sm">
                                    To be a catalyst for sustainable infrastructure development across Africa.
                                </p>
                            </div>
                        </div>
                      </div>
                </TabsContent>

                    <TabsContent value="maps" className="mt-0 px-6 sm:px-8">
                      <div className="flex flex-col gap-6 text-left">
                        <h3 className="text-lg font-semibold text-white">Geographic Footprint</h3>
                        <p className="text-white/80 text-sm sm:text-base leading-relaxed">{currentProject.maps}</p>
                        <div className="w-full h-48 bg-gray-900/50 border border-white/10 rounded-lg overflow-hidden relative flex items-center justify-center mt-2">
                            <div className="absolute top-0 left-0 w-full h-full bg-[url('/grid-bg.svg')] bg-repeat-y bg-center opacity-20" style={{backgroundSize: '100% auto'}}></div>
                            <div className="text-center z-10">
                                <img src="/ev-station-svgrepo-com-1.svg" alt="map icon" className="w-12 h-12 mx-auto text-white/50 opacity-50 mb-2"/>
                                <p className="text-white/50 font-semibold">Map Visualization</p>
                                <p className="text-white/40 text-xs">Interactive map coming soon</p>
                            </div>
                        </div>
                      </div>
                    </TabsContent>
                  </Tabs>
                    </motion.div>
                  </AnimatePresence>
            </Card>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};