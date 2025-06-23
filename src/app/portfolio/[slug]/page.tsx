import React from 'react';
import { notFound } from 'next/navigation';
import { getProjects, projectsData } from '@/lib/projectsData';
import SingleProjectPageContent from './client';
import { FrameSubsection } from '@/components/Element/sections/FrameSubsection/FrameSubsection';
import { FooterSubsection } from '@/components/Element/sections/FooterSubsection/FooterSubsection';

export async function generateStaticParams() {
  return projectsData.map((project) => ({
    slug: project.slug,
  }));
}

const SingleProjectPage = ({ params }: { params: { slug: string } }) => {
    const allProjects = getProjects();
    const project = allProjects.find(p => p.slug === params.slug);

    if (!project) {
        notFound();
    }
    
    const otherProjects = allProjects.filter(p => p.slug !== params.slug).slice(0, 2);

    return (
        <div className="bg-white">
            <FrameSubsection theme="light" />
            <SingleProjectPageContent project={project} otherProjects={otherProjects} />
            <FooterSubsection />
        </div>
    );
};

export default SingleProjectPage;
