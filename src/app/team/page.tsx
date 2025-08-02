import React from "react";
import { fetchTeamPageData, fetchFooterData } from "@/lib/api";
import { TeamPageClient } from "./client";

// Enable static generation for better performance
export const revalidate = 3600; // Revalidate every hour

export default async function TeamPage() {
  try {
    // Check environment variables
    const apiUrl = process.env.NEXT_PUBLIC_API_URL;
    const apiToken = process.env.NEXT_PUBLIC_API_TOKEN;
    
    console.log('API URL configured:', apiUrl ? 'Yes' : 'No');
    console.log('API Token configured:', apiToken ? 'Yes' : 'No');
    
    if (!apiUrl || !apiToken) {
      throw new Error('API configuration missing. Please check environment variables.');
    }
    
    console.log('Fetching team page data...');
    const [teamData, footerData] = await Promise.all([
      fetchTeamPageData(),
      fetchFooterData()
    ]);
    
    console.log('Team data fetched successfully:', teamData ? 'Yes' : 'No');
    console.log('Footer data fetched successfully:', footerData ? 'Yes' : 'No');
    
    return <TeamPageClient teamData={teamData} footerData={footerData} />;
  } catch (error) {
    console.error('Error fetching team page data:', error);
    
    // Return a more detailed error page
    return (
      <div className="min-h-screen flex items-center justify-center bg-white">
        <div className="text-center max-w-md mx-auto px-4">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Team Page Error</h1>
          <p className="text-gray-600 mb-4">
            Unable to load team page data. Please try again later.
          </p>
          <p className="text-sm text-gray-500">
            Error: {error instanceof Error ? error.message : 'Unknown error'}
          </p>
          <button 
            onClick={() => window.location.reload()} 
            className="mt-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
          >
            Retry
          </button>
        </div>
      </div>
    );
  }
} 