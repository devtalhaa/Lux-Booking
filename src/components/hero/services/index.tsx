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
      pillColor: 'bg-[#E6E6E6]  text-black',
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
      pillColor: 'bg-[#E6E6E6] text-black',
      hoverPillColor: 'group-hover:bg-[#E6FAF2]',
      bgColor: 'bg-gray-card',
      hoverBg: 'hover:bg-[#F2FCF8]',
      dims: 'w-[162px] h-[151px]',
    },
    {
      id: 3,
      distance: '1km away',
      rating: '4.8',
      title: 'Dog Walking',
      icon: '/assets/Layer 3.svg',
      hoverIcon: '/assets/hover_layer3.svg',
      pillColor: 'bg-[#E6E6E6] text-black font-medium',
      hoverPillColor: 'group-hover:bg-[#FEE9E4]',
      bgColor: 'bg-gray-card',
      hoverBg: 'hover:bg-[#FEF7F6]',
      dims: 'w-[130px] h-[151px]',
    },
  ];

  return (
    <section className="">
      <div className="px-5 md:px-8 max-w-[960px] ">
        <div className="flex justify-center gap-4 w-full">
          {services.map((service) => (
            <div
              key={service.id}
              className={`${service.bgColor} ${service.hoverBg || ''} cursor-pointer  group rounded-[16px] p-[16px] flex flex-col items-center text-center transition-colors duration-300 w-[309px] h-[299px] min-w-[309px] min-h-[299px] justify-between`}
            >
              <div className="w-full text-center">
                <span className="text-sm font-medium text-black group-hover:hidden block font-body leading-[18px]">
                  {service.distance}
                </span>
                <span className="text-sm font-medium text-black hidden group-hover:block font-body leading-[18px]">
                  {service.rating} Rating
                </span>
              </div>

              <div className=" flex items-center justify-center py-2">
                <div className={`relative ${service.dims || 'w-48 h-48'}`}>
                  {/* Default Icon */}
                  <div className="absolute inset-0 transition-opacity group-hover:opacity-0 opacity-100">
                    <Image
                      src={service.icon}
                      alt={service.title}
                      fill
                      className=" w-[123px] h-[151px]"
                    />
                  </div>
                  {/* Hover Icon */}
                  <div className="absolute inset-0 transition-opacity group-hover:opacity-100 opacity-0 ">
                    <Image
                      src={service.hoverIcon}
                      alt={service.title}
                      fill
                      className=" w-[162px] h-[151px]"
                    />
                  </div>
                  {/* Overlay Icon (e.g., Sparks) */}
                  {service.overlayIcon && (
                    <div className="absolute bottom-10 -left-6 w-16 h-16 transition-opacity  group-hover:opacity-100 opacity-0 z-10 ">
                      <Image
                        src={service.overlayIcon}
                        alt="overlay"
                        fill
                        className=" w-[130px] h-[151px]"
                      />
                    </div>
                  )}
                </div>
              </div>

              <div className={`px-[16px] py-[8px] rounded-[228.06px] font-medium text-[14px] transition-colors duration-300 whitespace-nowrap leading-[18px] font-body ${service.pillColor} ${service.hoverPillColor || ''}`}>
                {service.title}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section >
  );
};

export default Services;
