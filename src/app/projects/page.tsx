import Project from "@/components/projects/Project";
import { projects } from "../../../public/data";
export default function Page() {
  return (
    <div className="flex flex-col gap-6">
      {projects.map((project) => (
        <Project key={project.id} project={project} className="projects" />
      ))}
    </div>
  );
}
