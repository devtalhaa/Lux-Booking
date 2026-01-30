'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Button from '../common/Button';
import Container from '../common/Container';
import Services from './services';
import WhyChooseLux from './why-choose-lux';
import StartEarning from './start-earning';
import Footer from './footer';
import { Globe, Menu, X } from 'lucide-react';

const Hero = () => {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    return (
        <>
            <div className="">
                {/* Navigation / Header */}
                <nav className="flex flex-col px-5 md:px-8 lg:px-[140px] 2xl:px-[240px] py-[25px] md:py-0 md:my-6 2xl:my-6.5">
                    <div className="flex items-center justify-between">
                        <div className="flex items-center">
                            {/* Logo */}
                            <span className="font-inter font-black italic text-5xl tracking-tight">lux</span>
                        </div>

                        {/* Desktop Navigation */}
                        <div className="hidden md:flex items-center gap-4">
                            <Button className="rounded-lg bg-[#F7F7F7] hover:bg-gray-300 text-sm shadow-none border-none ring-0 outline-none font-medium">
                                <Globe className="w-5 h-5 mr-2" /> EN
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
                            <Button className="rounded-lg bg-[#F7F7F7] hover:bg-gray-300 text-xs shadow-none border-none ring-0 outline-none font-medium px-3 py-1.5">
                                <Globe className="w-4 h-4 mr-1.5" /> En
                            </Button>
                            <button
                                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                                className="p-2 text-dark"
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

                <Container className="!px-5 md:!px-8 lg:!px-[140px] 2xl:!px-[240px]">
                    {/* Hero Headline */}
                    <div className="text-center w-full mt-5 md:mt-10">
                        <h1 className="font-heading text-4xl md:text-6xl font-bold text-dark leading-tight mb-10">
                            Book Local Services Instantly.
                        </h1>
                    </div>
                </Container>
            </div>

            <div>
                <Services />
            </div>

            {/* Call to Action Section */}
            <section className="mt-10 pb-24">
                <Container className="!px-5 md:!px-8 lg:!px-[140px] 2xl:!px-[240px]">
                    <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
                        <p className="text-xl md:text-2xl text-dark font-medium text-center md:text-left">
                            Fast, friendly, and always close by.
                        </p>
                        <Button
                            variant="primary"
                            className="text-lg font-semibold w-[200px] md:w-auto md:px-6"
                        >
                            Book Now
                        </Button>
                    </div>
                </Container>
            </section>

            <WhyChooseLux />
            <StartEarning />
            <Footer />
        </>
    );
};

export default Hero;

