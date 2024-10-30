"use client";
import Image from "next/image";
import styles from "./hero.module.css";
import { useEffect, useState } from "react";
import { TbSend } from "react-icons/tb";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const jobs = ["Frontend Developer", "Backend  Developer", "FullStackDeveloper"];
export default function HeroSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % jobs.length);
    }, 8000);

    return () => clearInterval(interval);
  }, []);
  useGSAP(() => {
    gsap.fromTo(
      "#textContainer",
      {
        opacity: 0,
      },
      {
        opacity: 1,
        duration:2,
        scrollTrigger: {
          trigger: "#textContainer",
          start: "top bottom",
          end: "bottom top",
          scrub: 1,
        },
      }
    );
  }, []);
  return (
    <div className={`${styles.hero} separator`}>
      <section id="textContainer" className={styles.textContainer}>
        <h1>👋 Hi {"I'm"} Abdullah Mahmoud</h1>
        <span>
          <p className="largeText">{"I'm"} a</p>
          <p className={`${styles.type} largeText`}>{jobs[currentIndex]}</p>
        </span>
        <p className={`smallText ${styles.description}`}>
          Passionate about crafting innovative, reliable web solutions across
          e-commerce, social media, and blogging platforms. Driven to become a
          senior developer, I specialize in building impactful applications
          using React, Node.js, and MongoDB or PostgresSql.
        </p>
        <button className="button flex gap-3" style={{ borderColor: "white" }}>
          Contact Me <TbSend size={24} fill="white" />
        </button>
      </section>
      <aside id="imgContainer">
        <Image
          src={"/developer.svg"}
          alt="Hero image"
          width={400}
          height={400}
        />
      </aside>
    </div>
  );
}
