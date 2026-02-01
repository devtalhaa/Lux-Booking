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
    <div className="max-w-[960px] mx-auto mt-16">
      <div className="text-center w-full">
        <h1 className="font-general-sans text-4xl md:text-[64px] font-[600] text-black tracking-[-0.03em] md:leading-[83px] mb-10">
          Book Local Services Instantly.
        </h1>
      </div>
      <div className=''>
        <Services />
      </div>

      {/* Call to Action Section */}
      <section className="pt-[40px]">
        <div className="">
          <div className="flex items-center justify-between gap-4 md:flex-row">
            <p className="text-xl text-nowrap text-[#4D4D4D] font-[500] text-center md:text-left text-[18px] font-body tracking-tight">
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

