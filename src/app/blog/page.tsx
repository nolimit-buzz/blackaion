import React from 'react';
import { mediaData } from '@/lib/mediaData';
import BlogClientPage from './client';
import { FooterSubsection } from '@/components/Element/sections/FooterSubsection/FooterSubsection';
import BlogHeader from './BlogHeader';

const BlogPage = () => {
    const blogPosts = mediaData.blog;
    const events = mediaData.events;

    return (
        <div className="bg-black">
            <BlogHeader />
            <BlogClientPage posts={blogPosts} events={events} />
            <FooterSubsection />
        </div>
    );
};

export default BlogPage; 