import Project from "../../components/projects/Project";
import { projects } from "../../public/data";
export default function Page() {
  return (
    <div className="flex flex-col gap-6">
      {projects.map((project, index) => (
        <Project
          key={index}
          project={{
            name: project.title,
            description: project.description,
            technologies: project.technologies,
            websiteLink: project.websiteLink,
            imglink: project.img,
            GithubLink: project.GithubLink,
          }}
          index={index}
        />
      ))}
    </div>
  );
}
