import React, { ReactNode } from "react";
import Styles from "./aboutme.module.css";
import AboutSection from "./aboutSection";
import Image from "next/image";
import Skill from "../Skill/Skill";
import { skills, aboutMe } from "../../../public/data";
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
              priority
            />
          </aside>
          <section>
            <h2 className="mb-6">Who am I ?</h2>
            {aboutMe.map((data) => (
              <AboutSection
                key={data.title}
                title={data.title}
                subtitle={data.subtitle}
                content={data.content}
              />
            ))}
          </section>
        </div>
        <div className="flex gap-4 flex-col">
          <h2>{"I'm "}comfortable in...</h2>
          <section className="flex flex-wrap gap-2">
            {skills.map((skill) => (
              <Skill key={skill} title={skill} />
            ))}
          </section>
        </div>
      </div>
      {children}
    </div>
  );
}
