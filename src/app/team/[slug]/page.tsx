import React from 'react';
import TeamMemberPageContent from './client';
import { notFound } from 'next/navigation';

// --- Data for all team members ---
const teamMembers = [
    {
        name: 'Obiora Okoye',
        role: 'Co-Founder & Partner',
        image: '/obiora.png',
        bio: [
            'Obiora is a seasoned infrastructure investment professional with over 15 years of experience in project development, structured finance, and portfolio management across West Africa. His expertise spans the energy, technology, and financial services sectors, where he has been instrumental in creating and executing innovative investment strategies.',
            'Prior to co-founding Blackaion, Obiora held senior roles at leading global firms, where he managed multi-billion dollar infrastructure portfolios and led landmark transactions. He was responsible for originating, developing, and financing large-scale projects that have had a transformative impact on the region\\\'s development.',
            'Obiora is a passionate advocate for sustainable infrastructure and believes in the power of technology to unlock Africa\\\'s potential. He is committed to building a world-class investment firm that not only generates outstanding returns but also drives long-term value for all stakeholders.',
        ],
    },
    // Add other team members here with their details
    { name: "Okwu Njoku", role: "Co-Founder & Partner", image: "/okwu.png", bio: [ 'Bio for Okwu Njoku...'] },
    { name: "Dr Uche Isiugo", role: "Executive Director", image: "/uche.png", bio: [ 'Bio for Dr Uche Isiugo...'] },
    { name: "Wolemi Esan", role: "Board Member", image: "/wolemi.png", bio: [ 'Bio for Wolemi Esan...'] },
].map(member => {
    const titles = ['dr', 'mr', 'mrs', 'ms'];
    const nameParts = member.name.toLowerCase().split(' ');
    let potentialSlug = nameParts[0];

    // If the first part of the name is a title, use the next part as the slug.
    if (titles.includes(potentialSlug.replace('.', ''))) {
        potentialSlug = nameParts[1];
    }

    return {
        ...member,
        slug: potentialSlug.replace(/[^a-z0-9]+/g, '-'), // Sanitize final slug
    };
});

export async function generateStaticParams() {
  return teamMembers.map((member) => ({
    slug: member.slug,
  }));
}

const SingleTeamMemberPage = ({ params }: { params: { slug: string } }) => {
    const teamMember = teamMembers.find(member => member.slug === params.slug);

    if (!teamMember) {
        notFound();
    }

    const otherMembers = teamMembers.filter((member) => member.slug !== params.slug);

    return <TeamMemberPageContent teamMember={teamMember} otherMembers={otherMembers} />;
};

export default SingleTeamMemberPage; 