declare interface IProject {
  title: string;
  description: string;
  technologies: string[];
  img: string;
  GithubLink: string;
  websiteLink?: string;
}
declare interface ProjectType {
  data: IProject;
  id: string;
}
