// import { jobs } from "@/app/data/jobs";
// import { blogs } from "./data/blogs";
// import { MetadataRoute } from "next";

import { blogs } from "../app/data/blogs";
import { MetadataRoute } from "next";
import { jobs } from "../app/data/jobs";
import { packages } from "../app/data/packages";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://www.dreamskyairways.com";

  // 🔹 Static Pages
  const staticPages = [
    "/",
    "/about",
    "/contact",
    "/careers",
    "/insurance",
    "/visa",
    "/disclaimer",
    "/privacy-policy",
    "/terms",
     "/Faq"
  ];

  const staticUrls = staticPages.map((page) => ({
    url: `${baseUrl}${page}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: page === "/" ? 1 : 0.8,
  }));

  // 🔹 Dynamic Job Pages
  const jobUrls = jobs.map((job) => ({
    url: `${baseUrl}/careers/${job.slug}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.9,
  }));

  const blogUrls =blogs.map((blogs) => ({
    url: `${baseUrl}/blogs/${blogs.slug}`,
    lastModified:new Date(),
    changeFrequency:"weekly" as const,
    priority:0.9,
  }));
  const packagesUrl=packages.map((packages) => ({ 
    url:`${baseUrl}/packages/${packages.slug}`,
    lastModified: new Date(),
    changeFrequency : "weekly" as const,
    priority:0.9,

  }));

  return [
    ...staticUrls, // Static pages
    {
      url: `${baseUrl}/careers`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url:`${baseUrl}/blogs`,
      lastModified: new Date(),
      changeFrequency:"weekly",
      priority:0.9,
    },
    {
      url:`${baseUrl}/packages`,
      lastModified:new Date(),
      changeFrequency:"weekly",
      priority:0.9,
    },
    ...jobUrls, // Dynamic jobs
    ...blogUrls,
    ...packagesUrl,

  ];
}
