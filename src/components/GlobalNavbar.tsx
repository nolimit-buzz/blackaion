'use client';

import React, { useEffect, useState } from 'react';
import { Navbar } from './Navbar';
import { fetchNavbarData, NavbarData } from '@/lib/api';
import { FALLBACK_NAVBAR_DATA } from '@/lib/fallbackData';
import { usePathname } from 'next/navigation';

export function GlobalNavbar() {
  const [navbarData, setNavbarData] = useState<NavbarData>();
  const [isUpdating, setIsUpdating] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const loadNavbarData = async () => {
      try {
        setIsUpdating(true);
        const data = await fetchNavbarData();
        console.log("navbar data", data);
        setNavbarData(data);
      } catch (error) {
        console.error('Error loading navbar data:', error);
      } finally {
        setIsUpdating(false);
      }
    };
  }, []);

  return (
    <div className="fixed backdrop-blur-md top-0 left-0 right-0 z-50 w-full h-[100px] bg-transparent">
      {navbarData && <Navbar
        theme={pathname === '/' ? 'dark' : 'light'}
        data={navbarData}
      />}
      {isUpdating && (
        <div className="absolute top-2 right-2 w-2 h-2 bg-blue-500 rounded-full animate-pulse opacity-60" />
      )}
    </div>
  );
} 