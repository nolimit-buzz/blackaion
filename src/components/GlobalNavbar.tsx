'use client';

import React, { useEffect, useState } from 'react';
import { Navbar } from './Navbar';
import { fetchNavbarData, NavbarData } from '@/lib/api';
import { usePathname } from 'next/navigation';

export const GlobalNavbar = () => {
  const [navbarData, setNavbarData] = useState<NavbarData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const pathname = usePathname();
  console.log(pathname, pathname === '/');
  useEffect(() => {
    const loadNavbarData = async () => {
      try {
        setLoading(true);
        const data = await fetchNavbarData();
        setNavbarData(data);
      } catch (err) {
        console.error('Error loading navbar data:', err);
        setError(err instanceof Error ? err.message : 'Failed to load navigation');
      } finally {
        setLoading(false);
      }
    };

    loadNavbarData();
  }, []);

  if (loading) {
    return (
      <div className="fixed top-0 left-0 right-0 z-50 w-full h-[100px] bg-transparent flex items-center justify-center">
        <div className="animate-pulse bg-gray-200 h-8 w-32 rounded"></div>
      </div>
    );
  }

  if (error || !navbarData) {
    // Fallback navbar with basic structure
    return (
      <div className="fixed top-0 left-0 right-0 z-50 w-full h-[100px] bg-transparent flex items-center justify-center">
        <div className="text-gray-500">Navigation unavailable</div>
      </div>
    );
  }

  return (
    <div className="fixed backdrop-blur-md top-0 left-0 right-0 z-50 w-full h-[100px] bg-transparent">
      <Navbar
        theme={pathname === '/' ? 'dark' : 'light'}
        data={navbarData}
      />
    </div>
  );
}; 