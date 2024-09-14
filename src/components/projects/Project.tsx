import Image from "next/image";
import React, { useCallback } from "react";
import Styles from "./project.module.css";
import { FiExternalLink } from "react-icons/fi";
import { FaGithub } from "react-icons/fa";
import Link from "next/link";

type Props = {
  project: {
    _id: string;
    name: string;
    description: string;
    technologies: string[];
    url: string;
    image: string;
    github: string;
  };
};

export default function Project({
  project: { name, description, technologies, url, image, github },
}: Props) {
  const setClasses = useCallback((technology: string): string => {
    const techLower = technology.toLowerCase();
    if (techLower === "react.js") {
      return "react";
    } else if (techLower === "express.js") {
      return "express";
    } else if (techLower === "mongodb") {
      return "mongo";
    } else if (techLower === "redux") {
      return "redux";
    }
    return "javascript";
  }, []);

  return (
    <div className={Styles.project}>
      <section className={Styles.imageContainer}>
        <Image src={image} alt={name} width={400} height={400} />
      </section>
      <aside className={Styles.projectContent}>
        <h3>{name}</h3>
        <p>{description.substring(156)}</p>
        <ul className={Styles.technologyList}>
          {technologies.map((technology, idx) => (
            <li className={Styles[setClasses(technology)]} key={idx}>
              {technology}
            </li>
          ))}
        </ul>
        <span className={Styles.links}>
          <Link href={url} className="flex align-center gap-2">
            {" "}
            <FiExternalLink size={32} />{" "}
            <p className="my-auto">Live Demo</p>
          </Link>
          <Link href={github} className="flex align-center gap-2">
            <FaGithub size={32} /> <p className="my-auto">Code</p>
          </Link>
        </span>
      </aside>
    </div>
  );
}
