import React, { ReactNode } from "react";
import Styles from "./aboutme.module.css";
import AboutSection from "./aboutSection";
import Image from "next/image";
import Skill from "../Skill/Skill";
import { skills, aboutMe } from "../../../public/data";
import * as motion from "framer-motion/client";
import NavigateButton from "../ButtonComponent/NavigateButton";

type props = {
  children?: ReactNode;
};
const animateInit = {
  opacity: 0,
  x: 50,
};
const asideInit = {
  opacity: 0,
  x: -50,
};

const animateResult = {
  opacity: 1,
  x: 0,
};
const variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 2, staggerChildren: 0.2 } },
};

export default function AboutMe({ children }: props) {
  return (
    <div className={Styles.container}>
      <div id="about" className={Styles.about}>
        <h2 className="self-center mb-5">About Me</h2>
        <div className={Styles.aboutBody}>
          <div className={Styles.content}>
            <motion.aside
              initial={asideInit}
              whileInView={animateResult}
              transition={{ duration: 2 }}
              viewport={{ once: true }}
              className={`${Styles.imageContainer} imgContainers`}
            >
              <Image
                src={"/developer.jpeg"}
                alt="about image"
                width={400}
                height={400}
                priority
              />
            </motion.aside>
            <motion.section
              initial={animateInit}
              whileInView={animateResult}
              transition={{ duration: 2 }}
              viewport={{ once: true }}
            >
              <h2 className="mb-6">Who am I ?</h2>
              {aboutMe.map((data) => (
                <AboutSection
                  key={data.title}
                  title={data.title}
                  subtitle={data.subtitle}
                  content={data.content}
                />
              ))}
             <NavigateButton title={"preview cv"} path="about"/>
            </motion.section>
          </div>
          <div className="flex gap-4 flex-col">
            <motion.h2
              initial={asideInit}
              whileInView={animateResult}
              transition={{ duration: 2 }}
              viewport={{ once: true }}
              id="aboutH2"
            >
              {"I'm "}comfortable in...
            </motion.h2>
            <motion.section
              variants={variants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="flex flex-wrap gap-2"
            >
              {skills.map((skill) => (
                <Skill className="skill opacity-0" key={skill} title={skill} />
              ))}
            </motion.section>
          </div>
        </div>
        {children}
      </div>
    </div>
  );
}
