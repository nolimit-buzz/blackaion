'use client';

import React from 'react';
import Link from 'next/link';

export const TimeoutErrorPage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-white">
      <div className="text-center max-w-md mx-auto px-4">
        <h1 className="text-2xl font-bold text-gray-900 mb-4">Connection Timeout</h1>
        <p className="text-gray-600 mb-4">
          The request timed out. Please check your internet connection and try again.
        </p>
        <Link href="/team">
          <button className="mt-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors">
            Back to Team
          </button>
        </Link>
      </div>
    </div>
  );
}; 