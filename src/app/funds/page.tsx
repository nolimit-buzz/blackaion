import React from 'react';
import FundsPageContent from './client';
import { fetchFundsPageData } from '@/lib/api';
import { FALLBACK_FUNDS_PAGE_DATA } from '@/lib/fallbackData';

// Force dynamic rendering to avoid build-time API failures
export const dynamic = 'force-dynamic';

const FundsPage = async () => {
  try {
    const data = await fetchFundsPageData();
    
    return (
      <div className="bg-white">
        <FundsPageContent data={data} />
      </div>
    );
  } catch (error) {
    console.error('Error loading funds page:', error);
    
    // Use fallback data instead of showing error UI
    return (
      <div className="bg-white">
        <FundsPageContent data={FALLBACK_FUNDS_PAGE_DATA} />
      </div>
    );
  }
};

export default FundsPage;
