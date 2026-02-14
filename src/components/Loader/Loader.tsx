"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

export const Loader = () => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-black"
        >
            <div className="relative w-48 md:w-64">
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                    className="flex items-center justify-center"
                >
                    <Image
                        src="/logo-white.png"
                        alt="Blackaion"
                        width={200}
                        height={80}
                        className="object-contain w-full h-auto"
                        priority
                    />
                </motion.div>
            </div>

            <motion.div
                className="mt-8 h-[2px] w-32 bg-gray-900 rounded-full overflow-hidden"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
            >
                <motion.div
                    className="h-full bg-white/50"
                    animate={{
                        x: ["-100%", "100%"],
                    }}
                    transition={{
                        repeat: Infinity,
                        duration: 1.5,
                        ease: "easeInOut",
                    }}
                />
            </motion.div>
        </motion.div>
    );
};
