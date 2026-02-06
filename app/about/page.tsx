import type { Metadata } from "next";
import AboutHero from "@/components/about/AboutHero";
import AboutSection from "@/components/about/AboutSection";
import WhatWeDo from "@/components/about/WhatWeDo";
import VisionValues from "@/components/about/VisionValues";

export const metadata: Metadata = {
 title: "Our Journey & Mission – Dream Sky Airways India",

description:
  "Discover the story of Dream Sky Airways, our mission, values and aviation experience. Learn how we support careers and travel services",

  keywords: [
  "company profile dream sky",
  "aviation business india",
  "airline industry services",
  "travel management company india",
  "aviation career support",
  "air hostess career guidance",
  "pilot training consultancy",
  "ground staff career services",
  "aviation placement assistance",
  "travel consulting firm india",
  "established travel company 2018",
  "aviation education services",
  "career counselling aviation",
],
  alternates: {
    canonical: "https://www.dreamskyairways.com/about",
  },
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
