import React from "react";
import Project from "./Project";
import Link from "next/link";
import { projects } from "../../../public/data";

export default function AllProjects() {
  return (
    <div className="separator">
      <section className="flex align-top justify-between mb-5">
        <h2>My projects</h2>
        <Link
          href={"/projects"}
          className="h6 cursor-pointer"
          style={{ color: "var(--accentColor)", textDecoration: "underline" }}
        >
          View More
        </Link>
      </section>
      <section className="flex flex-col gap-6 align-center justify-center">
        {projects.map((project) => (
          <Project key={project.name} project={project} />
        ))}
      </section>
    </div>
  );
}
