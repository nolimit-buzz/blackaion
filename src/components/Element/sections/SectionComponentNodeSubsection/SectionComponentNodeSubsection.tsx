import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { ArrowUpRight, ArrowDown } from "lucide-react";
import { SeeMoreArrowIcon } from "@/components/icons/SeeMoreArrowIcon";

export const SectionComponentNodeSubsection = (): JSX.Element => {
  // ESG categories data
  const esgCategories = [
    {
      id: "environment",
      title: "Environment & Climate Change",
      description:
        "ESG reporting framework with lessons learned from each investment.",
    },
    {
      id: "social",
      title: "Social, Health & Safety",
      description:
        "ESG assessment, risk rating and monitoring embedded in the investment process ensuring limited impact to all stakeholders.",
    },
    {
      id: "governance",
      title: "Governance & Business Climate",
      description:
        "ESG team is led by one of the Managing Partners and supported by an Advisory...",
    },
  ];

  // SDG images data
  const sdgImages = [
    { src: "/sdg-1.png", alt: "SDG 1: No Poverty" },
    { src: "/sdg-2.png", alt: "SDG 2: Zero Hunger" },
    { src: "/sdg-3.png", alt: "SDG 3: Good Health and Well-being" },
    { src: "/sdg-4.png", alt: "SDG 4: Quality Education" },
  ];

  return (
    <section className="w-full bg-black text-white py-[70px] sm:py-[100px]">
      <div className="flex flex-col w-full max-w-[1440px] mx-auto items-start gap-[60px]">
        {/* Header section */}
        <div className="flex w-full items-center justify-between">
          <div className="flex flex-col items-start gap-4">
            <h2 className="text-[36px] sm:text-[42px] lg:text-[48px] font-bold tracking-[-0.02em]">
              ESG Impact
            </h2>
            <p className="text-white/70 text-base sm:text-lg max-w-[450px]">
              ESG policies are embedded in our investment strategy and process.
            </p>
          </div>
          <Button className="bg-white hover:bg-white/90 text-black rounded-full text-xs sm:text-sm px-[30px] py-[20px] flex items-center font-normal gap-2 transition-all duration-300">
            <span>Learn More</span>
            <SeeMoreArrowIcon className="w-5 h-5" />
          </Button>
        </div>

        {/* Accordion section */}
        <Accordion
          type="single"
          collapsible
          defaultValue="social"
          className="w-full space-y-2"
        >
          {esgCategories.map((category) => (
            <AccordionItem key={category.id} value={category.id} className="border-b border-white/10">
                <AccordionTrigger className="w-full text-left hover:no-underline py-6 group [&>svg]:hidden">
                    <div className="flex justify-between items-center w-full gap-4">
                        <h3 className="text-2xl sm:text-3xl font-light w-1/4">
                            {category.title}
                        </h3>
                        <p className="text-base font-normal text-white/70 w-1/2 max-w-xl text-left">
                            {category.description}
                        </p>
                        <div className="w-[50px] h-[50px] rounded-full flex items-center justify-center flex-shrink-0 transition-colors duration-300 border group-data-[state=open]:bg-white group-data-[state=closed]:bg-transparent group-data-[state=open]:border-transparent group-data-[state=closed]:border-white/40">
                            <ArrowUpRight className="h-6 w-6 text-black hidden group-data-[state=open]:block" />
                            <ArrowDown className="h-6 w-6 text-white/70 hidden group-data-[state=closed]:block" />
                        </div>
                    </div>
                </AccordionTrigger>
              <AccordionContent className="pt-4 pb-8">
                {/* {category.id === "social" && ( */}
                  <div className="flex w-full justify-end gap-1 mr-auto">
                    {sdgImages.map((image, index) => (
                      <img
                        key={index}
                        src={image.src}
                        alt={image.alt}
                        className="w-[90px] h-[90px] object-cover rounded-lg"
                      />
                    ))}
                  </div>
                {/* )} */}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};