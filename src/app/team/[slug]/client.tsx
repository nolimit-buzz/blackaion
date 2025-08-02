'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Navbar } from '@/components/Navbar';
import { FooterSubsection } from '@/components/Element/sections/Footer/Footer';
import Link from 'next/link';
import { TeamMemberDetailData, FooterData, TeamPageData } from '@/lib/api';

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: 'easeInOut',
    },
  },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.2,
    },
  },
};

const TeamMemberPageContent = ({ teamMember, footerData, navbarData }: { 
  teamMember: TeamMemberDetailData, 
  footerData: FooterData | null,
  navbarData: TeamPageData['navbar'] | null
}) => {
  if (!teamMember) {
    return <div>Team member not found.</div>;
  }

  // Use the actual image from CMS if available, otherwise fallback to hardcoded images
  const getMemberImage = (memberName: string, memberImg?: any) => {
    if (memberImg && memberImg.url) {
      return memberImg.url;
    }
    
    // Fallback to hardcoded images if CMS image is not available
    const nameLower = memberName.toLowerCase();
    if (nameLower.includes('obiora')) return '/obiora.png';
    if (nameLower.includes('okwu')) return '/okwu.png';
    if (nameLower.includes('uche')) return '/uche.png';
    if (nameLower.includes('tobi') || nameLower.includes('sholanke')) return '/tobi.png';
    if (nameLower.includes('idee') || nameLower.includes('paulinus')) return '/idee.png';
    return '/obiora.png'; // fallback
  };

  // Now we can use the actual image from the CMS
  const image = getMemberImage(teamMember.name, teamMember.img);

  return (
    <div className="bg-white text-bluecolor-9">
      {navbarData && (
        <Navbar 
          theme="light" 
          data={navbarData}
        />
      )}

      <header className="max-w-[1440px] mx-auto px-5 sm:px-10 lg:px-16 xl:px-20 pt-20 pb-12">
        <motion.div initial="hidden" animate="visible" variants={fadeInUp} className="text-left">
          <p className="text-sm sm:text-md text-gray-500 uppercase">
            {teamMember.position}
          </p>
          <div className="w-full h-px bg-gray-200 mt-2 mb-6" />
          <h1 className="text-3xl sm:text-4xl font-medium text-bluecolor-9">
            {teamMember.name}
          </h1>
        </motion.div>
      </header>

      <main className="max-w-[1440px] mx-auto px-5 sm:px-10 lg:px-16 xl:px-20">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
          className="grid grid-cols-1 lg:grid-cols-3 lg:gap-20 pb-20 items-start"
        >
          {/* Image Section */}
          <motion.div variants={fadeInUp} className="lg:col-span-1">
            <div className="relative w-full h-[500px] rounded-2xl overflow-hidden">
              <img 
                src={image} 
                alt={teamMember.name} 
                className="w-full h-full object-cover object-top"
              />
            </div>
          </motion.div>

          {/* Bio Section */}
          <motion.div variants={fadeInUp} className="lg:col-span-2">
            <div className="prose prose-lg max-w-none">
              <div className="text-[#8195AA] leading-relaxed whitespace-pre-line">
                {teamMember.bio}
              </div>
            </div>
          </motion.div>
        </motion.div>
      </main>

      {/* Back to Team Button */}
      <motion.div 
        initial="hidden" 
        animate="visible" 
        variants={fadeInUp}
        className="max-w-[1440px] mx-auto px-5 sm:px-10 lg:px-16 xl:px-20 pb-20"
      >
        <Link href="/team">
          <button className="inline-flex items-center gap-2 px-6 py-3 border border-bluecolor-9 text-bluecolor-9 rounded-lg hover:bg-bluecolor-9 hover:text-white transition-colors duration-300">
            <span>← Back to Team</span>
          </button>
        </Link>
      </motion.div>

      {footerData && <FooterSubsection data={footerData} />}
    </div>
  );
};

export default TeamMemberPageContent;