'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { FrameSubsection } from '@/components/Element/sections/FrameSubsection/FrameSubsection';
import { FooterSubsection } from '@/components/Element/sections/FooterSubsection/FooterSubsection';
import Link from 'next/link';

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

interface TeamMember {
  name: string;
  role: string;
  image: string;
  bio: string[];
  slug: string;
}

const TeamMemberPageContent = ({ teamMember, otherMembers }: { teamMember: TeamMember, otherMembers: TeamMember[] }) => {
  if (!teamMember) {
    return <div>Team member not found.</div>;
  }

  return (
    <div className="bg-white text-bluecolor-9">
      <FrameSubsection theme="light" />

      <header className="max-w-[1440px] mx-auto px-5 sm:px-10 lg:px-16 xl:px-20 pt-20 pb-12">
        <motion.div initial="hidden" animate="visible" variants={fadeInUp} className="text-left">
          <p className="text-sm sm:text-md text-gray-500 uppercase">
            {teamMember.role}
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
          {/* Left Column: Image */}
          <motion.div variants={fadeInUp}>
            <div className="rounded-2xl overflow-hidden shadow-xl w-max group">
              <img
                src={teamMember.image}
                alt={teamMember.name}
                className="w-full h-auto object-cover transition-transform duration-300 ease-in-out group-hover:scale-105"
              />
            </div>
          </motion.div>

          {/* Right Column: Bio */}
          <motion.div variants={fadeInUp} className="col-span-2 flex flex-col justify-center">
            <div className="space-y-6 text-gray-600 leading-relaxed text-left max-w-3xl">
              {teamMember.bio.map((paragraph: string, index: number) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </main>

      {/* Other Team Members Section */}
      <section className="bg-[#F8F8F8] py-20">
        <div className="max-w-[1440px] mx-auto px-5 sm:px-10 lg:px-16 xl:px-20">
          <div className="flex justify-between items-center mb-12">
            <h2 className="text-3xl font-medium">Meet the rest of the team</h2>
          </div>
          <div className="flex overflow-x-auto space-x-8 pb-4 -mx-5 sm:-mx-10 lg:-mx-16 xl:-mx-20 px-5 sm:px-10 lg:px-16 xl:px-20">
            {otherMembers.map((member) => (
              <Link href={`/team/${member.slug}`} key={member.slug} className="flex-shrink-0 w-[280px] group">
                <div className="rounded-2xl overflow-hidden shadow-lg mb-4">
                  <img src={member.image} alt={member.name} className="w-full h-80 object-cover object-top group-hover:scale-105 transition-transform duration-300 ease-in-out" />
                </div>
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="text-xl font-semibold">{member.name}</h3>
                    <p className="text-gray-500">{member.role}</p>
                  </div>
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-up-right mt-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300"><path d="M7 7h10v10"/><path d="M7 17 17 7"/></svg>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <FooterSubsection />
    </div>
  );
};

export default TeamMemberPageContent;