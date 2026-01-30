import PackageCard from "./PackageCard";

type Package = {
  title: string;
  slug: string;
  location: string;
  price: string;
  days: string;
  image: string;
  description: string;
};

export default function PackageGrid({
  packages,
}: {
  packages: Package[];
}) {
  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
      {packages.map((pkg) => (
        <PackageCard key={pkg.slug} pkg={pkg} />
      ))}
    </div>
  );
}
