'use client';

import React, { useEffect, useState } from 'react';
import { FooterSubsection } from './Element/sections/Footer/Footer';
import { fetchFooterData, FooterData } from '@/lib/api';

export const GlobalFooter = () => {
  const [footerData, setFooterData] = useState<FooterData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadFooterData = async () => {
      try {
        setLoading(true);
        const data = await fetchFooterData();
        setFooterData(data);
      } catch (err) {
        console.error('Error loading footer data:', err);
        setError(err instanceof Error ? err.message : 'Failed to load footer');
      } finally {
        setLoading(false);
      }
    };

    loadFooterData();
  }, []);

  if (loading) {
    return (
      <div className="bg-gray-900 text-white py-12">
        <div className="max-w-[1440px] mx-auto px-5 sm:px-10 lg:px-16 xl:px-20">
          <div className="text-center">
            <div className="animate-pulse bg-gray-700 h-4 w-48 mx-auto rounded mb-4"></div>
            <div className="animate-pulse bg-gray-700 h-4 w-32 mx-auto rounded"></div>
          </div>
        </div>
      </div>
    );
  }

  if (error || !footerData) {
    // Fallback footer with basic structure
    return (
      <div className="bg-gray-900 text-white py-12">
        <div className="max-w-[1440px] mx-auto px-5 sm:px-10 lg:px-16 xl:px-20">
          <div className="text-center">
            <p className="text-gray-400">© 2024 Blackaion. All rights reserved.</p>
          </div>
        </div>
      </div>
    );
  }

  return <FooterSubsection data={footerData} />;
}; 