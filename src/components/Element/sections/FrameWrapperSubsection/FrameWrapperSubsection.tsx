"use client";

import { ChevronDownIcon, ChevronUpIcon } from "lucide-react";
import React, { useState } from "react";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import { useInView } from "react-intersection-observer";

export const FrameWrapperSubsection = (): JSX.Element => {
  // Stats data for the left section
  const stats = [
    {
      value: "$5B",
      description: "Target Assets\nUnder Management",
    },
    {
      value: "100",
      description: "Mini-grids Installed\nAcross Africa",
    },
    {
      value: "200MW",
      description: "Renewable Energy Deployed",
    },
  ];

  // Accordion sections data
  const accordionSections = [
    {
      id: "who-we-are",
      title: "Who We Are",
      content: "We are a leading infrastructure investment and development company focused on creating sustainable value across West Africa through innovative technology solutions and ESG-driven approaches.",
    },
    {
      id: "our-thesis",
      title: "Our Thesis",
      content: [
        "More efficient technologies deliver higher productivity and, consequently, stronger economic returns.",
        "Lower portfolio risk is achievable through a portfolio of small and mid-sized, decentralized, and digitally-enabled infrastructure assets.",
        "Investments will deliver long term sustainable out-performance where they employ business models and technologies that address the social, environmental, and commercial challenges unique to our markets.",
      ],
    },
    {
      id: "our-vision",
      title: "Our Vision",
      content: "To be the leading catalyst for Africa's infrastructure transformation, creating sustainable economic growth through innovative technology solutions and responsible investment practices that benefit communities across the continent.",
    },
  ];

  // State for active accordion item
  const [activeItem, setActiveItem] = useState("our-thesis");

  // Animation setup with multiple intersection observers for staggered animations
  const [sectionRef, sectionInView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const [headingRef, headingInView] = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });

  const [statsRef, statsInView] = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  const [accordionRef, accordionInView] = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  // Scroll-based animations
  const { scrollY } = useScroll();
  const backgroundY = useTransform(scrollY, [0, 1000], [0, -100]);

  // Container animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.8,
        staggerChildren: 0.3,
        delayChildren: 0.2,
      },
    },
  };

  // Heading animation variants
  const headingVariants = {
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

  // Stats animation variants
  const statsContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const statItemVariants = {
    hidden: { 
      opacity: 0, 
      y: 40,
      scale: 0.8,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { 
        duration: 0.8,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  };

  // Accordion animation variants
  const accordionContainerVariants = {
    hidden: { opacity: 0, x: 100 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.46, 0.45, 0.94],
        staggerChildren: 0.15,
        delayChildren: 0.4,
      },
    },
  };

  const accordionItemVariants = {
    hidden: { 
      opacity: 0, 
      x: 50,
      scale: 0.95,
    },
    visible: {
      opacity: 1,
      x: 0,
      scale: 1,
      transition: { 
        duration: 0.6,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  };

  // Content animation variants
  const contentVariants = {
    hidden: { 
      opacity: 0, 
      height: 0,
      y: -20,
    },
    visible: {
      opacity: 1,
      height: "auto",
      y: 0,
      transition: {
        duration: 0.5,
        ease: [0.25, 0.46, 0.45, 0.94],
        staggerChildren: 0.1,
        delayChildren: 0.1,
      },
    },
    exit: {
      opacity: 0,
      height: 0,
      y: -20,
      transition: {
        duration: 0.4,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  };

  const textVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { 
        duration: 0.4,
        ease: "easeOut",
      },
    },
  };

  // Number counter animation
  const NumberCounter = ({ value, inView }: { value: string, inView: boolean }) => {
    const isNumber = /^\d+/.test(value);
    
    if (!isNumber) {
      return (
        <motion.span
          initial={{ opacity: 0, scale: 0.5 }}
          animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.5 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          {value}
        </motion.span>
      );
    }

    const numericValue = parseInt(value.replace(/[^\d]/g, ''));
    const suffix = value.replace(/[\d]/g, '');

    return (
      <motion.span
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.5 }}
      >
        <motion.span
          initial={{ scale: 0.5 }}
          animate={inView ? { scale: 1 } : { scale: 0.5 }}
          transition={{ 
            duration: 1.2, 
            ease: [0.25, 0.46, 0.45, 0.94],
            delay: 0.3,
          }}
        >
          {inView && (
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              {value}
            </motion.span>
          )}
        </motion.span>
      </motion.span>
    );
  };

  return (
    <section className="flex flex-col w-full items-center justify-center py-[70px] bg-black relative overflow-hidden">
      {/* Background animation layer */}
      <motion.div
        className="absolute inset-0 opacity-5"
        style={{ y: backgroundY }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-goldcolor-8/10 via-transparent to-bluecolor-8/10" />
      </motion.div>

      <motion.div
        ref={sectionRef}
        className="flex flex-col w-full max-w-[1440px] items-start justify-between gap-20 px-4 relative z-10"
        variants={containerVariants}
        initial="hidden"
        animate={sectionInView ? "visible" : "hidden"}
      >
        <div className="flex flex-col lg:flex-row w-full items-start justify-between gap-20">
          {/* Left Column - Heading and Stats */}
          <div className="flex flex-col items-start gap-10 flex-1 max-w-[610px]">
            {/* Main Heading with entrance animation */}
            <motion.div
              ref={headingRef}
              variants={headingVariants}
              initial="hidden"
              animate={headingInView ? "visible" : "hidden"}
            >
              <motion.h2
                className="font-medium text-white text-[36px] leading-[120%] tracking-[0px] relative"
                // style={{ fontFamily: '"Outfit", sans-serif !important' }}
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                {/* Animated text reveal */}
                <motion.span
                  className="inline"
                  initial={{ opacity: 0, y: 20 }}
                  animate={headingInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ delay: 0.2, duration: 0.6 }}
                >
                  Tech-first approach to{" "}
                </motion.span>
                <motion.span
                  className="inline text-goldcolor-i"
                  initial={{ opacity: 0, y: 20 }}
                  animate={headingInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ delay: 0.4, duration: 0.6 }}
                >
                  infrastructure investment{" "}
                </motion.span>
                <motion.span
                  className="inline"
                  initial={{ opacity: 0, y: 20 }}
                  animate={headingInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ delay: 0.6, duration: 0.6 }}
                >
                  and asset management—to drive Africa&apos;s energy transition and next generation infrastructure.
                </motion.span>

                {/* Decorative underline animation */}
                {/* <motion.div
                  className="absolute -bottom-2 left-0 h-1 bg-gradient-to-r from-goldcolor-i to-transparent rounded-full"
                  initial={{ width: 0 }}
                  animate={headingInView ? { width: "60%" } : { width: 0 }}
                  transition={{ delay: 1, duration: 0.8, ease: "easeOut" }}
                /> */}
              </motion.h2>
            </motion.div>

            {/* Stats Grid - Fixed to display in a single row */}
            <motion.div
              ref={statsRef}
              className="flex items-start justify-start gap-8 w-full"
              variants={statsContainerVariants}
              initial="hidden"
              animate={statsInView ? "visible" : "hidden"}
            >
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  className="flex flex-col items-start justify-center gap-3 relative group"
                  variants={statItemVariants}
                  whileHover={{ 
                    scale: 1.05,
                    y: -5,
                  }}
                  transition={{ duration: 0.3 }}
                >
                  {/* Hover background effect */}
                  <motion.div
                    className="absolute inset-0 bg-goldcolor-8/5 rounded-lg -m-3"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileHover={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.2 }}
                  />

                  {/* Animated number */}
                  <div 
                    className="font-normal text-white text-[64px] leading-[70px] tracking-[-0.05em] whitespace-nowrap relative z-10"
                    // style={{ fontFamily: '"Outfit", sans-serif !important' }}
                  >
                    <NumberCounter value={stat.value} inView={statsInView} />
                  </div>

                  {/* Description with slide-in animation */}
                  <motion.div 
                    className="font-normal text-bluecolor-4 text-[16px] leading-[22px] whitespace-pre-line relative z-10 max-w-[140px]"
                    // style={{ fontFamily: '"Outfit", sans-serif !important' }}
                    initial={{ opacity: 0, y: 10 }}
                    animate={statsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
                    transition={{ delay: 0.5 + index * 0.1, duration: 0.5 }}
                  >
                    {stat.description}
                  </motion.div>

                  {/* Decorative dot */}
                  {/* <motion.div
                    className="absolute -top-1 -right-1 w-2 h-2 bg-goldcolor-i rounded-full"
                    initial={{ scale: 0, opacity: 0 }}
                    animate={statsInView ? { scale: 1, opacity: 1 } : { scale: 0, opacity: 0 }}
                    transition={{ delay: 0.8 + index * 0.1, duration: 0.4 }}
                  /> */}
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Right Column - Custom Accordion with entrance animations */}
          <motion.div
            ref={accordionRef}
            className="flex flex-col w-full lg:w-[544px] items-start"
            variants={accordionContainerVariants}
            initial="hidden"
            animate={accordionInView ? "visible" : "hidden"}
          >
            <div className="w-full space-y-0">
              {accordionSections.map((section, index) => (
                <motion.div 
                  key={section.id} 
                  className="w-full"
                  variants={accordionItemVariants}
                >
                  {/* Accordion Item */}
                  <div className="w-full relative">
                    {/* Hover background effect */}
                    <motion.div
                      className="absolute inset-0 bg-white/2 rounded-lg -mx-4"
                      initial={{ opacity: 0 }}
                      whileHover={{ opacity: 1 }}
                      transition={{ duration: 0.2 }}
                    />

                    {/* Trigger */}
                    <motion.button
                      className="flex items-center justify-between w-full py-8 px-4 text-left focus:outline-none group relative z-10"
                      onClick={() => setActiveItem(activeItem === section.id ? "" : section.id)}
                      whileHover={{ scale: 1.01, x: 5 }}
                      whileTap={{ scale: 0.99 }}
                      transition={{ duration: 0.2 }}
                    >
                      <span 
                        className={`font-medium text-[24px] leading-[30px] transition-all duration-500 ${
                          activeItem === section.id ? "text-white" : "text-bluecolor-4"
                        }`}
                        // style={{ fontFamily: '"Outfit", sans-serif !important' }}
                      >
                        {section.title}
                      </span>
                      
                      <motion.div
                        className={`rounded-full p-2 ml-4 transition-all duration-500 ${
                          activeItem === section.id ? "bg-white shadow-lg" : "bg-bluecolor-4"
                        }`}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                        animate={{ 
                          rotate: activeItem === section.id ? 180 : 0,
                        }}
                        transition={{ duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
                      >
                        <ChevronDownIcon 
                          className={`w-5 h-5 transition-colors duration-500 ${
                            activeItem === section.id ? "text-colorbrand-black" : "text-white"
                          }`} 
                        />
                      </motion.div>
                    </motion.button>

                    {/* Content with smooth animations */}
                    <AnimatePresence mode="wait">
                      {activeItem === section.id && (
                        <motion.div
                          variants={contentVariants}
                          initial="hidden"
                          animate="visible"
                          exit="exit"
                          className="overflow-hidden"
                        >
                          <div className="pb-8 px-4">
                            {Array.isArray(section.content) ? (
                              <div className="flex flex-col gap-4">
                                {section.content.map((point, pointIndex) => (
                                  <motion.p
                                    key={pointIndex}
                                    className="font-normal text-bluecolor-4 text-[16px] leading-[24px] relative pl-4"
                                    variants={textVariants}
                                    // style={{ fontFamily: '"Outfit", sans-serif !important' }}
                                  >
                                    {/* Bullet point */}
                                    <motion.span
                                      className="absolute left-0 top-2 w-1.5 h-1.5 bg-dark rounded-full"
                                      initial={{ scale: 0 }}
                                      animate={{ scale: 1 }}
                                      transition={{ delay: pointIndex * 0.1, duration: 0.3 }}
                                    />
                                    {point}
                                  </motion.p>
                                ))}
                              </div>
                            ) : (
                              <motion.p
                                className="font-normal text-bluecolor-4 text-[16px] leading-[24px]"
                                variants={textVariants}
                                // style={{ fontFamily: '"Outfit", sans-serif !important' }}
                              >
                                {section.content}
                              </motion.p>
                            )}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>

                  {/* Separator Line with animation */}
                  {/* {index < accordionSections.length - 1 && ( */}
                    <motion.div 
                      className="w-full h-[1px] bg-bluecolor-4/20 mx-4"
                      initial={{ scaleX: 0, opacity: 0 }}
                      animate={accordionInView ? { scaleX: 1, opacity: 1 } : { scaleX: 0, opacity: 0 }}
                      transition={{ 
                        delay: 0.8 + index * 0.1, 
                        duration: 0.8,
                        ease: "easeOut",
                      }}
                    />
                  {/* )} */}
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};