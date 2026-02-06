'use client';

import { useState, useRef } from 'react'
import Image from 'next/image';
import Link from 'next/link';
import Button from '../../common/Button';
import { Globe, Menu, X } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { locale, setLocale, t } = useLanguage();


  const handleLanguageChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setLocale(e.target.value as 'en' | 'es');
  };



  return (
    <nav className="flex flex-col custom-md:px-0 px-[20px] py-[24px] lg:max-w-[960px] custom-md:max-w-[746px] mx-auto">

      <div className="flex items-center justify-between">
        {/* Logo */}
        <img src="/assets/mainLogo.svg" alt="Lux Logo" className="w-[67px] h-[36px] custom-md:w-[60px] custom-md:h-[32px]" />

        {/* Desktop Navigation */}
        <div className="hidden custom-md:flex items-center gap-[8px]">
          <div className="relative rounded-[8px] max-h-[33px] [letter-spacing:-.01em] py-2 px-2 font-body bg-[#F7F7F7] inline-flex items-center leading-[18px] text-black font-medium cursor-pointer">
            <Globe className="w-[16.25px] h-[16.25px] mr-[5px] mt-[1px]" strokeWidth="1.6" />
            <span className="text-[14px]">{locale === 'en' ? 'En' : 'ES'}</span>
            <select
              value={locale}
              onChange={handleLanguageChange}
              className="absolute inset-0 w-full h-full opacity-0 cursor-pointer appearance-none text-[12px] font-sans font-[400]"
            >
              <option value="en" className="text-[12px] font-sans font-[400]">En</option>
              <option value="es" className="text-[12px] font-sans font-[400]">ES</option>
            </select>
          </div>
          <Link href="/login">
            <Button variant="secondary" className=' text-nowrap leading-[18.2px] [letter-spacing:-.01em]'>
              {t('header.signIn')}
            </Button>
          </Link>
          <Button variant="primary" className="font-medium">
            {t('header.offeringServices')}
          </Button>
        </div>

        {/* Mobile Navigation */}
        <div className="flex custom-md:hidden items-center gap-[10px]">
          <div className="relative rounded-lg bg-[#F7F7F7] h-[33px] flex items-center justify-center px-2 text-[14px] text-black cursor-pointer">
            <Globe className="mr-[6.5px] w-4 h-4 mt-[1px]" strokeWidth={1.6} />
            <span className="text-[14px]">{locale === 'en' ? 'En' : 'ES'}</span>
            <select
              value={locale}
              onChange={handleLanguageChange}
              className="absolute inset-0 w-full h-full opacity-0 cursor-pointer appearance-none text-[12px] font-sans font-[400]"
            >
              <option value="en" className="text-[12px] font-sans font-[400]">En</option>
              <option value="es" className="text-[12px] font-sans font-[400]">ES</option>
            </select>
          </div>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="text-black"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? (
              <img src="/assets/close.svg" alt="close" className='p-[12px] ' />
            ) : (
              <img src="/assets/hamburger.svg" alt="menu" className='stroke-black box-content py-[11px] pl-[10px] pr-[9px] h-[12px] w-[17px]' />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu Panel */}
      {mobileMenuOpen && (
        <div className="flex flex-col gap-[8px] mt-8 custom-md:hidden">
          <Link href="/login" className="w-full">
            <Button variant="secondary" className="w-full py-2 text-lg leading-[18.2px] [letter-spacing:-.01em]">
              {t('header.signIn')}
            </Button>
          </Link>
          <Button variant="primary" className="w-full py-[8px] text-lg font-medium leading-[18px]">
            {t('header.offeringServices')}
          </Button>
        </div>
      )}
    </nav>
  )
}

export default Header
