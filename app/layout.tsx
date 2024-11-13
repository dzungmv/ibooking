import type { Metadata } from 'next';
import '@/styles/globals.css';
import { siteConfig } from '@/configs/site-config';

export const metadata: Metadata = {
    metadataBase: new URL(siteConfig.url),
    title: {
        default: siteConfig.name,
        template: `%s - ${siteConfig.subName}`,
    },
    description: siteConfig.description,
    icons: '/logo.svg',
    keywords: ['Court', 'Badminton', 'Pikleball', 'Sport', 'Rent'],
    verification: {
        google: siteConfig.googleVerification,
    },
    authors: [
        {
            name: 'dzungmv',
            url: 'https://github.com/dzungmv',
        },
    ],
    creator: 'dzungmv',
    openGraph: {
        type: 'website',
        locale: 'en_US',
        url: siteConfig.url,
        title: siteConfig.name,
        description: siteConfig.description,
        siteName: siteConfig.name,
    },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang='en'>
            <body className={`scroll-smooth font-sans antialiased`}>
                {children}
            </body>
        </html>
    );
}
