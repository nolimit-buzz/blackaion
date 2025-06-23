import React from 'react';
import { mediaData } from '@/lib/mediaData';
import { notFound } from 'next/navigation';
import BlogHeader from '@/app/blog/BlogHeader';
import { FooterSubsection } from '@/components/Element/sections/FooterSubsection/FooterSubsection';
import Link from 'next/link';

export async function generateStaticParams() {
    // Ensure slug exists before trying to map it
    return mediaData.events.filter(event => event.slug).map(event => ({
        slug: event.slug,
    }));
}

const SingleEventPage = ({ params }: { params: { slug: string } }) => {
    const event = mediaData.events.find(e => e.slug === params.slug);

    if (!event) {
        notFound();
    }

    return (
        <div className="bg-black text-white">
            <BlogHeader />
            <article className="max-w-[1440px] mx-auto px-5 sm:px-10 lg:px-16 xl:px-20 py-20">
                <div className="max-w-4xl mx-auto">
                    {/* Back to blog link */}
                    <div className="mb-12">
                        <Link href="/blog" className="text-sm font-semibold text-goldcolor-i hover:text-white transition-colors">
                            &larr; Back to Blog
                        </Link>
                    </div>

                    {/* Event Header */}
                    <header className="mb-12">
                        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">{event.title}</h1>
                        <p className="text-gray-400">{event.date}</p>
                        <div className="flex flex-wrap gap-2 mt-4">
                            {event.tags?.map(tag => (
                                <span key={tag} className="bg-gray-800 text-gray-300 text-xs font-semibold px-3 py-1 rounded-full">
                                    {tag}
                                </span>
                            ))}
                        </div>
                    </header>

                    {/* Featured Image */}
                    <div className="mb-12">
                        <img src={event.image} alt={event.title} className="w-full h-auto object-cover rounded-2xl" />
                    </div>

                    {/* Event Content */}
                    <div className="prose prose-invert prose-lg max-w-none text-gray-300 leading-relaxed">
                        <p>{event.description}</p>
                    </div>
                </div>
            </article>
            <FooterSubsection />
        </div>
    );
};

export default SingleEventPage; 