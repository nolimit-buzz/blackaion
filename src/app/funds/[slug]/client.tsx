"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import { FundDetailData } from "@/lib/api";
import { ArrowLeftIcon } from "lucide-react";

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeInOut" } },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.2, delayChildren: 0.2 } },
};

const sentenceVariant = {
  hidden: { opacity: 1 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.04,
    },
  },
};

const letterVariant = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      ease: "easeIn",
      duration: 0.4,
    },
  },
};

const FundPageContent = ({ fund }: { fund: FundDetailData }) => {
  const imageContainerRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: imageContainerRef, offset: ["start start", "end start"] });
  const imageScale = useTransform(scrollYProgress, [0, 1], [1, 1.2]);

  const imageUrl = fund.bg_img?.formats?.large?.url
    || fund.bg_img?.formats?.medium?.url
    || fund.bg_img?.formats?.small?.url
    || fund.bg_img?.formats?.thumbnail?.url
    || fund.bg_img?.url
    || "";

  return (
    <motion.div initial="hidden" animate="visible" variants={staggerContainer} className="text-bluecolor-9">
      {/* Hero Section */}
      <motion.header variants={fadeInUp} className="max-w-[1440px] mx-auto px-5 sm:px-10 lg:px-16 xl:px-20 pt-20 pt-[140px] pb-12">
        <div className="mb-4">
          <p className="text-sm text-gray-500 font-semibold uppercase tracking-wider">Fund</p>
          <div className="w-full h-px bg-gray-200 mt-2" />
        </div>
        <motion.h1 className="text-[36px] font-medium text-bluecolor-9" variants={sentenceVariant} initial="hidden" animate="visible">
          {fund.title.split(" ").map((word, index) => (
            <motion.span key={word + "-" + index} variants={letterVariant} style={{ display: "inline-block", marginRight: "0.25em" }}>
              {word}
            </motion.span>
          ))}
        </motion.h1>
      </motion.header>

      {/* Image */}
      <motion.div ref={imageContainerRef} variants={fadeInUp} className="max-w-[1440px] mx-auto px-5 sm:px-10 lg:px-16 xl:px-20">
        <div className="bg-white shadow-xl rounded-2xl overflow-hidden">
          {imageUrl && (
            <motion.img src={imageUrl} alt={fund.title} className="w-full h-auto max-h-[70vh] object-cover" style={{ scale: imageScale }} />
          )}
        </div>
      </motion.div>

      {/* Content */}
      <div className="max-w-[1440px] mx-auto px-5 sm:px-10 lg:px-16 xl:px-20 py-20">
        <motion.section variants={fadeInUp} className="grid md:grid-cols-3 gap-12 mb-20">
          <div className="md:col-span-1">
            {/* <p className="text-sm uppercase font-semibold text-gray-500 mb-4">About this fund</p> */}
            {/* <div className="flex items-center gap-2"> */}
              
              {/* <div className="w-[60px]" /> */}
            {/* </div> */}
            <h2 className="text-3xl lg:text-4xl font-medium leading-tight">Overview</h2>
            <Link href="/funds" className="text-gold-9 mt-6 inline-flex gap-2 items-center">
                <ArrowLeftIcon className="w-4 h-4 text-gray-500" /> <span className="text-sm text-gray-500">Back to Funds</span>
              </Link>
          </div>
          <div className="md:col-span-2">
            <p className="text-lg text-gray-600 leading-relaxed whitespace-pre-line">{fund.content}</p>
          </div>
        </motion.section>
      </div>
    </motion.div>
  );
};

export default FundPageContent;
