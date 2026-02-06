import React from 'react';
import Image from 'next/image';
import Button from '@/components/common/Button';

const WhatIsLux = () => {
    const currentServices = ['Handyman', 'Dog Walking', 'Home Cleaning', 'Laundry Pick-Up'];

    const comingSoonServices = ['Personal Traning', 'Plant Care', 'Cooking', 'Language Tutor'];

    return (
        <section className="w-full bg-[#F4F3FB] custom-md:max-h-[814px] px-[20px] lg:px-0 custom-md:px-[32px] lg:py-0 py-[32px] custom-md:py-[48px] mt-[32px] custom-md:mt-[48px] lg:mt-[64px]">
            <div className="custom-md:max-w-[746px] lg:max-w-[960px] mx-auto lg:py-[64px]">
                {/* Top Row - Image and What Is Lux Card */}
                <div className="grid grid-cols-1 custom-md:grid-cols-[1.272fr_1fr] lg:grid-cols-[1.325fr_1fr] gap-[16px] items-start">
                    {/* Left - Image (order-2 on mobile = appears below, order-1 on custom-md = appears left) */}
                    <div className="order-2 custom-md:order-1">
                        <img
                            src="/assets/Lux1.avif"
                            alt="What Is Lux"

                            className="w-full rounded-[16px] h-[347px]  object-cover"
                        />
                    </div>

                    {/* Right - What Is Lux Card (order-1 on mobile = appears first/top, order-2 on custom-md = appears right) */}
                    <div className="order-1 custom-md:order-2 bg-white rounded-[16px]  py-[24px] px-[24px] flex flex-col justify-between custom-md:h-[347px]">
                        <h2 className="text-center custom-md:text-left text-[40px] lg:text-[48px] custom-md:leading-[62.4px] leading-[52px] [letter-spacing:-0.03em] lg:[letter-spacing:-0.01em] font-[600] custom-md:-mt-1 lg:-mt-[2px] font-general-sans text-black ">
                            What Is Lux
                        </h2>
                        <p className="text-[20px] lg:text-[18px] mt-[64px] custom-md:mt-0 text-center custom-md:text-left leading-[28px] lg:leading-[25.2px] [letter-spacing:-0.03em]  font-[500] font-body font-body text-[#4D4D4D] ">
                            Lux connects Mexico‑City locals with <span className='lg:block '>verified pros for everyday tasks fast, simple, </span>nearby.
                        </p>
                    </div>
                </div>

                {/* Bottom Row - Current Services and Services Coming Soon Cards */}
                <div className="custom-md:flex gap-[16px] mt-[16px]">
                    {/* Current Services Card */}
                    <div className="custom-md:flex-1 bg-white rounded-[16px] py-[24px] px-[24px]">
                        <div className="custom-md:flex items-center justify-between text-center mb-[24px]">
                            <h3 className="text-[26px] leading-[33.8px] [letter-spacing:-0.03em]  font-[600]  font-body text-black">
                                <span className="custom-md:hidden">Current Services</span>
                                <span className="hidden custom-md:inline">Current services</span>
                            </h3>
                            <Button variant="primary" className="text-[14px] mt-[16px] custom-md:mt-0 [letter-spacing:-0.01em] leading-[18.2px] font-medium">
                                Book Now
                            </Button>
                        </div>
                        <div className=" custom-md:mt-[64px] mt-[48px]">
                            {currentServices.map((service) => (
                                <span
                                    key={service}
                                    className={`bg-[#E6E6E6] ${service === "Laundry Pick-Up" ? '' : 'mb-[10px]'} text-center custom-md:w-fit custom-md:leading-[20.8px] leading-[18.2px] [letter-spacing:-0.01em] block  px-[16px] py-[8px] rounded-full text-[14px] custom-md:text-[16px] font-[500] font-body text-black`}
                                >
                                    {service}
                                </span>
                            ))}
                        </div>
                    </div>

                    {/* Services Coming Soon Card */}
                    <div className="flex-1 bg-[#D9D7F1] rounded-[16px] mt-[10px] custom-md:mt-0 p-[24px]">
                        <h3 className="text-[26px] leading-[1.3em] custom-md:text-left text-center [letter-spacing:-0.03em] font-[600]  font-body mb-[14px]">
                            <span className="custom-md:hidden">Services Coming Soon</span>
                            <span className="hidden custom-md:inline">Services coming soon</span>
                        </h3>
                        <div className="flex flex-col custom-md:mt-[64px] mt-[48px]">
                            {comingSoonServices.map((service, index) => (
                                <span
                                    key={service}
                                    className={`bg-white px-[16px] [letter-spacing:-0.01em] w-full text-center custom-md:w-fit block py-[8px] rounded-full text-[14px] custom-md:text-[16px] font-[500] custom-md:leading-[20.8px] leading-[18.2px] font-body text-black custom-md:order-none ${index === 0 ? 'order-1 mb-[10px]' :
                                        index === 1 ? 'order-4 custom-md:mb-[10px]' :
                                            index === 2 ? 'order-2 mb-[10px] custom-md:mb-[10px]' :
                                                'order-3 mb-[10px] custom-md:mb-0'
                                        }`}
                                >
                                    {service}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default WhatIsLux;
