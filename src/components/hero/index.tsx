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
            <h1 className="font-general-sans text-4xl md:text-[64px] font-bold text-black tracking-[-0.03em] mb-10">
              Book Local Services Instantly.
            </h1>
          </div>
        <div className='flex'>
          <Services />
        </div>

      {/* Call to Action Section */}
      <section className="mt-10 pb-24">
        <Container className="px-5 md:px-8 lg:px-[140px] 2xl:px-[240px]">
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
            <p className="text-xl md:text-2xl text-black font-medium text-center md:text-left">
              Fast, friendly, and always close by.
            </p>
            <Button
              variant="primary"
              className="text-lg font-medium w-[200px] md:w-auto md:px-6"
            >
              Book Now
            </Button>
          </div>
        </Container>
      </section>


    </div>
  );
};

export default Hero;

