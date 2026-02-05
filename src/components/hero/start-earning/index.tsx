'use client';

import React from 'react';
import Button from '../../common/Button';
import Container from '../../common/Container';

const StartEarning = () => {
  return (
    <section className="custom-md:py-[48px] custom-md:px-[32px] lg:py-16 lg:px-[32px] custom-md:h-[560px] lg:h-[592px] bg-[#F76C4B]">
      <div className="max-w-[960px] mx-auto">
        {/* White Card Conlg:tainer */}
        <div className="bg-white rounded-2xl p-6">
          <div className="flex flex-col md:flex-row items-center">
            {/* Image Column - Order 1 on mobile and desktop */}
            <div className="relative order-1 flex-shrink-0">
              <div className="overflow-hidden ">
                <img
                  src="/assets/earninglux.png"
                  alt="Start Earning With Lux"
                  className="h-[416px] w-[416px] rounded rounded-[16px]"
                />
              </div>
            </div>

            {/* Text Column - Order 2 on mobile and desktop */}
            <div className="text-center md:text-left order-2 flex-1  pl-[24px]">
              <h2 className="text-3xl break-words custom-md:text-[40px] lg:text-[48px] custom-md:[letter-spacing:-0.03em] lg:[letter-spacing:-0.01em] custom-md:leading-[52px] lg:leading-[62.4px] custom-md:[word-spacing:-4px] lg:[word-spacing:-5px] font-[600] font-general-sans text-black mb-[27px] ">
                Start Earning <span className='lg:block break-words lg:[word-spacing:-4.8px]'>With Lux</span>

              </h2>
              <p className="text-lg custom-md:text-[20px] lg:text-[18px] break-words custom-md:leading-[28px] lg:leading-[25.4px] text-[#4D4D4D]  text-wrap font-body font-[500] [letter-spacing:-0.03em] [word-spacing:-0.px] mb-[27px]">
                <span className='[word-spacing:-2.4px] break-words'>Join Lux,</span> share your services, and start making money fast. See <span className='[word-spacing:-2.4px] break-words'>why Lux</span> is the easiest way to earn <span className='[word-spacing:-2px]'> in CDMX.</span>
              </p>
              <Button
                variant="secondary"
                className=" text-[14px] font-[500] [word-spacing:-2px] [letter-spacing:-0.009em] leading-[18.2px] "
              >
                Apply to Join
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StartEarning;
