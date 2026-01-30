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
    <nav className="flex flex-col py-[25px] max-w-[960px] mx-auto">

      <div className="flex items-center justify-between">
        {/* Logo */}
        <Image src="/assets/mainLogo.svg" alt="Lux Logo" width={59.5} height={32} className="object-contain" />

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-2">
          <Button size="sm" variant="ghost" className="rounded-lg py-2 px-2 font-inter bg-[#F7F7F7] text-sm text-black shadow-none border-none ring-0 outline-none font-medium"> {/* TODO: Add Dm-Sans font */}
            <Globe className="w-4 h-4 mr-1" strokeWidth="1.5" /> En
          </Button>
          <Link href="/login">
            <Button variant="secondary">
              Sign In
            </Button>
          </Link>
          <Button variant="primary" className="font-medium">
            Offering Services?
          </Button>
        </div>

        {/* Mobile Navigation */}
        <div className="flex md:hidden items-center gap-4">
          <Button className="rounded-lg bg-[#F7F7F7] hover:bg-[#F7F7F7] text-xs text-black hover:text-black shadow-none border-none ring-0 outline-none font-medium px-3 py-1.5">
            <Globe className="w-4 h-4 mr-1.5" /> En
          </Button>
          <button
            onClick={() => setMobileMenuOpen(mobileMenuOpen)}
            className="p-2 text-black"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu Panel */}
      {mobileMenuOpen && (
        <div className="flex flex-col gap-4 mt-8 md:hidden">
          <Link href="/login" className="w-full">
            <Button variant="secondary" className="w-full py-2 text-lg">
              Sign In
            </Button>
          </Link>
          <Button variant="primary" className="w-full py-2 text-lg font-medium">
            Offering Services?
          </Button>
        </div>
      )}
    </nav>
  )
}

export default Header