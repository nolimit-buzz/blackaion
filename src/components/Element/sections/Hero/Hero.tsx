"use client";

import React, { useState, useEffect, useMemo } from "react";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Button } from "@/components/ui/button";
import { ChevronUp, ChevronDown } from "lucide-react";
import { Navbar } from "@/components/Navbar";
import Image from "next/image";

type HeroProps = {
  theme?: 'light' | 'dark';
  data: {
    heading: string;
    subheading: string;
    cta: string;
    slider: Array<{
      id: number;
      name: string;
      url: string;
      formats: {
        thumbnail: { url: string };
        small: { url: string };
        medium: { url: string };
        large: { url: string };
      };
    }>;
  };
  navbar: {
    nav_links: Array<{ link: string; title: string }>;
    logo: {
      id: number;
      documentId: string;
      name: string;
      alternativeText: string | null;
      caption: string | null;
      width: number;
      height: number;
      formats: {
        small: {
          ext: string;
          url: string;
          hash: string;
          mime: string;
          name: string;
          path: string | null;
          size: number;
          width: number;
          height: number;
          sizeInBytes: number;
        };
        thumbnail: {
          ext: string;
          url: string;
          hash: string;
          mime: string;
          name: string;
          path: string | null;
          size: number;
          width: number;
          height: number;
          sizeInBytes: number;
        };
      };
      hash: string;
      ext: string;
      mime: string;
      size: number;
      url: string;
      previewUrl: string | null;
      provider: string;
      provider_metadata: any;
      createdAt: string;
      updatedAt: string;
      publishedAt: string;
    };
  };
};

export const Hero = ({ theme = 'dark', data, navbar }: HeroProps): JSX.Element => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const isLight = theme === 'light';

  // Memoize slider images to prevent unnecessary re-renders
  const sliderImages = useMemo(() => {
    return data?.slider?.map(slide => ({
      ...slide,
      optimizedUrl: slide.formats.large.url
    }));
  }, [data.slider]);

  const { scrollY } = useScroll();

  // Optimize scroll transforms with reduced complexity
  const backgroundY = useTransform(scrollY, [0, 600], [0, 100]);
  const backgroundScale = useTransform(scrollY, [0, 600], [1, 1.1]);

  const [heroRef, heroInView] = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });

  // Slider logic
  const goToNext = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === sliderImages?.length - 1 ? 0 : prevIndex + 1
    );
  };

  const goToPrevious = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? sliderImages?.length - 1 : prevIndex - 1
    );
  };

  // Optimized timer with cleanup
  useEffect(() => {
    const timer = setInterval(goToNext, 5000);
    return () => clearInterval(timer);
  }, [currentImageIndex]);

  // Simplified animation variants for better performance
  const fadeVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
    exit: { opacity: 0 },
  };

  const heroContentVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { duration: 0.6, staggerChildren: 0.1, delayChildren: 0.2 },
    },
  };

  const fadeInUp = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  return (
    <div className={`flex flex-col w-full max-w-[1440px] mx-auto px-5 sm:px-10 lg:px-16 xl:px-20 pt-[140px] mx-auto ${isLight ? 'bg-white' : ''}`}>
      <Navbar theme={theme} data={navbar} />

      {!isLight && (
        <div className="p-4 pt-0">
          <section className="w-full h-[80vh] relative overflow-hidden rounded-3xl">
            <AnimatePresence initial={false} mode="wait">
              <motion.div
                key={currentImageIndex}
                className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                style={{
                  backgroundImage: sliderImages ? `url('${sliderImages[currentImageIndex].optimizedUrl}')` : "",
                  y: backgroundY,
                  scale: backgroundScale,
                }}
                variants={fadeVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                transition={{ duration: 1, ease: "easeInOut" }}
              />
            </AnimatePresence>

            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />

            <motion.div
              ref={heroRef}
              className="h-full w-full flex items-end relative z-10 px-6 md:px-12"
              variants={heroContentVariants}
              initial="hidden"
              animate={heroInView ? "visible" : "hidden"}
            >
              <div className="w-full flex justify-between items-end">
                <motion.div
                  className="flex flex-col items-start mb-12 md:mb-24 gap-5 max-w-2xl"
                  variants={fadeInUp}
                >
                  <h1 className="font-semibold text-white text-[28px] md:text-3xl md:text-5xl leading-tight tracking-normal">
                    {data.heading}
                  </h1>
                  <p className="text-white text-base font-light max-w-lg">
                    {data.subheading}
                  </p>
                  <a href="/#esg-impact">
                  <Button
                    size="lg"
                    className="bg-[#645845]/50 text-white hover:bg-[#645845]/80 transition-all duration-300 transform hover:scale-105 rounded-full px-6 py-3 backdrop-blur-sm border border-white/20 text-sm font-light"
                  >
                    <span className="flex items-center text-white">
                      {data.cta}
                      <motion.img
                        className="ml-2 w-4 h-4"
                        src="/arrow---arrow-right-md.svg"
                        alt="arrow"
                        animate={{ x: [0, 4, 0] }}
                        transition={{
                          repeat: Infinity,
                          duration: 1.5,
                          ease: "easeInOut",
                        }}
                      />
                    </span>
                  </Button>
                  </a>
                </motion.div>

                <motion.div className="hidden md:flex flex-col gap-3" variants={fadeInUp}>
                  <button
                    onClick={goToPrevious}
                    className="w-11 h-11 rounded-full border border-white/50 flex items-center justify-center backdrop-blur-sm bg-white/10 hover:bg-white/20 transition-colors"
                  >
                    <ChevronUp className="w-6 h-6 text-white" />
                  </button>
                  <button
                    onClick={goToNext}
                    className="w-11 h-11 rounded-full bg-white flex items-center justify-center hover:bg-white/90 transition-colors"
                  >
                    <ChevronDown className="w-6 h-6 text-black" />
                  </button>
                </motion.div>
              </div>
            </motion.div>
          </section>
        </div>
      )}
    </div>
  );
};