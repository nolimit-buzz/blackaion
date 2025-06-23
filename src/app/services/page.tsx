import React from 'react';
import { FrameSubsection } from '@/components/Element/sections/FrameSubsection';
import { FooterSubsection } from '@/components/Element/sections/FooterSubsection/FooterSubsection';
import { servicesData } from '@/lib/servicesData';
import ServicesPageContent from './client';

const ServicesPage = () => {
  return (
    <div className="bg-white">
      <FrameSubsection theme="light" />
      <ServicesPageContent data={servicesData} />
      <FooterSubsection />
    </div>
  );
};

export default ServicesPage; 