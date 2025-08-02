'use client'
import { FooterSubsection } from "@/components/Element/sections/Footer/Footer";
import { Hero } from "@/components/Element/sections/Hero/Hero";
import { ChevronDown, ArrowLeft, ArrowRight, ArrowUpRight, ArrowDown } from "lucide-react";
import React, { useState, useMemo, useEffect } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { motion, useScroll, useTransform } from "framer-motion";
import { fetchAboutPageData, AboutPageData } from "@/lib/api";
import { Navbar } from "@/components/Navbar";

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
      className="bg-white text-black py-20"
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
            {data.about_us.title}
          </h1>
        </motion.div>

        <div className="flex flex-col gap-8 lg:grid lg:grid-cols-12 lg:gap-8 items-start">
          <motion.div className="lg:col-span-7" variants={fadeInUp}>
            <p className="leading-relaxed max-w-[537px] text-[#8298AB]">
              {data.about_us.description}
            </p>
          </motion.div>
          <motion.div 
            className="w-full flex flex-col sm:flex-row sm:justify-between gap-10 sm:gap-4 lg:col-span-5 text-center"
            variants={staggerContainer}
          >
            {data.about_us.numbers.map((number, index) => (
              <motion.div key={index} variants={fadeInUp}>
                <p className="text-[30px] sm:text-5xl xl:text-[64px] font-normal text-bluecolor-9">{number.value}</p>
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
          <motion.img 
            src={data.mandate.history_bg_img.url} 
            alt="Our Experience" 
            className="absolute inset-0 w-full h-full object-cover"
            style={{
              y: useTransform(scrollYProgress, [0, 1], [0, -50])
            }}
          />
          <div className="absolute inset-0 bg-black bg-opacity-50" />
          <div className="relative h-full flex flex-col justify-end p-8 gap-8 sm:flex-row sm:justify-between sm:items-start sm:p-12 sm:pt-28">
            <div>
              <h2 className="text-4xl sm:text-5xl font-bold text-white max-w-md">{data.mandate.title}</h2>
              <p className="mt-4 text-white max-w-md">
                {data.mandate.experience}
              </p>
            </div>
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
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

const MissionVisionSection = ({ data }: { data: AboutPageData }) => {
  return (
    <section className="bg-white pb-20">
      <motion.div 
        className="max-w-[1280px] mx-auto px-5 sm:px-10 lg:px-16 xl:px-20 relative"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={fadeInUp}
      >
        <div className="bg-white shadow-xl rounded-2xl p-12 mt-12 md:-mt-32 relative z-10">
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center"
            variants={staggerContainer}
          >
            <motion.div variants={fadeInUp}>
              <div>
                <h3 className="text-[22px] font-medium text-bluecolor-9 leading-[1.4]">Mission</h3>
                <p className="mt-4 text-bluecolor-4 leading-relaxed max-w-[300px]">
                  {data.mandate.mission}
                </p>
              </div>
              <div className="max-w-[300px] h-px bg-gray-200 my-12"></div>
              <div>
                <h3 className="text-[22px] font-medium text-bluecolor-9 leading-[1.4]">Vision</h3>
                <p className="mt-4 text-bluecolor-4 leading-relaxed max-w-[300px]">
                  {data.mandate.vision}
                </p>
              </div>
            </motion.div>
            <motion.div variants={fadeInUp}>
              <div className="flex justify-center items-center bg-gray-100 h-80 rounded-lg">
                <p className="text-gray-400">World Map Placeholder</p>
              </div>
              <div className="mt-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
                  <div className="flex items-center gap-2">
                      <div className="w-3 h-3 rounded-full bg-goldcolor-8"></div>
                      <span className="text-sm text-gray-600">Investments & Advisory</span>
                  </div>
                  <div className="flex items-center gap-2">
                      <div className="w-3 h-3 rounded-full bg-goldcolor-9"></div>
                      <span className="text-sm text-gray-600">Advisory Only</span>
                  </div>
                  <div className="flex items-center gap-2">
                      <div className="w-3 h-3 rounded-full bg-bluecolor-8"></div>
                      <span className="text-sm text-gray-600">Office</span>
                  </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

const WhyBlackaionSection = ({ data }: { data: AboutPageData }) => {
  return (
    <section className="bg-white py-20 px-5 sm:px-10 lg:px-16 xl:px-20 max-w-[1440px] mx-auto">
      <motion.div 
        className="relative w-full mx-auto bg-cover bg-center rounded-2xl p-8 sm:p-12 lg:p-20"
        style={{ backgroundImage: `url('${data.mandate.history_bg_img.url}')` }}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={scaleIn}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 to-black/80 rounded-2xl"></div>
        <motion.div className="relative flex flex-col text-white" variants={staggerContainer}>
          <motion.div variants={fadeInUp}>
            <p className="text-sm uppercase text-white/80 tracking-widest">COMPANY HISTORY</p>
            <div className="w-full h-px bg-white/30 my-4"></div>
          </motion.div>
          <motion.div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start mt-8" variants={fadeInUp}>
            <h2 className="text-4xl sm:text-5xl font-bold">Why Blackaion</h2>
            <p className="leading-relaxed text-white/90">
              {data.mandate.company_history}
            </p>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
};

const KeyMilestonesSection = ({ data }: { data: AboutPageData }) => {
  const years = useMemo(() => {
    const milestoneYears = data.milestones.milestones_list.map(m => m.year);
    const minYear = Math.min(...milestoneYears);
    const maxYear = Math.max(...milestoneYears);
    return Array.from({ length: maxYear - minYear + 1 }, (_, i) => minYear + i);
  }, [data.milestones.milestones_list]);
  
  const TICKS_PER_YEAR = 4;

  type MilestoneData = {
    id: number;
    isPlaceholder: boolean;
    date?: string;
    title?: string;
    description?: string;
    image?: string;
    year?: number;
    quarter?: number;
  };

  const milestonesData = useMemo(() => {
    const milestonesArray: MilestoneData[] = [];
    const minYear = Math.min(...years);
    
    for (let i = 0; i < years.length * TICKS_PER_YEAR; i++) {
      milestonesArray.push({ id: i, isPlaceholder: true });
    }
    
    data.milestones.milestones_list.forEach((milestone) => {
      const index = (milestone.year - minYear) * 4 + milestone.quarter - 1;
      if (index >= 0 && index < milestonesArray.length) {
        milestonesArray[index] = {
          ...milestone,
          isPlaceholder: false,
          image: milestone.img.url,
        };
      }
    });
    
    return milestonesArray;
  }, [years, data.milestones.milestones_list]);

  const realMilestoneIndices = useMemo(
    () => milestonesData.map((m, i) => (!m.isPlaceholder ? i : -1)).filter((i) => i !== -1),
    [milestonesData]
  );

  const [activeIndex, setActiveIndex] = useState(realMilestoneIndices[0] || 0);

  const handlePrev = () => {
    const currentIndexInReal = realMilestoneIndices.indexOf(activeIndex);
    if (currentIndexInReal > 0) {
      setActiveIndex(realMilestoneIndices[currentIndexInReal - 1]);
    }
  };

  const handleNext = () => {
    const currentIndexInReal = realMilestoneIndices.indexOf(activeIndex);
    if (currentIndexInReal < realMilestoneIndices.length - 1) {
      setActiveIndex(realMilestoneIndices[currentIndexInReal + 1]);
    }
  };

  const activeMilestone = milestonesData[activeIndex];
  
  return (
    <section className="bg-black text-white py-20 px-5 sm:px-10 lg:px-16 xl:px-20">
      <motion.div 
        className="max-w-7xl mx-auto"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        variants={staggerContainer}
      >
        <motion.div className="text-left" variants={fadeInUp}>
          <p className="text-sm uppercase text-gray-400 tracking-widest">COMPANY HISTORY</p>
          <div className="w-full h-px bg-white/20 mt-2 mb-8"></div>
          <h2 className="text-4xl sm:text-5xl font-bold">{data.milestones.title}</h2>
          <p className="mt-4 text-gray-400 max-w-[460px] leading-relaxed">
            {data.milestones.description}
          </p>
        </motion.div>

        <motion.div className="mt-20 relative" variants={fadeInUp}>
          <div className="bg-dark p-6 sm:p-8 md:p-12 rounded-2xl md:w-7/12">
            <div className="min-h-[320px] md:h-[320px] flex flex-col justify-center">
              {/* Mobile Image - shown only on small screens */}
              <div className="md:hidden mb-6">
                <motion.img 
                  src={activeMilestone.image || ''} 
                  alt={activeMilestone.title || ''} 
                  className="w-full h-48 object-cover rounded-2xl"
                  variants={scaleIn}
                />
              </div>
              <p className="text-sm text-goldcolor-i">{activeMilestone.date || ''}</p>
              <h3 className="text-3xl sm:text-4xl font-bold mt-4 max-w-[470px]">{activeMilestone.title || ''}</h3>
              <p className="mt-4 text-gray-400 max-w-[470px] font-normal">{activeMilestone.description || ''}</p>
            </div>
          </div>
          {/* Desktop Image - hidden on small screens */}
          <div className="hidden md:block md:absolute md:top-1/2 md:-translate-y-1/2 md:right-0 md:w-1/2 md:h-[85%] mt-4 md:mt-0">
            <motion.img 
              src={activeMilestone.image || ''} 
              alt={activeMilestone.title || ''} 
              className="w-full h-full object-cover rounded-2xl"
              variants={scaleIn}
            />
          </div>
        </motion.div>

        <motion.div className="mt-16" variants={fadeInUp}>
          <div className="relative h-20">
             {milestonesData.map((milestone, index) => {
                const isYearTick = index % TICKS_PER_YEAR === 0;
                const hasMilestone = !milestone.isPlaceholder;
                const isActive = index === activeIndex;

                const tickHeight = isActive ? 'h-8' : isYearTick ? 'h-6' : 'h-3';
                const tickColor = isActive ? 'bg-goldcolor-i' : hasMilestone ? 'bg-white/70 hover:h-10' : 'bg-gray-600';

                const TickMark = <div className={`w-px ${tickHeight} ${tickColor} hover:scale-110 transition-all duration-300`} />;

                return (
                    <div key={index} className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2" style={{ left: `${(index / (milestonesData.length - 1)) * 100}%`}}>
                        {hasMilestone ? (
                            <motion.button 
                              onClick={() => setActiveIndex(index)} 
                              className="flex flex-col items-center px-1 py-2 -mx-1 -my-2"
                              whileHover={{ scale: 1.1 }}
                              whileTap={{ scale: 0.9 }}
                            >
                                {TickMark}
                            </motion.button>
                        ) : (
                           TickMark
                        )}
                        {isYearTick && <span className="absolute top-full mt-2 text-xs sm:text-sm text-gray-500">{years[index / TICKS_PER_YEAR]}</span>}
                    </div>
                )
            })}
          </div>

          <div className="mt-8 flex justify-between">
            <motion.button 
              onClick={handlePrev} 
              disabled={realMilestoneIndices.indexOf(activeIndex) === 0} 
              className="bg-transparent hover:bg-white text-white hover:text-black border border-white/50 rounded-full w-12 h-12 flex items-center justify-center shrink-0 disabled:opacity-50 transition-colors duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <ArrowLeft className="w-6 h-6" />
            </motion.button>
            <motion.button 
              onClick={handleNext} 
              disabled={realMilestoneIndices.indexOf(activeIndex) === realMilestoneIndices.length - 1} 
              className="bg-transparent hover:bg-white text-white hover:text-black border border-white/50 rounded-full w-12 h-12 flex items-center justify-center shrink-0 disabled:opacity-50 transition-colors duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <ArrowRight className="w-6 h-6" />
            </motion.button>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

const TeamSection = () => {
  return (
    <section className="bg-white py-20 max-w-[1440px] mx-auto">
      <motion.div 
        className="w-full mx-auto px-5 sm:px-10 lg:px-16 xl:px-20"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        variants={staggerContainer}
      >
        <motion.div className="text-left mb-12" variants={fadeInUp}>
          <p className="text-sm uppercase text-gray-500 tracking-widest">Our Team</p>
          <div className="w-full h-px bg-[#8298AB]/[0.3] mt-2"></div>
        </motion.div>

        <motion.div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 items-center" variants={staggerContainer}>
          {/* Board of Directors Text */}
          {/* <motion.div className="text-left" variants={fadeInUp}>
            <h3 className="text-2xl sm:text-[28px] font-medium text-bluecolor-9 leading-[1.35]">Board Of<br /> Directors</h3>
            <div className="w-full h-px bg-[#8298AB]/[0.3] my-6"></div>
            <p className="text-[#8195AA]">The Board of Directors oversees strategic direction to drive long-term growth & market sustainability.</p>
            <motion.button 
              className="mt-8 flex items-center gap-2 text-bluecolor-9 group"
              whileHover={{ x: 3 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <span className="group-hover:underline">View Board</span>
              <div className="bg-bluecolor-9 text-white rounded-full w-8 h-8 flex items-center justify-center transition-transform group-hover:scale-110">
                <ArrowUpRight className="w-4 h-4" />
              </div>
            </motion.button>
          </motion.div> */}

          {/* Obiora Okoye Card */}
          <motion.div 
            className="relative rounded-2xl overflow-hidden w-full max-w-[280px] mx-auto" 
            variants={scaleIn}
            whileHover={{ scale: 1.02, y: -3 }}
          >
            <img src="/obiora.png" alt="Obiora Okoye" className="w-full h-auto object-cover brightness-90" />
            <div className="flex flex-col items-end absolute bottom-0 left-0 right-0 p-6 text-left text-white bg-gradient-to-t from-black via-black/80 via-20% to-transparent">
              <div className="inline-block">
                <h4 className="text-lg sm:text-xl font-medium">Obiora Okoye</h4>
                <div className="h-px bg-goldcolor-i mt-2 mb-3"></div>
              </div>
              <p className="text-gray-200">Co-Founder & Partner</p>
            </div>
          </motion.div>
          
          {/* Okwu Njoku Card */}
          <motion.div 
            className="relative rounded-2xl overflow-hidden w-full max-w-[280px] mx-auto" 
            variants={scaleIn}
            whileHover={{ scale: 1.02, y: -3 }}
          >
            <img src="/okwu.png" alt="Okwu Njoku" className="w-full h-auto object-cover brightness-90" />
            <div className="absolute bottom-0 left-0 right-0 p-6 text-left text-white bg-gradient-to-t from-black via-black/80 via-20% to-transparent">
              <div className="inline-block">
                <h4 className="text-lg sm:text-xl font-medium">Okwu Njoku</h4>
                <div className="h-px bg-goldcolor-i mt-2 mb-3"></div>
              </div>
              <p className="text-gray-200">Co-Founder & Partner</p>
            </div>
          </motion.div>

          {/* Management Team Text */}
          <motion.div className="text-left" variants={fadeInUp}>
            <h3 className="text-2xl sm:text-[28px] font-medium text-bluecolor-9 leading-[1.35]">Board of Directors</h3>
            <div className="w-full h-px bg-[#8298AB]/[0.3] my-6"></div>
            <p className="text-[#8195AA]">Our Board of Directors oversees strategic direction to drive long-term growth & market sustainability.</p>
            <a href="/team"><motion.button 
              className="mt-8 flex items-center gap-2 text-bluecolor-9 group"
              whileHover={{ x: 3 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <span className="group-hover:underline">View Team</span>
              <div className="bg-bluecolor-9 text-white rounded-full w-8 h-8 flex items-center justify-center transition-transform group-hover:scale-110">
                <ArrowUpRight className="w-4 h-4" />
              </div>
            </motion.button></a>
          </motion.div>
        </motion.div>
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
              {data.infratech.title}
            </h2>
            <p className="text-[#8195AA] text-base sm:text-lg max-w-[450px]">
             {data.infratech.description}
            </p>
          </div>
          <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
            <Button className="bg-white hover:bg-white/90 text-black rounded-full text-xs sm:text-sm px-[30px] py-[20px] flex items-center font-normal gap-2 transition-all duration-300">
              <span>Learn More</span>
              <ArrowUpRight className="w-5 h-5" />
            </Button>
          </motion.div>
        </motion.div>

        {/* Accordion section */}
        <motion.div className="w-full" variants={staggerContainer}>
          {data.infratech.accordion_items.map((item, index) => (
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

interface AboutPageClientProps {
  initialData?: AboutPageData;
}

const AboutPageClient = ({ initialData }: AboutPageClientProps) => {
  const [data, setData] = useState<AboutPageData | null>(initialData || null);
  const [loading, setLoading] = useState(!initialData);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    // Only fetch data if no initial data was provided
    if (initialData) {
      setData(initialData);
      setLoading(false);
      return;
    }

    const fetchData = async () => {
      try {
        setLoading(true);
        const aboutData = await fetchAboutPageData();
        setData(aboutData);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Failed to fetch data');
        console.error('Error fetching about page data:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [initialData]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-bluecolor-9 mx-auto"></div>
          <p className="mt-4 text-gray-600">Loading...</p>
        </div>
      </div>
    );
  }

  if (error || !data) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <p className="text-red-600 mb-4">Error loading page data</p>
          <p className="text-gray-600">{error}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white">
      <Navbar
        theme="light"
        data={data.navbar}
      />
      <AboutHeroSection data={data} />
      <ExperienceSection data={data} />
      <MissionVisionSection data={data} />
      <WhyBlackaionSection data={data} />
      <KeyMilestonesSection data={data} />
      <TeamSection />
      <InfraTechSection data={data} />
      <FooterSubsection data={data.footer} />
    </div>
  );
};

export default AboutPageClient; 