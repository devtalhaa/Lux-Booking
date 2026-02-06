import type { Metadata } from 'next';
import '../styles/globals.css';
import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';
import { LanguageProvider } from '@/context/LanguageContext';

export const metadata: Metadata = {
    title: 'Lux - Book Local Services Instantly',
    description: 'Fast, friendly, and always close by.',
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <body className="font-inter text-black antialiased">
                <LanguageProvider>
                    <Header />
                    {children}
                    <Footer />
                </LanguageProvider>
            </body>
        </html>
    );
}
