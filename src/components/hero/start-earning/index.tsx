'use client';

import React from 'react';
import Button from '../../common/Button';
import Container from '../../common/Container';

const StartEarning = () => {
  return (
    <section className="py-16   lg:h-[592px] bg-[#F76C4B]">
      <div className=" max-w-[960px] mx-auto">
        {/* White Card Container */}
        <div className="bg-white rounded-2xl p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 items-center ">
            {/* Image Column - Order 1 on mobile and desktop */}
            <div className="relative order-1">
              <div className="overflow-hidden ">
                <img
                  src="/assets/earninglux.png"
                  alt="Start Earning With Lux"
                  className="h-[416px] w-[416px] rounded rounded-[16px]"
                />
              </div>
            </div>

            {/* Text Column - Order 2 on mobile and desktop */}
            <div className="text-center md:text-left order-2 -ml-[40px] pl-[24px]">
              <h2 className="text-3xl md:text-4xl lg:text-[48px] [letter-spacing:-0.01em] leading-[62px] [word-spacing:-5px] font-[600] font-general-sans text-black mb-[27px] ">
                Start Earning <br />
                With Lux
              </h2>
              <p className="text-lg md:text-[18px] leading-[25px] text-[#4D4D4D] font-body font-[500] [letter-spacing:-0.03em] [word-spacing:-0.2px] mb-[27px]">
                <span className='[word-spacing:-2px]'>Join Lux,</span> share your services, and start making money fast. 
                See <span className='[word-spacing:-2px]'>why Lux</span> is the easiest way to earn <span className='[word-spacing:-2px]'> in CDMX.</span>
              </p>
              <Button
                variant="secondary"
                className="px-8 py-[8px] text-[14px]font-[500] [word-spacing:-2px]"
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
