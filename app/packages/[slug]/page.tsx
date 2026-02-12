// import { packages } from "@/app/data/packages";
// import type { Metadata } from "next";

// type Props = {
  // params: { slug: string };
// };

// export async function generateMetadata(
//   { params }: Props
// ): Promise<Metadata> {

//   const { slug } = params;

//   const pkg = packages.find((p) => p.slug === slug);

//   if (!pkg) {
//     return {
//       title: "Package Not Found",
//       description: "This package does not exist.",
//     };
//   }

//   return {
//     title: `${pkg.title} | Dream Sky Airways`,
//     description: pkg.description,

//     openGraph: {
//       title: pkg.title,
//       description: pkg.description,

//       // ✅ Correct Image Field
//       images: pkg.images,

//       url: `https://dreamskyairways.com/packages/${slug}`,
//       type: "website",
//     },

//     alternates: {
//       canonical: `https://dreamskyairways.com/packages/${slug}`,
//     },
//   };
// }
