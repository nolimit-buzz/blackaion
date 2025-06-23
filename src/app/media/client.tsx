'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { FaArrowRight, FaCalendarAlt, FaTag } from 'react-icons/fa';
import Link from 'next/link';
import PageHeader from '@/components/Element/PageHeader';

// Define specific types for each content
interface Press {
    id: number;
    title: string;
    date: string;
    description: string;
    tags?: string[];
    images?: string[];
}

interface Story {
    id: number;
    title: string;
    description: string;
    image: string;
    date: string;
    tags?: string[];
    slug?: string;
}

interface Event {
    id: number;
    title: string;
    date: string;
    description: string;
    tags?: string[];
    image?: string;
    slug?: string;
}

const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeInOut' } },
};

const staggerContainer = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2, delayChildren: 0.2 } },
};

const MediaPageContent = ({ press, blog, upcomingEvents }: { press: Press[], blog: Story[], upcomingEvents: Event[] }) => {
    const featuredPress = press.length > 0 ? press[0] : null;
    const topStories = blog.slice(0, 2);
    const latestStories = press.slice(0, 2);
    const galleryItems = [
        { src: '/project-1.png', title: 'Investment Summit 2023', subtitle: 'Lagos, Nigeria' },
        { src: '/project-2.png', title: 'Renewable Energy Conference', subtitle: 'Accra, Ghana' },
        { src: '/project-3.png', title: 'Infratech Showcase', subtitle: 'Abidjan, Ivory Coast' },
    ];
    const tagColorClasses = [
        'bg-bluecolor-9 text-white',
        'bg-goldcolor-i text-bluecolor-9',
        'bg-bluecolor-4 text-white',
        'bg-dark text-white',
    ];

    return (
        <>
            <PageHeader
                title="Media & Publications"
                mainHeading={
                    <>
                        The Blueprint for Tomorrow: <span className="text-goldcolor-i">Exploring Infratech&apos;s</span> Frontier
                    </>
                }
                description="Discover the stories, breakthroughs, and conversations driving the evolution of infrastructure technology. From sustainable energy to smart development, this is where progress is documented."
            />
            <motion.div
                initial="hidden"
                animate="visible"
                variants={staggerContainer}
                className="max-w-[1440px] mx-auto px-5 sm:px-10 lg:px-16 xl:px-20 py-20"
            >
                <div className="grid lg:grid-cols-3 gap-16 items-start">
                    {/* --- Main Content (Left Column) --- */}
                    <div className="lg:col-span-2 space-y-20">
                        {/* --- Featured Story Section --- */}
                        <motion.section variants={fadeInUp}>
                            <div className="rounded-2xl overflow-hidden relative min-h-[450px] flex flex-col justify-end p-8 bg-cover bg-center text-white" style={{ backgroundImage: `url(${featuredPress?.images ? featuredPress.images[0] : '/project-1.png'})` }}>
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-black/20" />
                                <div className="relative z-10">
                                    <span className="bg-red-600 text-white text-xs font-semibold px-3 py-1 rounded mb-4 inline-block">Featured Story</span>
                                    <h2 className="text-3xl font-bold mb-2">{featuredPress?.title}</h2>
                                    <p className="text-sm opacity-90 max-w-[520px]">{featuredPress?.description}</p>
                                </div>
                            </div>
                        </motion.section>

                        {/* --- Latest Stories Section --- */}
                        <motion.section variants={fadeInUp}>
                            <h2 className="text-[22px] font-bold text-bluecolor-9 mb-6">Latest Stories</h2>
                            <div className="divide-y divide-gray-200">
                                {latestStories.filter(Boolean).map((post: Press) => (
                                    <div key={post.id} className="grid grid-cols-1 sm:grid-cols-3 gap-6 items-center py-8">
                                        <div className="sm:col-span-2">
                                            <div className="flex items-center gap-3 mb-2">
                                                <img src="/obiora.png" alt="author" className="w-8 h-8 rounded-full bg-cover bg-center" />
                                                <span className="text-sm font-semibold">Obiora Okonkwo</span>
                                            </div>
                                            <h3 className="text-xl font-bold text-bluecolor-9 mb-2 hover:text-gold-9 transition-colors">{post.title}</h3>
                                            <p className="text-sm text-gray-600 hidden md:block">{post.description}</p>
                                        </div>
                                        <img src={post.images ? post.images[0] : `/project-${(post.id % 3) + 1}.png`} alt={post.title} className="sm:col-span-1 rounded-xl w-full h-full object-cover" />
                                    </div>
                                ))}
                            </div>
                        </motion.section>

                        {/* --- Events Gallery Section --- */}
                        <motion.section variants={fadeInUp}>
                            <div className="flex justify-between items-center mb-6">
                                <h2 className="text-[22px] font-bold text-bluecolor-9">Events Gallery</h2>
                                <a href="#" className="text-sm font-semibold text-bluecolor-9 hover:text-gold-9 transition-colors group">
                                    View Archives <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">&rarr;</span>
                                </a>
                            </div>
                             <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                                {galleryItems.map((item, i) => (
                                    <div key={i} className="group">
                                        <div className="overflow-hidden rounded-xl mb-4">
                                            <img src={item.src} alt={item.title} className="w-full h-64 object-cover transition-transform group-hover:scale-105" />
                                        </div>
                                        <h3 className="font-semibold text-lg text-bluecolor-9 mb-1">{item.title}</h3>
                                        <p className="text-sm text-gray-500">{item.subtitle}</p>
                                    </div>
                                ))}
                             </div>
                        </motion.section>
                    </div>

                    {/* --- Sidebar (Right Column) --- */}
                    <div className="lg:col-span-1 space-y-12">
                         {/* --- Top Stories --- */}
                         <motion.div variants={fadeInUp}>
                            <h2 className="text-[22px] font-bold text-bluecolor-9 mb-6">Top Stories</h2>
                            <div className="divide-y divide-gray-200">
                                {topStories.filter(Boolean).map((post: Story) => (
                                    <div key={post.id} className="group flex gap-4 py-4">
                                        <img src={post.image} alt={post.title} className="w-20 object-cover rounded-xl flex-shrink-0" />
                                        <div>
                                            <p className="text-xs text-gray-500 mb-1">{post.date} &bull; 10 min read</p>
                                            <h4 className="font-semibold text-sm text-bluecolor-9 mb-2 group-hover:text-gold-9 transition-colors">{post.title}</h4>
                                            {post.tags && (
                                                <div className="flex flex-wrap gap-1 mb-2">
                                                    {post.tags.map((tag: string, index: number) => (
                                                        <span key={tag} className={`text-xs font-semibold px-2 py-0.5 rounded-full ${tagColorClasses[index % tagColorClasses.length]}`}>
                                                            {tag}
                                                        </span>
                                                    ))}
                                                </div>
                                            )}
                                            <a href="#" className="text-sm font-semibold text-transparent bg-clip-text bg-gradient-to-r from-goldcolor-8 to-goldcolor-i group-hover:underline">
                                                Read More &rarr;
                                            </a>
                                        </div>
                                    </div>
                                ))}
                            </div>
                         </motion.div>

                         {/* --- Upcoming Events --- */}
                         <motion.div variants={fadeInUp}>
                            <h2 className="text-[22px] font-bold text-bluecolor-9 mb-6">Latest & Upcoming Events</h2>
                            <div className="space-y-8">
                                {upcomingEvents.map((event) => (
                                    <Link key={event.id} href={`/upcoming-events/${event.slug}`} legacyBehavior>
                                        <a className="block bg-white rounded-2xl border border-gray-200 transition-shadow duration-300 overflow-hidden group">
                                            <div className="p-6">
                                                <div className="flex items-center text-sm text-gray-500 mb-2">
                                                    <FaCalendarAlt className="mr-2" />
                                                    <span>{event.date}</span>
                                                </div>
                                                <h3 className="text-lg font-medium text-bluecolor-9 mb-3 group-hover:underline">{event.title}</h3>
                                                <p className="text-gray-600 text-sm mb-4">{event.description}</p>
                                                <div className="flex justify-between items-center">
                                                    <div className="flex items-center gap-2">
                                                        {event.tags?.map((tag, index) => (
                                                            <span key={tag} className={`px-3 py-1 text-xs font-semibold rounded-full ${tagColorClasses[index % tagColorClasses.length]}`}>
                                                                {tag}
                                                            </span>
                                                        ))}
                                                    </div>
                                                    <div className="text-bluecolor-9 font-medium">
                                                        View Details <FaArrowRight className="inline ml-1" />
                                                    </div>
                                                </div>
                                            </div>
                                        </a>
                                    </Link>
                                ))}
                            </div>
                         </motion.div>
                    </div>
                </div>
            </motion.div>
        </>
    );
};

export default MediaPageContent;