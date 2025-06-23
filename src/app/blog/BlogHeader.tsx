'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { NavigationMenu, NavigationMenuItem, NavigationMenuList } from '@/components/ui/navigation-menu';
import Link from 'next/link';
import { Search, Menu, X } from 'lucide-react';

const BlogHeader = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const navItems = ['Blog', 'About', 'Contact'];

    return (
        <>
            <motion.header
                className="w-full max-w-[1440px] mx-auto h-[100px] flex justify-between items-center relative z-20 px-4 sm:px-8 lg:px-24 bg-black"
                initial={{ y: -100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
            >
                <motion.div
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.2 }}
                >
                    <Link href="/">
                        <img
                            className="w-auto h-[48px] object-contain cursor-pointer"
                            src={"/logo-white.png"}
                            alt="Blackaion Logo"
                        />
                    </Link>
                </motion.div>
                <div className="hidden lg:flex items-center gap-10">
                    <NavigationMenu>
                        <NavigationMenuList className="flex items-center gap-8">
                            {navItems.map((item) => (
                                <NavigationMenuItem key={item}>
                                    <motion.div whileHover={{ y: -2 }} transition={{ duration: 0.2 }}>
                                        <Link href={`/${item.toLowerCase()}`} className="text-white/90 hover:text-white text-sm transition-colors duration-300">
                                            {item}
                                        </Link>
                                    </motion.div>
                                </NavigationMenuItem>
                            ))}
                        </NavigationMenuList>
                    </NavigationMenu>
                    <motion.div>
                        <Search className="w-5 h-5 text-white/90 hover:text-white transition-colors duration-300 cursor-pointer" />
                    </motion.div>
                </div>
                <div className="lg:hidden">
                    <button onClick={() => setIsMenuOpen(true)}>
                        <Menu className="w-6 h-6 text-white" />
                    </button>
                </div>
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
                                    <Link key={item} href={`/${item.toLowerCase()}`} className="text-white text-2xl font-light" onClick={() => setIsMenuOpen(false)}>
                                        {item}
                                    </Link>
                                ))}
                            </nav>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};

export default BlogHeader; 