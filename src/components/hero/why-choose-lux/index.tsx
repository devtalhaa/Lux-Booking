'use client';

import React from 'react';
import Image from 'next/image';
import Button from '../../common/Button';
import Container from '../../common/Container';

const WhyChooseLux = () => {
  return (
    <section className="mt-[48px] lg:mt-16 px-[20px] custom-md:px-0 pb-[32px] custom-md:pb-[48px] lg:pb-16 bg-white custom-md:max-w-[746px] lg:max-w-[960px] mx-auto ">
      <div className="">
        <div className="flex flex-col items-center text-center">
          {/* Heading */}
          <h2 className="text-[40px] custom-md:text-[40px] lg:text-[48px] font-[600] [letter-spacing:-0.03em] lg:[letter-spacing:-0.01em] font-general-sans  leading-[52px] lg:leading-[62.4px] text-black mb-[16px] lg:mb-[16px] break-words large-mobile:whitespace-nowrap">
            Why Choose Lux?
          </h2>

          {/* Subtext */}
          <p className=" text-[#4D4D4D]  text-[20px] lg:text-[18px] font-[500] [letter-spacing:-0.03em] leading-[28px] lg:leading-[25.2px] tracking-tight mb-[16px] font-body">
            Fast, frendly, and always close by.
          </p>

          {/* Button */}
          <Button
            variant="primary"
            className="text-lg font-medium w-[200px] [letter-spacing:-0.01em] w-auto "
          >
            Book Now
          </Button>
        </div>

        {/* Fast, Easy Booking Section */}
        <div className="mt-[48px] custom-md:mt-[32px] lg:mt-16 grid grid-cols-1 font-body custom-md:grid-cols-2  custom-md:gap-[64px] lg:gap-[62px] items-center">
          {/* Text Column - Order 2 on mobile, Order 1 on Desktop */}
          <div className="text-center custom-md:text-left order-2 custom-md:order-1 lg:max-h-[138px]">
            <h3 className="text-[26px] mt-[32px] custom-md:mt-0  font-[600] text-black mb-[20px] leading-[33.8px] [word-spacing:-3px] custom-md:[word-spacing:-3px] [letter-spacing:-0.0315em] ">
              <span className="custom-md:mr-0 mr-[6px]">Fast, easy booking</span>
              <span className="[word-spacing:-3px] [letter-spacing:-0.0315em] block">never wait for quotes</span>

            </h3>
            <p className="text-[20px] hidden custom-md:block lg:text-[18px] [letter-spacing:-0.03em] text-[#4D4D4D] font-[500] leading-[28px] lg:leading-[25.2px] custom-md:tracking-tight">
              Book instantly with clear, upfront
              <span className='custom-md:block lg:inline'> prices no hidden fees <span className='hidden custom-md:inline lg:block'>or time‑wasting <span className='custom-md:block lg:inline'>phone calls.</span> </span> </span>

            </p>
            <p className="text-[20px] block custom-md:hidden [letter-spacing:-0.03em] text-[#4D4D4D] font-[500] leading-[28px] max-w-[350px] custom-md:w-auto mx-auto">
              Book instantly with clear, upfront prices no hidden fees or time‑wasting phone calls.
            </p>
          </div>

          {/* Image Column - Order 1 on mobile, Order 2 on Desktop */}
          <div className="relative w-full  flex justify-center custom-md:justify-end order-1 custom-md:order-2">
            {/* Wrapper with overflow-hidden ensures rounded corners clip the image */}
            <div className="overflow-hidden rounded-[16px]">
              <img
                src="/assets/easybooking.webp"
                alt="Fast, easy booking interface"
                className="custom-md:w-auto max-w-full object-contain rounded-[16px] custom-md:h-[378px] lg:h-[496px]"
              />
            </div>
          </div>
        </div>

        {/* Vetted Local Providers Section */}
        <div className="mt-[48px] custom-md:mt-[32px] lg:mt-16 grid grid-cols-1 custom-md:grid-cols-2 custom-md:gap-[64px] gap-[32px] items-center">
          {/* Image Column - Order 1 on mobile, Order 1 on Desktop (left) */}
          <div className="relative w-full flex  justify-center custom-md:justify-start order-1">
            {/* Wrapper with overflow-hidden ensures rounded corners clip the image */}
            <div className="rounded-[16px] custom-md:w-full h-[334.2px] custom-md:h-full ">
              <img
                src="/assets/localprovider.png"
                alt="Vetted local providers"
                className="h-[348.438px] custom-md:max-h-[340px] lg:max-h-none lg:h-[446px] object-cover  rounded-[16px] max-w-auto lg:max-w-none large-mobile:max-w-[350px] custom-md:w-full "
              />
            </div>
          </div>

          {/* Text Column - Order 2 on mobile, Order 2 on Desktop (right) */}
          <div className=" mx-auto custom-md:mx-0  mt-[15px] custom-md:mt-0 font-body  custom-md:text-left order-2 ">
            <h3 className=" text-[26px] text-center custom-md:text-left  font-[600] text-black mb-[20px]  [letter-spacing:-0.03em] leading-[33.8px] lg:leading-[33.4px] tracking-tight">
              Vetted local providers
            </h3>
            <p className="text-[20px] text-center custom-md:text-left lg:text-[18px] text-[#4D4D4D] max-w-[350px] custom-md:w-auto lg:max-w-none font-[500] [letter-spacing:-0.03em] leading-[28px] lg:leading-[25.2px] [letter-spacing:-0.03em] tracking-tight">
              Every Lux pro is identity‑checked and reviewed by
              neighbors, so you always get quality, reliable service.
            </p>
          </div>
        </div>

        {/* Effortless Recurring Appointments Section */}
        <div className="mt-[48px] custom-md:mt-[32px] lg:mt-16 grid grid-cols-1 custom-md:grid-cols-2 gap-[32px] custom-md:gap-16 items-center">
          {/* Text Column - Order 2 on mobile, Order 1 on Desktop (left) */}
          <div className="text-center custom-md:text-left order-2 custom-md:order-1">
            <h3 className="text-[26px] font-[600] font-body [letter-spacing:-0.03em] lg:[letter-spacing:-0.0301em] [word-spacing:-3px] custom-md:[word-spacing:2.2px] lg:[word-spacing:-3px] text-black mb-[20px]  leading-[33.8px]">
              Effortless recurring <br />
              <span className="[word-spacing:-3px] ">appointments</span>
            </h3>
            <p className="text-[20px] lg:text-[18px] font-body [letter-spacing:-0.03em] text-[#4D4D4D] font-[500] lg:leading-[25.2px] leading-[28px] max-w-[350px] custom-md:max-w-none mx-auto">
              Schedule once and relax Lux automatically handles your
              regular visits to keep everything consistently spotless.
            </p>
          </div>

          {/* Image Column - Order 1 on mobile, Order 2 on Desktop (right) */}
          <div className="relative w-full custom-md:h-[377px] lg:h-[496px] flex justify-center custom-md:justify-end order-1 custom-md:order-2">
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
    </section >
  );
};

export default WhyChooseLux;
