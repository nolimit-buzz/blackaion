import React from 'react';
import { mediaData } from '@/lib/mediaData';
import { notFound } from 'next/navigation';
import BlogHeader from '@/app/blog/BlogHeader';
import { FooterSubsection } from '@/components/Element/sections/FooterSubsection/FooterSubsection';
import { MapPin } from 'lucide-react';

export async function generateStaticParams() {
    return mediaData.upcomingEvents.map(event => ({
        slug: event.slug,
    }));
}

const UpcomingEventDetailsPage = ({ params }: { params: { slug: string } }) => {
    const event = mediaData.upcomingEvents.find(e => e.slug === params.slug);

    if (!event) {
        notFound();
    }

    return (
        <div className="bg-black text-white">
            <BlogHeader />
            <main className="max-w-[1440px] mx-auto px-5 sm:px-10 lg:px-16 xl:px-20 py-20">
                <section className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20 items-center">
                    <div className="flex flex-col">
                        <div className="flex justify-between items-center mb-4">
                            <span className="text-goldcolor-i font-semibold tracking-widest uppercase flex items-center gap-2">
                                <MapPin size={16} /> {event.location}
                            </span>
                        </div>
                        <h1 className="text-4xl md:text-5xl font-bold mb-4">{event.title}</h1>
                        <p className="text-gray-400 leading-relaxed mb-8">{event.description}</p>
                        
                        <div className="grid grid-cols-2 gap-8 text-sm mt-auto">
                            <div>
                                <h3 className="font-bold text-gray-200 mb-2">Location</h3>
                                <p className="text-gray-400">{event.location}</p>
                            </div>
                            <div>
                                <h3 className="font-bold text-gray-200 mb-2">Date</h3>
                                <p className="text-gray-400">{event.date}</p>
                            </div>
                            <div>
                                <h3 className="font-bold text-gray-200 mb-2">Event Focus</h3>
                                <p className="text-gray-400">{event.focus}</p>
                            </div>
                            <div>
                                <h3 className="font-bold text-gray-200 mb-2">Event Type</h3>
                                <p className="text-gray-400">{event.type}</p>
                            </div>
                        </div>
                    </div>

                    <div className="relative rounded-2xl overflow-hidden h-[400px] lg:h-[500px]">
                         <img src={event.image} alt={event.title} className="w-full h-full object-cover" />
                         <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"/>
                    </div>
                </section>
                
                <div className="mb-20">
                    <p className="text-gray-400 leading-relaxed max-w-4xl mx-auto text-center">
                        This event brings together the foremost leaders, innovators, and policymakers to chart the future of the industry. It serves as a premier platform for networking, forging strategic partnerships, and sharing groundbreaking insights that will shape tomorrow's landscape.
                    </p>
                </div>

                <section>
                    <h2 className="text-3xl font-bold mb-8 text-center">Event Gallery</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                        {event.gallery?.map((imgSrc, index) => (
                            <div key={index} className="rounded-lg overflow-hidden h-64 group">
                                <img src={imgSrc} alt={`${event.title} gallery image ${index + 1}`} className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105" />
                            </div>
                        ))}
                    </div>
                </section>
            </main>
            <FooterSubsection />
        </div>
    );
};

export default UpcomingEventDetailsPage; 