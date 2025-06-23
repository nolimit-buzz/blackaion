"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export const PortfolioNewsletterSection = (): JSX.Element => {
  return (
    <section className="w-full bg-black py-[80px] px-[60px]">
      <div className="max-w-[1240px] mx-auto text-center">
        <h2 className="font-outfit font-bold text-white text-[36px] leading-[44px] mb-4">
          Navigating InfraTech Frontiers
        </h2>
        <p className="font-outfit font-normal text-white/70 text-[16px] leading-[24px] mb-8 max-w-[600px] mx-auto">
          This is your concise guide to the evolving landscape of Infrastructure and Technology (Infra-Tech) in West Africa.
        </p>

        <div className="flex items-center justify-center gap-0 max-w-[400px] mx-auto">
          <Input
            className="h-[50px] rounded-l-[8px] rounded-r-none border-0 bg-white text-black font-outfit text-[14px] flex-1"
            placeholder="Email"
          />
          <Button className="h-[50px] bg-goldcolor-8 hover:bg-goldcolor-9 rounded-l-none rounded-r-[8px] px-6 font-outfit font-bold text-white text-[14px]">
            SUBSCRIBE
          </Button>
        </div>
      </div>
    </section>
  );
};