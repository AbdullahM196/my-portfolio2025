"use client";
import { useEffect, useState } from "react";
import { jobs } from "../../public/data";
import styles from "./hero.module.css";
import useScreenWidth from "../../hooks/screenWidth";
export default function Jobs() {
  const screenWidth = useScreenWidth();
  const [currentIndex, setCurrentIndex] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % jobs.length);
    }, 8000);

    return () => clearInterval(interval);
  }, []);

  return <p className={`${styles.type} largeText`}>{jobs[currentIndex]}</p>;
}
