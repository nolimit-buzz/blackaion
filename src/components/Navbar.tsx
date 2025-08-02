"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import { Search, Menu, X } from "lucide-react";

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
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const isLight = theme === 'light';

  // Use CMS data for navigation items
  const navItems = data.nav_links;

  // Animation variants
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
        className={`w-full h-[100px] flex justify-between items-center relative z-20 px-4 sm:px-8 lg:px-24 ${isLight ? 'bg-white' : 'bg-black'}`}
        variants={headerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div variants={slideInFromLeft}>
          <motion.img
            className="w-auto h-[48px] object-contain cursor-pointer"
            src={data.logo.url}
            alt={data.logo.alternativeText || "Blackaion Logo"}
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
                  <NavigationMenuItem key={item.title}>
                    <motion.div variants={navItemVariants} whileHover={{ y: -2 }} transition={{ duration: 0.2 }}>
                      <NavigationMenuLink href={item.link} className={`${isLight ? 'text-black/80 hover:text-black' : 'text-white/90 hover:text-white'} capitalize text-sm transition-colors duration-300 cursor-pointer`}>
                        {item.title}
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
                  <a key={item.title} href={item.link} className="text-white text-2xl font-light">
                    {item.title}
                  </a>
                ))}
              </nav>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}; 