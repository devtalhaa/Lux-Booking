'use client';

import React from 'react';
import Image from 'next/image';
import Button from '@/components/common/Button';
import { useLanguage } from '@/context/LanguageContext';

const WhatIsLux = () => {
    const { t, locale } = useLanguage();

    const currentServices = [
        { key: 'handyman', en: 'Handyman' },
        { key: 'dogWalkingFull', en: 'Dog Walking' },
        { key: 'homeCleaning', en: 'Home Cleaning' },
        { key: 'laundryPickUp', en: 'Laundry Pick-Up' }
    ];

    const comingSoonServices = [
        { key: 'personalTraining', en: 'Personal Traning' },
        { key: 'plantCare', en: 'Plant Care' },
        { key: 'cooking', en: 'Cooking' },
        { key: 'languageTutor', en: 'Language Tutor' }
    ];

    return (
        <section className="w-full bg-[#F4F3FB] custom-md:max-h-[814px] px-[20px] lg:px-0 custom-md:px-[32px] lg:py-0 py-[32px] custom-md:py-[48px] mt-[32px] custom-md:mt-[48px] lg:mt-[64px]">
            <div className="custom-md:max-w-[746px] lg:max-w-[960px] mx-auto lg:py-[64px]">
                <div className="grid grid-cols-1 custom-md:grid-cols-[1.272fr_1fr] lg:grid-cols-[1.325fr_1fr] gap-[16px] items-start">

                    <div className="order-2 custom-md:order-1">
                        <img
                            src={locale === 'es' ? "/assets/spanishLux.png" : "/assets/Lux1.avif"}
                            alt="What Is Lux"

                            className="w-full rounded-[16px] h-[347px]  object-cover"
                        />
                    </div>


                    <div className="order-1 custom-md:order-2 bg-white rounded-[16px]  py-[24px] px-[24px] flex flex-col justify-between custom-md:h-[347px]">
                        <h2 className="text-center custom-md:text-left text-[40px] lg:text-[48px] custom-md:leading-[62.4px] leading-[52px] [letter-spacing:-0.03em] lg:[letter-spacing:-0.01em] font-[600] custom-md:-mt-1 lg:mt-[1px] font-general-sans text-black ">
                            {t('whatIsLux.title')}
                        </h2>
                        <p className="text-[20px] lg:text-[18px] mt-[64px] custom-md:mt-0 text-center custom-md:text-left leading-[28px] lg:leading-[25px] [letter-spacing:-0.03em]  font-[500] font-body font-body text-[#4D4D4D] ">
                            {t('whatIsLux.description')}
                        </p>
                    </div>
                </div>

                <div className="custom-md:flex gap-[16px] mt-[16px]">

                    <div className="custom-md:flex-1 bg-white rounded-[16px] py-[24px] px-[24px]">
                        <div className="custom-md:flex items-center justify-between text-center mb-[24px]">
                            <h3 className="text-[26px] leading-[33.8px] [letter-spacing:-0.03em]  font-[600]  font-body text-black">
                                <span className="custom-md:hidden">{t('whatIsLux.currentServices')}</span>
                                <span className="hidden custom-md:inline">{t('whatIsLux.currentServicesLower')}</span>
                            </h3>
                            <Button variant="primary" className="text-[14px] mt-[16px] custom-md:mt-0 [letter-spacing:-0.01em] leading-[18.2px] font-medium">
                                {t('hero.bookNow')}
                            </Button>
                        </div>
                        <div className=" custom-md:mt-[64px] mt-[48px]">
                            {currentServices.map((service, index) => (
                                <span
                                    key={service.key}
                                    className={`bg-[#E6E6E6] ${index === currentServices.length - 1 ? '' : 'mb-[10px]'} text-center custom-md:w-fit custom-md:leading-[20.8px] leading-[18.2px] [letter-spacing:-0.01em] block  px-[16px] py-[8px] rounded-full text-[14px] custom-md:text-[16px] font-[500] font-body text-black`}
                                >
                                    <span className="custom-md:hidden">{t(`services.${service.key === 'dogWalkingFull' ? 'dogWalkingFullMobile' : service.key}`)}</span>
                                    <span className="hidden custom-md:inline">{t(`services.${service.key}`)}</span>
                                </span>
                            ))}
                        </div>
                    </div>


                    <div className="flex-1 bg-[#D9D7F1] rounded-[16px] mt-[10px] custom-md:mt-0 p-[24px]">
                        <h3 className="text-[26px] leading-[1.3em] custom-md:text-left text-center [letter-spacing:-0.03em] font-[600]  font-body mb-[14px]">
                            <span className="custom-md:hidden">{t('whatIsLux.servicesComingSoon')}</span>
                            <span className="hidden custom-md:inline">{t('whatIsLux.servicesComingSoonLower')}</span>
                        </h3>
                        <div className="flex flex-col custom-md:mt-[64px] mt-[48px]">
                            {comingSoonServices.map((service, index) => (
                                <span
                                    key={service.key}
                                    className={`bg-white px-[16px] [letter-spacing:-0.01em] w-full text-center custom-md:w-fit block py-[8px] rounded-full text-[14px] custom-md:text-[16px] font-[500] custom-md:leading-[20.8px] leading-[18.2px] font-body text-black custom-md:order-none ${index === 0 ? 'order-1 mb-[10px]' :
                                        index === 1 ? 'order-4 custom-md:mb-[10px]' :
                                            index === 2 ? 'order-2 mb-[10px] custom-md:mb-[10px]' :
                                                'order-3 mb-[10px] custom-md:mb-0'
                                        }`}
                                >
                                    {t(`whatIsLux.${service.key}`)}
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
