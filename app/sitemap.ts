import { jobs } from "@/app/data/jobs";

export default function sitemap() {
  return [
    {
      url: "https://dreamskyairways.com/jobs",
      lastModified: new Date(),
    },
    ...jobs.map((job) => ({
      url: `https://dreamskyairways.com/jobs/${job.slug}`,
      lastModified: new Date(),
    })),
  ];
}
