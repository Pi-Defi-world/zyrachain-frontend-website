import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { NextIntlClientProvider } from 'next-intl';
import { routing } from '@/i18n/routing';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const useLogoX = "/logo/new-zyrachain-logo-1.png";


export const metadata: Metadata = {
  metadataBase: new URL("https://zyrachain.com"), 

  openGraph: {
    title: "Zyrachain",
    description: "Zyrachain is a Decentralized Web3 ecosystem powered by Pi, enabling fast, secure, and scalable blockchain interactions for developers and Everyday users.",
    images: [
      {
        url: "/pic/banner-fg.png", 
        width: 1200,
        height: 630,
      },
    ],
  },

  icons: {
    icon: useLogoX,
    shortcut: useLogoX,
    apple: useLogoX,
  },
};


export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const locale = routing.defaultLocale;
  const messages = (await import('../messages/en.json')).default;

  return (
    <html lang={locale} suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <NextIntlClientProvider locale={locale} messages={messages}>
        {children}
          </NextIntlClientProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
