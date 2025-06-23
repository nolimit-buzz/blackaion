import React from 'react';
import { mediaData } from '@/lib/mediaData';
import { notFound } from 'next/navigation';
import BlogHeader from '../BlogHeader';
import { FooterSubsection } from '@/components/Element/sections/FooterSubsection/FooterSubsection';
import Link from 'next/link';

export async function generateStaticParams() {
    return mediaData.blog.map(post => ({
        slug: post.slug,
    }));
}

const SingleBlogPage = ({ params }: { params: { slug: string } }) => {
    const post = mediaData.blog.find(p => p.slug === params.slug);

    if (!post) {
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

                    {/* Post Header */}
                    <header className="mb-12">
                        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">{post.title}</h1>
                        <p className="text-gray-400">{post.date}</p>
                        <div className="flex flex-wrap gap-2 mt-4">
                            {post.tags?.map(tag => (
                                <span key={tag} className="bg-gray-800 text-gray-300 text-xs font-semibold px-3 py-1 rounded-full">
                                    {tag}
                                </span>
                            ))}
                        </div>
                    </header>

                    {/* Featured Image */}
                    <div className="mb-12">
                        <img src={post.image} alt={post.title} className="w-full h-auto object-cover rounded-2xl" />
                    </div>

                    {/* Post Content */}
                    <div className="prose prose-invert prose-lg max-w-none text-gray-300 leading-relaxed">
                        <p>{post.description}</p>
                        {/* You can add more detailed content here later */}
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed doo eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                        </p>
                         <p>
                            Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, 
                            eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. 
                            Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores 
                            eos qui ratione voluptatem sequi nesciunt.
                        </p>
                    </div>
                </div>
            </article>
            <FooterSubsection />
        </div>
    );
};

export default SingleBlogPage; 