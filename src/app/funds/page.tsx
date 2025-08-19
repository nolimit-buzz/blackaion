import React from 'react';
import FundsPageContent from './client';
import { fetchFundsPageData } from '@/lib/api';

export const revalidate = 3600;

const FundsPage = async () => {
  const data = await fetchFundsPageData();

  return (
    <div className="bg-white">
      <FundsPageContent data={data} />
    </div>
  );
};

export default FundsPage;
