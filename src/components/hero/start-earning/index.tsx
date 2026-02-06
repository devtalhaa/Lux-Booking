'use client';

import React from 'react';
import Button from '../../common/Button';
import Container from '../../common/Container';

const StartEarning = () => {
  return (
    <section className="py-[32px] custom-md:py-[48px] px-[20px] custom-md:px-[32px] lg:py-16 lg:px-[32px] custom-md:h-[560px] lg:h-[592px] bg-[#F76C4B]">
      <div className="max-w-[350px] custom-md:max-w-[960px] mx-auto">
        {/* White Card Conlg:tainer */}
        <div className="bg-white rounded-2xl p-6">
          <div className="flex flex-col custom-md:flex-row items-center">
            {/* Image Column - Order 1 on mobile and desktop */}
            <div className="relative order-1 flex-shrink-0">
              <div className="overflow-hidden ">
                <img
                  src="/assets/earninglux.png"
                  alt="Start Earning With Lux"
                  className="custom-md:h-[416px] custom-md:w-[416px] h-[310px]  rounded rounded-[16px] "
                />
              </div>
            </div>

            {/* Text Column - Order 2 on mobile and desktop */}
            <div className="text-center custom-md:text-left order-2 flex-1  custom-md:pl-[24px] mt-[24px] custom-md:mt-0">
              <h2 className="break-words text-[40px] lg:text-[48px] [letter-spacing:-0.03em] lg:[letter-spacing:-0.01em] leading-[52px] lg:leading-[62.4px] [word-spacing:-4px] lg:[word-spacing:-5px] font-[600] font-general-sans text-black mb-[27px] ">
                Start Earning <span className='lg:block break-words lg:[word-spacing:-4.8px] custom-md:ml-[4px] lg:ml-[1px]'>With Lux</span>

              </h2>
              <p className="text-[20px] text-center custom-md:text-left lg:text-[18px]  leading-[28px] lg:leading-[25.4px] text-[#4D4D4D]  text-wrap font-body font-[500] [letter-spacing:-0.03em]  custom-md:[word-spacing:0px] mb-[27px]">
                <span className='[word-spacing:-2.4px] break-words -ml-[3px] custom-md:ml-0'>Join Lux,</span> share your services, <span className='-ml-[2px] custom-md:inline block custom-md:ml-0'>and start making money fast. </span>See <span className='[word-spacing:-2.4px] custom-md:[word-spacing:-2.4px] break-words'>why Lux</span> is the easiest <span className='block custom-md:inline'>way to earn <span className='[word-spacing:-2px] custom-md:block lg:inline'> in CDMX.</span></span>
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
