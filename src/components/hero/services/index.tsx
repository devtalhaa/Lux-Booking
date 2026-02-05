'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Container from '../../common/Container';

const Services = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showHover, setShowHover] = useState(false);

  // Auto-cycle for mobile: toggle hover state every 2 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setShowHover((prev) => {
        if (prev) {
          // If currently showing hover, move to next card
          setCurrentIndex((idx) => (idx + 1) % 3);
          return false;
        } else {
          // Show hover state
          return true;
        }
      });
    }, 2000);

    return () => clearInterval(interval);
  }, []);

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
      pillColor: 'bg-[#E6E6E6] ',
      hoverPillColor: 'group-hover:bg-[#FEE9E4]',
      bgColor: 'bg-gray-card',
      hoverBg: 'hover:bg-[#FEF7F6]',
      dims: 'w-[130px] h-[151px]',
    },
  ];

  return (
    <section className="">
      <div className="px-5 custom-md:px-8 custom-md:max-w-[746px] lg:max-w-[960px] ">
        {/* Mobile Layout - Single card carousel (below custom-md/810px) */}
        <div className="custom-md:hidden w-full">
          {services.map((service, index) => (
            <div
              key={service.id}
              className={`${index === currentIndex ? 'block' : 'hidden'} ${service.bgColor} rounded-[16px] flex flex-col items-center text-center h-[304px] w-full max-w-[350px] mx-auto justify-between `}
            >
              <div className="w-full text-center">
                <span className="text-[16px] font-[500] text-black font-body [letter-spacing:-.01em] mt-[16px] leading-[18.2px] block">
                  {showHover ? `${service.rating} Rating` : service.distance}
                </span>
              </div>

              <div className="flex items-center justify-center py-2">
                <div className={`relative ${service.dims || 'w-48 h-48'}`}>
                  {/* Normal Icon */}
                  <div className={`absolute inset-0 transition-opacity duration-300 ${showHover ? 'opacity-0' : 'opacity-100'}`}>
                    <Image
                      src={service.icon}
                      alt={service.title}
                      fill
                      className="w-[123px] h-[151px]"
                    />
                  </div>
                  {/* Hover Icon */}
                  <div className={`absolute inset-0 transition-opacity duration-300 ${showHover ? 'opacity-100' : 'opacity-0'}`}>
                    <Image
                      src={service.hoverIcon}
                      alt={service.title}
                      fill
                      className="w-[162px] h-[151px]"
                    />
                  </div>
                  {/* Overlay Icon */}
                  {service.overlayIcon && (
                    <div className={`absolute bottom-7 -left-3 w-[48px] h-[38px] transition-opacity duration-300 z-10 ${showHover ? 'opacity-100' : 'opacity-0'}`}>
                      <Image
                        src={service.overlayIcon}
                        alt="overlay"
                        fill
                        className="w-[130px] h-[151px]"
                      />
                    </div>
                  )}
                </div>
              </div>

              <div className={`px-[16px] py-[8px] mb-[16px] rounded-[228.06px] font-[500] text-[16px] text-nowrap [letter-spacing:-.01em] leading-[18.2px] font-body ${service.pillColor}`}>
                {service.title}
              </div>
            </div>
          ))}
        </div>

        {/* Desktop Layout - All cards with hover (custom-md/810px and above) */}
        <div className="hidden custom-md:flex justify-center md:gap-4 w-full">
          {services.map((service) => (
            <div
              key={service.id}
              className={`${service.bgColor} ${service.hoverBg || ''} cursor-pointer group rounded-[16px] flex flex-col items-center text-center transition-colors duration-300 custom-md:min-w-[238px] lg:w-[299px] lg:min-h-[299px] lg:min-w-[309px] custom-md:min-h-[299px] justify-between`}
            >
              <div className="w-full text-center">
                <span className="text-[14px] font-[500] text-black group-hover:hidden block font-body [letter-spacing:-.01em] mt-[16px] leading-[18.2px]">
                  {service.distance}
                </span>
                <span className="text-[14px] font-[500] text-black hidden group-hover:block font-body [letter-spacing:-.01em] mt-[16px] leading-[18.2px]">
                  {service.rating} Rating
                </span>
              </div>

              <div className="flex items-center justify-center py-2">
                <div className={`relative ${service.dims || 'w-48 h-48'}`}>
                  {/* Default Icon */}
                  <div className="absolute inset-0 transition-opacity group-hover:opacity-0 opacity-100">
                    <Image
                      src={service.icon}
                      alt={service.title}
                      fill
                      className="w-[123px] h-[151px]"
                    />
                  </div>
                  {/* Hover Icon */}
                  <div className="absolute inset-0 transition-opacity group-hover:opacity-100 opacity-0">
                    <Image
                      src={service.hoverIcon}
                      alt={service.title}
                      fill
                      className="w-[162px] h-[151px]"
                    />
                  </div>
                  {/* Overlay Icon (e.g., Sparks) */}
                  {service.overlayIcon && (
                    <div className="absolute bottom-7 -left-3 w-[48px] h-[38px] transition-opacity group-hover:opacity-100 opacity-0 z-10">
                      <Image
                        src={service.overlayIcon}
                        alt="overlay"
                        fill
                        className="w-[130px] h-[151px]"
                      />
                    </div>
                  )}
                </div>
              </div>

              <div className={`px-[16px] py-[8px] mb-[16px] rounded-[228.06px] font-[500] text-[14px] transition-colors duration-300 text-nowrap [letter-spacing:-.01em] leading-[18.2px] font-body ${service.pillColor} ${service.hoverPillColor || ''}`}>
                {service.title}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
