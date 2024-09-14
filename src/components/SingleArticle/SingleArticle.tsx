import React from "react";
import Styles from "./singleArticle.module.css";
import Image from "next/image";
import getArabicDate from "@/services/date";
import Link from "next/link";
type Props = {
  article: Article;
};

export default function SingleArticle({ article }: Props) {
  const articleIntro =
    article.content.introduction.length > 239
      ? article.content.introduction.substring(0, 239) + "..."
      : article.content.introduction;

  const date = getArabicDate(article.createdAt.toString());
  return (
    <div className={Styles.articleContainer}>
      <section className={Styles.imgContainer}>
        <Image
          src={article?.img.url}
          alt="article Image"
          width={1024}
          height={1024}
        />
      </section>
      <aside className={Styles.leftSide}>
        <p className={`subHeading ${Styles.articleCategory}`}>
          {article.category.title}
        </p>
        <h1>{article.title}</h1>
        <p className={`subHeading ${Styles.articleIntroduction}`}>
          {articleIntro}
        </p>
        <p className="subHeading">{date}</p>
        <Link href={`/articles/${article._id}`} className="button">
          شاهد المزيد
        </Link>
      </aside>
    </div>
  );
}
