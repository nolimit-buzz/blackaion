'use client';

import React, { useState, useMemo } from 'react';
import { FaClock, FaHome, FaMoneyBillWave, FaShieldAlt } from 'react-icons/fa';
import { IconType } from 'react-icons';

interface Job {
  id: number;
  title: string;
  department: string;
  type: 'Full Time' | 'Part-time' | 'Freelance';
  location: string;
  isRemote: boolean;
}

interface Perk {
  title: string;
  description: string;
  icon: string;
}

interface Value {
  title: string;
  description: string;
}

interface CareersPageClientProps {
  data: {
    jobs: Job[];
    perks: Perk[];
    values: Value[];
  };
}

const iconMap: { [key: string]: IconType } = {
  clock: FaClock,
  home: FaHome,
  money: FaMoneyBillWave,
  shield: FaShieldAlt,
};


const CareersPageClient = ({ data }: CareersPageClientProps) => {
  const [activeFilter, setActiveFilter] = useState('All Roles');
  const [departmentFilter, setDepartmentFilter] = useState('All');

  const departments = ['All', ...Array.from(new Set(data.jobs.map(job => job.department)))];

  const jobsToDisplay = useMemo(() => {
    let jobs = data.jobs;
    
    if (activeFilter === 'Remote') {
      jobs = jobs.filter(job => job.isRemote);
    }
    
    if (departmentFilter !== 'All') {
      jobs = jobs.filter(job => job.department === departmentFilter);
    }
      
    return jobs;
  }, [data.jobs, activeFilter, departmentFilter]);

  return (
    <div className="max-w-[1440px] mx-auto px-5 sm:px-10 lg:px-16 xl:px-20 py-24 text-bluecolor-9">
      {/* Header */}
      <header className="text-center mb-16">
        <p className="text-sm font-semibold tracking-widest text-goldcolor-i uppercase mb-4">Careers</p>
        <h1 className="text-5xl lg:text-7xl font-bold">Work With Us</h1>
      </header>

      {/* Job Filters & Listings */}
      <section className="mb-24">
        <div className="flex flex-wrap items-center justify-between gap-4 mb-8">
            <div className="flex flex-wrap gap-3">
                <button 
                  onClick={() => { setActiveFilter('All Roles'); setDepartmentFilter('All'); }} 
                  className={`px-6 py-3 rounded-full text-sm font-semibold transition-colors ${activeFilter === 'All Roles' && departmentFilter === 'All' ? 'bg-bluecolor-9 text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}
                >
                  All Roles
                </button>
                <button 
                  onClick={() => setActiveFilter('Remote')} 
                  className={`px-6 py-3 rounded-full text-sm font-semibold transition-colors ${activeFilter === 'Remote' ? 'bg-bluecolor-9 text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}
                >
                  Remote
                </button>
            </div>
             <div className="relative">
                <select 
                  onChange={(e) => {
                    setDepartmentFilter(e.target.value)
                    setActiveFilter('Department');
                  }} 
                  value={departmentFilter} 
                  className="appearance-none bg-gray-100 border border-gray-200 text-gray-700 py-3 px-6 pr-10 rounded-full focus:outline-none focus:ring-2 focus:ring-goldcolor-i"
                >
                    {departments.map(dep => <option key={dep} value={dep}>{dep}</option>)}
                </select>
                <svg className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
            </div>
        </div>

        <div className="space-y-4">
          {jobsToDisplay.map(job => (
            <div key={job.id} className="p-6 bg-white rounded-2xl border border-gray-100 grid grid-cols-1 md:grid-cols-3 items-center gap-4 hover:shadow-lg transition-shadow cursor-pointer">
              <h3 className="font-bold text-xl">{job.title}</h3>
              <p className="text-gray-500">{job.type}</p>
              <p className="text-gray-500 md:text-right">{job.location}</p>
            </div>
          ))}
        </div>
        {jobsToDisplay.length === 0 && (
          <div className="text-center py-16">
            <p className="text-gray-500">No open positions match your filters. Please check back later.</p>
          </div>
        )}
      </section>

      {/* Perks & Benefits */}
      <section className="py-24 text-center">
        <h2 className="text-4xl lg:text-5xl font-bold text-bluecolor-9 mb-16">Our Perks and Benefits</h2>
        <div className="grid md:grid-cols-2 gap-x-16 gap-y-12">
          {data.perks.map(perk => {
            const Icon = iconMap[perk.icon];
            return (
              <div key={perk.title} className="flex gap-6 text-left items-start">
                {Icon && <div className="p-4 bg-gray-100 rounded-full h-fit"><Icon className="text-2xl text-goldcolor-i" /></div>}
                <div>
                  <h3 className="text-xl font-bold mb-2">{perk.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{perk.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Our Values Section */}
      <section className="py-24">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl lg:text-4xl font-bold text-bluecolor-9 leading-tight mb-12">
              We're bonded by deeply held values and joined in a shared mission: to redefine on-premises computing.
            </h2>
            <img src="/gallery-5.png" alt="Blackaion Team" className="rounded-2xl shadow-xl w-full" />
          </div>
          <div className="space-y-8">
            {data.values.map((value, index) => (
              <div key={value.title} className="flex gap-6 items-start">
                <p className="text-lg font-semibold text-gray-400">0{index + 1}</p>
                <div>
                  <h3 className="text-xl font-bold mb-2">{value.title}</h3>
                  <p className="text-gray-600">{value.description}</p>
                </div>
              </div>
            ))}
             <a href="/contact" className="inline-block bg-bluecolor-9 text-white font-bold py-4 px-8 rounded-full hover:bg-goldcolor-i transition-colors mt-8">
                Apply Now!
              </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CareersPageClient; 