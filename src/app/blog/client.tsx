'use client';
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

interface ContentItem {
    id: number;
    title: string;
    description: string;
    image: string;
    slug?: string;
    date?: string;
    tags?: string[];
}

const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeInOut' } },
};

const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.2,
        },
    },
};

const BlogClientPage = ({ posts, events }: { posts: ContentItem[], events: ContentItem[] }) => {
    const [activeTab, setActiveTab] = useState('Articles');

    const content = activeTab === 'Articles' ? posts : events;

    const getLink = (item: ContentItem) => {
        if (activeTab === 'Articles') return `/blog/${item.slug}`;
        return `/events/${item.slug}`;
    };

    return (
        <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="max-w-[1440px] mx-auto px-5 sm:px-10 lg:px-16 xl:px-20 py-20 text-white"
        >
            {/* Header */}
            <motion.div variants={fadeInUp} className="mb-12">
                <p className="text-sm text-gray-400 font-semibold uppercase tracking-wider">From the Blog</p>
                <div className="w-full h-px bg-gray-700 mt-2" />
            </motion.div>

            <motion.div variants={fadeInUp} className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8 mb-16 items-start">
                <h1 className="text-4xl sm:text-[36px] font-medium text-white">
                    <span className="text-goldcolor-i">Insights & Updates:</span> Blackaion's Voice in Infra-Tech
                </h1>
                <p className="text-gray-400 leading-relaxed">
                    Explore our latest articles, expert analysis, and thought leadership on the trends shaping infrastructure, technology, and sustainable development across West Africa.
                </p>
            </motion.div>

            {/* Tabs */}
            <motion.div variants={fadeInUp} className="border-b border-gray-700 mb-12">
                <div className="flex items-center gap-4">
                    <button
                        onClick={() => setActiveTab('Articles')}
                        className={`px-5 py-3 text-lg font-medium transition-colors ${activeTab === 'Articles' ? 'text-white border-b-2 border-goldcolor-i' : 'text-gray-400 hover:text-white'}`}
                    >
                        Articles
                    </button>
                    <button
                        onClick={() => setActiveTab('Event Gallery')}
                        className={`px-5 py-3 text-lg font-medium transition-colors ${activeTab === 'Event Gallery' ? 'text-white border-b-2 border-goldcolor-i' : 'text-gray-400 hover:text-white'}`}
                    >
                        Event Gallery
                    </button>
                </div>
            </motion.div>

            {/* Content Grid */}
            <motion.div
                key={activeTab}
                variants={staggerContainer}
                initial="hidden"
                animate="visible"
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
                {content.map(item => (
                    <Link key={item.id} href={getLink(item)}>
                        <motion.div
                            variants={fadeInUp}
                            className="bg-[#111] border border-gray-800 rounded-2xl overflow-hidden group flex flex-col transition-all duration-300 hover:border-goldcolor-i/50 h-full cursor-pointer"
                        >
                            <div className="relative">
                                <img src={item.image} alt={item.title} className="w-full h-56 object-cover" />
                                <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-t from-black/50 via-transparent" />
                                {item.tags && (
                                    <span className="absolute top-4 left-4 bg-black/60 text-white text-xs font-semibold px-3 py-1 rounded-full backdrop-blur-sm border border-white/10">
                                        {item.tags[0]}
                                    </span>
                                )}
                                {item.date && (
                                    <span className="absolute bottom-4 left-4 text-white text-sm font-semibold">
                                        {item.date}
                                    </span>
                                )}
                            </div>
                            <div className="p-6 flex flex-col flex-grow">
                                <h3 className="text-xl font-bold mb-3 text-gray-100">{item.title}</h3>
                                <p className="text-gray-400 text-sm mb-6 flex-grow">{item.description}</p>
                                <div className="mt-auto text-sm font-semibold text-white group-hover:text-goldcolor-i transition-colors self-start">
                                     {activeTab === 'Articles' ? 'Read More' : 'View Details'}
                                     <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">&rarr;</span>
                                </div>
                            </div>
                        </motion.div>
                    </Link>
                ))}
            </motion.div>
        </motion.div>
    );
};

export default BlogClientPage; 