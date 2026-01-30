'use client';

import React from 'react';
import Image from 'next/image';
import Container from '../../common/Container';
import Button from '../../common/Button';

const About = () => {
    return (
        <section className="py-24 bg-[#F7F7FC] overflow-hidden">
            <Container>
                <div className="flex flex-col md:flex-row items-center gap-16">
                    <div className="w-full md:w-1/2">
                        <div className="relative rounded-[32px] overflow-hidden aspect-square md:aspect-[4/3]">
                            <Image
                                src="/assets/Hero.png"
                                alt="Lux Services"
                                fill
                                className="object-cover"
                                priority
                            />

                            {/* Overlay Card Removed */}
                        </div>
                    </div>

                    <div className="w-full md:w-1/2">
                        <h2 className="font-heading text-5xl md:text-6xl font-medium text-dark mb-8">
                            What Is Lux
                        </h2>
                        <p className="font-body text-xl text-text-muted leading-relaxed mb-8">
                            Lux connects Mexico-City locals with reliable, skilled professionals for all their home service needs. From cleaning to repairs, we make it easy to find help you can trust.
                        </p>
                        {/* Additional content or buttons could go here if design requires */}
                    </div>
                </div>
            </Container>
        </section>
    );
};

export default About;
