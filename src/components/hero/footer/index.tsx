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
        <footer className="bg-black text-white pt-12 pb-8">
            <Container className="!px-5 md:!px-8 lg:!px-[140px] 2xl:!px-[240px]">
                {/* Top Section: Logo and Scroll to Top */}
                <div className="flex items-center justify-between mb-[65px]">
                    {/* Logo */}
                    <span className="font-inter font-black italic text-4xl md:text-5xl tracking-tight text-white">lux</span>

                    {/* Scroll to Top Button */}
                    <button
                        onClick={scrollToTop}
                        className="w-12 h-12 bg-[#00C974] rounded-lg flex items-center justify-center hover:bg-[#00A85E] transition-colors"
                        aria-label="Scroll to top"
                    >
                        <ArrowUp className="w-5 h-5 text-black" />
                    </button>
                </div>

                {/* Navigation Links - Desktop/Tablet */}
                <div className="hidden sm:flex justify-between mb-16">
                    {/* Column 1 - Main Links */}
                    <div className="flex flex-col gap-6">
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

                    {/* Column 2 - Social Links */}
                    <div className="flex flex-col gap-6">
                        <Link href="https://instagram.com" target="_blank" className="text-white text-base font-medium hover:opacity-80 transition-opacity">
                            Instagram
                        </Link>
                        <Link href="https://facebook.com" target="_blank" className="text-white text-base font-medium hover:opacity-80 transition-opacity">
                            Facebook
                        </Link>
                        <Link href="https://x.com" target="_blank" className="text-white text-base font-medium hover:opacity-80 transition-opacity">
                            X
                        </Link>
                    </div>

                    {/* Column 3 - Support Links */}
                    <div className="flex flex-col gap-6">
                        <Link href="/chat" className="text-white text-base font-medium hover:opacity-80 transition-opacity">
                            Chat with us
                        </Link>
                        <Link href="/faqs" className="text-white text-base font-medium hover:opacity-80 transition-opacity">
                            FAQs
                        </Link>
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
                    <div className="flex flex-col gap-4">
                        <Link href="https://instagram.com" target="_blank" className="text-white text-base font-medium hover:opacity-80 transition-opacity">
                            Instagram
                        </Link>
                        <Link href="https://facebook.com" target="_blank" className="text-white text-base font-medium hover:opacity-80 transition-opacity">
                            Facebook
                        </Link>
                        <Link href="https://x.com" target="_blank" className="text-white text-base font-medium hover:opacity-80 transition-opacity">
                            X
                        </Link>
                    </div>

                    {/* Support Links */}
                    <div className="flex flex-col gap-4">
                        <Link href="/chat" className="text-white text-base font-medium hover:opacity-80 transition-opacity">
                            Chat with us
                        </Link>
                        <Link href="/faqs" className="text-white text-base font-medium hover:opacity-80 transition-opacity">
                            FAQs
                        </Link>
                    </div>

                    {/* Legal Links - Mobile */}
                    <div className="flex flex-col gap-4">
                        <Link href="/privacy" className="text-white text-base font-medium hover:opacity-80 transition-opacity">
                            Privacy
                        </Link>
                        <Link href="/terms" className="text-white text-base font-medium hover:opacity-80 transition-opacity">
                            Terms
                        </Link>
                        <Link href="/safety" className="text-white text-base font-medium hover:opacity-80 transition-opacity">
                            Safety
                        </Link>
                    </div>
                </div>

                {/* Bottom Section: Copyright and Legal */}
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between pt-16">
                    {/* Copyright */}
                    <p className="text-gray-500 text-sm mb-4 sm:mb-0">
                        © 2025 Lux. All rights reserved.
                    </p>

                    {/* Legal Links - Desktop/Tablet */}
                    <div className="hidden sm:flex items-center gap-8">
                        <Link href="/privacy" className="text-white text-sm font-medium hover:opacity-80 transition-opacity">
                            Privacy
                        </Link>
                        <Link href="/terms" className="text-white text-sm font-medium hover:opacity-80 transition-opacity">
                            Terms
                        </Link>
                        <Link href="/safety" className="text-white text-sm font-medium hover:opacity-80 transition-opacity">
                            Safety
                        </Link>
                    </div>
                </div>
            </Container>
        </footer>
    );
};

export default Footer;
