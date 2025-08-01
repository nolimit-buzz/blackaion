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
import { extractTextFromRichText } from "@/lib/api";

type PortfolioProps = {
  data: {
    title: string;
    subtitle: string;
    projects: Array<{
      id: number;
      number: string;
      title: string;
      about: Array<{
        type: string;
        children: Array<{
          type: string;
          text: string;
          bold?: boolean;
        }>;
      }>;
      overview: Array<{
        type: string;
        children: Array<{
          type: string;
          text: string;
        }>;
      }>;
      maps: any;
    }>;
  };
};

export const Portfolio = ({ data }: PortfolioProps): JSX.Element => {
  // Active project state
  const [activeProject, setActiveProject] = useState(data.projects[0]?.number || "01");

  // Get current active project data
  const currentProject = data.projects.find(p => p.number === activeProject) || data.projects[0];

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
      id="portfolio"
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
                  {data.title}
                </h2>
                <Button className="lg:hidden bg-white/10 hover:bg-[#EFEFEF]/20 text-white rounded-full text-xs sm:text-sm px-4 py-2 flex items-center gap-2 transition-all duration-300">
                  <span>See All Projects</span>
                  <SeeMoreArrowIcon className="w-5 h-5" />
                </Button>
            </div>
              <p className="text-white/70 text-base sm:text-lg max-w-[450px]">
                {data.subtitle}
              </p>
          </div>

          <motion.div
              className="flex flex-col"
          ref={contentRef}
            variants={projectListVariants}
            initial="hidden"
            animate={contentInView ? "visible" : "hidden"}
          >
              {data.projects.map((project) => (
                <motion.div
                  key={project.id}
                  variants={projectItemVariants}
                  onClick={() => setActiveProject(project.number)}
                  className={`w-full cursor-pointer py-6 sm:py-7 border-t border-white/10 transition-colors duration-300 group ${
                    activeProject === project.number ? "text-white" : "text-white/40 hover:text-white"
                  }`}
                >
                  <div className="flex items-end gap-[10px] max-w-[380px]">
                    <span className="text-[16px] font-normal">{project.number}</span>
                    <h3 className="w-full max-w-[250px] font-medium text-xl sm:text-2xl lg:text-[24px] tracking-[0em]">
                      {project.title}
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
                          {extractTextFromRichText(currentProject.overview)}
                        </p>
                        
                        <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 pt-4">
                        {[
                          { icon: "/ev-station-svgrepo-com-1.svg", label: "Customers Served", value: "2.1M" },
                          { icon: "/dollar-minimalistic-svgrepo-com-1.svg", label: "Investment Value", value: "₦45B" },
                          { icon: "/ev-rounded-svgrepo-com-1.svg", label: "Grid Coverage", value: "85%" },
                        ].map((metric, index) => (
                            <div key={index} className="flex flex-col gap-2">
                              <div className="flex items-center gap-2">
                                <img src={metric.icon} alt={metric.label} className="w-5 h-5" />
                                <span className="text-white/60 text-xs sm:text-sm">{metric.label}</span>
                              </div>
                              <span className="text-2xl sm:text-3xl font-semibold tracking-tight">{metric.value}</span>
                            </div>
                          ))}
                        </div>
                        
                        
                      </div>
                </TabsContent>

                    <TabsContent value="about" className="mt-0 px-6 sm:px-8">
                       <div className="flex flex-col gap-6 text-left">
                        <h3 className="text-lg font-semibold text-white">{currentProject.about[0].children[0].text}</h3>
                        {
                          currentProject.about.map((item, index) => {
                            if (index > 0) {
                              return (
                                <p key={index} className="text-white/80 text-sm sm:text-base leading-relaxed">{item.children[0].text}</p>
                              )
                            }
                          })
                        }
                        {/* <p className="text-white/80 text-sm sm:text-base leading-relaxed">{extractTextFromRichText(currentProject.about)}</p> */}
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
                        <p className="text-white/80 text-sm sm:text-base leading-relaxed">
                          {currentProject.maps ? extractTextFromRichText(currentProject.maps) : "Coverage spans across strategic locations with planned expansion."}
                        </p>
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