"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";

interface NavbarProps {
  theme?: 'light' | 'dark';
  data: {
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
        large?: {
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
        medium?: {
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
}

export const Navbar = ({ theme = 'dark', data }: NavbarProps): JSX.Element => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Animation variants
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
  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className={`fixed ${theme === 'light' ? 'bg-white' : 'bg-black'} backdrop-blur-md top-0 left-0 right-0 z-50 w-full transition-all duration-300`}
      >
        <div className="max-w-[1440px] mx-auto px-5 sm:px-10 lg:px-16 xl:px-20">
          <div className="flex items-center justify-between h-[100px]">
            {/* Logo */}
            <a href="/">  
            <motion.div variants={slideInFromLeft}>
              <motion.img
                className="w-auto h-[48px] object-contain cursor-pointer"
                src={theme === 'light' ? "https://cms.blackaion.com/uploads/small_Logo_Final2_f644d11353.png" : data.logo.formats?.small?.url || data.logo.url}
                alt={data.logo.alternativeText || "Blackaion Logo"}
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
              />
            </motion.div>
</a>
            {/* Desktop Navigation */}
            <motion.nav
              variants={slideInFromRight}
              className="hidden lg:flex items-center space-x-8"
            >
              {data.nav_links.map((link, index) => (
                <motion.a
                  key={index}
                  href={link.link}
                  className={`capitalize text-sm font-medium transition-colors duration-200 ${
                    theme === 'light' 
                      ? 'text-bluecolor-9 hover:text-goldcolor-i'
                      : 'text-white hover:text-goldcolor-i'
                  }`}
                  whileHover={{ y: -2 }}
                  transition={{ duration: 0.2 }}
                >
                  {link.title}
                </motion.a>
              ))}
            </motion.nav>

            {/* Mobile Menu Button */}
            <motion.button
              variants={slideInFromRight}
              className="lg:hidden p-2"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle mobile menu"
            >
              <div className="w-6 h-6 flex flex-col justify-center items-center">
                <span className={`block w-5 h-0.5 bg-current transition-all duration-300 text-white ${isMobileMenuOpen ? 'rotate-45 translate-y-1' : ''}`}></span>
                <span className={`block w-5 h-0.5 bg-current transition-all duration-300 mt-1 text-white ${isMobileMenuOpen ? 'opacity-0' : ''}`}></span>
                <span className={`block w-5 h-0.5 bg-current transition-all duration-300 mt-1 text-white ${isMobileMenuOpen ? '-rotate-45 -translate-y-1' : ''}`}></span>
              </div>
            </motion.button>
          </div>
        </div>

        {/* Mobile Menu */}
        <motion.div
          initial={false}
          animate={isMobileMenuOpen ? "open" : "closed"}
          variants={{
            open: { height: "auto", opacity: 1 },
            closed: { height: 0, opacity: 0 }
          }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          className="lg:hidden overflow-hidden bg-black/80 backdrop-blur-md"
        >
          <div className="px-5 sm:px-10 lg:px-16 xl:px-20 py-6">
            <div className="flex flex-col space-y-4">
              {data.nav_links.map((link, index) => (
                <motion.a
                  key={index}
                  href={link.link}
                  className="text-white capitalize  text-lg font-medium hover:text-goldcolor-i transition-colors duration-200"
                  onClick={() => setIsMobileMenuOpen(false)}
                  whileHover={{ x: 10 }}
                  transition={{ duration: 0.2 }}
                >
                  {link.title}
                </motion.a>
              ))}
            </div>
          </div>
        </motion.div>
      </motion.header>
    </>
  );
}; 