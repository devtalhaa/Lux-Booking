'use client';

import React from 'react';
import Image from 'next/image';
import Container from '../../common/Container';

const Services = () => {
    const services = [
        {
            id: 1,
            distance: '1.5km away',
            rating: '4.7',
            title: 'Handyman',
            icon: '/assets/Layer 1.svg',
            hoverIcon: '/assets/hover_layer1.svg',
            pillColor: 'bg-gray-200 text-dark',
            hoverPillColor: 'group-hover:bg-[#EAECF4]',
            bgColor: 'bg-gray-card',
            hoverBg: 'hover:bg-[#F4F5F9]',
            dims: 'w-[123px] h-[151px]',
        },
        {
            id: 2,
            distance: '2.2km away',
            rating: '4.9',
            title: 'Home Cleaning',
            icon: '/assets/Layer 2.svg',
            hoverIcon: '/assets/hover_layer2.svg',
            overlayIcon: '/assets/layer2over.svg',
            pillColor: 'bg-gray-200 text-dark',
            hoverPillColor: 'group-hover:bg-[#E6FAF2]',
            bgColor: 'bg-gray-card',
            hoverBg: 'hover:bg-[#F2FCF8]',
            dims: 'w-[162px] h-[151px]',
        },
        {
            id: 3,
            distance: '3.0km away',
            rating: '4.8',
            title: 'Dog Walking',
            icon: '/assets/Layer 3.svg',
            hoverIcon: '/assets/hover_layer3.svg',
            pillColor: 'bg-gray-200 text-dark',
            hoverPillColor: 'group-hover:bg-[#FEE9E4]',
            bgColor: 'bg-gray-card',
            hoverBg: 'hover:bg-[#FEF7F6]',
            dims: 'w-[130px] h-[151px]',
        },
    ];

    return (
        <section className="pb-12">
            <Container className="!px-5 md:!px-8 lg:!px-[140px] 2xl:!px-[240px]">
                <div className="flex flex-wrap justify-center gap-4">
                    {services.map((service) => (
                        <div
                            key={service.id}
                            className={`${service.bgColor} ${service.hoverBg || ''} group rounded-[32px] px-8 pt-8 pb-4 flex flex-col items-center text-center transition-colors duration-300 w-[309px] h-[299px] justify-between`}
                        >
                            <div className="w-full text-center">
                                <span className="text-sm font-bold text-dark group-hover:hidden block">
                                    {service.distance}
                                </span>
                                <span className="text-sm font-bold text-dark hidden group-hover:block">
                                    {service.rating} Rating
                                </span>
                            </div>

                            <div className="flex-1 flex items-center justify-center py-2">
                                <div className={`relative ${service.dims || 'w-48 h-48'}`}>
                                    {/* Default Icon */}
                                    <div className="absolute inset-0 transition-opacity duration-300 group-hover:opacity-0 opacity-100">
                                        <Image
                                            src={service.icon}
                                            alt={service.title}
                                            fill
                                            className="object-contain"
                                        />
                                    </div>
                                    {/* Hover Icon */}
                                    <div className="absolute inset-0 transition-opacity duration-300 group-hover:opacity-100 opacity-0">
                                        <Image
                                            src={service.hoverIcon!}
                                            alt={service.title}
                                            fill
                                            className="object-contain"
                                        />
                                    </div>
                                    {/* Overlay Icon (e.g., Sparks) */}
                                    {service.overlayIcon && (
                                        <div className="absolute bottom-10 -left-6 w-16 h-16 transition-opacity duration-300 group-hover:opacity-100 opacity-0 z-10">
                                            <Image
                                                src={service.overlayIcon}
                                                alt="overlay"
                                                fill
                                                className="object-contain"
                                            />
                                        </div>
                                    )}
                                </div>
                            </div>

                            <div className={`px-4 py-2 rounded-full font-bold text-sm transition-colors duration-300 whitespace-nowrap ${service.pillColor} ${service.hoverPillColor || ''}`}>
                                {service.title}
                            </div>
                        </div>
                    ))}
                </div>
            </Container>
        </section >
    );
};

export default Services;
