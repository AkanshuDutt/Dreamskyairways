
import { blogs } from "../../app/data/blogs";
import BlogCard from "@/components/blogs/BlogCard";
import TravelBlogs from "@/components/blogs/TravelBlogs";

export const metadata = {
  title: "Travel Blogs | Dream Sky Airways",
  description:
    "Explore travel destinations, tips, and guides by Dream Sky Airways.",
};

export default function BlogsPage() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-20">
      <h1 className="text-4xl font-bold mb-10 text-center">
        
        
      </h1>

      <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-8">
        {blogs.map((blog) => (
          <BlogCard key={blog.slug} blog={blog} />
        ))}
      </div>
             {/* <TravelBlogs showViewAll={false} /> */}

      
    </section>
  );
}
