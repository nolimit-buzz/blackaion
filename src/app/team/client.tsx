'use client'
import React from "react";
import { motion } from "framer-motion";
import { TeamPageData } from "@/lib/api";
import Link from "next/link";
import { Navbar } from "@/components/Navbar";
  
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

interface TeamMemberProps {
  name: string;
  position: string;
  bio: string;
  isCoFounder?: boolean;
}

const TeamMemberCard = ({ name, position, bio, isCoFounder = false, documentId, img }: TeamMemberProps & { documentId: string, img: any }) => {
  // Use the actual image from CMS if available, otherwise fallback to hardcoded images
  const getMemberImage = (memberName: string, memberImg: any) => {
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

  const image = getMemberImage(name, img);

  // For co-founders (first two members), show names inside the card
  if (isCoFounder) {
    return (
      <Link href={`/team/${documentId}`}>
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
            <p className="text-gray-200">{position}</p>
          </div>
        </motion.div>
      </Link>
    );
  }

  // For non-co-founders, show names outside the card
  return (
    <Link href={`/team/${documentId}`}>
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
            <p className="text-sm text-[#8195AA]">{position}</p>
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
    </Link>
  );
};

interface TeamPageClientProps {
  teamData: TeamPageData | null;
}

export const TeamPageClient = ({ teamData }: TeamPageClientProps) => {
  if (!teamData) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-bluecolor-9 mx-auto"></div>
          <p className="mt-4 text-gray-600">Loading team data...</p>
        </div>
      </div>
    );
  }

  // Determine which members are co-founders based on their position
  const teamMembers = teamData.team_members.map(member => ({
    ...member,
    isCoFounder: member.position.toLowerCase().includes('co-founder') || member.position.toLowerCase().includes('founder')
  }));

  return (
    <div className="bg-white">
      <motion.main
        initial="hidden"
        animate="visible"
        variants={staggerContainer}
        className="py-20 pt-[140px]"
      >
        <Navbar theme="light" data={teamData.navbar} />
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
                  {teamData.title}
                </h2>
              </motion.div>
              <motion.div className="md:col-span-6 self-end" variants={fadeInUp}>
                <p className="text-[#8195AA] max-w-[530px]">
                  {teamData.description}
                </p>
              </motion.div>
            </motion.div>
          
            <motion.div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mt-16" variants={staggerContainer}>
              {teamMembers.map((member) => (
                <TeamMemberCard 
                  key={member.name} 
                  name={member.name}
                  position={member.position}
                  bio={member.bio}
                  isCoFounder={member.isCoFounder}
                  documentId={member.documentId}
                  img={member.img}
                />
              ))}
            </motion.div>
          </div>
        </section>
      </motion.main>
    </div>
  );
}; 