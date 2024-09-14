"use client";
import React, { useState } from "react";

import AllCategory from "../Categories/AllCategory";
import CategoryArticles from "../CategoryArticles/CategoryArticles";
export default function Articles() {
  const [categoryId, setCategoryId] = useState<string | undefined>("undefined");
  return (
    <>
      <AllCategory setCategoryId={setCategoryId} categoryId={categoryId} />
      <CategoryArticles categoryId={categoryId} />
    </>
  );
}
