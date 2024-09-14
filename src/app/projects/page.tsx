import Project from "@/components/projects/Project";
import React from "react";
const data = [
  {
    _id: "1",
    name: "e-commerce-userSide",
    description:
      "Revolutionize your online shopping experience with our cutting-edge e-commerce platform, boasting seamless user authentication and a robust Node.js backend. Enjoy secure access to your account, streamlined browsing, and effortless transactions, all powered by advanced technology. Elevate your online presence and engage customers like never before with our dynamic user interface and powerful backend infrastructure.",
    technologies: ["React.JS", "Redux", "express.JS", "MongoDB", "cloudinary"],
    url: "https://e-shop123.web.app/",
    image:
      "https://res.cloudinary.com/abdullah-mahmoud/image/upload/v1708116480/MyProjects/zdhdc2udn9jgnoeoj4te.png",
    github: "https://github.com/AbdullahM196/e-commerce-userSide",
  },
  {
    _id: "2",
    name: "e-commerce-userSide",
    description:
      "Revolutionize your online shopping experience with our cutting-edge e-commerce platform, boasting seamless user authentication and a robust Node.js backend. Enjoy secure access to your account, streamlined browsing, and effortless transactions, all powered by advanced technology. Elevate your online presence and engage customers like never before with our dynamic user interface and powerful backend infrastructure.",
    technologies: ["React.JS", "Redux", "express.JS", "MongoDB", "cloudinary"],
    url: "https://e-shop123.web.app/",
    image:
      "https://res.cloudinary.com/abdullah-mahmoud/image/upload/v1708116480/MyProjects/zdhdc2udn9jgnoeoj4te.png",
    github: "https://github.com/AbdullahM196/e-commerce-userSide",
  },
  {
    _id: "3",
    name: "e-commerce-userSide",
    description:
      "Revolutionize your online shopping experience with our cutting-edge e-commerce platform, boasting seamless user authentication and a robust Node.js backend. Enjoy secure access to your account, streamlined browsing, and effortless transactions, all powered by advanced technology. Elevate your online presence and engage customers like never before with our dynamic user interface and powerful backend infrastructure.",
    technologies: ["React.JS", "Redux", "express.JS", "MongoDB", "cloudinary"],
    url: "https://e-shop123.web.app/",
    image:
      "https://res.cloudinary.com/abdullah-mahmoud/image/upload/v1708116480/MyProjects/zdhdc2udn9jgnoeoj4te.png",
    github: "https://github.com/AbdullahM196/e-commerce-userSide",
  },
];
export default function page() {
  return (
    <div className="flex flex-col gap-6 ">
      {data.map((project) => (
        <Project key={project._id} project={project} />
      ))}
    </div>
  );
}
