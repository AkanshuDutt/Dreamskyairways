import { jobs } from "@/app/data/jobs";
import { notFound } from "next/navigation";
import Link from "next/link";
import RollingDate from "@/components/RollingDate";

type Props = {
  params: Promise<{ slug: string }>;
};

export default async function JobDetailPage({ params }: Props) {
  const { slug } = await params;

  const job = jobs.find((j) => j.slug === slug);
  if (!job) return notFound();

  return (
    <main className="max-w-5xl mx-auto p-10 mt-10">
      {/* JOB HEADER */}
      <section className="mb-8">
        <h1 className="text-4xl font-bold text-[#083A3F]">
          {job.title}
        </h1>
        <p className="text-gray-600 mt-2">
          📍 {job.location}
        </p>
      </section>

      {/* JOB INFO GRID */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
        <div className="border rounded-xl p-6 shadow">
          <p className="text-sm text-gray-500">Salary Range</p>
          <p className="text-lg font-semibold text-[#083A3F]">
            {job.salaryRange}
          </p>
        </div>

        <div className="border rounded-xl p-6 shadow">
          <p className="text-sm text-gray-500">Experience</p>
          <p className="text-lg font-semibold">
            {job.experience}
          </p>
        </div>

        <div className="border rounded-xl p-6 shadow">
          <p className="text-sm text-gray-500">Seats Left</p>
          <p className="text-lg font-semibold text-red-600">
            {job.seatsLeft} seats only
          </p>
        </div>

        <div className="border rounded-xl p-6 shadow">
          <p className="text-sm text-gray-500">Last Date to Apply</p>
          <p className="text-lg font-semibold">
            <RollingDate baseDate={job.lastDate} />
          </p>
        </div>
      </section>

      {/* DESCRIPTION */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4 text-[#083A3F]">
          Job Description
        </h2>
        <p className="text-gray-700 leading-relaxed whitespace-pre-line">
          {job.description}
        </p>
      </section>

      <section className="sticky bottom-4 bg-white p-6 border rounded-xl shadow-xl">
        <Link
          href={`/careerform?job=${job.slug}`}
          className="
            block text-center w-full py-4 rounded-xl
            bg-[#083A3F] text-white font-semibold
            hover:bg-[#062E32] transition
          "        >
          Apply Now 
        </Link>
      </section>
    </main>
  );
}
