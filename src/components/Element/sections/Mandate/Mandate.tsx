"use client";

import { ChevronDownIcon, ChevronUpIcon } from "lucide-react";
import React, { useState } from "react";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import { useInView } from "react-intersection-observer";

type MandateProps = {
  data: {
    heading: string;
    numbers: Array<{
      title: string;
      value: string;
    }>;
    accordion: {
      accordion_items: Array<{
        id: number;
        title: string;
        description: string;
      }>;
    };
  };
};

export const Mandate = ({ data }: MandateProps): JSX.Element => {
  // Use CMS data for stats
  const stats = data.numbers;

  // Use CMS data for accordion sections
  const accordionSections = data.accordion.accordion_items.map(item => ({
    id: `accordion-${item.id}`,
    title: item.title,
    content: item.description,
  }));

  // State for active accordion item
  const [activeItem, setActiveItem] = useState(accordionSections[0]?.id || "");

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
    <section className="flex flex-col w-full max-w-[1440px] mx-auto px-5 sm:px-10 lg:px-16 xl:px-20 items-center justify-center py-[70px] bg-black relative overflow-hidden">
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
        <div className="flex flex-col xl:flex-row w-full items-start justify-between gap-20">
          {/* Left Column - Heading and Stats */}
          <div className="flex flex-col items-start gap-10 flex-1 w-full max-w-[610px]">
            {/* Main Heading with entrance animation */}
            <motion.div
              ref={headingRef}
              variants={headingVariants}
              initial="hidden"
              animate={headingInView ? "visible" : "hidden"}
            >
              <motion.h2
                className="font-medium text-justify text-white text-[24px] md:text-[36px] leading-[120%] tracking-[0px] relative"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                {data.heading}
              </motion.h2>
            </motion.div>

            {/* Stats Grid - Fixed to display in a single row */}
            <motion.div
              ref={statsRef}
              className="flex justify-between gap-2 w-full"
              variants={statsContainerVariants}
              initial="hidden"
              animate={statsInView ? "visible" : "hidden"}
            >
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  className="flex flex-col items-start justify-center gap-1 relative group"
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
                    className="font-normal text-white text-[30px] md:text-[50px] leading-[150%] tracking-[-0.05em] whitespace-nowrap relative z-10"
                  >
                    <NumberCounter value={stat.value} inView={statsInView} />
                  </div>

                  {/* Description with slide-in animation */}
                  <motion.div 
                    className="font-normal text-bluecolor-4 text-[16px] leading-[22px] whitespace-pre-line relative z-10 max-w-[200px]"
                    initial={{ opacity: 0, y: 10 }}
                    animate={statsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
                    transition={{ delay: 0.5 + index * 0.1, duration: 0.5 }}
                  >
                    {stat.title}
                  </motion.div>
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
                            {section.title === "Our Thesis" ? (
                              <div className="space-y-4 ml-4">
                                {section.content.split("- ").map((paragraph, index) => (
                                  paragraph.trim().length ? (
                                    <motion.li
                                    key={index}
                                    className="font-normal text-bluecolor-4 text-[16px] leading-[24px]"
                                    variants={textVariants}
                                  >
                                    {paragraph.trim().length? `${paragraph.trim()}.` : ''}
                                  </motion.li>
                                  ) : null
                                ))}
                              </div>
                            ) : (
                              <motion.p
                                className="font-normal text-bluecolor-4 text-[16px] leading-[24px]"
                                variants={textVariants}
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
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};