"use client";
import { getAllCategory } from "@/services/category";
import React, {
  Dispatch,
  RefObject,
  SetStateAction,
  useContext,
  useEffect,
  useState,
} from "react";
import SingleCategory from "../singleCategory/SingleCategory";
import Styles from "./allCategory.module.css";
import { scrollContext } from "@/context/scrollContext";
type props = {
  setCategoryId: Dispatch<SetStateAction<string | undefined>>;
  categoryId: string | undefined;
};
export default function AllCategory({ setCategoryId, categoryId }: props) {
  const [categories, setCategories] = useState<category[] | undefined>(
    undefined
  );

  useEffect(() => {
    async function fetchCategories() {
      const categories = await getAllCategory();
      setCategories(categories);
    }
    fetchCategories();
  }, []);
  const { allCategoriesRef } = useContext(scrollContext);

  return (
    <div
      className={Styles.allCategories}
      id="AllCategories"
      ref={allCategoriesRef as RefObject<HTMLDivElement>}
    >
      <div onClick={() => setCategoryId("undefined")}>
        <SingleCategory title="الكل" isActive={categoryId === "undefined"} />
      </div>
      {categories?.map((category) => (
        <div key={category._id} onClick={() => setCategoryId(category._id)}>
          <SingleCategory
            title={category.title}
            isActive={categoryId === category._id}
          />
        </div>
      ))}
    </div>
  );
}
