'use client';

import React, { useState } from 'react';
import { FaInstagram, FaLinkedin, FaFacebook, FaTiktok } from 'react-icons/fa';

const ContactPageClient = () => {
  const [inquiryType, setInquiryType] = useState('General');

  const socialLinks = [
    { icon: <FaInstagram />, name: 'Instagram', href: '#' },
    { icon: <FaLinkedin />, name: 'LinkedIn', href: '#' },
    { icon: <FaFacebook />, name: 'Facebook', href: '#' },
    { icon: <FaTiktok />, name: 'TikTok', href: '#' },
  ];

  return (
    <>
      <div className="text-bluecolor-9">
        <div className="max-w-[1440px] mx-auto px-5 sm:px-10 lg:px-16 xl:px-20 py-24">
          <div className="pt-12">
            <p className="text-sm font-semibold tracking-widest uppercase text-gray-500">GET IN TOUCH</p>
            <div className="mt-2 h-px bg-gray-300 w-full"></div>
          </div>
          <div className="grid lg:grid-cols-2 gap-16 mt-8">
            {/* Left Side: Info */}
            <div>
              <h1 className="text-[36px] font-medium mb-6">You Have Questions,<br/> We Have <span className="text-goldcolor-i">Answers</span></h1>
              <p className="text-lg text-gray-600 leading-relaxed mb-12">
                We are at the forefront of transforming Africa's infrastructure. Whether you are a potential partner, an investor, or have a groundbreaking project, our team is ready to connect. Let's discuss how we can build a sustainable and prosperous future together.
              </p>
              <div className="grid grid-cols-2 gap-y-10">
                <div>
                  <h3 className="font-bold text-xl mb-3">Location</h3>
                  <p className="text-gray-500">12th Floor, Tower One<br/>Lagos, Nigeria</p>
                  <p className="text-gray-500 mt-2">Monday–Friday | 09:00–17:00 (WAT)</p>
                </div>
                <div>
                  <h3 className="font-bold text-xl mb-3">Social Media</h3>
                  <ul className="space-y-2">
                    {socialLinks.map(link => (
                      <li key={link.name}>
                        <a href={link.href} className="flex items-center gap-3 text-gray-500 hover:text-goldcolor-i transition-colors">
                          {link.icon}
                          <span>{link.name}</span>
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h3 className="font-bold text-xl mb-3">Email</h3>
                  <a href="mailto:info@blackaion.com" className="text-gray-500 hover:text-goldcolor-i transition-colors">info@blackaion.com</a>
                </div>
                <div>
                  <h3 className="font-bold text-xl mb-3">Contact</h3>
                  <a href="tel:+23412345678" className="text-gray-500 hover:text-goldcolor-i transition-colors">+234 (1) 234 5678</a>
                </div>
              </div>
            </div>

            {/* Right Side: Form */}
            <div className="bg-white text-bluecolor-9 p-8 sm:p-12 rounded-2xl shadow-2xl">
              <h2 className="text-3xl font-bold mb-2">Send Us a Message</h2>
              <p className="text-gray-600 mb-8">Have a question or a project proposal? Fill out the form below, and we'll be in touch shortly.</p>
              <form>
                <div className="grid sm:grid-cols-2 gap-6 mb-6">
                  <input type="text" placeholder="First Name" className="w-full p-4 bg-gray-100 rounded-full border border-gray-200 focus:outline-none focus:ring-2 focus:ring-goldcolor-i" />
                  <input type="text" placeholder="Last Name" className="w-full p-4 bg-gray-100 rounded-full border border-gray-200 focus:outline-none focus:ring-2 focus:ring-goldcolor-i" />
                  {/* <input type="text" placeholder="Country" className="w-full p-4 bg-gray-100 rounded-full border border-gray-200 focus:outline-none focus:ring-2 focus:ring-goldcolor-i" />
                  <input type="tel" placeholder="Phone Number" className="w-full p-4 bg-gray-100 rounded-full border border-gray-200 focus:outline-none focus:ring-2 focus:ring-goldcolor-i" /> */}
                </div>
                <input type="email" placeholder="Email Address" className="w-full p-4 bg-gray-100 rounded-full border border-gray-200 mb-6 focus:outline-none focus:ring-2 focus:ring-goldcolor-i" />
                
                <p className="text-gray-700 font-semibold mb-4">Type of Inquiry</p>
                <div className="flex flex-wrap gap-3 mb-6">
                  {['General Inquiry', 'Project Proposal', 'Partnership'].map(type => (
                    <button
                      key={type}
                      type="button"
                      onClick={() => setInquiryType(type)}
                      className={`px-6 py-3 rounded-full text-sm font-semibold transition-colors ${
                        inquiryType === type 
                          ? 'bg-bluecolor-9 text-white' 
                          : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                      }`}
                    >
                      {type}
                    </button>
                  ))}
                </div>
                
                <textarea placeholder="Message" rows={3} className="w-full p-4 bg-gray-100 rounded-2xl border border-gray-200 mb-6 focus:outline-none focus:ring-2 focus:ring-goldcolor-i"></textarea>
                
                {/* <div className="flex items-center mb-6">
                  <input type="checkbox" id="offers" className="w-4 h-4 text-bluecolor-9 bg-gray-100 border-gray-300 rounded focus:ring-blue-500" />
                  <label htmlFor="offers" className="ml-2 text-sm text-gray-600">I'd like to receive exclusive offers and updates</label>
                </div>
                 */}
                <button type="submit" className="w-full bg-bluecolor-9 text-white font-bold py-4 rounded-full hover:bg-goldcolor-i transition-colors">
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
      
      {/* Map Section - Placeholder */}
      <div className="h-96 bg-gray-200 flex items-center justify-center text-gray-500">
        Map Placeholder
      </div>
    </>
  );
};

export default ContactPageClient; 