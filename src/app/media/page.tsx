import React from 'react';
import { FrameSubsection } from '@/components/Element/sections/FrameSubsection/FrameSubsection';
import { FooterSubsection } from '@/components/Element/sections/FooterSubsection/FooterSubsection';
import MediaPageContent from './client';
import { mediaData } from '@/lib/mediaData';

const MediaPage = () => {
    return (
        <div className="bg-white">
            <FrameSubsection theme="light" />
            <MediaPageContent 
                press={mediaData.press}
                blog={mediaData.blog}
                events={mediaData.events}
                upcomingEvents={mediaData.upcomingEvents}
            />
            <FooterSubsection />
        </div>
    );
};

export default MediaPage;
