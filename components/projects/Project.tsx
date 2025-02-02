"use client";
import Image from "next/image";
import React, { CSSProperties, useRef, useState } from "react";
import Styles from "./project.module.css";
import { FiExternalLink } from "react-icons/fi";
import { FaGithub } from "react-icons/fa";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
interface customStyle extends CSSProperties {
  "--display": string;
}

type Props = {
  project: {
    name: string;
    description: string;
    technologies: string[];
    websiteLink: string;
    imglink: string;
    GithubLink: string;
  };
  index: number;
};

const setClasses = (technology: string): string => {
  const techLower = technology.toLowerCase();
  if (techLower === "react.js") {
    return "react";
  } else if (techLower === "express.js") {
    return "express";
  } else if (techLower === "mongodb") {
    return "mongo";
  } else if (techLower === "redux") {
    return "redux";
  } else if (techLower.includes("firebase")) {
    return "firebase";
  } else if (techLower.includes("sql")) {
    return "sql";
  }
  return "javascript";
};
export default function Project({
  project: {
    name,
    description,
    technologies,
    websiteLink,
    imglink,
    GithubLink,
  },
  index,
}: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1.33 1"],
  });
  const scale = useTransform(scrollYProgress, [0, 1], [0.7, 1]);
  const opacity = useTransform(scrollYProgress, [0, 1], [0.6, 1]);
  const style: customStyle = {
    "--display": index % 2 === 0 ? "row" : "row-reverse",
  };

  return (
    <motion.div
      ref={ref}
      className={Styles.project}
      style={{ scale, opacity, ...style }}
    >
      <section className={Styles.imageContainer}>
        <Image src={imglink} alt={name} width={400} height={400} />
      </section>
      <aside className={Styles.projectContent}>
        <h3>{name}</h3>
        <p>{description}</p>
        <ul className={Styles.technologyList}>
          {technologies.map((technology, idx) => (
            <li className={Styles[setClasses(technology)]} key={idx}>
              {technology}
            </li>
          ))}
        </ul>
        <span className={Styles.links}>
          <Link href={websiteLink} className="flex align-center gap-2">
            {" "}
            <FiExternalLink size={32} /> <p className="my-auto">Live Demo</p>
          </Link>
          <Link href={GithubLink} className="flex align-center gap-2">
            <FaGithub size={32} /> <p className="my-auto">Code</p>
          </Link>
        </span>
      </aside>
    </motion.div>
  );
}
