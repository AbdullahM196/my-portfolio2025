import BlogCard from "@/components/Blog/BlogCard";
import React from "react";
const data = [
  {
    _id: "5",
    title: "The Power of JavaScript Frameworks: Angular vs. React vs. Vue.js",
    image:
      "https://create-blog-with-nextjs.vercel.app/_next/image?url=%2Fblogs%2Fpaul-esch-laurent-oZMUrWFHOB4-unsplash.jpg&w=1920&q=75",
    category: "javascript",
    createdAt: "2024-08-08T00:00:00.000Z",
  },
  {
    _id: "6",
    title: "Mastering CSS Grid Layout: A Comprehensive Guide",
    image:
      "https://create-blog-with-nextjs.vercel.app/_next/image?url=%2Fblogs%2Fkelly-sikkema--1_RZL8BGBM-unsplash.jpg&w=640&q=75",
    category: "css",
    createdAt: "2024-08-10T00:00:00.000Z",
  },
  {
    _id: "7",
    title: "RESTful APIs: Building Blocks of Modern Web Applications",
    image:
      "https://create-blog-with-nextjs.vercel.app/_next/image?url=%2Fblogs%2Fluca-bravo-XJXWbfSo2f0-unsplash.jpg&w=640&q=75",
    category: "code quality",
    createdAt: "2024-08-01T00:00:00.000Z",
  },
  {
    _id: "15",
    title: "The Power of JavaScript Frameworks: Angular vs. React vs. Vue.js",
    image:
      "https://create-blog-with-nextjs.vercel.app/_next/image?url=%2Fblogs%2Fpaul-esch-laurent-oZMUrWFHOB4-unsplash.jpg&w=1920&q=75",
    category: "javascript",
    createdAt: "2024-08-08T00:00:00.000Z",
  },
  {
    _id: "16",
    title: "Mastering CSS Grid Layout: A Comprehensive Guide",
    image:
      "https://create-blog-with-nextjs.vercel.app/_next/image?url=%2Fblogs%2Fkelly-sikkema--1_RZL8BGBM-unsplash.jpg&w=640&q=75",
    category: "css",
    createdAt: "2024-08-10T00:00:00.000Z",
  },
  {
    _id: "17",
    title: "RESTful APIs: Building Blocks of Modern Web Applications",
    image:
      "https://create-blog-with-nextjs.vercel.app/_next/image?url=%2Fblogs%2Fluca-bravo-XJXWbfSo2f0-unsplash.jpg&w=640&q=75",
    category: "code quality",
    createdAt: "2024-08-01T00:00:00.000Z",
  },
];
export default function page() {
  return (
    <div className="flex justify-between flex-wrap">
      {data.map((blog) => (
        <BlogCard key={blog._id} blog={blog} />
      ))}
    </div>
  );
}
