'use client';

import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Link from 'next/link';
import { FaBroadcastTower, FaMapMarkerAlt } from 'react-icons/fa';

const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeInOut' } },
};

const staggerContainer = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2, delayChildren: 0.2 } },
};

const sentenceVariant = {
    hidden: { opacity: 1 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.04,
        },
    },
};

const letterVariant = {
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            ease: 'easeIn',
            duration: 0.4,
        },
    },
};

interface Project {
    id: number;
    slug: string;
    title: string;
    sector: string;
    state: string;
    sdg: number;
    image: string;
    overview: string;
    challenge?: string;
    result?: string;
    stats?: { value: string; label: string }[];
    testimonial?: {
        quote: string;
        author: string;
        authorRole: string;
        authorImage: string;
    };
    sdgColor: string;
}

const SingleProjectPageContent = ({ project, otherProjects }: { project: Project, otherProjects: Project[] }) => {
    if (!project) return null;

    const imageContainerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: imageContainerRef,
        offset: ['start start', 'end start'],
    });
    const imageScale = useTransform(scrollYProgress, [0, 1], [1, 1.2]);

    return (
        <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="text-bluecolor-9"
        >
            {/* Hero Section */}
            <motion.header 
                variants={fadeInUp} 
                className="max-w-[1440px] mx-auto px-5 sm:px-10 lg:px-16 xl:px-20 pt-20 pb-12"
            >
                <div className="mb-4">
                    <p className="text-sm text-gray-500 font-semibold uppercase tracking-wider">{project.sector}</p>
                    <div className="w-full h-px bg-gray-200 mt-2" />
                </div>
                <motion.h1 
                    className="text-[36px] font-medium text-bluecolor-9"
                    variants={sentenceVariant}
                    initial="hidden"
                    animate="visible"
                >
                    {project.title.split(" ").map((word, index) => (
                        <motion.span
                            key={word + "-" + index}
                            variants={letterVariant}
                            style={{ display: 'inline-block', marginRight: '0.25em' }}
                        >
                            {word}
                        </motion.span>
                    ))}
                </motion.h1>
            </motion.header>

            <motion.div 
                ref={imageContainerRef}
                variants={fadeInUp} 
                className="max-w-[1440px] mx-auto px-5 sm:px-10 lg:px-16 xl:px-20"
            >
                <div className="bg-white shadow-xl rounded-2xl overflow-hidden">
                    <motion.img 
                        src={project.image} 
                        alt={project.title} 
                        className="w-full h-auto max-h-[70vh] object-cover" 
                        style={{ scale: imageScale }}
                    />
                </div>
            </motion.div>

            <div className="max-w-[1440px] mx-auto px-5 sm:px-10 lg:px-16 xl:px-20 py-20">
                {/* Overview & Result Section */}
                <motion.section variants={fadeInUp} className="grid md:grid-cols-3 gap-12 mb-20">
                    <div className="md:col-span-1">
                        <p className="text-sm uppercase font-semibold text-gray-500 mb-4">The Result</p>
                        <h2 className="text-3xl lg:text-4xl font-medium leading-tight">We make an impact through our work</h2>
                        <Link href="#" className="text-gold-9 font-semibold mt-6 inline-block">
                            Visit Website &rarr;
                        </Link>
                    </div>
                    <div className="md:col-span-2">
                        <p className="text-lg text-gray-600 leading-relaxed mb-12">{project.result}</p>
                        <div className="grid grid-cols-2 gap-x-8 gap-y-12">
                            {project.stats?.map((stat: { value: string; label: string }) => (
                                <div key={stat.label}>
                                    <p className="text-4xl lg:text-5xl font-medium text-gold-9 mb-2">{stat.value}</p>
                                    <p className="text-sm text-gray-500 uppercase tracking-wider">{stat.label}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </motion.section>

                <motion.div variants={fadeInUp} className="h-px bg-gray-200" />

                {/* Testimonial Section */}
                {project.testimonial && (
                    <motion.section variants={fadeInUp} className="py-20 text-center">
                         <p className="text-sm uppercase font-semibold text-gray-500 mb-8">Testimonials</p>
                         <blockquote className="text-2xl lg:text-4xl font-medium max-w-4xl mx-auto mb-8">
                            &ldquo;{project.testimonial.quote}&rdquo;
                         </blockquote>
                         <div className="flex items-center justify-center">
                            <img src={project.testimonial.authorImage} alt={project.testimonial.author} className="w-12 h-12 rounded-full mr-4" />
                            <div>
                                <p className="font-semibold">{project.testimonial.author}</p>
                                <p className="text-sm text-gray-500">{project.testimonial.authorRole}</p>
                            </div>
                         </div>
                    </motion.section>
                )}

                <motion.div variants={fadeInUp} className="h-px bg-gray-200" />

                {/* More Case Studies */}
                <motion.section variants={fadeInUp} className="py-20">
                    <p className="text-sm uppercase font-semibold text-gray-500 mb-8">More Case Studies</p>
                    <div className="grid md:grid-cols-2 gap-8">
                        {otherProjects?.map((p: Project) => (
                            <Link href={`/portfolio/${p.slug}`} key={p.id} className="group">
                                <div className="overflow-hidden rounded-2xl mb-4">
                                     <img src={p.image} alt={p.title} className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300" />
                                </div>
                                <h3 className="text-2xl font-medium mb-2">{p.title}</h3>
                                <p className="text-gray-600 mb-4">{p.overview.substring(0, 100)}...</p>
                                <div className="flex items-center justify-between">
                                    <p className="text-sm font-semibold text-gold-9">View Project &rarr;</p>
                                    <div className="flex items-center gap-2">
                                        <span className="text-xs text-gray-500">SDG</span>
                                        <span className={`px-3 py-1 ${p.sdgColor} text-white text-sm font-semibold rounded-md`}>{p.sdg}</span>
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>
                </motion.section>
            </div>
        </motion.div>
    );
};

export default SingleProjectPageContent;
