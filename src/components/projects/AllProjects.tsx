import Project from "./Project";
import Link from "next/link";
import * as motion from "framer-motion/client";
import Styles from "./project.module.css";
import { getAllProjects } from "@/utils/getData";
const viewMoreInit = {
  opacity: 0,
  x: 50,
};
const titleInit = {
  opacity: 0,
  x: -50,
};
const resultAnimation = {
  opacity: 1,
  x: 0,
};
export default async function AllProjects() {
  const projects = await getAllProjects(4);
  return (
    <div
      id="projects"
      className="overflow-hidden min-h-screen py-4 mb-8"
    >
      <section className="flex align-top justify-between mb-5">
        <motion.h2
          initial={titleInit}
          whileInView={resultAnimation}
          transition={{ duration: 2 }}
          viewport={{ once: true }}
        >
          My projects
        </motion.h2>
        <motion.span
          initial={viewMoreInit}
          whileInView={resultAnimation}
          transition={{ duration: 2 }}
          viewport={{ once: true }}
        >
          <Link
            href={"/projects"}
            className="h6 cursor-pointer hover:underline"
            style={{ color: "var(--accentColor)" }}
          >
            View More
          </Link>
        </motion.span>
      </section>
      <section
        id="allProjects"
        className={`w-full flex flex-col gap-6 align-center justify-center ${Styles.projectsList}`}
      >
        {projects.map(({ data: project, id }, index) => (
          <Project
            key={id}
            project={{
              name: project.title,
              description: project.description,
              technologies: project.technologies,
              websiteLink: project.websiteLink,
              imglink: project.img,
              GithubLink: project.GithubLink,
            }}
            index={index + 1}
          />
        ))}
      </section>
    </div>
  );
}
