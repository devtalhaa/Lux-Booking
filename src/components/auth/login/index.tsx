import React from 'react';
import Container from '@/components/common/Container';
import Button from '@/components/common/Button';
import Link from 'next/link';
import LoginForm from './LoginForm';
import { Globe } from 'lucide-react';

const LoginIndex = () => {
    return (
        <main className="min-h-screen bg-white flex flex-col font-inter">
            {/* Header */}
            <header className="pt-8 pb-4 w-full">
                <div className="w-full px-8 md:px-12">
                    <nav className="flex items-center justify-between">
                        <div className="flex items-center">
                            {/* Logo */}
                            <Link href="/">
                                <span className="font-inter font-bold text-5xl tracking-tight text-dark">lux</span>
                            </Link>
                        </div>

                        <div className="flex items-center gap-4">
                            <span className="hidden md:inline-flex text-sm text-text-muted underline underline-offset-4 mr-2 cursor-pointer hover:text-dark">
                                Offering Services?
                            </span>
                            <button className="text-text-muted hover:text-dark mr-2">
                                {/* Help Icon (?) generic SVG or text */}
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-circle-help"><circle cx="12" cy="12" r="10" /><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" /><path d="M12 17h.01" /></svg>
                            </button>

                            <Button variant="ghost" className="rounded-lg bg-[#F4F4F5] hover:bg-[#E4E4E7] text-sm font-medium">
                                <Globe className="w-4 h-4 mr-2" /> En
                            </Button>
                            <Button variant="secondary" className="!bg-black text-white hover:!bg-black/80 !rounded-lg">
                                Sign In
                            </Button>
                        </div>
                    </nav>
                </div>
            </header>

            {/* Main Content - Centered */}
            <div className="flex-1 flex items-center justify-center py-12">
                <Container>
                    <div className="flex justify-center">
                        <LoginForm />
                    </div>
                </Container>
            </div>
        </main>
    );
};

export default LoginIndex;
