'use client';

import React from 'react';
import Button from '../../common/Button';
import Container from '../../common/Container';
import { useLanguage } from '@/context/LanguageContext';

const StartEarning = () => {
  const { t, locale } = useLanguage();

  return (
    <section className="py-[32px] custom-md:py-[48px] px-[20px] custom-md:px-[32px] lg:py-16 lg:px-[32px] custom-md:h-[560px] lg:h-[592px] bg-[#F76C4B]">
      <div className="max-w-[350px] custom-md:max-w-[960px] mx-auto">

        <div className="bg-white rounded-2xl p-6">
          <div className="flex flex-col custom-md:flex-row items-center">

            <div className="relative order-1 flex-shrink-0">
              <div className="overflow-hidden ">
                <img
                  src={locale === 'es' ? "/assets/earningluxSpanish.avif" : "/assets/earninglux.png"}
                  alt="Start Earning With Lux"
                  className="custom-md:h-[416px] custom-md:w-[416px] h-[310px]  rounded rounded-[16px] "
                />
              </div>
            </div>


            <div className="text-center custom-md:text-left order-2 flex-1  custom-md:pl-[24px] mt-[24px] custom-md:mt-0">
              <h2 className="break-words text-[40px] lg:text-[48px] [letter-spacing:-0.03em] lg:[letter-spacing:-0.01em] leading-[52px] lg:leading-[62.4px] [word-spacing:-4px] lg:[word-spacing:-5px] font-[600] font-general-sans text-black mb-[27px] " style={locale === 'es' ? { wordSpacing: '0px' } : {}}>

                <span className="hidden custom-md:inline">{t('startEarning.title')}</span> <span className='hidden custom-md:inline lg:block break-words lg:[word-spacing:-4.8px] custom-md:ml-[4px] lg:ml-[1px]' style={locale === 'es' ? { wordSpacing: '0px' } : {}}>{t('startEarning.titleSpan')}</span>

                <span className="custom-md:hidden block" style={locale === 'es' ? { wordSpacing: '0px' } : {}}>{t('startEarning.titleMobile')}</span>
                <span className="custom-md:hidden block" style={locale === 'es' ? { wordSpacing: '0px' } : {}}>{t('startEarning.titleSpanMobile')}</span>
              </h2>

              <p className="text-[20px] hidden custom-md:block text-center custom-md:text-left lg:text-[18px]  leading-[28px] lg:leading-[25.4px] text-[#4D4D4D]  text-wrap font-body font-[500] [letter-spacing:-0.03em]  custom-md:[word-spacing:0px] mb-[27px]">
                {t('startEarning.description')}
              </p>

              <p className="text-[20px] block custom-md:hidden text-center leading-[28px] text-[#4D4D4D] text-wrap font-body font-[500] [letter-spacing:-0.03em] mb-[27px]">
                {t('startEarning.descriptionMobile')}
              </p>
              <Button
                variant="secondary"
                className=" text-[14px] font-[500] [word-spacing:-2px] [letter-spacing:-0.009em] leading-[18.2px] "
                style={locale === 'es' ? { wordSpacing: '0px' } : {}}
              >
                {t('startEarning.applyToJoin')}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StartEarning;
