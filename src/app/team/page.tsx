'use client'
import React from "react";
import { FooterSubsection } from "@/components/Element/sections/FooterSubsection/FooterSubsection";
import { FrameSubsection } from "@/components/Element/sections/FrameSubsection/FrameSubsection";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

// Animation Variants
const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeInOut" } },
};

const scaleIn = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.6, ease: "easeInOut" } },
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

const fullManagementTeam = [
  { name: "Obiora Okoye", role: "Co-Founder & Partner", image: "/obiora.png", isCoFounder: true },
  { name: "Okwu Njoku", role: "Co-Founder & Partner", image: "/okwu.png", isCoFounder: true },
  { name: "Dr Uche Isiugo", role: "Executive Director", image: "/uche.png", isCoFounder: false },
  { name: "Oluwatobi Sholanke", role: "Senior Analyst", image: "/tobi.png", isCoFounder: false },
  { name: "Idee Paulinus", role: "Operations Executive", image: "/idee.png", isCoFounder: false },
];

const advisoryBoard = [
  { name: "Wolemi Esan", role: "Board Member", image: "/wolemi.png" },
  { name: "Erik Granskog", role: "Board Member", image: "/erik.png" },
  { name: "Mohammed Kudia", role: "Board Member", image: "/mohammed.png" },
  { name: "Rachel Moré-Oshodi", role: "Board Member", image: "/rachel.png" },
];

interface TeamMemberProps {
  name: string;
  role: string;
  image: string;
}

const TeamMemberCard = ({ name, role, image }: TeamMemberProps) => (
    <motion.div 
        variants={fadeInUp}
        initial="rest"
        whileHover="hover"
        animate="rest"
        className="cursor-pointer"
    >
        <div className="relative w-full h-[400px] rounded-2xl overflow-hidden mb-4">
            <motion.img 
                src={image} 
                alt={name} 
                className="w-full h-full object-cover object-top"
                variants={{
                    rest: { scale: 1 },
                    hover: { scale: 1.05 }
                }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        </div>
        <div className="flex justify-between items-center">
            <div className="text-left">
                <motion.h3 
                    className="text-lg font-medium text-bluecolor-9 cursor-pointer"
                    variants={{
                        rest: { textDecoration: "none" },
                        hover: { textDecoration: "underline" }
                    }}
                    transition={{ duration: 0.2 }}
                >
                    {name}
                </motion.h3>
                <p className="text-sm text-[#8195AA]">{role}</p>
            </div>
            <motion.button 
                className="w-12 h-12 flex-shrink-0 border border-bluecolor-9 rounded-full"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
            >
                <img src="/up-3.svg" alt="View details" className="w-full h-full" />
            </motion.button>
        </div>
    </motion.div>
);

const CoFounderCard = ({ name, role, image }: TeamMemberProps) => (
  <motion.div
    initial="rest"
    whileHover="hover"
    animate="rest"
    variants={scaleIn}
    className="relative w-full h-[400px] rounded-2xl overflow-hidden cursor-pointer group"
  >
    <motion.img
      src={image}
      alt={name}
      className="w-full h-full object-cover object-top brightness-90"
      variants={{
        rest: { scale: 1 },
        hover: { scale: 1.05 },
      }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
    />
    <div className="absolute bottom-0 left-0 right-0 p-6 text-left text-white bg-gradient-to-t from-black via-black/80 via-20% to-transparent">
      <div className="inline-block">
        <h4 className="text-lg sm:text-xl font-medium">{name}</h4>
        <div className="h-px bg-goldcolor-i mt-2 mb-3 transition-colors duration-300 group-hover:bg-goldcolor-8"></div>
      </div>
      <p className="text-gray-200">{role}</p>
    </div>
  </motion.div>
);

const TeamPage = () => {
  return (
    <div className="bg-white">
      <FrameSubsection theme="light" />
      
      <motion.main
        initial="hidden"
        animate="visible"
        variants={staggerContainer}
        className="py-20"
      >

        {/* Management Team Section */}
        <section className="mb-24">
            <div className="max-w-[1440px] mx-auto px-5 sm:px-10 lg:px-16 xl:px-20">
                <motion.div variants={fadeInUp}>
                    <p className="text-sm uppercase text-gray-500 tracking-widest">Our Management Team</p>
                    <div className="w-full h-px bg-gray-300 my-4"></div>
                </motion.div>
                <motion.div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start mb-12" variants={staggerContainer}>
                    <motion.div className="md:col-span-6" variants={fadeInUp}>
                        <h2 className="text-3xl sm:text-4xl font-medium text-bluecolor-9 leading-tight max-w-[700px]">
                            Pioneering Progress: <span className="text-goldcolor-i">The Leadership Powering</span> Blackaion Forward.
                        </h2>
                    </motion.div>
                    <motion.div className="md:col-span-6 self-end" variants={fadeInUp}>
                        <p className="text-[#8195AA] max-w-[530px]">
                            Committed to innovation, integrity, and sustainable growth, they provide the guidance needed to achieve business objectives, deliver stakeholder value, and shape the future of the industry.
                        </p>
                    </motion.div>
                </motion.div>
            
                <motion.div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mt-16" variants={staggerContainer}>
                    {fullManagementTeam.map((member) => (
                        member.isCoFounder ?
                        <CoFounderCard key={member.name} {...member} /> :
                        <TeamMemberCard key={member.name} {...member} />
                    ))}
                </motion.div>
            </div>
        </section>

        {/* Advisory Board Section */}
        <section className="bg-gray-50 py-24">
            <div className="max-w-[1440px] mx-auto px-5 sm:px-10 lg:px-16 xl:px-20">
                <motion.div variants={fadeInUp}>
                    <p className="text-sm uppercase text-gray-500 tracking-widest">Our Advisory Board</p>
                    <div className="w-full h-px bg-gray-300 my-4"></div>
                </motion.div>
                <motion.div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start mb-12" variants={staggerContainer}>
                    <motion.div className="md:col-span-6" variants={fadeInUp}>
                        <h2 className="text-3xl sm:text-4xl font-medium text-bluecolor-9 leading-tight">
                            Driving Innovation: <span className="text-goldcolor-i">The Minds Behind</span> Blackaion's Success
                        </h2>
                    </motion.div>
                    <motion.div className="md:col-span-6 self-end" variants={fadeInUp}>
                        <p className="text-[#8195AA] max-w-[530px]">
                           They craft strategic initiatives to ensure Blackaion's sustainability and growth. Guided by innovation, integrity, and excellence, the Board drives long-term success and delivers stakeholder value.
                        </p>
                    </motion.div>
                </motion.div>
                <motion.div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8" variants={staggerContainer}>
                    {advisoryBoard.map((member) => (
                        <TeamMemberCard key={member.name} {...member} />
                    ))}
                </motion.div>
            </div>
        </section>
        
      </motion.main>

      <FooterSubsection />
    </div>
  );
};

export default TeamPage; 