import React from 'react';
import TeamMemberPageContent from './client';
import { notFound } from 'next/navigation';
import { fetchTeamMemberDetail, fetchFooterData, fetchTeamPageData } from '@/lib/api';

// Enable static generation for better performance
export const revalidate = 3600; // Revalidate every hour

const SingleTeamMemberPage = async ({ params }: { params: { slug: string } }) => {
  try {
    // The slug is actually the documentId from the CMS
    const documentId = params.slug;
    
    console.log('Fetching team member detail for:', documentId);
    
    const [teamMember, footerData, teamPageData] = await Promise.all([
      fetchTeamMemberDetail(documentId),
      fetchFooterData(),
      fetchTeamPageData()
    ]);

    if (!teamMember) {
      console.log('Team member not found for documentId:', documentId);
      notFound();
    }

    console.log('Team member data fetched successfully:', teamMember.name);

    return <TeamMemberPageContent 
      teamMember={teamMember} 
      footerData={footerData} 
      navbarData={teamPageData.navbar}
    />;
  } catch (error) {
    console.error('Error fetching team member:', error);
    
    // Check if it's a timeout error
    if (error instanceof Error && error.message.includes('timed out')) {
      return (
        <div className="min-h-screen flex items-center justify-center bg-white">
          <div className="text-center max-w-md mx-auto px-4">
            <h1 className="text-2xl font-bold text-gray-900 mb-4">Connection Timeout</h1>
            <p className="text-gray-600 mb-4">
              The request timed out. Please check your internet connection and try again.
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
    
    notFound();
  }
};

export default SingleTeamMemberPage; 