'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { FundsPageData } from '@/lib/api';

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeInOut' } },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const FundsPageContent = ({ data }: { data: FundsPageData }) => {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={staggerContainer}
      className="max-w-[1440px] mx-auto px-5 sm:px-10 lg:px-16 xl:px-20 py-20 pt-[140px]"
    >
      <motion.div variants={fadeInUp} className="mb-12">
        <p className="text-sm text-gray-500 font-semibold uppercase tracking-wider">Funds</p>
        <div className="w-full h-px bg-gray-200 mt-2" />
      </motion.div>

      <motion.div variants={fadeInUp} className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8 mb-16 items-start">
        <h1 className="text-4xl sm:text-[36px] font-medium text-bluecolor-9">
          <span className="text-goldcolor-i">{data.title.split(':')[0]}:</span> {data.title.split(':').slice(1).join(':') || ''}
        </h1>
        <p className="text-gray-600 leading-relaxed">
          {data.subtitle}
        </p>
      </motion.div>

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
      >
        {data.funds.map(fund => {
          const imageUrl = fund.bg_img?.formats?.medium?.url
            || fund.bg_img?.formats?.small?.url
            || fund.bg_img?.formats?.thumbnail?.url
            || (fund as any).image?.formats?.medium?.url
            || (fund as any).image?.formats?.small?.url
            || (fund as any).image?.url
            || fund.bg_img?.url
            || '';

          return (
            <a href={`/funds/${fund.documentId}`}> 
            <motion.div
              key={fund.documentId || fund.id}
              variants={fadeInUp}
              className="cursor-pointer rounded-2xl border border-gray-100 overflow-hidden transition-all duration-300 group hover:border-gray-300"
            >
              <div className="pb-5 border-b border-gray-50">
                <div className="relative overflow-hidden rounded-lg mb-5">
                  {imageUrl && (
                    <img
                      src={imageUrl}
                      alt={fund.title}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  )}
                </div>
                <h3 className="group-hover:text-goldcolor-9 text-xl font-normal text-bluecolor-9 mb-2 px-5">{fund.title}</h3>
                <p className="text-gray-500 text-sm px-5 mb-4">{fund.content.slice(0, 100)}...</p>
                  <button className="ml-5 w-10 h-10 group-hover:border-gray-300 transition-all duration-300 rounded-full border border-gray-100 flex items-center justify-center transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M7 7h10v10"/><path d="M7 17 17 7"/></svg>
                  </button>
                  
              </div>
            </motion.div>
            </a>
          );
        })}
      </motion.div>
    </motion.div>
  );
};

export default FundsPageContent; 