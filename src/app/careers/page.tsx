import React from 'react';
import { FrameSubsection } from '@/components/Element/sections/FrameSubsection';
import { FooterSubsection } from '@/components/Element/sections/FooterSubsection/FooterSubsection';
import CareersPageClient from './client';
import { careersData } from '@/lib/careersData';

const CareersPage = () => {
  return (
    <div className="bg-white">
      <FrameSubsection theme="light" />
      <CareersPageClient data={careersData} />
      <FooterSubsection />
    </div>
  );
};

export default CareersPage; 