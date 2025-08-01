import React from 'react';
import { FrameSubsection } from '@/components/Element/sections/Hero';
// import { FooterSubsection } from '@/components/Element/sections/FooterSubsection/FooterSubsection';
import ContactPageClient from './client';

const ContactPage = () => {
  return (
    <div className="bg-white">
      {/* <FrameSubsection theme="light" /> */}
      <ContactPageClient />
      {/* <FooterSubsection /> */}
    </div>
  );
};

export default ContactPage; 