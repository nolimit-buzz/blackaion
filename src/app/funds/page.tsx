import React from 'react';
import PortfolioPageContent from './client';
// import { FrameSubsection } from '@/components/Element/sections/Hero/Hero';
import { FooterSubsection } from '@/components/Element/sections/Footer/Footer';

const PortfolioPage = () => {
    return (
        <div className="bg-white">
            {/* <FrameSubsection theme="light" /> */}
            <PortfolioPageContent />
            {/* <FooterSubsection /> */}
        </div>
    );
};

export default PortfolioPage;
