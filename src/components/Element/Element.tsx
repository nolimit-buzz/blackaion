import React from "react";
import { DivSubsection } from "./sections/DivSubsection/DivSubsection";
import { DivWrapperSubsection } from "./sections/DivWrapperSubsection";
import { FooterSubsection } from "./sections/FooterSubsection/FooterSubsection";
import { FrameSubsection } from "./sections/FrameSubsection";
import { FrameWrapperSubsection } from "./sections/FrameWrapperSubsection/FrameWrapperSubsection";
import { SectionComponentNodeSubsection } from "./sections/SectionComponentNodeSubsection";
import { ServicesSubsection } from "./sections/ServicesSubsection";

export const Element = (): JSX.Element => {
  return (
    <main className="flex flex-col w-full p-4">
      <FrameSubsection />
      <FrameWrapperSubsection />
      <DivWrapperSubsection />
      <DivSubsection />
      <SectionComponentNodeSubsection />
      <ServicesSubsection />
      <FooterSubsection />
    </main>
  );
};