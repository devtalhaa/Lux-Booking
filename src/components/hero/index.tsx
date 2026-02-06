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
import { useLanguage } from '@/context/LanguageContext';

const Hero = () => {
  const { t } = useLanguage();

  return (
    <div className=" custom-md:max-w-[746px] lg:max-w-[960px] mx-auto  mt-[20px] custom-md:mt-[48px] lg:mt-[64px]">
      <div className="text-center w-full">
        <h1 className=" text-center font-general-sans break-words custom-md:text-nowrap text-[40px]   custom-md:text-[48px] lg:text-[64px] font-[600] text-black [letter-spacing:-.03em] custom-md:[letter-spacing:-.01em] lg:[letter-spacing:-.03em] leading-[52px] custom-md:leading-[62.4px] lg:leading-[83.2px] mb-[40px]">
          {t('hero.title')}
        </h1>
      </div>
      <div className=''>
        <Services />
      </div>

      {/* Call to Action Section */}
      <section className="pt-[41px] w-full">
        <div className="text-center w-full">
          <div className="custom-md:flex items-center justify-between gap-4 ">
            <p className="text-center custom-md:text-left text-[20px] lg:text-[18px] leading-[25.2px] text-nowrap text-[#4D4D4D] font-[500] text-[18px] [letter-spacing:-.03em] font-body tracking-tight">
              {t('hero.subtitle')}
            </p>
            <Button
              variant="primary"
              className="text-lg font-medium  w-auto md:w-auto text-nowrap mt-[17px]  custom-md:mt-0"
            >
              {t('hero.bookNow')}
            </Button>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Hero;

