'use client';

import React, { useState, useMemo } from 'react';

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

const renderIcon = (iconName: string) => {
  const iconClass = "text-2xl text-goldcolor-i w-6 h-6";
  
  switch (iconName) {
    case 'clock':
      return (
        <svg className={iconClass} fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
        </svg>
      );
    case 'home':
      return (
        <svg className={iconClass} fill="currentColor" viewBox="0 0 20 20">
          <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
        </svg>
      );
    case 'money':
      return (
        <svg className={iconClass} fill="currentColor" viewBox="0 0 20 20">
          <path d="M8.433 7.418c.155-.103.346-.196.567-.267v1.698a2.305 2.305 0 01-.567-.267C8.07 8.34 8 8.114 8 8c0-.114.07-.34.433-.582zM11 12.849v-1.698c.22.071.412.164.567.267.364.243.433.468.433.582 0 .114-.07.34-.433.582a2.305 2.305 0 01-.567.267z" />
          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-13a1 1 0 10-2 0v.092a4.535 4.535 0 00-1.676.662C6.602 6.234 6 7.009 6 8c0 .99.602 1.765 1.324 2.246.48.32 1.054.545 1.676.662v1.941c-.391-.127-.68-.317-.843-.504a1 1 0 10-1.51 1.31c.562.649 1.413 1.076 2.353 1.253V15a1 1 0 102 0v-.092a4.535 4.535 0 001.676-.662C13.398 13.766 14 12.991 14 12c0-.99-.602-1.765-1.324-2.246A4.535 4.535 0 0011 9.092V7.151c.391.127.68.317.843.504a1 1 0 101.511-1.31c-.563-.649-1.413-1.076-2.354-1.253V5z" clipRule="evenodd" />
        </svg>
      );
    case 'shield':
      return (
        <svg className={iconClass} fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
        </svg>
      );
    default:
      return null;
  }
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
          {data.perks.map(perk => (
            <div key={perk.title} className="flex gap-6 text-left items-start">
              <div className="p-4 bg-gray-100 rounded-full h-fit">
                {renderIcon(perk.icon)}
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">{perk.title}</h3>
                <p className="text-gray-600 leading-relaxed">{perk.description}</p>
              </div>
            </div>
          ))}
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