'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaStar, FaQuoteLeft, FaArrowLeft, FaArrowRight, FaPiggyBank, FaCity, FaLightbulb, FaHandshake } from 'react-icons/fa';
import { IconType } from 'react-icons';
import { servicesData } from '@/lib/servicesData';

type Service = typeof servicesData.services[0];
type Testimonial = typeof servicesData.testimonials[0];

interface ServicesPageContentProps {
  data: typeof servicesData;
}

const iconMap: { [key: string]: IconType } = {
  'piggy-bank': FaPiggyBank,
  'city': FaCity,
  'lightbulb': FaLightbulb,
  'handshake': FaHandshake,
};

const ProcessSection = () => {
  const processSteps = [
    {
      number: '01',
      title: 'In-Depth Consultation',
      description: 'Carefully assessing your logistics needs to ensure tailored and effective solutions.',
    },
    {
      number: '02',
      title: 'Strategic Planning',
      description: 'Designing a best plan to ensure efficient and optimal delivery of your goods.',
    },
    {
      number: '03',
      title: 'Efficient Execution',
      description: 'Carefully coordinating every detail of the shipment process to ensure smooth and timely execution.',
    },
    {
      number: '04',
      title: 'On-Time Delivery',
      description: 'Gaining a deep understanding of your logistics needs to offer the best possible solutions.',
    },
  ];

  return (
    <section className="py-24">
      <div className="grid lg:grid-cols-2 gap-24 items-center">
        <div>
          <div className="flex items-center gap-4 mb-4">
            <span className="w-3 h-3 bg-goldcolor-i rounded-full"></span>
            <p className="text-sm font-semibold tracking-widest uppercase text-gray-500">Our Advantage</p>
          </div>
          <h2 className="text-4xl lg:text-[36px] font-medium text-bluecolor-9 mb-6">
            What <span className="text-goldcolor-i">Sets Us Apart</span>
          </h2>
          <p className="text-gray-600 mb-12 leading-relaxed">
            Our process is simple yet effective. Every project is different, but we've seen thousands of them since we first launched. Our experience is your asset.
          </p>
          <div className="relative w-full h-56 bg-gray-100 rounded-2xl flex items-center justify-center overflow-hidden">
            <div className="relative w-full h-full flex items-center justify-center">
              <div className="absolute w-40 h-40 border-2 border-goldcolor-i rounded-full -left-8"></div>
              <div className="absolute w-32 h-32 border border-bluecolor-9 rounded-full -left-4"></div>
              <div className="absolute w-20 h-20 border border-bluecolor-9 rounded-full left-0"></div>
              
              <div className="absolute w-40 h-40 border-2 border-bluecolor-9 rounded-full -right-8"></div>
              <div className="absolute w-32 h-32 border border-bluecolor-9 rounded-full -right-4"></div>
              <div className="absolute w-20 h-20 border border-bluecolor-9 rounded-full right-0"></div>

              <div className="h-px w-20 bg-goldcolor-i"></div>
            </div>
          </div>
        </div>
        <div className="space-y-12">
          {processSteps.map((step, index) => (
            <div key={index} className="flex gap-6">
              <p className="text-6xl font-bold text-gray-200">{step.number}</p>
              <div className="pt-2">
                <h3 className="text-xl font-bold text-bluecolor-9 mb-2">{step.title}</h3>
                <p className="text-gray-500">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const ServicesPageContent = ({ data }: ServicesPageContentProps) => {
  const [activeService, setActiveService] = useState<Service>(data.services[0]);
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  const handleNextTestimonial = () => {
    setActiveTestimonial((prev) => (prev + 1) % data.testimonials.length);
  };

  const handlePrevTestimonial = () => {
    setActiveTestimonial((prev) => (prev - 1 + data.testimonials.length) % data.testimonials.length);
  };

  const ActiveIcon = iconMap[activeService.icon];

  return (
    <div className="max-w-[1440px] mx-auto px-5 sm:px-10 lg:px-16 xl:px-20 py-24 text-bluecolor-9">
      {/* Signature Heading */}
      <section className="mb-20 text-left">
        <p className="text-sm font-semibold tracking-widest uppercase">OUR SERVICES</p>
        <div className="mt-2 h-px bg-gray-300 w-full"></div>
        <h1 className="text-4xl lg:text-[35px] font-medium mt-8">
          Comprehensive Solutions for <br /> <span className="text-goldcolor-i">Modern Infrastructure</span>
        </h1>
          <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            {/* <h3 className="text-3xl font-bold text-bluecolor-9 mb-4">Pioneering Infra-Tech Solutions for a Thriving Africa</h3> */}
            <p className="text-gray-600 leading-relaxed">
              At Blackaion, we specialize in transforming the African infrastructure landscape through innovative, technology-driven solutions. From project advisory and sustainable development to public-private partnerships, our integrated approach ensures that every project is not just built, but built for a brighter, more connected future. We bridge the funding gap, accelerate the green energy transition, and build resilient smart cities for generations to come.
            </p>
          </div>
          <div>
            <img src="/project-1.png" alt="Blackaion Infrastructure Project" className="rounded-2xl shadow-xl" />
          </div>
        </div>
      </section>

      <section className="mb-24">
      
      </section>

      {/* Services Section */}
      <section className="mb-24">
        <div className="text-center mb-16">
          {/* <h2 className="text-4xl lg:text-5xl font-bold text-bluecolor-9">Our Core Services</h2>
          <p className="text-gray-600 mt-4 max-w-3xl mx-auto">
            We provide a comprehensive suite of services designed to address the complex challenges of infrastructure development in Africa, from initial concept to final execution.
          </p> */}
        </div>
        <div className="flex flex-col lg:flex-row gap-8 min-h-[500px]">
          {/* Vertical Tabs */}
          <div className="flex lg:flex-col lg:w-1/4">
            {data.services.map((service) => (
              <button
                key={service.id}
                onClick={() => setActiveService(service)}
                className={`text-left p-4 rounded-lg w-full transition-all duration-300 ${
                  activeService.id === service.id ? `${service.color} font-bold` : 'hover:bg-gray-100'
                }`}
              >
                {service.title}
              </button>
            ))}
          </div>

          {/* Content */}
          <div className="w-full lg:w-3/4">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeService.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
                className={`p-8 rounded-2xl ${activeService.color} h-full`}
              >
                <div className="flex items-center gap-4 mb-4">
                  {ActiveIcon && <ActiveIcon className={`text-3xl ${activeService.textColor}`} />}
                  <h2 className="text-3xl font-bold">{activeService.title}</h2>
                </div>
                <p className="text-gray-600 leading-relaxed mb-6">{activeService.description}</p>
                <ul className="space-y-2">
                  {activeService.details.map((detail, index) => (
                    <li key={index} className="flex items-center gap-3">
                      <span className={`text-sm font-semibold ${activeService.textColor}`}>✔</span>
                      <span className="text-gray-500">{detail}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <ProcessSection />

      {/* Testimonials Section */}
      {/* <section className="mb-24">
         <div className="relative">
            <AnimatePresence mode="wait">
                <motion.div
                    key={activeTestimonial}
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -50 }}
                    transition={{ duration: 0.5 }}
                    className={`p-8 rounded-2xl ${data.testimonials[activeTestimonial].color} w-full max-w-3xl mx-auto`}
                >
                    <FaQuoteLeft className="text-3xl opacity-20 mb-4" />
                    <p className="text-xl italic mb-6 text-gray-700">{data.testimonials[activeTestimonial].quote}</p>
                    <div className="flex items-center justify-between">
                        <div>
                            <p className="font-bold">{data.testimonials[activeTestimonial].author}</p>
                            <p className="text-sm text-gray-500">{data.testimonials[activeTestimonial].project}</p>
                        </div>
                        <div className="flex gap-1 text-goldcolor-i">
                            {[...Array(5)].map((_, i) => <FaStar key={i} />)}
                        </div>
                    </div>
                </motion.div>
            </AnimatePresence>
            <button onClick={handlePrevTestimonial} className="absolute left-0 top-1/2 -translate-y-1/2 bg-white p-3 rounded-full shadow-md hover:bg-gray-100 transition-colors">
                <FaArrowLeft />
            </button>
            <button onClick={handleNextTestimonial} className="absolute right-0 top-1/2 -translate-y-1/2 bg-white p-3 rounded-full shadow-md hover:bg-gray-100 transition-colors">
                <FaArrowRight />
            </button>
         </div>
      </section> */}
    </div>
  );
};

export default ServicesPageContent; 