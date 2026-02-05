'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Button from '../common/Button';
import Container from '../common/Container';
import Services from './services';
import WhyChooseLux from './why-choose-lux';
import StartEarning from './start-earning';
import Footer from '../layout/footer';
import { Globe, Menu, X } from 'lucide-react';

const Hero = () => {

  return (
    <div className=" custom-md:max-w-[746px] lg:max-w-[960px] mx-auto custom-md:mt-[48px] lg:mt-[64px]">
      <div className="text-center w-full">
        <h1 className=" text-center font-general-sans text-nowrap custom-md:text-[48px] lg:text-[64px] font-[600] text-black custom-md:[letter-spacing:-.01em] lg:[letter-spacing:-.03em] custom-md:leading-[62.4px] lg:leading-[83.2px] mb-[40px]">
          Book Local Services Instantly.
        </h1>
      </div>
      <div className=''>
        <Services />
      </div>

      {/* Call to Action Section */}
      <section className="pt-[41px] w-full">
        <div className="">
          <div className="flex items-center justify-between gap-4 md:flex-row">
            <p className="custom-md:text-[20px] lg:text-[18px] leading-[25.2px] text-nowrap text-[#4D4D4D] font-[500]  md:text-left text-[18px] [letter-spacing:-.03em] font-body tracking-tight">
              Fast, frendly, and always close by.
            </p>
            <Button
              variant="primary"
              className="text-lg font-medium  w-[200px] md:w-auto text-nowrap"
            >
              Book Now
            </Button>
          </div>
        </div>
      </section>


    </div>
  );
};

export default Hero;

