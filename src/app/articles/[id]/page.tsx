import { getAllArticles, getArticleById } from "@/services/articles";
import React from "react";
import { notFound } from "next/navigation";
import getArabicDate from "@/services/date";
import Image from "next/image";
import Styles from "./article.module.css";
type Props = {
  params: {
    id: string;
  };
};
export async function generateMetadata({ params: { id } }: Props) {
  const article = await getArticleById(id);
  return {
    title: article?.title || "Article Not found",
  };
}

export default async function Article({ params: { id } }: Props) {
  const article = await getArticleById(id);
  if (!article?._id) {
    notFound();
  }
  const date = getArabicDate(article.createdAt.toString());
  return (
    <article className={Styles.articleContainer}>
      {article.img.url && (
        <div className={Styles.imgContainer}>
          <Image
            src={article.img.url}
            alt={article.title}
            width={500}
            height={500}
            className="rounded-lg"
          />
        </div>
      )}

      <div className={Styles.articleCategory}>{article.category.title}</div>
      <h2>{article.title}</h2>
      <h6>{date}</h6>

      <section className="flex flex-col gap-12 mt-2">
        <span className="flex gap-2">
          <h3>المقدمة : </h3> <p>{article.content.introduction}</p>
        </span>
        <span className="flex gap-2">
          <h3>المحتوى : </h3> <p>{article.content.content}</p>
        </span>
        <span className="flex gap-2">
          <h3>الملخص : </h3> <p>{article.content.summary}</p>
        </span>
      </section>
    </article>
  );
}

export async function generateStaticParams() {
  const articles = await getAllArticles();

  return articles.map((article) => ({
    id: article._id,
  }));
}
