"use client";
import React, { useCallback } from "react";
import Styles from "./blog.module.css";
import Image from "next/image";
import getFormattedDate from "@/services/date";
import { useRouter } from "next/navigation";

type Props = {
  blog: {
    _id: string;
    title: string;
    image: string;
    category: string;
    createdAt: string;
  };
};

export default function BlogCard({
  blog: { _id, title, image, category, createdAt },
}: Props) {
  const date = getFormattedDate(createdAt);
  const router = useRouter();
  return (
    <div className={Styles.blogCard}>
      <Image src={image} alt={title} width={400} height={400} />
      <section className="ps-1">
        <p className={Styles.blogCategory}>{category.toUpperCase()}</p>
        <h3
          className={Styles.blogTitle}
          onClick={() => router.push(`/blog/${_id}`)}
        >
          {title}
        </h3>
        <p className="smallText" style={{ color: "var(--mutedColor)" }}>
          {date}
        </p>
      </section>
    </div>
  );
}
