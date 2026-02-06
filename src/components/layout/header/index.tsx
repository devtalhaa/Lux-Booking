'use client';

import { useState } from 'react'
import Image from 'next/image';
import Link from 'next/link';
import Button from '../../common/Button';
import { Globe, Menu, X } from 'lucide-react';

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    // <nav className="flex flex-col px-5 md:px-8 lg:px-[240px] py-[25px] md:py-0 md:my-6">
    <nav className="flex flex-col custom-md:px-0 px-[20px] py-[24px] lg:max-w-[960px] custom-md:max-w-[746px] mx-auto">

      <div className="flex items-center justify-between">
        {/* Logo */}
        <img src="/assets/mainLogo.svg" alt="Lux Logo" className="w-[67px] h-[36px] custom-md:w-[60px] custom-md:h-[32px]" />

        {/* Desktop Navigation */}
        <div className="hidden custom-md:flex items-center gap-[8px]">
          <Button size="sm" variant="ghost" className="rounded-[8px] max-h-[33px] max-w-[54px] [letter-spacing:-.01em] py-2 px-2 font-body bg-[#F7F7F7] inline-flex leading-[18px] text-black shadow-none border-none ring-0 outline-none font-medium"> {/* TODO: Add Dm-Sans font */}
            <Globe className="w-[16.25px] h-[16.25px] mr-[5px] lg:mb-[1px] " strokeWidth="1.6" /> En
          </Button>
          <Link href="/login">
            <Button variant="secondary" className=' text-nowrap leading-[18.2px] [letter-spacing:-.01em]'>
              Sign In
            </Button>
          </Link>
          <Button variant="primary" className="font-medium">
            Offering Services?
          </Button>
        </div>

        {/* Mobile Navigation */}
        <div className="flex custom-md:hidden items-center  gap-[10px] ">
          <button className="rounded-lg bg-[#F7F7F7] w-[60px] h-[33px] flex items-center justify-center hover:bg-[#F7F7F7] text-[14px] text-black hover:text-black shadow-none border-none ring-0 outline-none font-normal ">
            <Globe className="mr-[6.5px] w-4 h-4 mb-[1px] " strokeWidth={1.6} /><span className=''>En</span>
          </button>
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
              Sign In
            </Button>
          </Link>
          <Button variant="primary" className="w-full py-[8px] text-lg font-medium leading-[18px]">
            Offering Services?
          </Button>
        </div>
      )}
    </nav>
  )
}

export default Header