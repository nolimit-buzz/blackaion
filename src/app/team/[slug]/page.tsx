import React from 'react';
import TeamMemberPageContent from './client';
import { notFound } from 'next/navigation';
import { fetchTeamMemberDetail } from '@/lib/api';
import { TimeoutErrorPage } from './TimeoutErrorPage';

// Enable static generation for better performance
export const revalidate = 3600; // Revalidate every hour

const SingleTeamMemberPage = async ({ params }: { params: { slug: string } }) => {
  try {
    // The slug is actually the documentId from the CMS
    const documentId = params.slug;
    
    console.log('Fetching team member detail for:', documentId);
    
    const teamMember = await fetchTeamMemberDetail(documentId);

    if (!teamMember) {
      console.log('Team member not found for documentId:', documentId);
      notFound();
    }

    console.log('Team member data fetched successfully:', teamMember.name);

    return <TeamMemberPageContent teamMember={teamMember} />;
  } catch (error) {
    console.error('Error fetching team member:', error);
    
    // Check if it's a timeout error
    if (error instanceof Error && error.message.includes('timed out')) {
      return <TimeoutErrorPage />;
    }
    
    notFound();
  }
};

export default SingleTeamMemberPage; 