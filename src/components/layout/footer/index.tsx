'use client';

import React from 'react';
import Link from 'next/link';
import Container from '../../common/Container';
import { ArrowUp, ArrowRight } from 'lucide-react';

const Footer = () => {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <footer className="bg-black text-white py-[64px]">
            <div className="max-w-[960px] mx-auto ">
                {/* Top Section: Logo and Scroll to Top */}
                <div className="flex items-center justify-between ">
                    {/* Logo */}
                    <span className="font-inter font-black italic text-4xl md:text-5xl tracking-tight text-white">
                        <img src="/assets/Logo_white.svg" alt=""  className='h-[43px]'/></span>

                    {/* Scroll to Top Button */}
                    <button
                        onClick={scrollToTop}
                        className="w-[40px]  h-[40px] bg-[#00C974] rounded-lg flex items-center justify-center hover:bg-[#00A85E] transition-colors"
                        aria-label="Scroll to top"
                    >
                        <img src="/assets/Arrow.svg" alt="" />
                    </button>
                </div>

                {/* Navigation Links - Desktop/Tablet */}
                <div className="hidden sm:flex justify-between mb-[64px] lg:mt-[64px] font-body ">
                    {/* Column 1 - Main Links */}
                    <div className="flex flex-col gap-[24px] [letter-spacing:-0.01em] [word-spacing:-0.1.5px]">
                        <a href="/book" className="text-white text-[16px] leading-[20.8px] font-[500] flex items-center gap-[10px] hover:opacity-80 transition-opacity">
                            Book Now <img src="/assets/SmallArrow.svg" alt="" className='rotate-90 w-[14.5px] h-[15px]'/>
                        </a>
                        <a href="/services" className="text-white text-[16px] leading-[20.8px] [letter-spacing:-0.01em] [word-spacing:-1.5px] font-[500] hover:opacity-80 transition-opacity">
                        What is Lux<span className='[word-spacing:-0.5px]'>&nbsp;& Our Services</span>
                        </a>
                    <a href="/why-choose-lux" className="text-white text-[16px] leading-[21px] font-[500] hover:opacity-80 transition-opacity">
                            Why Choose Lux
                        </a>
                        <a href="/start-earning" className="text-white text-[16px] leading-[21px] font-[500] hover:opacity-80 transition-opacity">
                            Start Earning
                        </a>
                    </div>

                    {/* Column 2 - Social Links */}
                    <div className="flex flex-col gap-y-[24px]">
                        <a href="https://instagram.com" target="_blank" className="text-white leading-[20.8px] [letter-spacing:-0.01em] text-base font-[500] hover:opacity-80 transition-opacity">
                            Instagram
                        </a>
                        <a href="https://facebook.com" target="_blank" className="text-white leading-[20.8px] [letter-spacing:-0.01em] text-base font-[500] hover:opacity-80 transition-opacity">
                            Facebook
                        </a>
                        <a href="https://x.com" target="_blank" className="text-white leading-[20.8px] [letter-spacing:-0.01em] text-base font-[500] hover:opacity-80 transition-opacity">
                            X
                        </a>
                    </div>

                    {/* Column 3 - Support Links */}
                    <div className="flex flex-col gap-y-[24px]">
                        <a href="/chat" className="text-white leading-[20.8px] [letter-spacing:-0.01em] text-base font-medium hover:opacity-80 transition-opacity">
                           <span className="[word-spacing:-2px]">Chat with</span> us
                        </a>
                        <a href="/faqs" className="text-white leading-[20.8px] [word-spacing:-2px] [letter-spacing:-0.01em] text-base font-medium hover:opacity-80 transition-opacity">
                            FAQs
                        </a>
                    </div>
                </div>

                {/* Navigation Links - Mobile */}
                <div className="flex flex-col sm:hidden gap-8 mb-12">
                    {/* Main Links */}
                    <div className="flex flex-col gap-4">
                        <Link href="/book" className="text-white text-base font-medium flex items-center gap-2 hover:opacity-80 transition-opacity">
                            Book Now <ArrowRight className="w-4 h-4" />
                        </Link>
                        <Link href="/services" className="text-white text-base font-medium hover:opacity-80 transition-opacity">
                            What is Lux & Our Services
                        </Link>
                        <Link href="/why-choose-lux" className="text-white text-base font-medium hover:opacity-80 transition-opacity">
                            Why Choose Lux
                        </Link>
                        <Link href="/start-earning" className="text-white text-base font-medium hover:opacity-80 transition-opacity">
                            Start Earning
                        </Link>
                    </div>

                    {/* Social Links */}
                    <div className="flex flex-col gap-y-4">
                        <Link href="https://instagram.com" target="_blank" className="text-white text-base font-medium hover:opacity-80 [letter-spacing:-0.01em] leading-[20.8px] transition-opacity">
                            Instagram
                        </Link>
                        <Link href="https://facebook.com" target="_blank" className="text-white text-base font-medium hover:opacity-80 [letter-spacing:-0.01em] leading-[20.8px] transition-opacity">
                            Facebook
                        </Link>
                        <Link href="https://x.com" target="_blank" className="text-white text-base font-medium hover:opacity-80 [letter-spacing:-0.01em] leading-[20.8px] transition-opacity">
                            X
                        </Link>
                    </div>

                    {/* Support Links */}
                    <div className="flex flex-col gap-y-[24px] ">
                        <Link href="/chat" className="text-white [letter-spacing:-0.01em] text-[16px] leading-[20.8px] font-medium hover:opacity-80 transition-opacity">
                            Chat with us
                        </Link>
                        <Link href="/faqs" className="text-white [letter-spacing:-0.01em] text-[16px] leading-[20.8px] font-medium hover:opacity-80 transition-opacity">
                            FAQs
                        </Link>
                    </div>

                    {/* Legal Links - Mobile */}
                    <div className="flex flex-col gap-[32px]">
                        <Link href="/privacy" className="text-white text-[16px] font-medium hover:opacity-80 transition-opacity">
                            Privacy
                        </Link>
                        <Link href="/terms" className="text-white text-[16px] font-medium hover:opacity-80 transition-opacity">
                            Terms
                        </Link>
                        <Link href="/safety" className="text-white text-[16px] font-medium hover:opacity-80 transition-opacity">
                            Safety
                        </Link>
                    </div>
                </div>

                {/* Bottom Section: Copyright and Legal */}
                <div className="flex flex-col sm:flex-row font-body items-start sm:items-center justify-between ">
                    {/* Copyright */}
                    <p className=" text-[16px] font-[500] [letter-spacing:-0.01em]  sm:mb-0 text-[#808080] font-body">
                        <span className='[word-spacing:-1.6px]'>© 2025 Lux.</span> All rights reserved.
                    </p>

                    {/* Legal Links - Desktop/Tablet */}
                    <div className="hidden sm:flex items-center gap-[32px]">
                        <Link href="/privacy" className="text-white text-[16px] font-[500] [letter-spacing:-0.01em] leading-[20.8px] hover:opacity-80 transition-opacity">
                            Privacy
                        </Link>
                        <Link href="/terms" className="text-white text-[16px] font-[500] [letter-spacing:-0.01em] leading-[20.8px] hover:opacity-80 transition-opacity">
                            Terms
                        </Link>
                        <Link href="/safety" className="text-white text-[16px] font-[500] [letter-spacing:-0.01em]leading-[20.8px] hover:opacity-80 transition-opacity">
                            Safety
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
