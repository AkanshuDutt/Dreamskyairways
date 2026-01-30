"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function JobsHero() {
  return (
    <>
      {/* HERO SECTION */}
      <section className="relative h-[85vh] w-full overflow-hidden">
        {/* Background Video */}
        <video
          className="absolute inset-0 h-full w-full object-cover"
          src="/videos/flight.mp4"
          autoPlay
          muted
          loop
          playsInline
        />

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/35" />

        {/* Content */}
        <div className="relative z-10 flex h-full items-center justify-center text-center px-6">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight">
              Build Your Career with{" "}
              <span className="text-[#4ED6C5]">Dream Sky Airways</span>
            </h1>

            <p className="mt-6 text-lg md:text-xl text-gray-200">
              Join our growing team and explore exciting opportunities in
              aviation, travel management, sales, and operations.
            </p>

            <div className="mt-10 flex justify-center gap-4">
              <Link
                href="#open-positions"
                className="px-8 py-4 rounded-xl font-semibold bg-[#083A3F] text-white hover:bg-[#062E32] transition"
              >
                View Open Positions
              </Link>

              <Link
                href="/contact"
                className="px-8 py-4 rounded-xl font-semibold border border-white text-white hover:bg-white hover:text-black transition"
              >
                Contact HR
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* DESCRIPTION SECTION */}
      <section className="max-w-6xl mx-auto px-6 py-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-800">
            Careers at Dream Sky Airways
          </h2>

          <p className="text-gray-600 text-lg leading-relaxed max-w-4xl mx-auto">
            At Dream Sky Airways, we believe that our people are the foundation of
            our success. We are building a dynamic and passionate team that is
            driven by innovation, customer satisfaction, and excellence in the
            travel industry. Whether you are an experienced professional or a
            fresh talent eager to learn, we offer a work environment that
            encourages growth, creativity, and collaboration.
            <br /><br />
            Our career opportunities span across aviation operations, travel
            consultancy, customer support, sales, marketing, and backend
            management roles. We focus on skill development, transparent career
            progression, and a healthy work-life balance. At Dream Sky Airways,
            your ideas matter, your efforts are valued, and your career is guided
            towards long-term success. Join us and be part of a team that is
            shaping the future of travel.
          </p>
        </motion.div>
      </section>
    </>
  );
}
