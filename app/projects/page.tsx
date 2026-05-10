import Project from "../../components/projects/Project";
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
const projects = [
  {
    GithubLink: "https://github.com/AbdullahM196/e-commerce-adminSide",
    createdAt: "December 26, 2024 at 9:23:24 PM UTC+2",
    description:
      "Our advanced admin dashboard, powered by Node.js, offers secure user authentication, efficient account and transaction management, and a dynamic interface for optimized business control.",
    img: "https://res.cloudinary.com/abdullah-mahmoud/image/upload/v1708116474/MyProjects/uoktig0mx9jk9xq2ptcc.png",
    technologies: ["React.JS", "Redux", "express.JS", "MongoDB", "cloudinary"],
    title: "e-commerce adminSide",
    websiteLink: "https://e-shop-admin1.web.app",
  },
  {
    GithubLink: "https://github.com/AbdullahM196/social-media-frontend",
    createdAt: "March 27, 2025 at 3:57:04AM UTC+2",
    description:
      "Syncho is a modern social media application that enables users to share posts, comment, like, save posts, and engage in real-time chat. It also includes authentication features using JWT and OAuth2 for Google authentication.",
    img: "https://res.cloudinary.com/abdullah-mahmoud/image/upload/v1742980808/MyProjects/phonlwts3wm4dcamvxyh.png",
    technologies: [
      "Typescript",
      "React.JS",
      "Redux",
      "React-router",
      "express.JS",
      "Socket.io",
      "MongoDB",
      "Redis",
      "Oauth 2",
      "Docker",
    ],
    title: "Syncho",
    websiteLink: "https://syncho-6294a.web.app/",
  },
  {
    GithubLink: "https://github.com/AbdullahM196/e-commerce-userSide",
    createdAt: "December 26, 2024 at 9:25:32 PM UTC+2",
    description:
      "Revolutionize online shopping with our e-commerce platform, offering secure user authentication, a powerful Node.js backend, and an interactive interface for smooth browsing and transactions.",
    img: "https://res.cloudinary.com/abdullah-mahmoud/image/upload/v1708116480/MyProjects/zdhdc2udn9jgnoeoj4te.png",
    technologies: ["React.JS", "Redux", "express.JS", "MongoDB", "cloudinary"],
    title: "e-commerce userSide",
    websiteLink: "https://e-shop123.web.app/",
  },
  {
    GithubLink: "https://github.com/AbdullahM196/todo-frontend",
    createdAt: "December 26, 2024 at 9:21:12 PM UTC+2",
    description:
      "The ultimate Todo app. Add, edit, and delete tasks. Create and manage your tasks with ease. Track your progress and stay organized. With Todo, you can accomplish anything.",
    img: "https://res.cloudinary.com/abdullah-mahmoud/image/upload/v1708116468/MyProjects/fcbpxlqarhefgg9bzzxe.png",
    technologies: ["React.JS", "Redux", "express.JS", "MongoDB", "cloudinary"],
    title: "Todo-app",
    websiteLink: "https://todo-app-3edb6.web.app/",
  },
  {
    GithubLink: "https://github.com/AbdullahM196/Blog-api",
    createdAt: "December 26, 2024 at 9:36:49 PM UTC+2",
    description:
      "Developed a RESTful API for a blog using Node.js, MySQL for data management, and Firebase Cloud Storage for image uploads, while ensuring reliability with Jest-based testing.",
    img: "https://res.cloudinary.com/abdullah-mahmoud/image/upload/v1778424651/blog_gmifcy.jpg",
    technologies: ["express.JS", "MySQL", "Firebase Cloud Storage"],
    title: "Blog-api",
    websiteLink: "",
  },
];
