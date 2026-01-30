"use client";

import Hero from "../components/Hero";
import BookingTabs from "@/components/BookingTabs";
import TestimonialsPage from "./testimonials/page";
import SpecialOffers from "@/components/Offers/SpecialOffers";
import ContactSection from "@/components/ContactSection";
import AboutSection from "@/components/about/AboutSection";
import VisionValues from "@/components/about/VisionValues";


import TravelBlogs from "@/components/blogs/TravelBlogs";
import AirlineSlider from "@/components/AirlineSlider";
import PackageSection from "@/components/PackageSection";
import CareerForm from "@/components/CareerForm";

export default function Home() {
  return (
    <>
      <Hero
        titleLine1="Explore The World"
        titleLine2="With"
        titleLine3="Dream Sky Airways"
        video="/videos/hero4.mp4"
      />

      <div>
        <div className="px-4 sm:px-6 md:px-10 lg:px-20">
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 z-40 w-full max-w-6xl px-4 sm:px-6 lg:px-10 flex justify-center">
            <BookingTabs />
          </div>
          <PackageSection />
          <SpecialOffers />
          <TestimonialsPage />
        </div>

        <TravelBlogs />
        <AirlineSlider />
        <AboutSection />
        <VisionValues />
        <ContactSection />
        {/* <CareerForm/> */}

      </div>
    </>
  );
}
