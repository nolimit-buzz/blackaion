import React from "react";
import Image from "next/image"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { ArrowUpRight, ArrowDown } from "lucide-react";
import { SeeMoreArrowIcon } from "@/components/icons/SeeMoreArrowIcon";

type ESGImpactProps = {
  data: {
    title: string;
    subtitle: string;
    esg_goals: Array<{
      id: number;
      title: string;
      description: string;
      sdg_images: Array<{
        id: number;
        name: string;
        url: string;
        formats?: {
          thumbnail?: { url: string };
        };
      }>;
    }>;
  };
};

export const ESGImpact = ({ data }: ESGImpactProps): JSX.Element => {

  const esgCategories = data?.esg_goals?.map(goal => {
    return ({
      id: `esg-${goal?.id}`,
      title: goal?.title,
      description: goal?.description,
      sdgImages: goal?.sdg_images?.map(image => ({
        id: image?.id,
        name: image?.name, 
        url: image?.formats?.thumbnail?.url || image?.url,
      })),
    })
  });

  return (
    <section id="esg-impact" className="w-full max-w-[1440px] mx-auto px-5 sm:px-10 lg:px-16 xl:px-20 bg-black text-white py-[70px] sm:py-[100px]">
      <div className="flex flex-col w-full max-w-[1440px] mx-auto items-start gap-[60px]">
        {/* Header section */}
        <div className="flex w-full items-center justify-between">
          <div className="flex flex-col items-start gap-4">
            <h2 className="text-[36px] sm:text-[42px] lg:text-[48px] font-bold tracking-[-0.02em]">
              {data.title}
            </h2>
            <p className="text-white/70 text-base sm:text-lg max-w-[450px]">
              {data.subtitle}
            </p>
          </div>
          {/* <Button className="bg-white hover:bg-white/90 text-black rounded-full text-xs sm:text-sm px-[30px] py-[20px] flex items-center font-normal gap-2 transition-all duration-300">
            <span>Learn More</span>
            <SeeMoreArrowIcon className="w-5 h-5" />
          </Button> */}
        </div>

        {/* Accordion section */}
        <Accordion
          type="single"
          collapsible
          defaultValue={esgCategories[0]?.id}
          className="w-full space-y-2"
        >
          {esgCategories.map((category) => (
            <AccordionItem key={category.id} value={category.id} className="border-b border-white/10">
              <AccordionTrigger className="w-full text-left hover:no-underline py-6 group [&>svg]:hidden">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center w-full gap-4">
                  <h3 className="text-2xl sm:text-3xl font-light w-full md:w-1/4">
                    {category.title}
                  </h3>
                  <p className="text-base font-normal text-white/70 w-full md:w-1/2 max-w-xl text-left">
                    {category.description}
                  </p>
                  <div className="w-[50px] h-[50px] rounded-full flex items-center justify-center flex-shrink-0 transition-colors duration-300 border group-data-[state=open]:bg-white group-data-[state=closed]:bg-transparent group-data-[state=open]:border-transparent group-data-[state=closed]:border-white/40">
                    <ArrowUpRight className="h-6 w-6 text-black hidden group-data-[state=open]:block" />
                    <ArrowDown className="h-6 w-6 text-white/70 hidden group-data-[state=closed]:block" />
                  </div>
                </div>
              </AccordionTrigger>
              <AccordionContent className="pt-4 pb-8">
                <div className="flex w-full justify-end gap-1 mr-auto">
                  {category?.sdgImages?.map((image, index) => (
                    <Image
                      key={index}
                      src={image.url}
                      alt={image.name}
                      width={90}
                      height={90}
                      className="w-[90px] h-[90px] object-cover !rounded-lg"
                    />
                  ))}
                </div>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};