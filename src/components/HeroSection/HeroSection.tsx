"use client";
import Styles from "./hero.module.css";
import { useEffect, useState } from "react";
import { TbSend } from "react-icons/tb";

const jobs = ["Frontend Developer", "Backend  Developer", "FullStackDeveloper"];
export default function HeroSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % jobs.length);
    }, 8000);

    return () => clearInterval(interval);
  }, []);
  return (
    <div className={`${Styles.hero} separator`}>
      <section className={Styles.textContainer}>
        <h1>Hi {"I'm"} Abdullah Mahmoud</h1>
        <span>
          <p className="largeText">{"I'm"} a</p>
          <p className={`${Styles.type} largeText`}>{jobs[currentIndex]}</p>
        </span>
        <p className={`smallText ${Styles.description}`}>
          {"I'm"} a passionate full-stack developer specializing in creating
          seamless e-commerce, social media, and blog platforms. With a focus on
          solving complex problems and delivering reliable solutions, {"I'm"}{" "}
          dedicated to pushing the boundaries of {"what's"} possible in the
          digital world. My goal is to be among the best in the industry,
          providing innovative and trustworthy web solutions that stand the test
          of time
        </p>
        <button className="button flex gap-3" style={{ borderColor: "white" }}>
          Contact Me <TbSend size={24} fill="white" />
        </button>
      </section>
    </div>
  );
}
