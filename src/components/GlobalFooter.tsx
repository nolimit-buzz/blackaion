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

  return <>
    <div>
      {footerData && <FooterSubsection data={footerData} />}
    </div>
  </>;
}; 