"use client";

import Link from "next/link";
import Image from "next/image";
import { packages } from "../data/packages";
import { useEffect, useState } from "react";
import HeroVideo from "@/components/HeroVideo";

export default function PackagesPage() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-14 mt-0">
<HeroVideo/>
      <h1 className="text-4xl font-bold my-10">
        All Packages
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {packages.map((pkg) => (
          <PackageCard key={pkg.id} pkg={pkg} />
        ))}
      </div>
    </section>
  );
}

/* 🔥 CARD WITH AUTO IMAGE SLIDER */
function PackageCard({ pkg }: any) {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (!pkg.images || pkg.images.length === 0) return;

    const interval = setInterval(() => {
      setCurrent((prev) =>
        prev === pkg.images.length - 1 ? 0 : prev + 1
      );
    }, 2500);

    return () => clearInterval(interval);
  }, [pkg.images]);

  return (
    <Link
      href={`/packages/${pkg.slug}`}
      className="block rounded-xl bg-white shadow hover:shadow-lg transition overflow-hidden"
    >
      {/* 🔁 IMAGE SLIDER */}
      <div className="relative h-48 w-full">
        {pkg.images.map((img: string, index: number) => (
          <Image
            key={index}
            src={img}
            alt={`${pkg.title} image ${index + 1}`}
            fill
            className={`
              object-cover transition-opacity duration-700
              ${index === current ? "opacity-100" : "opacity-0"}
            `}
          />
        ))}
      </div>

      {/* 📄 CONTENT */}
      <div className="p-4">
        <h3 className="text-lg font-bold">
          {pkg.title}
        </h3>

        <p className="text-sm text-gray-600">
          {pkg.days}
        </p>

        <p className="mt-2 font-semibold text-[#0D6269]">
          {pkg.price}
        </p>
      </div>
    </Link>
  );
}
