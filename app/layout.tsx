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
  title: "Dream Sky Airways | Flights • Tours • Cabs",
  description:
    "Dream Sky Airways offers affordable flight bookings, tour packages, bus tickets and cab services across India.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
         <Navbar/>
        <AOSProvider />
       {children}
        <SubscribeSection/>
        <Footer/>
        
      </body>
    </html>
  );
}
