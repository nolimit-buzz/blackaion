import React from 'react';
import { motion } from 'framer-motion';

const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeInOut' } },
};

interface PageHeaderProps {
    title: string;
    mainHeading: React.ReactNode;
    description: string;
}

const PageHeader: React.FC<PageHeaderProps> = ({ title, mainHeading, description }) => {
    return (
        <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
            className="pt-12"
        >
            <div className="max-w-[1440px] mx-auto px-5 sm:px-10 lg:px-16 xl:px-20">
                <p className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-4">{title}</p>
                <div className="border-t border-gray-200 pt-12 pb-12">
                    <div className="grid lg:grid-cols-2 gap-8 items-center">
                        <h1 className="text-4xl font-medium text-bluecolor-9">
                            {mainHeading}
                        </h1>
                        <p className="text-gray-600 leading-relaxed">
                            {description}
                        </p>
                    </div>
                </div>
            </div>
        </motion.div>
    );
};

export default PageHeader; 