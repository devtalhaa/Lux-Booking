'use client';

import React from 'react';
import Image from 'next/image';
import Container from '../../common/Container';
import { motion, Variants } from 'framer-motion';

const Services = () => {
    const services = [
        {
            id: 1,
            distance: '1.5km away',
            title: 'Handyman',
            icon: '/assets/Layer 1.svg',
            pillColor: 'bg-gray-200 text-dark',
            bgColor: 'bg-gray-card',
        },
        {
            id: 2,
            distance: '2.2km away',
            title: 'Home Cleaning',
            icon: '/assets/Layer 2.svg',
            pillColor: 'bg-gray-200 text-dark',
            bgColor: 'bg-gray-card',
        },
        {
            id: 3,
            rating: '4.8 rating',
            title: 'Dog Walking',
            icon: '/assets/Layer 3.svg',
            pillColor: 'bg-[#FEE9E4] text-black', // Using custom coral colors for the 3rd pill
            bgColor: 'bg-[#FEF7F6]',
        },
    ];

    const containerVariants: Variants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2
            }
        }
    };

    const cardVariants: Variants = {
        hidden: { opacity: 0, scale: 0.8 },
        visible: {
            opacity: 1,
            scale: 1,
            transition: {
                duration: 0.5,
                ease: "easeOut"
            }
        }
    };

    return (
        <section className="pb-12">
            <Container>
                <motion.div
                    className="grid grid-cols-1 md:grid-cols-3 gap-6"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: false, amount: 0.2 }}
                >
                    {services.map((service) => (
                        <motion.div
                            key={service.id}
                            variants={cardVariants}
                            className={`${service.bgColor} rounded-[32px] p-8 flex flex-col items-center text-center hover:shadow-lg transition-shadow duration-300 min-h-[400px] justify-between`}
                        >
                            <div className="w-full text-center">
                                <span className="text-sm font-bold text-dark">
                                    {service.distance || service.rating}
                                </span>
                            </div>

                            <div className="flex-1 flex items-center justify-center py-8">
                                <div className="relative w-48 h-48">
                                    <Image
                                        src={service.icon}
                                        alt={service.title}
                                        fill
                                        className="object-contain" // Use contain to respect SVG proportions
                                    />
                                </div>
                            </div>

                            <div className={`px-6 py-2  rounded-full font-bold text-sm ${service.pillColor}`}>
                                {service.title}
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </Container>
        </section>
    );
};

export default Services;
