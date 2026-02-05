import React from 'react';
import Image from 'next/image';
import Button from '@/components/common/Button';

const WhatIsLux = () => {
    const currentServices = ['Handyman', 'Dog Walking', 'Home Cleaning', 'Laundry Pick-Up'];
    const comingSoonServices = ['Personal Traning', 'Plant Care', 'Cooking', 'Language Tutor'];

    return (
        <section className="w-full bg-[#F4F3FB] max-h-[814px] mt-[64px]">
            <div className="max-w-[960px] mx-auto py-[64px]">
                {/* Top Row - Image and What Is Lux Card */}
                <div className="grid grid-cols-[1.325fr_1fr] gap-[16px]">
                    {/* Left - Image */}
                    <div className="col-span-1.325 ">
                        <img
                            src="/assets/Lux1.avif"
                            alt="What Is Lux"

                            className="w-full rounded-[16px] h-[347px]  object-cover"
                        />
                    </div>

                    {/* Right - What Is Lux Card */}
                    <div className="col-span-1 bg-white rounded-[16px] p-[24px] flex flex-col justify-center">
                        <h2 className="text-[48px] leading-[62.4px] [letter-spacing:-0.01em] font-[600] font-general-sans text-black ">
                            What Is Lux
                        </h2>
                        <p className="text-[18px] leading-[25.2px] [letter-spacing:-0.03em] mt-[161px] font-[500] font-body font-body text-[#4D4D4D] ">
                            Lux connects Mexico‑City locals with <span className='lg:block '>verified pros for everyday tasks fast, simple, </span>nearby.
                        </p>
                    </div>
                </div>

                {/* Bottom Row - Current Services and Services Coming Soon Cards */}
                <div className="flex gap-[16px] mt-[16px]">
                    {/* Current Services Card */}
                    <div className="flex-1 bg-white rounded-[16px] pt-[24px] px-[24px]">
                        <div className="flex items-center justify-between mb-[24px]">
                            <h3 className="text-[26px] leading-[33.8px] [letter-spacing:-0.03em]  font-[600]  font-body text-black">
                                Current services
                            </h3>
                            <Button variant="primary" className="text-[14px] [letter-spacing:-0.01em] leading-[18.2px] font-medium">
                                Book Now
                            </Button>
                        </div>
                        <div className=" mt-[64px]">
                            {currentServices.map((service) => (
                                <span
                                    key={service}
                                    className="bg-[#E6E6E6] mb-[10px] w-fit leading-[20.8px] [letter-spacing:-0.01em] block  px-[16px] py-[8px] rounded-full text-[16px] font-[500] font-body text-black"
                                >
                                    {service}
                                </span>
                            ))}
                        </div>
                    </div>

                    {/* Services Coming Soon Card */}
                    <div className="flex-1 bg-[#D9D7F1] rounded-[16px] p-[24px]">
                        <h3 className="text-[26px] leading-[1.3em] [letter-spacing:-0.03em] font-[600]  font-body bg mb-[14px]">
                            Services coming soon
                        </h3>
                        <div className=" mt-[64px]">
                            {comingSoonServices.map((service) => (
                                <span
                                    key={service}
                                    className="bg-white px-[16px] [letter-spacing:-0.01em] mt-[10px] w-fit block py-[8px] rounded-full text-[16px] font-[500] leading-[20.8px] font-body text-black"
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
