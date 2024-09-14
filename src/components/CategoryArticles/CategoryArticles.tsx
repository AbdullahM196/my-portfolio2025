import React, { useEffect, useState } from "react";
import SingleArticle from "../SingleArticle/SingleArticle";
import { getAllArticles } from "@/services/articles";

type Props = {
  categoryId: string | undefined;
};

export default function CategoryArticles({ categoryId }: Props) {
  const [articles, setArticles] = useState<Article[] | []>([]);
  useEffect(() => {
    async function fetchArticles() {
      const articles = await getAllArticles(categoryId);
      setArticles(articles);
    }
    fetchArticles();
  }, [categoryId]);
  return (
    <div>
      {articles.map((article) => (
        <SingleArticle key={article._id} article={article} />
      ))}
    </div>
  );
}
