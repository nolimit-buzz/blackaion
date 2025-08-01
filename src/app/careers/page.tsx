import React from 'react';
// import { FrameSubsection } from '@/components/Element/sections/Hero';
// import { FooterSubsection } from '@/components/Element/sections/Footer/Footer';
import CareersPageClient from './client';
import { careersData } from '@/lib/careersData';

const CareersPage = () => {
  return (
    <div className="bg-white">
      {/* <FrameSubsection theme="light" /> */}
      <CareersPageClient data={careersData} />
      {/* <FooterSubsection /> */}
    </div>
  );
};

export default CareersPage; 