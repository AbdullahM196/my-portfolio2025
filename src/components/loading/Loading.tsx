import React from "react";
import Styles from "./loading.module.css";
export default function Loading() {
  return (
    <div className="w-full flex justify-center items-center h-screen bg-black">
      <div className={Styles.loader}>
        <span className={Styles.bar}></span>
        <span className={Styles.bar}></span>
        <span className={Styles.bar}></span>
      </div>
    </div>
  );
}
