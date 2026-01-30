import type { Metadata } from "next";
import AboutHero from "@/components/about/AboutHero";
import AboutSection from "@/components/about/AboutSection";
import WhatWeDo from "@/components/about/WhatWeDo";
import VisionValues from "@/components/about/VisionValues";

export const metadata: Metadata = {
  title: "About Us | Dream Sky Airways Pvt. Ltd.",
  description:
    "Dream Sky Airways Pvt. Ltd. is a MCA, MSME & NCT certified aviation and travel company established in 2018, offering career guidance, job placement, and premium travel services across India.",
  keywords: [
    "Dream Sky Airways",
    "Aviation Jobs",
    "Airline Career Guidance",
    "Flight Booking India",
    "Travel Agency Noida",
  ],
};

export default function AboutPage() {
  return (
    <main>
      <AboutHero />
      <AboutSection />
      <WhatWeDo />
      <VisionValues />
    </main>
  );
}
