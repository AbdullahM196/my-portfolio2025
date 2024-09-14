import Image from "next/image";
import React from "react";
import Styles from "./blog.module.css";
import { notFound } from "next/navigation";
import getFormattedDate from "@/services/date";
type Props = {
  params: {
    id: string;
  };
};
const data = [
  {
    _id: "5",
    title: "The Power of JavaScript Frameworks: Angular vs. React vs. Vue.js",
    image:
      "https://create-blog-with-nextjs.vercel.app/_next/image?url=%2Fblogs%2Fpaul-esch-laurent-oZMUrWFHOB4-unsplash.jpg&w=1920&q=75",
    category: "javascript",
    content: `Until now, trying to style an article, document, or blog post with Tailwind has been a tedious task that required a keen eye for typography and a lot of complex custom CSS.
By default, Tailwind removes all of the default browser styling from paragraphs, headings, lists and more. This ends up being really useful for building application UIs because you spend less time undoing user-agent styles, but when you really are just trying to style some content that came from a rich-text editor in a CMS or a markdown file, it can be surprising and unintuitive.`,
    createdAt: "2024-08-08T00:00:00.000Z",
  },
  {
    _id: "6",
    title: "Mastering CSS Grid Layout: A Comprehensive Guide",
    image:
      "https://create-blog-with-nextjs.vercel.app/_next/image?url=%2Fblogs%2Fkelly-sikkema--1_RZL8BGBM-unsplash.jpg&w=640&q=75",
    category: "css",
    content: `Until now, trying to style an article, document, or blog post with Tailwind has been a tedious task that required a keen eye for typography and a lot of complex custom CSS.
    By default, Tailwind removes all of the default browser styling from paragraphs, headings, lists and more. This ends up being really useful for building application UIs because you spend less time undoing user-agent styles, but when you really are just trying to style some content that came from a rich-text editor in a CMS or a markdown file, it can be surprising and unintuitive.`,
    createdAt: "2024-08-10T00:00:00.000Z",
  },
  {
    _id: "7",
    title: "RESTful APIs: Building Blocks of Modern Web Applications",
    image:
      "https://create-blog-with-nextjs.vercel.app/_next/image?url=%2Fblogs%2Fluca-bravo-XJXWbfSo2f0-unsplash.jpg&w=640&q=75",
    category: "code quality",
    content: `Until now, trying to style an article, document, or blog post with Tailwind has been a tedious task that required a keen eye for typography and a lot of complex custom CSS.
    By default, Tailwind removes all of the default browser styling from paragraphs, headings, lists and more. This ends up being really useful for building application UIs because you spend less time undoing user-agent styles, but when you really are just trying to style some
    content that came from a rich-text editor in a CMS or a markdown file, it can be surprising and unintuitive.`,
    createdAt: "2024-08-01T00:00:00.000Z",
  },
  {
    _id: "15",
    title: "The Power of JavaScript Frameworks: Angular vs. React vs. Vue.js",
    image:
      "https://create-blog-with-nextjs.vercel.app/_next/image?url=%2Fblogs%2Fpaul-esch-laurent-oZMUrWFHOB4-unsplash.jpg&w=1920&q=75",
    category: "javascript",
    content: `Until now, trying to style an article, document, or blog post with Tailwind has been a tedious task that required a keen eye for typography and a lot of complex custom CSS.
By default, Tailwind removes all of the default browser styling from paragraphs, headings, lists and more. This ends up being really useful for building application UIs because you spend less time undoing user-agent styles, but when you really are just trying to style some content that came from a rich-text editor in a CMS or a markdown file, it can be surprising and unintuitive.`,
    createdAt: "2024-08-08T00:00:00.000Z",
  },
  {
    _id: "16",
    title: "Mastering CSS Grid Layout: A Comprehensive Guide",
    image:
      "https://create-blog-with-nextjs.vercel.app/_next/image?url=%2Fblogs%2Fkelly-sikkema--1_RZL8BGBM-unsplash.jpg&w=640&q=75",
    category: "css",
    content: `Until now, trying to style an article, document, or blog post with Tailwind has been a tedious task that required a keen eye for typography and a lot of complex custom CSS.
    By default, Tailwind removes all of the default browser styling from paragraphs, headings, lists and more. This ends up being really useful for building application UIs because you spend less time undoing user-agent styles, but when you really are just trying to style some content that came from a rich-text editor in a CMS or a markdown file, it can be surprising and unintuitive.`,
    createdAt: "2024-08-10T00:00:00.000Z",
  },
  {
    _id: "17",
    title: "RESTful APIs: Building Blocks of Modern Web Applications",
    image:
      "https://create-blog-with-nextjs.vercel.app/_next/image?url=%2Fblogs%2Fluca-bravo-XJXWbfSo2f0-unsplash.jpg&w=640&q=75",
    category: "code quality",
    content: `Until now, trying to style an article, document, or blog post with Tailwind has been a tedious task that required a keen eye for typography and a lot of complex custom CSS.
    By default, Tailwind removes all of the default browser styling from paragraphs, headings, lists and more. This ends up being really useful for building application UIs because you spend less time undoing user-agent styles, but when you really are just trying to style some
    content that came from a rich-text editor in a CMS or a markdown file, it can be surprising and unintuitive.`,
    createdAt: "2024-08-01T00:00:00.000Z",
  },
];
export function generateMetadata({ params: { id } }: Props) {
  const article = data.find((blog) => blog._id === id);
  return {
    title: article?.title || "Article Not found",
  };
}

export default function page({ params: { id } }: Props) {
  const article = data.find((blog) => blog._id === id);
  if (!article?._id) {
    notFound();
  }
  const date = getFormattedDate(article.createdAt);
  return (
    <article className={Styles.articleContainer}>
      {article.image && (
        <div className={Styles.imgContainer}>
          <Image
            src={article.image}
            alt={article.title}
            width={500}
            height={500}
            className="rounded-lg"
          />
        </div>
      )}

      <div className={Styles.articleCategory}>{article.category}</div>
      <h2>{article.title}</h2>
      <h6>{date}</h6>

      <section className="flex flex-col gap-12 mt-2">
        <p>{article.content}</p>
      </section>
    </article>
  );
}
