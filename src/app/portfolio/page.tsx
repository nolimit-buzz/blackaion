import React from 'react';
import PortfolioPageContent from './client';
import { FrameSubsection } from '@/components/Element/sections/FrameSubsection/FrameSubsection';
import { FooterSubsection } from '@/components/Element/sections/FooterSubsection/FooterSubsection';

const PortfolioPage = () => {
    return (
        <div className="bg-white">
            <FrameSubsection theme="light" />
            <PortfolioPageContent />
            <FooterSubsection />
        </div>
    );
};

export default PortfolioPage;
