'use client'
import { ChevronDown, ArrowLeft, ArrowRight, ArrowUpRight, ArrowDown } from "lucide-react";
import React, { useState, useMemo, useEffect } from "react";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import { AboutPageData } from "@/lib/api";
import Image from "next/image";
// Optimized Animation Variants
const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeInOut" } },
};

const scaleIn = {
  hidden: { opacity: 0, scale: 0.98 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.5, ease: "easeInOut" } },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

// Placeholder components for each section
const AboutHeroSection = ({ data }: { data: AboutPageData }) => {
  return (
    <motion.section
      className="bg-white text-black py-20 pt-[140px]"
      initial="hidden"
      animate="visible"
      variants={staggerContainer}
    >

      <div className="max-w-[1440px] mx-auto px-5 sm:px-10 lg:px-16 xl:px-20">
        <motion.div className="text-left mb-12" variants={fadeInUp}>
          <div>
            <p className="text-sm uppercase text-gray-500 tracking-widest">About Us</p>
            <div className="w-full h-px bg-gray-300 mt-4 mb-8"></div>
          </div>
          <h1 className="text-3xl sm:text-4xl font-medium max-w-[680px] text-bluecolor-9 leading-[1.4]">
            {data?.about_us?.title}
          </h1>
        </motion.div>

        <div className="flex flex-col gap-8 lg:grid lg:grid-cols-12 items-start">
          <motion.div className="col-span-12 xl:col-span-6" variants={fadeInUp}>
            <p className="leading-relaxed max-w-[537px] text-[#8298AB]">
              {data?.about_us?.description}
            </p>
          </motion.div>
          <motion.div
            className="w-full flex flex-col sm:flex-row sm:justify-between gap-10 col-span-12 xl:col-span-6 text-center"
            variants={staggerContainer}
          >
            {data?.about_us?.numbers?.map((number, index) => (
              <motion.div key={index} variants={fadeInUp}>
                <p className="text-3xl sm:text-4xl lg:text-6xl font-normal text-bluecolor-9">{number.value}</p>
                <p className="text-sm mt-1 max-w-[144px] mx-auto text-[#8195AA]">{number.title}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

const ExperienceSection = ({ data }: { data: AboutPageData }) => {
  const { scrollYProgress } = useScroll();

  return (
    <section className="bg-white pt-20">
      <motion.div
        className="max-w-[1440px] mx-auto px-5 sm:px-10 lg:px-16 xl:px-20"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={fadeInUp}
      >
        <p className="text-sm uppercase text-gray-500 tracking-widest">OUR MANDATE</p>
        <div className="w-full h-px bg-gray-200 mt-2 mb-12"></div>
        <motion.div
          className="relative rounded-2xl overflow-hidden h-[500px]"
          variants={scaleIn}
          whileHover={{ scale: 1.01 }}
          transition={{ duration: 0.3 }}
        >
          <Image
            src={data?.mandate?.history_bg_img?.url}
            alt="Our Experience"
            width={1000}
            height={500}
            priority
            className="absolute inset-0 w-full h-full object-cover"
            // style={{
            //   y: useTransform(scrollYProgress, [0, 1], [0, -50])
            // }}
          />
          <div className="absolute inset-0 bg-black bg-opacity-50" />
          <div className="relative h-full flex flex-col justify-end p-8 gap-8 sm:flex-row sm:justify-between sm:items-start sm:p-12 sm:pt-28">
            <div>
              <h2 className="text-4xl sm:text-5xl font-bold text-white max-w-md">{data?.mandate?.title}</h2>
              <p className="mt-4 text-white max-w-md">
                {data?.mandate?.experience}
              </p>
            </div>
            <a href="#milestones">
              <motion.button
                className="flex items-center gap-4 bg-goldcolor-9 text-white rounded-full pl-6 pr-2 py-2 text-sm w-fit font-medium transition-colors hover:bg-goldcolor-8 shrink-0"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <span>View Trackrecord</span>
                <div className="bg-white text-black rounded-full w-8 h-8 flex items-center justify-center">
                  <ChevronDown className="w-5 h-5" />
                </div>
              </motion.button>
            </a>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

const MissionVisionSection = ({ data }: { data: AboutPageData }) => {
  return (
    <section className="bg-white pb-12 sm:pb-16 md:pb-20">
      <motion.div
        className="max-w-[1280px] mx-auto px-5 sm:px-10 lg:px-16 xl:px-20 relative"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={fadeInUp}
      >
        <div className="bg-white shadow-xl rounded-2xl p-6 sm:p-8 md:p-10 lg:p-12 mt-12 md:-mt-32 relative z-10">
          <motion.div
            className="flex items-start md:items-center"
            variants={staggerContainer}
          >
            <motion.div variants={fadeInUp} className="flex flex-col md:flex-row gap-8 md:gap-12 lg:gap-20 w-full">
              <div className="flex-1 w-full md:w-auto">
                <h3 className="text-lg sm:text-xl md:text-[22px] font-medium text-goldcolor-9 leading-[1.4]">Mission</h3>
                <p className="mt-3 sm:mt-4 text-sm sm:text-base md:text-lg text-bluecolor-4 leading-relaxed">
                  {data?.mandate?.mission}
                </p>
              </div>
              {/* Separator line - horizontal on mobile, vertical on desktop */}
              <div className="w-full h-px md:w-px md:h-16 lg:h-20 bg-gray-200 self-center md:self-auto"></div>
              <div className="flex-1 w-full md:w-auto">
                <h3 className="text-lg sm:text-xl md:text-[22px] font-medium text-goldcolor-9 leading-[1.4]">Vision</h3>
                <p className="mt-3 sm:mt-4 text-sm sm:text-base md:text-lg text-bluecolor-4 leading-relaxed">
                  {data?.mandate?.vision}
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

// Mobile Timeline Component
const MobileMilestonesTimeline = ({ milestones, activeIndex, setActiveIndex, handlePrev, handleNext, isFirst, isLast }: {
  milestones: Array<{ id: number | string; date: string; formattedDate: string; title: string; description: string;[key: string]: any }>;
  activeIndex: number;
  setActiveIndex: (index: number) => void;
  handlePrev: () => void;
  handleNext: () => void;
  isFirst: boolean;
  isLast: boolean;
}) => {
  return (
    <div className="relative">
      {/* Navigation Buttons */}
      <div className="absolute top-0 right-0 z-20 flex flex-row gap-2 mb-4">
        <motion.button
          onClick={handlePrev}
          disabled={isFirst}
          className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed hover:bg-white/20 transition-colors shadow-sm"
          whileHover={{ scale: isFirst ? 1 : 1.05 }}
          whileTap={{ scale: isFirst ? 1 : 0.95 }}
        >
          <ArrowLeft className="w-5 h-5" />
        </motion.button>
        <motion.button
          onClick={handleNext}
          disabled={isLast}
          className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed hover:bg-white/20 transition-colors shadow-sm"
          whileHover={{ scale: isLast ? 1 : 1.05 }}
          whileTap={{ scale: isLast ? 1 : 0.95 }}
        >
          <ArrowRight className="w-5 h-5" />
        </motion.button>
      </div>

      {/* Current Milestone */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeIndex}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          className="pt-12"
        >
          {milestones[activeIndex] && (
            <div className="w-full">
              {/* Date */}
              <div className="text-3xl font-bold text-white mb-3">
                {milestones[activeIndex].formattedDate}
              </div>

              {/* Title */}
              <div className="text-xs uppercase tracking-widest font-semibold text-gray-300 mb-6">
                {milestones[activeIndex].title}
              </div>

              {/* Separator */}
              <div className="w-full h-px bg-goldcolor-9 mb-6" />

              {/* Description */}
              <p className="text-sm leading-relaxed text-gray-300 break-words">
                {milestones[activeIndex].description}
              </p>
            </div>
          )}
        </motion.div>
      </AnimatePresence>

      {/* Milestone Indicators */}
      <div className="flex justify-center gap-2 mt-8">
        {milestones.map((_, index) => (
          <button
            key={index}
            onClick={() => setActiveIndex(index)}
            className={`h-2 rounded-full transition-all ${index === activeIndex ? 'w-8 bg-goldcolor-9' : 'w-2 bg-gray-600'
              }`}
            aria-label={`Go to milestone ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

// Desktop Timeline Component
const DesktopMilestonesTimeline = ({ milestones, activeIndex, setActiveIndex, handlePrev, handleNext, isFirst, isLast }: {
  milestones: Array<{ id: number | string; date: string; formattedDate: string; title: string; description: string;[key: string]: any }>;
  activeIndex: number;
  setActiveIndex: (index: number) => void;
  handlePrev: () => void;
  handleNext: () => void;
  isFirst: boolean;
  isLast: boolean;
}) => {
  const visibleMilestones = 3.5;
  const milestoneWidthPercent = 100 / visibleMilestones;
  const initialLeftOffset = milestoneWidthPercent;

  const calculateScrollX = () => {
    if (milestones?.length <= visibleMilestones || activeIndex === 0) {
      return `${initialLeftOffset}%`;
    }
    const scrollLeft = activeIndex * milestoneWidthPercent;
    const translateX = initialLeftOffset - scrollLeft;
    return `${translateX}%`;
  };

  return (
    <div className="relative">
      {/* Navigation Buttons */}
      <div className="absolute left-0 top-[55%] -translate-y-1/2 z-20 flex flex-row gap-2">
        <motion.button
          onClick={handlePrev}
          disabled={isFirst}
          className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed hover:bg-white/20 transition-colors shadow-sm"
          whileHover={{ scale: isFirst ? 1 : 1.05 }}
          whileTap={{ scale: isFirst ? 1 : 0.95 }}
        >
          <ArrowLeft className="w-6 h-6" />
        </motion.button>
        <motion.button
          onClick={handleNext}
          disabled={isLast}
          className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed hover:bg-white/20 transition-colors shadow-sm"
          whileHover={{ scale: isLast ? 1 : 1.05 }}
          whileTap={{ scale: isLast ? 1 : 0.95 }}
        >
          <ArrowRight className="w-6 h-6" />
        </motion.button>
      </div>

      {/* Timeline Container */}
      <motion.div className="relative overflow-hidden w-full" variants={fadeInUp}>
        <motion.div
          className="flex items-start relative"
          animate={{
            x: calculateScrollX()
          }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          style={{
            width: `${milestones?.length * milestoneWidthPercent}%`
          }}
        >
          {milestones?.map((milestone, index) => {
            const isActive = index === activeIndex;
            return (
              <div
                key={`milestone-${milestone.id}`}
                className="flex flex-col shrink-0"
                style={{ width: `${milestoneWidthPercent}%` }}
              >
                <button
                  onClick={() => setActiveIndex(index)}
                  type="button"
                  className="flex flex-col items-start text-left w-full group pt-4"
                >
                  {/* Date */}
                  <div className={`text-2xl sm:text-3xl lg:text-3xl xl:text-4xl font-bold transition-colors mb-4 ${isActive ? 'text-white' : 'text-gray-500'
                    }`}>
                    {milestone.formattedDate}
                  </div>

                  {/* Title */}
                  <div className={`text-xs sm:text-sm lg:text-xs xl:text-sm uppercase tracking-widest font-semibold mb-6 transition-colors ${isActive ? 'text-gray-300' : 'text-gray-600'
                    }`}>
                    {milestone.title}
                  </div>

                  {/* Separator */}
                  <div className={`w-full h-px mb-8 transition-colors ${isActive ? 'bg-goldcolor-9' : 'bg-gray-700'
                    }`} />

                  {/* Description */}
                  <div className="h-32 sm:h-40 md:h-48 overflow-hidden">
                    <AnimatePresence>
                      {isActive && (
                        <motion.p
                          initial={{ opacity: 0, y: -10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -10 }}
                          transition={{ duration: 0.3, ease: "easeInOut" }}
                          className="text-base sm:text-lg lg:text-base xl:text-lg leading-relaxed text-gray-300"
                        >
                          {milestone.description}
                        </motion.p>
                      )}
                    </AnimatePresence>
                  </div>
                </button>
              </div>
            );
          })}
        </motion.div>
      </motion.div>
    </div>
  );
};

const KeyMilestonesSection = ({ data }: { data: AboutPageData }) => {
  // Format date string to "MMM. DD, YYYY" format
  const formatDate = (dateString: string) => {
    if (!dateString) return '';
    try {
      const date = new Date(dateString);
      const months = ['Jan.', 'Feb.', 'Mar.', 'Apr.', 'May', 'Jun.', 'Jul.', 'Aug.', 'Sep.', 'Oct.', 'Nov.', 'Dec.'];
      const month = months[date.getMonth()];
      const day = date.getDate();
      const year = date.getFullYear();
      return `${month} ${day}, ${year}`;
    } catch {
      return dateString;
    }
  };

  // Get only real milestones (no placeholders) and sort by date
  const milestones = useMemo(() => {
    return data?.milestones?.milestones_list
      .map((milestone) => ({
        ...milestone,
        dateObj: new Date(milestone.date),
        formattedDate: formatDate(milestone.date),
      }))
      .sort((a, b) => a.dateObj.getTime() - b.dateObj.getTime());
  }, [data?.milestones?.milestones_list]);

  const [activeIndex, setActiveIndex] = useState(0);

  // Ensure activeIndex stays within bounds
  useEffect(() => {
    if (activeIndex >= milestones?.length) {
      setActiveIndex(Math.max(0, milestones?.length - 1));
    }
  }, [activeIndex, milestones?.length]);

  const handlePrev = () => {
    if (activeIndex > 0) {
      setActiveIndex(activeIndex - 1);
    }
  };

  const handleNext = () => {
    if (activeIndex < milestones.length - 1) {
      setActiveIndex(activeIndex + 1);
    }
  };

  const isFirst = activeIndex === 0;
  const isLast = activeIndex === milestones?.length - 1;

  // Check if mobile (including md screens)
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      if (typeof window !== 'undefined') {
        setIsMobile(window.innerWidth < 1024); // Use mobile timeline for sm and md screens (< 1024px)
      }
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return (
    <section id="milestones" className="bg-black text-white py-20 ">
      <motion.div
        className="mx-auto max-w-[1440px] mx-auto px-5 sm:px-10 lg:px-16 xl:px-20"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        variants={staggerContainer}
      >
        <motion.div className="text-left mb-16" variants={fadeInUp}>
          <p className="text-sm sm:text-base uppercase text-gray-400 tracking-widest font-semibold">KEY MILESTONES</p>
          <div className="w-full h-px bg-gray-700 mt-4 mb-8"></div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-[1.2]">{data?.milestones?.title}</h2>
          <p className="mt-6 text-lg sm:text-xl text-gray-400 max-w-[680px] leading-relaxed font-medium">
            {data?.milestones?.description}
          </p>
        </motion.div>

        {/* Timeline - Conditional rendering based on screen size */}
        <div className="relative mt-16">
          {isMobile ? (
            <MobileMilestonesTimeline
              milestones={milestones}
              activeIndex={activeIndex}
              setActiveIndex={setActiveIndex}
              handlePrev={handlePrev}
              handleNext={handleNext}
              isFirst={isFirst}
              isLast={isLast}
            />
          ) : (
            <DesktopMilestonesTimeline
              milestones={milestones}
              activeIndex={activeIndex}
              setActiveIndex={setActiveIndex}
              handlePrev={handlePrev}
              handleNext={handleNext}
              isFirst={isFirst}
              isLast={isLast}
            />
          )}
        </div>
      </motion.div>
    </section>
  );
};


const InfraTechSection = ({ data }: { data: AboutPageData }) => {
  return (
    <section className="w-full bg-black text-white py-[70px] sm:py-[100px]">
      <motion.div
        className="flex flex-col w-full max-w-[1440px] mx-auto items-start gap-[60px] px-5 sm:px-10 lg:px-16 xl:px-20"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        variants={staggerContainer}
      >
        {/* Header section */}
        <motion.div className="flex w-full flex-col items-start gap-8 sm:flex-row sm:items-center sm:justify-between" variants={fadeInUp}>
          <div className="flex flex-col items-start gap-4">
            <h2 className="text-[36px] sm:text-[42px] lg:text-[48px] font-bold tracking-[-0.02em]">
              {data?.infratech?.title}
            </h2>
            <p className="text-[#8195AA] text-base sm:text-lg max-w-[450px]">
              {data?.infratech?.description}
            </p>
          </div>
        </motion.div>

        {/* Accordion section */}
        <motion.div className="w-full" variants={staggerContainer}>
          {data?.infratech?.accordion_items?.map((item, index) => (
            <motion.div key={index} variants={fadeInUp}>
              <Accordion
                type="single"
                collapsible
                defaultValue={index === 0 ? "infratech" : undefined}
                className="w-full space-y-2"
              >
                <AccordionItem value={`item-${index}`} className="border-b border-white/10">
                  <AccordionTrigger className="w-full text-left hover:no-underline py-6 group [&>svg]:hidden">
                    <div className="flex flex-col sm:flex-row items-start sm:items-center w-full gap-4 sm:justify-between">
                      <h3 className="text-2xl sm:text-3xl font-light w-full sm:w-1/4 text-[#8195AA] group-data-[state=open]:text-white transition-colors duration-300">
                        {item.title}
                      </h3>
                      <p className="text-base font-normal text-[#8195AA] w-full sm:w-1/2 max-w-xl text-left group-data-[state=open]:hidden">
                        {`${item.description.substring(0, 90)}...`}
                      </p>
                      <p className="text-base font-normal text-[#8195AA] w-full sm:w-1/2 max-w-xl text-left group-data-[state=closed]:hidden">
                        {`${item.description}`}
                      </p>
                      <div className="w-[50px] h-[50px] rounded-full flex items-center justify-center self-end sm:self-auto flex-shrink-0 transition-colors duration-300 border group-data-[state=open]:bg-white group-data-[state=closed]:bg-transparent group-data-[state=open]:border-transparent group-data-[state=closed]:border-white/40">
                        <ArrowUpRight className="h-6 w-6 text-black hidden group-data-[state=open]:block" />
                        <ArrowDown className="h-6 w-6 text-[#8195AA] hidden group-data-[state=closed]:block" />
                      </div>
                    </div>
                  </AccordionTrigger>
                </AccordionItem>
              </Accordion>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
};


const AboutPageClient = ({ data }: { data: AboutPageData }) => {
  return (
    <div className="bg-white">
      <AboutHeroSection data={data} />
      <ExperienceSection data={data} />
      <MissionVisionSection data={data} />
      <InfraTechSection data={data} />
      <KeyMilestonesSection data={data} />
    </div>
  );
};

export default AboutPageClient; 