'use client';

import React from 'react';
import Image from 'next/image';
import Button from '../../common/Button';
import Container from '../../common/Container';

const WhyChooseLux = () => {
  return (
    <section className="custom-md:mt-[48px] lg:mt-16 custom-md:pb-[48px] lg:pb-16 bg-white custom-md:max-w-[746px] lg:max-w-[960px] mx-auto ">
      <div className="">
        <div className="flex flex-col items-center text-center">
          {/* Heading */}
          <h2 className="text-[40px] custom-md:text-[40px] lg:text-[48px] font-[600] custom-md:[letter-spacing:-0.03em] lg:[letter-spacing:-0.01em] font-general-sans  custom-md:leading-[52px] lg:leading-[62.4px] text-black custom-md:mb-[16px] lg:mb-[16px] whitespace-nowrap">
            Why Choose Lux?
          </h2>

          {/* Subtext */}
          <p className=" text-[#4D4D4D]  custom-md:text-[20px] lg:text-[18px] font-[500] [letter-spacing:-0.03em] custom-md:leading-[28px] lg:leading-[25.2px] tracking-tight mb-[16px] font-body">
            Fast, frendly, and always close by.
          </p>

          {/* Button */}
          <Button
            variant="primary"
            className="text-lg font-medium w-[200px] [letter-spacing:-0.01em] md:w-auto "
          >
            Book Now
          </Button>
        </div>

        {/* Fast, Easy Booking Section */}
        <div className=" custom-md:mt-[32px] lg:mt-16 grid grid-cols-1 font-body md:grid-cols-2  custom-md:gap-[64px] lg:gap-[62px] items-center">
          {/* Text Column - Order 2 on mobile, Order 1 on Desktop */}
          <div className="text-center  md:text-left order-2 md:order-1 lg:max-h-[138px]">
            <h3 className="text-[26px] font-[600] text-black mb-[20px] leading-[33.8px] [word-spacing:-3px] [letter-spacing:-0.0315em] ">
              Fast, easy booking <br />
              <span className="[word-spacing:-3px]">never wait for quotes</span>
              
            </h3>
            <p className="custom-md:text-[20px] lg:text-[18px] [letter-spacing:-0.03em] text-[#4D4D4D] font-[500] custom-md:leading-[28px] lg:leading-[25.2px] tracking-tight">
              Book instantly with clear, upfront
              <span className='custom-md:block lg:inline'> prices no hidden fees <span className='lg:hidden'>or time‑wasting phone calls.</span> </span>
              <span className="lg:block  custom-md:hidden ">
              or time‑wasting phone calls. </span>
            </p>
          </div>

          {/* Image Column - Order 1 on mobile, Order 2 on Desktop */}
          <div className="relative w-full  flex justify-center md:justify-end order-1 md:order-2">
            {/* Wrapper with overflow-hidden ensures rounded corners clip the image */}
            <div className="overflow-hidden rounded-[16px]">
              <img
                src="/assets/easybooking.webp"
                alt="Fast, easy booking interface"
                className=" md:w-auto max-w-full object-contain rounded-[16px] custom-md:h-[378px] lg:h-[496px]"
              />
            </div>
          </div>
        </div>

        {/* Vetted Local Providers Section */}
        <div className=" custom-md:mt-[32px] lg:mt-16 grid grid-cols-1 md:grid-cols-2 gap-[64px] items-center">
          {/* Image Column - Order 1 on mobile, Order 1 on Desktop (left) */}
          <div className="relative w-full custom-md:h-[340px] lg:h-[446px] flex justify-center order-1">
            {/* Wrapper with overflow-hidden ensures rounded corners clip the image */}
            <div className="overflow-hidden rounded-[16px] w-full custom-md:-h-[340px] lg:h-full">
              <img
                src="/assets/localprovider.png"
                alt="Vetted local providers"
                className="w-full h-full object-cover rounded-[16px]"
              />
            </div>
          </div>

          {/* Text Column - Order 2 on mobile, Order 2 on Desktop (right) */}
          <div className="text-center font-body md:text-left order-2 ">
            <h3 className="md:text-[26px]  font-[600] text-black mb-[20px] [letter-spacing:-0.03em] md:leading-[33.8px] lg:leading-[33.4px] tracking-tight">
              Vetted local providers
            </h3>
            <p className="custom-md:text-[20px] lg:text-[18px] text-[#4D4D4D] font-[500] [letter-spacing:-0.03em] custom-md:leading-[28px] lg:leading-[25.2px] [letter-spacing:-0.03em] tracking-tight">
              Every Lux pro is identity‑checked and reviewed by
              neighbors, so you always get quality, reliable service.
            </p>
          </div>
        </div>

        {/* Effortless Recurring Appointments Section */}
        <div className="custom-md:mt-[32px] lg:mt-16 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          {/* Text Column - Order 2 on mobile, Order 1 on Desktop (left) */}
          <div className="text-center md:text-left order-2 md:order-1">
            <h3 className=" custom-md:text-[26px] font-[600] font-body md:[letter-spacing:-0.03em] lg:[letter-spacing:-0.0301em] custom-md:[word-spacing:2.2px] lg:[word-spacing:-3px] text-black mb-[20px]  leading-[33.8px]">
              Effortless recurring <br />
             <span className="[word-spacing:-3px] ">appointments</span> 
            </h3>
            <p className=" custom-md:text-[20px] lg:text-[18px] text-[#4D4D4D] font-[500] font-body [letter-spacing:-0.03em] custom-md:leading-[28px] lg:leading-[25.4px]  tracking-tight">
              Schedule once and relax Lux automatically handles your 
              regular visits to keep everything consistently spotless.
            </p>
          </div>

          {/* Image Column - Order 1 on mobile, Order 2 on Desktop (right) */}
          <div className="relative w-full custom-md:h-[377px] lg:h-[496px] flex justify-center md:justify-end order-1 md:order-2">
            {/* Wrapper with overflow-hidden ensures rounded corners clip the image */}
            <div className="overflow-hidden rounded-[16px]">
              <img
                src="/assets/recurringappointments.webp"
                alt="Effortless recurring appointments"
                className="custom-md:h-[377px] lg:h-full w-full  rounded-[16px]"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseLux;
