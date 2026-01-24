'use client';

import React from 'react';
import Link from 'next/link';
import Button from '../common/Button';
import Container from '../common/Container';
import Services from './services';
import About from './about';
import { Globe } from 'lucide-react';
import { motion } from 'framer-motion';

const Hero = () => {
    return (
        <>
            <div className="pt-8 pb-16">
                <Container>
                    {/* Navigation / Header */}
                    <motion.nav
                        initial={{ opacity: 0, y: -20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: false }}
                        transition={{ duration: 0.5 }}
                        className="flex items-center justify-between mb-24"
                    >
                        <div className="flex items-center">
                            {/* Logo */}
                            <span className="font-inter font-black italic text-5xl tracking-tight">lux</span>
                        </div>

                        <div className="flex items-center gap-4">
                            <Button className="rounded-lg bg-[#F4F4F5] hover:bg-gray-300 text-sm sm:shadow-none font-medium">
                                <Globe className="w-5 h-6 mr-2" /> EN
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
                    </motion.nav>

                    {/* Hero Headline */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: false }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="text-center w-full mt-16"
                    >
                        <h1 className="font-heading text-5xl md:text-6xl font-bold text-dark leading-tight mb-12">
                            Book Local Services Instantly.
                        </h1>
                    </motion.div>
                </Container>
            </div>

            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false }}
                transition={{ duration: 0.6, delay: 0.4 }}
            >
                <Services />
            </motion.div>

            {/* Call to Action Section */}
            <section className="pb-24 pt-8">
                <Container>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: false }}
                        transition={{ duration: 0.6, delay: 0.6 }}
                        className="flex flex-col md:flex-row items-center justify-between gap-4"
                    >
                        <p className="text-xl md:text-2xl text-dark font-medium">
                            Fast, friendly, and always close by.
                        </p>
                        <Button variant="primary" className="text-lg font-semibold">
                            Book Now
                        </Button>
                    </motion.div>
                </Container>
            </section>

            <About />
        </>
    );
};

export default Hero;
