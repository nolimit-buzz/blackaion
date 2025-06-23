"use client";

import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Badge } from "@/components/ui/badge";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs";
import { Newspaper, Pencil, Calendar } from "lucide-react";
import { SeeMoreArrowIcon } from "@/components/icons/SeeMoreArrowIcon";

type Article = {
  id: number;
  title: string;
  date: string;
  excerpt: string;
  tags: string[];
  tagStyle: "gold" | "dark";
  images?: { src: string; alt: string }[];
  hasArrow?: boolean;
};

type ContentData = {
  press: Article[];
  blog: Article[];
  events: Article[];
};

export const ServicesSubsection = (): JSX.Element => {
  const [activeTab, setActiveTab] = React.useState("press");

  const tabItems = [
    { id: "press", label: "IN THE PRESS", Icon: Newspaper },
    { id: "blog", label: "BLOG", Icon: Pencil },
    { id: "events", label: "EVENTS", Icon: Calendar },
  ];

  const contentData: ContentData = {
    press: [
      {
        id: 1,
        title: "Smart City Sweden Supports Waste Management Project...",
        date: "12 March 2024",
        excerpt: "The Government of Sweden has through its export platform Smart City Sweden, approved financing support to the ....",
        tags: ["WASTE TO ENERGY", "CLIMATE CHANGE"],
        tagStyle: "gold",
        images: [],
      },
      {
        id: 2,
        title: "Swap Station, Others, To Deploy Electric Vehicle ...",
        date: "16 May 2024",
        excerpt: "Blackaion Capital and FundCo Capital Managers who are the co-sponsors of Swap Station Mobility, believe the operational cost of battery swapping ...",
        tags: ["CLEAN ENERGY", "ELECTRIC VEHICLES"],
        tagStyle: "dark",
        images: [
          { src: "/service-img-1.png", alt: "Swap Station signing" },
          { src: "/service-img-2.png", alt: "Swap Station team" },
        ],
        hasArrow: true,
      },
      {
        id: 3,
        title: "Capsa Technology records over 300% growth, supports ...",
        date: "22 Nov 2021",
        excerpt: "Capsa Technology, Nigeria's invoice factoring platform, has reported an over 300 percent rise in its transaction volume despite ...",
        tags: ["SME FINANCING", "ECONOMICS"],
        tagStyle: "gold",
        images: [],
      },
    ],
    blog: [
      { id: 1, title: "Our Latest Insights", date: "Coming Soon", excerpt: "Stay tuned for our latest blog posts and articles.", tags: ["THOUGHT LEADERSHIP"], tagStyle: "gold" },
    ],
    events: [
      { id: 1, title: "Upcoming Events", date: "Coming Soon", excerpt: "Check back later for our schedule of upcoming events and webinars.", tags: ["NETWORKING"], tagStyle: "dark" },
    ],
  };

  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.15, delayChildren: 0.2 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  const contentTransition = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeInOut" } },
    exit: { opacity: 0, y: -10, transition: { duration: 0.2, ease: "easeInOut" } },
  };

  return (
    <motion.section
      ref={ref}
      variants={containerVariants}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      className="w-full bg-white text-black py-[70px] sm:py-[100px]"
    >
      <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2 variants={itemVariants} className="text-4xl sm:text-5xl font-bold mb-12">
          Media & Publications
        </motion.h2>

        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <motion.div variants={itemVariants}>
            <TabsList className="p-0 h-auto mb-8 border-b border-gray-200 w-full justify-between">
              {tabItems.map(({ id, label, Icon }) => (
                <TabsTrigger
                  key={id}
                  value={id}
                  className="group bg-transparent flex-1 flex items-center gap-3 text-sm font-medium p-3 relative transition-colors duration-300 data-[state=active]:text-[#8B795B] text-gray-500 hover:text-black"
                >
                  <div className="flex items-center gap-3 w-full justify-start">
                  <div className="w-10 h-10 rounded-full flex items-center justify-center transition-colors duration-300 group-data-[state=active]:bg-[#8B795B] bg-gray-100 group-hover:bg-gray-200">
                    <Icon className="w-5 h-5 transition-colors duration-300 group-data-[state=active]:text-white text-gray-500" />
                  </div>
                  <span className="tracking-widest">{label}</span>
                  {activeTab === id && (
                    <motion.div
                      className="absolute bottom-[-2px] left-0 right-0 h-[1px] bg-[#8B795B]"
                      layoutId="underline"
                    />
                  )}
                  </div>
                 
                </TabsTrigger>
              ))}
            </TabsList>
          </motion.div>

          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              variants={contentTransition}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="space-y-10"
            >
              {(contentData[activeTab as keyof typeof contentData] || []).map((item) => (
                <motion.div key={item.id} variants={itemVariants} className="border-b border-gray-200 pb-10">
                  <div className="flex flex-col md:flex-row justify-between items-start">
                    <div className="md:col-span-1">
                      <div className="flex w-full justify-start">
                        <h3 className="text-2xl font-medium mb-2 text-[#02162B] text-left w-full max-w-[340px]">{item.title}</h3>
                      </div>
                      <p className="flex items-center gap-2 text-sm text-bluecolor-5"><span className="text-lg">•</span>{item.date}</p>
                    </div>

                    <div className="md:col-span-2 flex flex-col items-start gap-4">
                        {item.images && item.images.length > 0 ? (
                            <div className="flex gap-4">
                                {item.images.map(img => (
                                    <img key={img.src} src={img.src} alt={img.alt} className="w-48 h-auto rounded-lg object-cover" />
                                ))}
                            </div>
                        ) : null}
                        <p className="text-gray-600 leading-relaxed text-sm max-w-[300px]">{item.excerpt}</p>
                    </div>

                    <div className="md:col-span-1 flex md:flex-col items-start md:items-end gap-2">
                        <div className="flex flex-wrap md:flex-col items-end gap-2 w-full">
                            {item.tags.map(tag => (
                                <Badge
                                key={tag}
                                className={`font-normal text-xs py-1 px-2 rounded-md ${
                                    item.tagStyle === 'dark'
                                    ? 'bg-black text-white'
                                    : 'bg-transparent text-[#8B795B] border border-[#8B795B]'
                                }`}
                                >
                                {tag}
                                </Badge>
                            ))}
                        </div>
                        {item.hasArrow && (
                            <div className="mt-auto md:pt-4">
                                <SeeMoreArrowIcon className="w-8 h-8"/>
                            </div>
                        )}
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </Tabs>
      </div>
    </motion.section>
  );
};