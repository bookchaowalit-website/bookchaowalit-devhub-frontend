import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react"
import { SpeedInsights } from "@vercel/speed-insights/next"

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "DevHub — API Developer Portal by Chaowalit Greepoke",
  description: "Explore, test, and integrate with 5 live MCP APIs across the bookchaowalit portfolio — an interactive playground, endpoint docs, and code examples.",
  keywords: ['DevHub', 'MCP', 'API playground', 'Chaowalit Greepoke', 'developer portal'],
  authors: [{ name: 'Chaowalit Greepoke', url: 'https://bookchaowalit.com' }],
  creator: 'Chaowalit Greepoke',
  publisher: 'Chaowalit Greepoke',
  metadataBase: new URL('https://bookchaowalit-devhub-frontend.vercel.app'),
  alternates: {
    canonical: 'https://bookchaowalit-devhub-frontend.vercel.app',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://bookchaowalit-devhub-frontend.vercel.app',
    title: 'DevHub — API Developer Portal',
    description: 'Explore, test, and integrate with 5 live MCP APIs across the bookchaowalit portfolio.',
    siteName: 'DevHub',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'DevHub — API Developer Portal',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'DevHub — API Developer Portal',
    description: 'Explore, test, and integrate with 5 live MCP APIs across the bookchaowalit portfolio.',
    images: ['/og-image.png'],
    creator: '@bookchaowalit',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Analytics />
        <SpeedInsights />
        {children}
      </body>
    </html>
  );
}

// SEO TODO: Add Open Graph tags for social sharing
