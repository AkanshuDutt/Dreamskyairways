import { packages } from "../../app/data/packages";
import NoPackageFound from "@/components/NoPackageFound";
import PackageGrid from "@/components/PackageGrid";

export default function SearchPage({ searchParams }: any) {
  const q = searchParams.q?.toLowerCase() || "";

  const result = packages.filter(p =>
    p.location.toLowerCase().includes(q)
  );

  return (
    <section className="max-w-7xl mx-auto px-6 py-14">
      <h1 className="text-2xl font-bold mb-6">
        Search results for "{q}"
      </h1>

      {result.length > 0 ? (
        <PackageGrid packages={result} />
      ) : (
        <NoPackageFound />
      )}
    </section>
  );
}
