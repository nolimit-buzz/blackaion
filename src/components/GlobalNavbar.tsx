'use client';

import React, { useEffect, useState } from 'react';
import { Navbar } from './Navbar';
import { fetchNavbarData, NavbarData } from '@/lib/api';
import { FALLBACK_NAVBAR_DATA } from '@/lib/fallbackData';
import { usePathname } from 'next/navigation';

export function GlobalNavbar() {
  const [navbarData, setNavbarData] = useState<NavbarData>();
  const pathname = usePathname();

  useEffect(() => {
    const loadNavbarData = async () => {
      try {
        const data = await fetchNavbarData();
        setNavbarData(data);
      } catch (error) {
        console.error('Error loading navbar data:', error);
      }
    };
    loadNavbarData();
  }, []);

  return (
    <div className="fixed backdrop-blur-md top-0 left-0 right-0 z-50 w-full h-[100px] bg-transparent">
      {navbarData && <Navbar
        theme={pathname === '/' ? 'dark' : 'light'}
        data={navbarData}
      />}
    </div>
  );
} 