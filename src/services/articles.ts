export async function getAllArticles(categoryId?: string) {
  if (categoryId === "undefined" || typeof categoryId === "undefined") {
    const res = await fetch(`http://localhost:3000/api/articles`);

    if (res.ok) {
      const data: Article[] = await res.json();
      return data;
    } else {
      return [];
    }
  }
  const res = await fetch(
    `http://localhost:3000/api/articles?categoryId=${categoryId}`
  );

  if (res.ok) {
    const data: Article[] = await res.json();
    return data;
  } else {
    return [];
  }
}
export async function getArticleById(articleId: string) {
  const res = await fetch(`http://localhost:3000/api/articles/${articleId}`);

  if (res.ok) {
    const data: Article = await res.json();
    return data;
  } else {
    return null;
  }
}
