import Project from "./Project";
import Link from "next/link";
import { projects } from "../../../public/data";
import * as motion from "framer-motion/client";

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
export default function AllProjects() {
  return (
    <div id="projectsSection" className="overflow-x-hidden min-h-screen py-4">
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
        className="flex flex-col gap-6 align-center justify-center"
      >
        {projects.map((project) => (
          <Project key={project.name} project={project} />
        ))}
      </section>
    </div>
  );
}
