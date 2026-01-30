'use client';

import React from 'react';
import Image from 'next/image';
import Button from '../../common/Button';
import Container from '../../common/Container';

const WhyChooseLux = () => {
    return (
        <section className="mt-16 pb-16 bg-white">
            <Container className="!px-5 md:!px-8 lg:!px-[140px] 2xl:!px-[240px]">
                <div className="flex flex-col items-center text-center">
                    {/* Heading */}
                    <h2 className="text-4xl md:text-6xl font-extrabold text-dark mb-6 whitespace-nowrap">
                        Why Choose Lux?
                    </h2>

                    {/* Subtext */}
                    <p className="text-xl md:text-2xl text-[#4D4D4D] font-normal mb-8">
                        Fast, friendly, and always close by.
                    </p>

                    {/* Button */}
                    <Button
                        variant="primary"
                        className="text-lg font-medium w-[200px] md:w-auto md:px-6"
                    >
                        Book Now
                    </Button>
                </div>

                {/* Fast, Easy Booking Section */}
                <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-[62px] items-center">
                    {/* Text Column - Order 2 on mobile, Order 1 on Desktop */}
                    <div className="text-center md:text-left order-2 md:order-1">
                        <h3 className="text-3xl md:text-5xl font-extrabold text-dark mb-6 leading-tight">
                            Fast, easy booking <br />
                            never wait for quotes
                        </h3>
                        <p className="text-xl text-[#4D4D4D] font-normal leading-relaxed">
                            Book instantly with clear, upfront prices no hidden fees
                            or time-wasting phone calls.
                        </p>
                    </div>

                    {/* Image Column - Order 1 on mobile, Order 2 on Desktop */}
                    <div className="relative w-full h-auto md:h-[450px] flex justify-center md:justify-end order-1 md:order-2">
                        {/* Wrapper with overflow-hidden ensures rounded corners clip the image */}
                        <div className="overflow-hidden rounded-xl">
                            <img
                                src="/assets/easybooking.webp"
                                alt="Fast, easy booking interface"
                                className="h-auto md:h-full w-full md:w-auto max-w-full object-contain rounded-xl"
                            />
                        </div>
                    </div>
                </div>

                {/* Vetted Local Providers Section */}
                <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
                    {/* Image Column - Order 1 on mobile, Order 1 on Desktop (left) */}
                    <div className="relative w-full h-auto md:h-[446px] flex justify-center order-1">
                        {/* Wrapper with overflow-hidden ensures rounded corners clip the image */}
                        <div className="overflow-hidden rounded-xl w-full h-full">
                            <img
                                src="/assets/localprovider.png"
                                alt="Vetted local providers"
                                className="w-full h-full object-cover rounded-xl"
                            />
                        </div>
                    </div>

                    {/* Text Column - Order 2 on mobile, Order 2 on Desktop (right) */}
                    <div className="text-center md:text-left order-2">
                        <h3 className="text-3xl md:text-5xl font-extrabold text-dark mb-6 leading-tight">
                            Vetted local providers
                        </h3>
                        <p className="text-xl text-[#4D4D4D] font-normal leading-relaxed">
                            Every Lux pro is identity-checked and reviewed by
                            neighbors, so you always get quality, reliable service.
                        </p>
                    </div>
                </div>

                {/* Effortless Recurring Appointments Section */}
                <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
                    {/* Text Column - Order 2 on mobile, Order 1 on Desktop (left) */}
                    <div className="text-center md:text-left order-2 md:order-1">
                        <h3 className="text-3xl md:text-5xl font-extrabold text-dark mb-6 leading-tight">
                            Effortless recurring<br />
                            appointments
                        </h3>
                        <p className="text-xl text-[#4D4D4D] font-normal leading-relaxed">
                            Schedule once and relax Lux automatically handles your
                            regular visits to keep everything consistently spotless.
                        </p>
                    </div>

                    {/* Image Column - Order 1 on mobile, Order 2 on Desktop (right) */}
                    <div className="relative w-full h-auto md:h-[496px] flex justify-center md:justify-end order-1 md:order-2">
                        {/* Wrapper with overflow-hidden ensures rounded corners clip the image */}
                        <div className="overflow-hidden rounded-xl">
                            <img
                                src="/assets/recurringappointments.webp"
                                alt="Effortless recurring appointments"
                                className="h-auto md:h-full w-auto max-w-full object-contain rounded-xl"
                            />
                        </div>
                    </div>
                </div>
            </Container>
        </section>
    );
};

export default WhyChooseLux;
