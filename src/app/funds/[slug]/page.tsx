import React from 'react';
import { notFound } from 'next/navigation';
import { fetchFundDetail } from '@/lib/api';
import FundPageContent from './client';

export const revalidate = 3600;

const SingleFundPage = async ({ params }: { params: { slug: string } }) => {
  const documentId = params.slug;

  try {
    const fund = await fetchFundDetail(documentId);
    if (!fund) {
      notFound();
    }

    return (
      <div className="bg-white">
        <FundPageContent fund={fund} />
      </div>
    );
  } catch (e) {
    notFound();
  }
};

export default SingleFundPage;
