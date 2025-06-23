"use client";

import { ArrowRightIcon } from "lucide-react";
import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

export const DivWrapperSubsection = (): JSX.Element => {
  // Service data for mapping
  const services = [
    {
      title: "Transaction Advisory",
      description:
        "We provide strategic and execution support to highly selective public and private clients—with a sharp focus on digitally-enabled and climate...",
      image: "/service-img-1.png", // Placeholder for service image
    },
    {
      title: "Project & Venture Development",
      description:
        "Blackaion originates, co-develops and incubates next-generation infrastructure projects and ventures. We focus on tech-integrated business models in sectors...",
      image: "/service-img-2.png", // Placeholder for service image
    },
    {
      title: "Asset Management",
      description:
        "We manage and administer infrastructure assets and capital platforms (such as the Meter Acquisition Fund, MAF) with a focus on data-driven performance...",
      image: "/service-img-3.png", // Placeholder for service image
    },
  ];

  // Intersection observers for professional staggered animations
  const [sectionRef, sectionInView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const [headerRef, headerInView] = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });

  const [cardRef, cardInView] = useInView({
    threshold: 0.15,
    triggerOnce: true,
  });

  // Professional corporate animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.46, 0.45, 0.94], // Professional easing curve
      },
    },
  };

  const headerVariants = {
    hidden: { 
      opacity: 0, 
      y: 40,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: { 
        duration: 0.8,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  };

  const buttonVariants = {
    hidden: { 
      opacity: 0, 
      x: 30,
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: { 
        duration: 0.7,
        ease: [0.25, 0.46, 0.45, 0.94],
        delay: 0.4,
      },
    },
  };

  // Professional card container animation
  const cardContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.46, 0.45, 0.94],
        staggerChildren: 0.4, // Professional timing between cards
        delayChildren: 0.3,
      },
    },
  };

  // Individual service card animation - corporate and professional
  const serviceCardVariants = {
    hidden: { 
      opacity: 0, 
      y: 60,
      scale: 0.98,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { 
        duration: 0.9,
        ease: [0.25, 0.46, 0.45, 0.94], // Corporate easing
      },
    },
  };

  // Professional image animation
  const imageVariants = {
    hidden: { 
      opacity: 0, 
      scale: 0.95,
    },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { 
        duration: 0.8,
        ease: [0.25, 0.46, 0.45, 0.94],
        delay: 0.2,
      },
    },
  };

  // Professional separator animation
  const separatorVariants = {
    hidden: { scaleX: 0, opacity: 0 },
    visible: {
      scaleX: 1,
      opacity: 1,
      transition: { 
        duration: 0.8,
        ease: [0.25, 0.46, 0.45, 0.94],
        delay: 0.3,
      },
    },
  };

  // Professional read more button animation
  const readMoreVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { 
        duration: 0.6,
        ease: [0.25, 0.46, 0.45, 0.94],
        delay: 0.4,
      },
    },
  };

  return (
    <section className="flex flex-col items-center justify-center pt-0 pb-[70px] px-4 sm:px-6 lg:px-0 relative bg-white overflow-hidden">
      {/* Subtle background decoration */}
      <motion.div
        className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-goldcolor-8/3 to-transparent rounded-full blur-3xl"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2, ease: "easeOut" }}
      />

      <motion.div
        ref={sectionRef}
        className="relative w-full max-w-[1440px] mx-auto"
        variants={containerVariants}
        initial="hidden"
        animate={sectionInView ? "visible" : "hidden"}
      >
        {/* Header Section - Professional and responsive */}
        <motion.div
          ref={headerRef}
          className="flex flex-col lg:flex-row lg:items-center lg:justify-between pt-[70px] pb-[40px] lg:pb-[60px] gap-8 lg:gap-4"
          variants={headerVariants}
          initial="hidden"
          animate={headerInView ? "visible" : "hidden"}
        >
          <div className="flex flex-col items-start gap-6 flex-1 max-w-none lg:max-w-[600px]">
            <div className="inline-flex flex-col items-start gap-2.5">
              <motion.h2
                className="font-bold text-[28px] sm:text-[32px] lg:text-[36px] leading-[34px] sm:leading-[38px] lg:leading-[43px] text-black tracking-[-0.02em]"
                // style={{ fontFamily: '"Outfit", sans-serif !important' }}
                whileHover={{ scale: 1.01 }}
                transition={{ duration: 0.3 }}
              >
                <motion.span
                  className="inline-block"
                  initial={{ opacity: 0, y: 15 }}
                  animate={headerInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 15 }}
                  transition={{ delay: 0.2, duration: 0.6 }}
                >
                  What We  
                </motion.span>
                {" "}
                <motion.span
                  className="inline-block text-goldcolor-8"
                  initial={{ opacity: 0, y: 15 }}
                  animate={headerInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 15 }}
                  transition={{ delay: 0.4, duration: 0.6 }}
                >
                Do
                </motion.span>
              </motion.h2>
            </div>

            <motion.p
              className="font-normal text-bluecolor-4 text-[14px] sm:text-[15px] lg:text-[16px] leading-[22px] sm:leading-[23px] lg:leading-[24px] max-w-full lg:max-w-[524px]"
              // style={{ fontFamily: '"Outfit", sans-serif !important' }}
              initial={{ opacity: 0, y: 15 }}
              animate={headerInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 15 }}
              transition={{ delay: 0.6, duration: 0.6 }}
            >
              We deliver integrated investment, development & management
              services to drive sustainable infrastructure growth across West
              Africa.
            </motion.p>
          </div>

          <motion.div
            variants={buttonVariants}
            initial="hidden"
            animate={headerInView ? "visible" : "hidden"}
          >
            <Button className="w-full sm:w-[160px] h-[50px] bg-black hover:bg-gray-800 rounded-[25px] flex items-center justify-center gap-[8px] transition-all duration-300 hover:scale-[1.02] hover:shadow-lg group">
              <span className="text-white font-normal text-[14px]">
                Learn More
              </span>
              <motion.img
                className="w-[20px] h-[20px] sm:w-[24px] sm:h-[24px]"
                alt="Arrow icon"
                src="/frame-1272638069.svg"
                whileHover={{ x: 2 }}
                transition={{ duration: 0.2 }}
              />
            </Button>
          </motion.div>
        </motion.div>

        {/* Services Card - Professional corporate animation */}
        <motion.div
          ref={cardRef}
          variants={cardContainerVariants}
          initial="hidden"
          animate={cardInView ? "visible" : "hidden"}
        >
          <Card className="flex flex-col w-full items-center relative bg-white rounded-[12px] border border-[#8298ab]/20 shadow-[0px_25px_50px_rgba(82,129,236,0.08)] overflow-hidden">
            {/* Subtle card background */}
            {/* <motion.div
              className="absolute inset-0 bg-gradient-to-br from-goldcolor-8/1 via-transparent to-bluecolor-8/1"
              initial={{ opacity: 0 }}
              animate={cardInView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ duration: 1.2, delay: 0.8 }}
            /> */}

            <CardContent className="flex flex-col items-start w-full p-0 relative z-10">
              {services.map((service, index) => (
                <React.Fragment key={index}>
                  <motion.div
                    className="flex flex-col xl:flex-row w-full items-start xl:items-center justify-between py-[30px] sm:py-[35px] lg:py-[40px] px-[20px] sm:px-[35px] lg:px-[50px] group hover:bg-gray-50/30 transition-all duration-500 gap-6 xl:gap-4"
                    variants={serviceCardVariants}
                    whileHover={{ 
                      scale: 1.005,
                      backgroundColor: "rgba(248, 250, 252, 0.4)",
                    }}
                    transition={{ duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
                  >
                    {/* Left Content - Professional typography */}
                    <div className="flex flex-col items-start justify-center gap-[12px] sm:gap-[14px] lg:gap-[16px] flex-1 max-w-none xl:max-w-[500px] order-1">
                      <motion.h3
                        className="font-normal text-bluecolor-9 text-[20px] sm:text-[22px] lg:text-[24px] leading-[26px] sm:leading-[28px] lg:leading-[30px] tracking-[-0.01em] group-hover:text-black transition-colors duration-400"
                        // style={{ fontFamily: '"Outfit", sans-serif !important' }}
                        whileHover={{ x: 3 }}
                        transition={{ duration: 0.3 }}
                      >
                        {service.title}
                      </motion.h3>

                      <motion.p
                        className="font-normal text-bluecolor-4 text-[14px] sm:text-[15px] lg:text-[16px] leading-[20px] sm:leading-[22px] lg:leading-[24px] tracking-[0] max-w-full xl:max-w-[420px] group-hover:text-gray-600 transition-colors duration-400"
                        // style={{ fontFamily: '"Outfit", sans-serif !important' }}
                        initial={{ opacity: 0, y: 8 }}
                        animate={cardInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 8 }}
                        transition={{ delay: 0.2 + index * 0.4, duration: 0.6 }}
                      >
                        {service.description}
                      </motion.p>

                      {/* Read More Link - Mobile positioned under text */}
                      <div className="flex xl:hidden items-center justify-start mt-2">
                        <motion.button
                          className="inline-flex items-center gap-2 py-2 px-3 rounded-lg hover:bg-goldcolor-8/5 transition-all duration-300 group/btn"
                          variants={readMoreVariants}
                          whileHover={{ scale: 1.02, x: 3 }}
                          whileTap={{ scale: 0.98 }}
                        >
                          <span className="font-medium text-goldcolor-8 text-[13px] sm:text-[14px] leading-[18px] sm:leading-[20px] whitespace-nowrap tracking-[0] group-hover/btn:text-goldcolor-9 transition-colors duration-300">
                            Read More
                          </span>
                          <ArrowRightIcon className="w-3 h-3 sm:w-4 sm:h-4 text-goldcolor-8 group-hover/btn:text-goldcolor-9 group-hover/btn:translate-x-1 transition-all duration-300" />
                        </motion.button>
                      </div>
                    </div>

                    {/* Service Image - Professional presentation */}
                    <motion.div
                      className="relative w-full xl:w-[280px] h-[200px] sm:h-[180px] xl:h-[160px] bg-gradient-to-br from-gray-100 to-gray-200 rounded-[8px] overflow-hidden group-hover:shadow-md transition-all duration-500 order-2 xl:order-3"
                      variants={imageVariants}
                      whileHover={{ 
                        scale: 1.01,
                      }}
                      transition={{ duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
                    >
                      {/* Real service image */}
                      <motion.img
                        src={service.image}
                        alt={`${service.title} service`}
                        className="w-full h-full object-cover"
                        initial={{ scale: 1 }}
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
                      />
                      
                      {/* Professional hover overlay */}
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"
                        initial={{ opacity: 0 }}
                        whileHover={{ opacity: 1 }}
                        transition={{ duration: 0.3 }}
                      />

                      {/* Subtle corner accent */}
                      <motion.div
                        className="absolute top-2 right-2 w-2 h-2 bg-goldcolor-i/60 rounded-full"
                        initial={{ scale: 0, opacity: 0 }}
                        animate={cardInView ? { scale: 1, opacity: 1 } : { scale: 0, opacity: 0 }}
                        transition={{ delay: 0.6 + index * 0.4, duration: 0.4 }}
                      />
                    </motion.div>

                    {/* Center - Read More Link (Desktop only) - Professional styling */}
                    <div className="hidden xl:flex items-center justify-center px-[40px] order-2">
                      <motion.button
                        className="inline-flex items-center gap-2 py-2.5 px-4 rounded-lg hover:bg-goldcolor-8/5 transition-all duration-300 group/btn"
                        variants={readMoreVariants}
                        whileHover={{ scale: 1.02, x: 3 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        <span className="font-medium text-goldcolor-8 text-[14px] leading-[20px] whitespace-nowrap tracking-[0] group-hover/btn:text-goldcolor-9 transition-colors duration-300">
                          Read More
                        </span>
                        <ArrowRightIcon className="w-4 h-4 text-goldcolor-8 group-hover/btn:text-goldcolor-9 group-hover/btn:translate-x-1 transition-all duration-300" />
                      </motion.button>
                    </div>
                  </motion.div>

                  {/* Professional separator - Only between items */}
                  {index < services.length - 1 && (
                    <motion.div
                      variants={separatorVariants}
                      initial="hidden"
                      animate={cardInView ? "visible" : "hidden"}
                      style={{ originX: 0 }}
                      className="px-[20px] sm:px-[35px] lg:px-[50px] w-full h-[1px]"
                    >
                      <Separator className="px-[20px] sm:px-[35px] w-full h-[1px] bg-bluecolor-4/20" />
                    </motion.div>
                  )}
                </React.Fragment>
              ))}
            </CardContent>

            {/* Professional bottom accent line */}
            {/* <motion.div
              className="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-goldcolor-8/60 via-goldcolor-i/40 to-transparent rounded-full"
              initial={{ width: 0 }}
              animate={cardInView ? { width: "100%" } : { width: 0 }}
              transition={{ delay: 1.8, duration: 1.2, ease: [0.25, 0.46, 0.45, 0.94] }}
            /> */}
          </Card>
        </motion.div>
      </motion.div>
    </section>
  );
};