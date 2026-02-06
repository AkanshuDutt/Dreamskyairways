// components/Footer.tsx
"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

export default function Footer() {
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear());

  useEffect(() => {
    setCurrentYear(new Date().getFullYear());
  }, []);

  return (
    <footer className="bg-[#0b3e44] text-gray-200">
      {/* Main content */}
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 pt-16 pb-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-12">
          {/* Brand Column */}
          <div className="space-y-6">
            <div>
              <h3 className="text-2xl md:text-3xl font-bold text-white tracking-tight">
                Dream Sky Airways
              </h3>
              <p className="text-sm text-[#4a8a92] mt-1 font-medium">
                Since 2018
              </p>
            </div>

            <p className="text-gray-300 leading-relaxed text-[15px] md:text-base">
              Your trusted partner for seamless travel experiences. We provide expert flight, bus, hotel, and cab bookings, curated tour packages, professional visa guidance & processing, and comprehensive travel insurance solutions — making international journeys safe, simple, and stress-free.
            </p>

            <div className="flex items-center gap-3 pt-1">
              <div className="w-12 h-1.5 bg-[#0E5B63] rounded-full"></div>
              <div className="w-6 h-1 bg-[#0E5B63]/50 rounded-full"></div>
            </div>
          </div>

          {/* Services */}
          <div className="space-y-6">
            <div className="relative">
              <h4 className="text-lg font-semibold text-white tracking-wide pb-2 relative inline-block">
                Our Services
                <span className="absolute -bottom-1 left-0 h-0.5 w-10 bg-[#0E5B63] rounded-full"></span>
              </h4>
            </div>

            <nav>
              <ul className="space-y-3.5">
                {[
                  { href: "/bookingtabs", label: "Flight Booking" },
                  { href: "/bookingtabs", label: "Bus Booking" },
                  { href: "/bookingtabs", label: "Hotel Booking" },
                  { href: "/bookingtabs", label: "Cab / Taxi Services" },
                  { href: "/packages", label: "Tour Packages" },
                  { href: "/visa", label: "Visa Guidance" },
                  { href: "/visa", label: "Visa Processing Services" },
                  { href: "/insurance", label: "Travel Insurance" },
                  { href: "/blogs", label: "Blogs" },
                ].map((item) => (
                  <li key={item.label}>
                    <Link
                      href={item.href}
                      className="group flex items-center text-gray-300 hover:text-white transition-all duration-300 ease-out hover:translate-x-1.5 text-[15px]"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-[#0E5B63]/40 group-hover:bg-[#0E5B63] mr-3 transition-colors duration-300"></span>
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          {/* Legal / Important Links */}
          <div className="space-y-6">
            <div className="relative">
              <h4 className="text-lg font-semibold text-white tracking-wide pb-2 relative inline-block">
                Important Links
                <span className="absolute -bottom-1 left-0 h-0.5 w-10 bg-[#0E5B63] rounded-full"></span>
              </h4>
            </div>

            <nav>
              <ul className="space-y-3.5">
                {[
                  { href: "/privacy-policy", label: "Privacy & Refund  Policy" },
                  { href: "/terms", label: "Terms & Conditions" },
                  // { href: "/refund-policy", label: "Refund Policy" },
                  { href: "/disclaimer", label: "Disclaimer" },
                ].map((item) => (
                  <li key={item.label}>
                    <Link
                      href={item.href}
                      className="group flex items-center text-gray-300 hover:text-white transition-all duration-300 ease-out hover:translate-x-1.5 text-[15px]"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-[#0E5B63]/40 group-hover:bg-[#0E5B63] mr-3 transition-colors duration-300"></span>
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          {/* Support & Contact */}
          <div className="space-y-8">
            <div className="space-y-6">
              <div className="relative">
                <h4 className="text-lg font-semibold text-white tracking-wide pb-2 relative inline-block">
                  Support
                  <span className="absolute -bottom-1 left-0 h-0.5 w-10 bg-[#0E5B63] rounded-full"></span>
                </h4>
              </div>

              <nav>
                <ul className="space-y-3.5">
                  {[
                    { href: "/about", label: "About Us" },
                    { href: "/contact", label: "Contact Us" },
                    { href: "/Faq", label: "FAQs" },
                    { href: "/contact", label: "Help & Support" },
                  ].map((item) => (
                    <li key={item.label}>
                      <Link
                        href={item.href}
                        className="group flex items-center text-gray-300 hover:text-white transition-all duration-300 ease-out hover:translate-x-1.5 text-[15px]"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-[#0E5B63]/40 group-hover:bg-[#0E5B63] mr-3 transition-colors duration-300"></span>
                        {item.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>
            </div>

            <div className="space-y-5">
              <div className="relative">
                <h4 className="text-lg font-semibold text-white tracking-wide pb-2 relative inline-block">
                  Contact
                  <span className="absolute -bottom-1 left-0 h-0.5 w-10 bg-[#0E5B63] rounded-full"></span>
                </h4>
              </div>

              <address className="not-italic text-gray-300 space-y-3 text-[15px] leading-relaxed">
                <p className="group">
                  Email:{" "}
                  <a
                    href="mailto:support@dreamskyairways.com"
                    className="text-gray-200 hover:text-white transition-colors duration-300 group-hover:underline underline-offset-4 decoration-[#0E5B63]/60"
                  >
                    support@dreamskyairways.com
                  </a>
                </p>
                <p className="group">
                  Phone:{" "}
                  <a
                    href="tel:+911204580951"
                    className="text-gray-200 hover:text-white transition-colors duration-300 group-hover:underline underline-offset-4 decoration-[#0E5B63]/60"
                  >
                    +91-1204580951
                  </a>
                </p>
                <p>
                  Office: A Block, Sector -63 Noida,
                  <br />
                  Uttar Pradesh – 201301, India
                </p>
              </address>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-[#1a5a63]/40 bg-[#082f34]/80">
        <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 py-6 text-center text-sm text-gray-400">
          <p>
            © 2018 Dream Sky Airways. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}