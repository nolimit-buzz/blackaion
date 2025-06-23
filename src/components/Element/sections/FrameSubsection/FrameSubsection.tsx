"use client";

import React, { useState, useEffect } from "react";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import { ChevronUp, ChevronDown, Search, Menu, X } from "lucide-react";

const sliderImages = ["/hero-bg-1.png", "/hero-bg-2.png"];

type FrameSubsectionProps = {
  theme?: 'light' | 'dark';
};

export const FrameSubsection = ({ theme = 'dark' }: FrameSubsectionProps): JSX.Element => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const isLight = theme === 'light';

  const navItems = [
    "About",
    "Services",
    "Impact",
    "Get Involved",
    "Resources",
    "Contact Us",
  ];
  const { scrollY } = useScroll();

  const backgroundY = useTransform(scrollY, [0, 800], [0, 150]);
  const backgroundScale = useTransform(scrollY, [0, 800], [1, 1.15]);

  const [heroRef, heroInView] = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });

  // Slider logic
  const goToNext = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === sliderImages.length - 1 ? 0 : prevIndex + 1
    );
  };

  const goToPrevious = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? sliderImages.length - 1 : prevIndex - 1
    );
  };

  // This useEffect hook now resets the timer whenever currentImageIndex changes
  useEffect(() => {
    const timer = setInterval(goToNext, 5000); // Change image every 5 seconds
    return () => clearInterval(timer); // Clear the timer on component unmount or when index changes
  }, [currentImageIndex]);

  const fadeVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
    exit: { opacity: 0 },
  };

  // Common variants
  const headerVariants = {
    hidden: { y: -100, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.8, ease: "easeOut", staggerChildren: 0.1 },
    },
  };

  const navItemVariants = {
    hidden: { y: -20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.5, ease: "easeOut" } },
  };

  const heroContentVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { duration: 1, staggerChildren: 0.2, delayChildren: 0.3 },
    },
  };

  const slideInFromLeft = {
    hidden: { x: -100, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  const slideInFromRight = {
    hidden: { x: 100, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: { duration: 0.8, ease: "easeOut", delay: 0.5 },
    },
  };

  const fadeInUp = {
    hidden: { y: 40, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  return (
    <div className={`flex flex-col w-full max-w-[1440px] mx-auto ${isLight ? 'bg-white' : ''}`}>
      <motion.header
        className={`w-full h-[100px] flex justify-between items-center relative z-20 px-4 sm:px-8 lg:px-24 ${isLight ? 'bg-white' : 'bg-black'}`}
        variants={headerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div variants={slideInFromLeft}>
          <motion.img
            className="w-auto h-[48px] object-contain cursor-pointer"
            src={isLight ? "/logo-black.png" : "/logo-white.png"}
            alt="Blackaion Logo"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
          />
        </motion.div>
        <motion.div
          className="flex items-center gap-10"
          variants={slideInFromRight}
        >
          <div className="hidden lg:flex items-center">
            <NavigationMenu>
              <NavigationMenuList className="flex items-center gap-8">
                {navItems.map((item) => (
                  <NavigationMenuItem key={item}>
                    <motion.div variants={navItemVariants} whileHover={{ y: -2 }} transition={{ duration: 0.2 }}>
                      <NavigationMenuLink className={`${isLight ? 'text-black/80 hover:text-black' : 'text-white/90 hover:text-white'} text-sm transition-colors duration-300 cursor-pointer`}>
                        {item}
                      </NavigationMenuLink>
                    </motion.div>
                  </NavigationMenuItem>
                ))}
              </NavigationMenuList>
            </NavigationMenu>
            <motion.div variants={navItemVariants} className="ml-10">
              <Search className={`w-5 h-5 ${isLight ? 'text-black/80 hover:text-black' : 'text-white/90 hover:text-white'} transition-colors duration-300 cursor-pointer`} />
            </motion.div>
          </div>
          <div className="lg:hidden">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
              <Menu className={`w-6 h-6 ${isLight ? 'text-black' : 'text-white'}`} />
            </button>
          </div>
        </motion.div>
      </motion.header>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            className="fixed inset-0 bg-black bg-opacity-90 z-50 lg:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsMenuOpen(false)}
          >
            <motion.div
              className="fixed top-0 right-0 h-full w-4/5 max-w-sm bg-black p-8"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button onClick={() => setIsMenuOpen(false)} className="absolute top-8 right-8">
                <X className="w-6 h-6 text-white" />
              </button>
              <nav className="mt-16 flex flex-col gap-8">
                {navItems.map((item) => (
                  <a key={item} href="#" className="text-white text-2xl font-light">
                    {item}
                  </a>
                ))}
              </nav>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {!isLight && (
        <div className="p-4 pt-0">
          <section className="w-full h-[80vh] relative overflow-hidden rounded-3xl">
            <AnimatePresence initial={false}>
              <motion.div
                key={currentImageIndex}
                className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                style={{
                  backgroundImage: `url('${sliderImages[currentImageIndex]}')`,
                  y: backgroundY,
                  scale: backgroundScale,
                }}
                variants={fadeVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                transition={{ duration: 1.5, ease: "easeInOut" }}
              />
            </AnimatePresence>

            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />

            <motion.div
              ref={heroRef}
              className="h-full w-full flex items-end relative z-10 p-12"
              variants={heroContentVariants}
              initial="hidden"
              animate={heroInView ? "visible" : "hidden"}
            >
              <div className="w-full flex justify-between items-end">
                <motion.div
                  className="flex flex-col items-start mb-24 gap-5 max-w-2xl"
                  variants={fadeInUp}
                >
                  <h1 className="font-semibold text-white text-5xl leading-tight tracking-normal">
                    Creating Value & Sustaining Impact in Africa's infrastructure Future
                  </h1>
                  <p className="text-white text-base font-light max-w-lg">
                    Pioneering InfraTech and ESG-driven projects across West Africa.
                  </p>
                  <Button
                    size="lg"
                    className="bg-[#645845]/50 text-white hover:bg-[#645845]/80 transition-all duration-300 transform hover:scale-105 rounded-full px-6 py-3 backdrop-blur-sm border border-white/20 text-sm font-light"
                  >
                    <span className="flex items-center text-white">
                      Explore Our Impact
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
                </motion.div>

                <motion.div className="flex flex-col gap-3" variants={fadeInUp}>
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