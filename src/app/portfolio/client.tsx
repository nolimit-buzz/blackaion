'use client';

import React, { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { FaBroadcastTower, FaMapMarkerAlt } from 'react-icons/fa';
import { getProjects } from '@/lib/projectsData';

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

const sdgColors = [
  'bg-red-500',
  'bg-yellow-500',
  'bg-green-500',
  'bg-blue-500',
  'bg-indigo-500',
  'bg-purple-500',
  'bg-pink-500',
  'bg-teal-500',
];

const allProjects = getProjects();

const PortfolioPageContent = () => {
    const [activeTab, setActiveTab] = useState('All');
    const [currentPage, setCurrentPage] = useState(1);
    const projectsPerPage = 6;

    const sectors = useMemo(() => ['All', ...Array.from(new Set(allProjects.map(p => p.sector)))], []);
    const states = useMemo(() => ['All', ...Array.from(new Set(allProjects.map(p => p.state)))], []);

    const [filterType, setFilterType] = useState('All');

    const filteredProjects = useMemo(() => {
        if (filterType === 'All') return allProjects;
        if (sectors.includes(filterType)) {
            return allProjects.filter(p => p.sector === filterType);
        }
        if (states.includes(filterType)) {
            return allProjects.filter(p => p.state === filterType);
        }
        return allProjects;
    }, [filterType, sectors, states]);

    const indexOfLastProject = currentPage * projectsPerPage;
    const indexOfFirstProject = indexOfLastProject - projectsPerPage;
    const currentProjects = filteredProjects.slice(indexOfFirstProject, indexOfLastProject);
    const totalPages = Math.ceil(filteredProjects.length / projectsPerPage);

    const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

    interface FilterTabProps {
        label: string;
        active: boolean;
        onClick: () => void;
    }

    const FilterTab = ({ label, active, onClick }: FilterTabProps) => (
        <button
            onClick={onClick}
            className={`px-5 py-3 text-[22px] font-normal transition-colors ${
                active ? 'bg-bluecolor-9 text-white' : 'bg-transparent text-gray-700 hover:bg-gray-100'
            }`}
        >
            {label}
        </button>
    );

    interface FilterPillProps {
        label: string;
        active: boolean;
        onClick: () => void;
    }

    const FilterPill = ({ label, active, onClick }: FilterPillProps) => (
        <button
            onClick={onClick}
            className={`px-6 py-2 rounded-full text-sm font-medium transition-colors ${
                active ? 'bg-bluecolor-9 text-white' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
            }`}
        >
            {label}
        </button>
    );

    return (
        <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="max-w-[1440px] mx-auto px-5 sm:px-10 lg:px-16 xl:px-20 py-20"
        >
            <motion.div variants={fadeInUp} className="mb-12">
                <p className="text-sm text-gray-500 font-semibold uppercase tracking-wider">Our Portfolio</p>
                <div className="w-full h-px bg-gray-200 mt-2" />
            </motion.div>

            <motion.div variants={fadeInUp} className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8 mb-16 items-start">
                <h1 className="text-4xl sm:text-[36px] font-medium text-bluecolor-9">
                    <span className="text-goldcolor-i">Explore Our Legacy:</span> Blackaion&apos;s Portfolio of Impactful Projects
                </h1>
                <p className="text-gray-600 leading-relaxed">
                    We showcase our transformative infrastructure and technology projects across West Africa. Our work spans renewable energy, sustainable urban development, and tech-driven infrastructure solutions, all designed to create lasting economic and social impact.
                </p>
            </motion.div>

            <motion.div variants={fadeInUp}>
                <div className="border-b border-gray-200 mb-12">
                    <div className="flex items-center">
                        <FilterTab label="All" active={activeTab === 'All'} onClick={() => { setActiveTab('All'); setFilterType('All'); setCurrentPage(1); }} />
                        <FilterTab label="Sectors" active={activeTab === 'Sectors'} onClick={() => { setActiveTab('Sectors'); setFilterType('All'); setCurrentPage(1); }} />
                        <FilterTab label="States" active={activeTab === 'States'} onClick={() => { setActiveTab('States'); setFilterType('All'); setCurrentPage(1); }} />
                    </div>
                </div>
                
                {activeTab !== 'All' && (
                    <div className="flex flex-wrap gap-3 mb-12">
                        {(activeTab === 'Sectors' ? sectors : states).map(item => (
                            item !== 'All' && <FilterPill key={item} label={item} active={filterType === item} onClick={() => { setFilterType(item); setCurrentPage(1); }} />
                        ))}
                    </div>
                )}
            </motion.div>
            
            <motion.div
                key={currentPage}
                variants={staggerContainer}
                initial="hidden"
                animate="visible"
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
                {currentProjects.map(project => (
                    <motion.div
                        key={project.id}
                        variants={fadeInUp}
                        className="rounded-2xl border border-gray-100 overflow-hidden transition-all duration-300 group hover:border-blue-300"
                    >
                        <div className="py-5">
                            <div className="flex justify-between items-center text-xs text-gray-500 mb-4 px-5">
                                <div className="flex items-center gap-2">
                                    <FaBroadcastTower />
                                    <span>{project.sector.toUpperCase()}</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <FaMapMarkerAlt />
                                    <span>{project.state.toUpperCase()}</span>
                                </div>
                            </div>
                            <div className="relative overflow-hidden rounded-lg mb-5">
                                <img src={project.image} alt={project.title} className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300" />
                            </div>
                            <h3 className="text-2xl font-normal text-bluecolor-9 mb-4 h-16 px-5">{project.title}</h3>
                            <div className="flex justify-between items-center px-5">
                                <button className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center transition-colors hover:bg-bluecolor-9 hover:text-white">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M7 7h10v10"/><path d="M7 17 17 7"/></svg>
                                </button>
                                <div className="flex items-center gap-2">
                                    <span className="text-xs text-gray-500">SDG</span>
                                    <span className={`px-3 py-1 ${project.sdgColor} text-white text-sm font-semibold rounded-md`}>{project.sdg}</span>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </motion.div>

            <motion.div variants={fadeInUp} className="flex justify-center items-center mt-16 space-x-2">
                <button 
                    onClick={() => paginate(currentPage - 1)} 
                    disabled={currentPage === 1}
                    className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center disabled:opacity-50 transition-colors hover:bg-bluecolor-9 hover:text-white"
                >
                    &larr;
                </button>
                {Array.from({ length: totalPages }, (_, i) => (
                    <button
                        key={i}
                        onClick={() => paginate(i + 1)}
                        className={`w-10 h-10 rounded-full border border-gray-300 transition-colors ${
                            currentPage === i + 1 ? 'bg-bluecolor-9 text-white' : 'hover:bg-bluecolor-9 hover:text-white'
                        }`}
                    >
                        {i + 1}
                    </button>
                ))}
                <button 
                    onClick={() => paginate(currentPage + 1)} 
                    disabled={currentPage === totalPages}
                    className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center disabled:opacity-50 transition-colors hover:bg-bluecolor-9 hover:text-white"
                >
                    &rarr;
                </button>
            </motion.div>
        </motion.div>
    );
};

export default PortfolioPageContent; 