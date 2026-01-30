import { packages } from "../app/data/packages";
import PackageGrid from "@/components/PackageGrid";
import Link from "next/link";

export default function PackageSection() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-14">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-3xl font-bold">Popular Packages</h2>
        <Link href="/packages" className="text-[#0D6269] font-semibold">
          View All →
        </Link>
      </div>

      <PackageGrid packages={packages.slice(0, 4)} />
    </section>
  );
}
