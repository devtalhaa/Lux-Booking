import type { Metadata } from 'next';
import '../styles/globals.css';

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
            <body className="font-body text-dark antialiased">
                {children}
            </body>
        </html>
    );
}
