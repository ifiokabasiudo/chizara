import type { Metadata } from "next";
import { Geist, Geist_Mono, Tinos } from "next/font/google";
import "./globals.css";
import ZocdocButton from "@/components/zocdoc/ZocdocButton";
import Script from "next/script";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const tinos = Tinos({
  subsets: ["latin"],
  weight: "400",
});

export const metadata: Metadata = {
  title: "Chizara Therapeutic Services",
  description: "Chizara Therapeutic Services - Your Path to Healing and Growth",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${tinos.className} antialiased`}
      >
        {children}
        <ZocdocButton />
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-P4039N5D9N"
          strategy="afterInteractive"
        />

        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            window.gtag = gtag;
            gtag('js', new Date());
            gtag('config', 'G-P4039N5D9N');
          `}
        </Script>
      </body>
    </html>
  );
}
