import React, { ReactNode } from "react";
import Styles from "./aboutme.module.css";
import AboutSection from "./aboutSection";
import Image from "next/image";
import Skill from "../Skill/Skill";
type props = {
  children?: ReactNode;
};
export default function AboutMe({ children }: props) {
  return (
    <div className={`${Styles.about} separator`}>
      <h2 className="self-center mb-5">About Me</h2>
      <div className={Styles.aboutBody}>
        <div className={Styles.content}>
          <aside className={Styles.imageContainer}>
            <Image
              src={"/developer.jpeg"}
              alt="about image"
              width={400}
              height={400}
            />
          </aside>
          <section>
            <h2 className="mb-6">Who am I ?</h2>
            <AboutSection
              title="introduce"
              subtitle="Hello! I'm Abdullah Mahmoud"
              body=" I am a passionate full-stack developer with a passion for creating
            innovative and user-friendly web solutions. I am dedicated to
            pushing the boundaries of what is possible in the digital world."
            />
            <AboutSection
              title="Education & Experience"
              body="I graduated from the Faculty of Commerce with a specialization in Management Information Systems. My passion for technology led me to complete two intensive code camps at the Information Technology Institute, each lasting four months. The first camp provided me with a strong foundation in software development fundamentals, while the second deepened my expertise in the MEARN stack, enabling me to build dynamic and responsive web applications.
These experiences have equipped me with the skills needed to excel in software and web development. Since then, I've worked on a variety of projects, continuously refining my abilities and staying up-to-date with industry trends. My journey has been driven by a commitment to mastering my craft and delivering high-quality solutions."
            />
          </section>
        </div>
        <div className="flex gap-4 flex-col">
          <h2>{"I'm "}comfortable in...</h2>
          <section className="flex flex-wrap gap-2">
            <Skill title={"HTML"} />
            <Skill title={"CSS"} />
            <Skill title={"Bootstrap"} />
            <Skill title={"TailwindCSS"} />
            <Skill title={"Javascript"} />
            <Skill title={"Typescript"} />
            <Skill title={"React.Js"} />
            <Skill title={"Next.Js"} />
            <Skill title={"Node.Js"} />
            <Skill title={"Express.Js"} />
            <Skill title={"MongoDB"} />
            <Skill title={"SQL"} />
            <Skill title={"Git"} />
          </section>
        </div>
      </div>
      {children}
    </div>
  );
}
