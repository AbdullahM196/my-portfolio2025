import Project from "@/components/projects/Project";
import { getAllProjects } from "@/utils/getData";
export default async function Page() {
  const projects = await getAllProjects();
  return (
    <div className="flex flex-col gap-6">
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
          index={index}
        />
      ))}
    </div>
  );
}
