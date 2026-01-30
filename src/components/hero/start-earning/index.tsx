'use client';

import React from 'react';
import Button from '../../common/Button';
import Container from '../../common/Container';

const StartEarning = () => {
  return (
    <section className="py-16 bg-[#F76C4B]">
      <Container className="px-5 md:px-8 lg:px-[140px] 2xl:px-[240px]">
        {/* White Card Container */}
        <div className="bg-white rounded-2xl p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
            {/* Image Column - Order 1 on mobile and desktop */}
            <div className="relative w-full flex justify-center order-1">
              <div className="overflow-hidden rounded-xl">
                <img
                  src="/assets/earninglux.png"
                  alt="Start Earning With Lux"
                  className="w-full h-auto object-contain"
                />
              </div>
            </div>

            {/* Text Column - Order 2 on mobile and desktop */}
            <div className="text-center md:text-left order-2">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-black mb-6 leading-tight">
                Start Earning With
                <br />
                Lux
              </h2>
              <p className="text-lg md:text-xl text-[#4D4D4D] font-normal leading-relaxed mb-8">
                Join Lux, share your services, and start making money fast.
                See why Lux is the easiest way to earn in CDMX.
              </p>
              <Button
                variant="secondary"
                className="px-8 py-3 text-base font-semibold"
              >
                Apply to Join
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default StartEarning;
