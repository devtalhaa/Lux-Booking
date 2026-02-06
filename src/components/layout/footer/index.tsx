'use client';

import React from 'react';
import Link from 'next/link';
import Container from '../../common/Container';
import { ArrowUp, ArrowRight } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

const Footer = () => {
    const { t, locale } = useLanguage();

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <footer className="bg-black text-white py-[32px] px-[20px] custom-md:px-0 custom-md:py-[48px] lg:py-[64px]">
            <div className=" max-w-[350px] custom-md:max-w-[960px] mx-auto ">
                {/* Top Section: Logo and Scroll to Top */}
                <div className="flex items-center justify-between ">
                    {/* Logo */}
                    <span className="font-inter font-black italic text-4xl md:text-5xl tracking-tight text-white">
                        <img src="/assets/Logo_white.svg" alt="Lux White Logo" className='h-[43px] w-[80px] custom-md:w-auto' /></span>

                    {/* Scroll to Top Button */}
                    <button
                        onClick={scrollToTop}
                        className="w-[40px]  h-[40px] bg-[#00C974] rounded-lg flex items-center justify-center hover:bg-[#00A85E] transition-colors"
                        aria-label="Scroll to top"
                    >
                        <img src="/assets/Arrow.svg" alt="Arrow Image" />
                    </button>
                </div>

                {/* Navigation Links - Desktop/Tablet */}
                <div className="hidden custom-md:flex justify-between mb-[60px] custom-md:mt-[64px] font-body ">
                    {/* Column 1 - Main Links */}
                    <div className="flex flex-col custom-md:gap-[32px] lg:gap-[24px] [letter-spacing:-0.01em] [word-spacing:-0.1.5px]">
                        <a href="/book" className="text-white text-[16px] leading-[20.8px] font-[500] flex items-center gap-[10px] hover:opacity-80 transition-opacity" style={locale === 'es' ? { wordSpacing: '0px' } : {}}>
                            {t('footer.bookNow')} <img src="/assets/SmallArrow.svg" alt="" className='rotate-90 w-[14.5px] h-[15px]' />
                        </a>
                        <a href="/services" className="text-white text-[16px] leading-[20.8px] [letter-spacing:-0.01em] [word-spacing:-2px] font-[500] hover:opacity-80 transition-opacity" style={locale === 'es' ? { wordSpacing: '0px' } : {}}>
                            {t('footer.whatIsLux')}<span className='[word-spacing:-0px]' style={locale === 'es' ? { wordSpacing: '0px' } : {}}>&nbsp;{t('footer.ourServices')}</span>
                        </a>
                        <a href="/why-choose-lux" className="text-white text-[16px] leading-[21px] font-[500] hover:opacity-80 transition-opacity" style={locale === 'es' ? { wordSpacing: '0px' } : {}}>
                            {t('footer.whyChooseLux')}
                        </a>
                        <a href="/start-earning" className="text-white text-[16px] leading-[21px] font-[500] hover:opacity-80 transition-opacity" style={locale === 'es' ? { wordSpacing: '0px' } : {}}>
                            {t('footer.startEarning')}
                        </a>
                    </div>

                    {/* Column 2 - Social Links */}
                    <div className="flex flex-col gap-y-[24px]">
                        <a href="https://instagram.com" target="_blank" className="text-white leading-[20.8px] [letter-spacing:-0.01em] text-base font-[500] hover:opacity-80 transition-opacity">
                            {t('footer.instagram')}
                        </a>
                        <a href="https://facebook.com" target="_blank" className="text-white leading-[20.8px] [letter-spacing:-0.01em] text-base font-[500] hover:opacity-80 transition-opacity">
                            {t('footer.facebook')}
                        </a>
                        <a href="https://x.com" target="_blank" className="text-white leading-[20.8px] [letter-spacing:-0.01em] text-base font-[500] hover:opacity-80 transition-opacity">
                            {t('footer.x')}
                        </a>
                    </div>

                    {/* Column 3 - Support Links */}
                    <div className="flex flex-col gap-y-[24px]">
                        <a href="/chat" className="text-white leading-[20.8px] [letter-spacing:-0.01em] text-base font-medium hover:opacity-80 transition-opacity" style={locale === 'es' ? { wordSpacing: '0px' } : {}}>
                            {t('footer.chatWithUs')}
                        </a>
                        <a href="/faqs" className="text-white leading-[20.8px] [word-spacing:-2px] [letter-spacing:-0.01em] text-base font-medium hover:opacity-80 transition-opacity" style={locale === 'es' ? { wordSpacing: '0px' } : {}}>
                            {t('footer.faqs')}
                        </a>
                    </div>
                </div>

                {/* Navigation Links - Mobile */}
                <div className="flex flex-col custom-md:hidden gap-[32px] mt-[64px] mb-[61px] max-w-[350px]">
                    {/* Main Links */}
                    <div className="flex flex-col gap-[32px] font-body [letter-spacing:-0.01em] [word-spacing:-0.1.5px]">
                        <Link href="/book" className="text-white text-[16px] font-[500] flex items-center gap-[11px] hover:opacity-80 leading-[20.8px] transition-opacity" style={locale === 'es' ? { wordSpacing: '0px' } : {}}>
                            {t('footer.bookNow')} <img src="/assets/SmallArrow.svg" alt="" className='rotate-90 w-[14.5px] h-[15px]' />
                        </Link>
                        <a href="/services" className="text-white text-[16px] leading-[20.8px] [letter-spacing:-0.01em] [word-spacing:-2px] font-[500] hover:opacity-80 transition-opacity" style={locale === 'es' ? { wordSpacing: '0px' } : {}}>
                            {t('footer.whatIsLux')}<span className='[word-spacing:-0px]' style={locale === 'es' ? { wordSpacing: '0px' } : {}}>&nbsp;{t('footer.ourServices')}</span>
                        </a>
                        <Link href="/why-choose-lux" className="text-white text-[16px] font-[500] hover:opacity-80 leading-[20.8px] transition-opacity" style={locale === 'es' ? { wordSpacing: '0px' } : {}}>
                            {t('footer.whyChooseLux')}
                        </Link>
                        <Link href="/start-earning" className="text-white text-[16px] font-[500] hover:opacity-80 leading-[20.8px] transition-opacity" style={locale === 'es' ? { wordSpacing: '0px' } : {}}>
                            {t('footer.startEarning')}
                        </Link>
                    </div>

                    {/* Social Links */}
                    <div className="flex flex-col gap-[24px] mt-[32px] font-body">
                        <Link href="https://instagram.com" target="_blank" className="text-white text-[16px] font-medium hover:opacity-80 [letter-spacing:-0.01em] leading-[20.8px] transition-opacity">
                            {t('footer.instagram')}
                        </Link>
                        <Link href="https://facebook.com" target="_blank" className="text-white text-[16px] font-medium hover:opacity-80 [letter-spacing:-0.01em] leading-[20.8px] transition-opacity">
                            {t('footer.facebook')}
                        </Link>
                        <Link href="https://x.com" target="_blank" className="text-white text-[16px] font-medium hover:opacity-80 [letter-spacing:-0.01em] leading-[20.8px] transition-opacity">
                            {t('footer.x')}
                        </Link>
                    </div>

                    {/* Support Links */}
                    <div className="flex flex-col gap-[24px] mt-[32px] font-body">
                        <Link href="/chat" className="text-white [letter-spacing:-0.01em]  text-[16px] leading-[20.8px] font-[500] hover:opacity-80 transition-opacity" style={locale === 'es' ? { wordSpacing: '0px' } : {}}>
                            {t('footer.chatWithUs')}
                        </Link>
                        <Link href="/faqs" className="text-white [letter-spacing:-0.01em]  text-[16px] leading-[20.8px] font-[500] hover:opacity-80 transition-opacity" style={locale === 'es' ? { wordSpacing: '0px' } : {}}>
                            {t('footer.faqs')}
                        </Link>
                    </div>

                    {/* Legal Links - Mobile */}
                    <div className="flex flex-col gap-[24px] mt-[32px] [letter-spacing:-0.01em] font-body">
                        <Link href="/privacy" className="text-white text-[16px] leading-[20.8px] font-[500] hover:opacity-80 transition-opacity">
                            {t('footer.privacyMobile')}
                        </Link>
                        <Link href="/terms" className="text-white text-[16px] leading-[20.8px] font-[500] hover:opacity-80 transition-opacity">
                            {t('footer.termsMobile')}
                        </Link>
                        <Link href="/safety" className="text-white text-[16px] leading-[20.8px] font-[500] hover:opacity-80 transition-opacity">
                            {t('footer.safetyMobile')}
                        </Link>
                    </div>
                </div>

                {/* Bottom Section: Copyright and Legal */}
                <div className="flex flex-col sm:flex-row font-body items-start sm:items-center justify-between ">
                    {/* Copyright */}
                    <p className=" text-[16px] font-[500] [letter-spacing:-0.01em] leading-[20.8px] sm:mb-0 text-[#808080] font-body mt-[3px]">
                        <span className='[word-spacing:-2px]'>{t('footer.copyright')}</span> {t('footer.allRightsReserved')}
                    </p>

                    {/* Legal Links - Desktop/Tablet */}
                    <div className="hidden custom-md:flex items-center gap-x-[32px] ">
                        <Link href="/privacy" className="text-white text-[16px] font-[500] [word-spacing:-1px] [letter-spacing:-0.01em] mt-[3px] leading-[20.8px] hover:opacity-80 transition-opacity" style={locale === 'es' ? { wordSpacing: '0px' } : {}}>
                            {t('footer.privacy')}
                        </Link>
                        <Link href="/terms" className="text-white text-[16px] font-[500] [word-spacing:-1px] [letter-spacing:-0.01em] mt-[3px] leading-[20.8px] hover:opacity-80 transition-opacity" style={locale === 'es' ? { wordSpacing: '0px' } : {}}>
                            {t('footer.terms')}
                        </Link>
                        <Link href="/safety" className="text-white text-[16px] font-[500] [word-spacing:-1px] [letter-spacing:-0.01em] mt-[3px] leading-[20.8px] hover:opacity-80 transition-opacity" style={locale === 'es' ? { wordSpacing: '0px' } : {}}>
                            {t('footer.safety')}
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
