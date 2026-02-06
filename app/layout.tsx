import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import AOSProvider from "../components/AOSProvider";
import Navbar from "@/components/Navbar";
import SubscribeSection from "@/components/SubscribeSection";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Dream Sky Airways | Leading Tour and Travel Company in India",
  description:
    "Plan your perfect journey with Dream Sky Airways, a leading tour and travel company in India, offering affordable flights, tours, buses and cabs for smooth trips.",
 keywords: [
  "flight booking",
  "online flight booking India",
  "tour and travel company",
  "travel agency India",
  "holiday packages",
  "bus booking",
  "cab services",
  "Dream Sky Airways",
  ],
  alternates:{
    canonical:"https://www.dreamskyairways.com/",
  },
  robots: {
  index: true,
  follow: true,
  googleBot: {
  index: true,
  follow: true,
  "max-image-preview": "large",
  "max-snippet": -1,
  "max-video-preview": -1,
},
},

  openGraph:{
    title: "Dream Sky Airways | Leading Tour and Travel Company in India",
    description:
    "Plan your perfect journey with Dream Sky Airways, a leading tour and travel company in India, offering affordable flights, tours, buses and cabs for smooth trips.",
    url : "https://www.dreamskyairways.com",
    siteName : "Dream Sky Airways",
    images : [
      {
        url : "https://www.dreamskyairways.com/ogImage.webp",
         width: 1200,
         height: 630,
         alt: "Dream Sky Airways Travel Services",
      },
    ],
      locale: "en_IN",
    type: "website",

  },
  twitter : {
    card :"summary_large_image",
    title :"Dream Sky Airways | Leading Tour and Travel Company in India",
    description :"Plan your perfect journey with Dream Sky Airways, a leading tour and travel company in India, offering affordable flights, tours, buses and cabs for smooth trips.",
    images: ["https://www.dreamskyairways.com/ogImage.webp"],
  }
};
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
       {/* Organization Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": ["Organization", "TravelAgency"],
              name: "Dream Sky Airways",
              url: "https://www.dreamskyairways.com", // apna real URL daalna
              logo: "https://www.dreamskyairways.com/logo.png", // apna logo URL
              description:
                "Plan your perfect journey with Dream Sky Airways, a leading tour and travel company in India, offering affordable flights, tours, buses and cabs for smooth trips.",
              contactPoint: {
                "@type": "ContactPoint",
                telephone: "+911204580951", // apna number
                contactType: "customer service",
                areaServed: "IN",
                availableLanguage: ["English", "Hindi"],
              },
              sameAs: [
                "https://www.facebook.com/profile.php?id=61586109601880",
                "https://www.instagram.com/dreamskyairways/",
                "https://www.linkedin.com/company/dream-sky-airways/",
              ],
            }),
          }}
        />
         <Navbar/>
        <AOSProvider />
       {children}
        <SubscribeSection/>
        <Footer/>
        
      </body>
    </html>
  );
}
