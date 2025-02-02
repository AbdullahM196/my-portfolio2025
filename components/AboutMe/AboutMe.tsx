import React, { ReactNode } from "react";
import Styles from "./aboutme.module.css";
import Image from "next/image";
import Skill from "../Skill/Skill";
import * as motion from "framer-motion/client";
import Education from "../Icons/education";
import AboutCards from "./aboutSection";
import Work from "../Icons/work";
import Code from "../Icons/Code";
import Abilities from "../WhatCanDo/Abilities";
import { getAllSkills } from "../../utils/getData";

type props = {
  children?: ReactNode;
};
const animateInit = {
  opacity: 0,
  x: 50,
};
const asideInit = {
  opacity: 0,
  y: 50,
  transition: { duration: 1 },
};

const animateResult = {
  opacity: 1,
  y: 0,
  x: 0,
};
const variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,

    transition: { duration: 2, staggerChildren: 0.2 },
  },
};
const titleInit = {
  opacity: 0,
  y: 50,
};
const titleResult = {
  opacity: 1,
  y: 0,
};

export default async function AboutMe({ children }: props) {
  const Skills = await getAllSkills();
  const variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,

      transition: {
        duration: Skills.length * 0.2,
        staggerChildren: 0.2,
      },
    },
  };
  return (
    <div className={Styles.container}>
      <div id="about" className={Styles.about}>
        <motion.h4
          initial={titleInit}
          whileInView={titleResult}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="self-center mb-2"
          style={{ color: "var(--textColor)" }}
        >
          Introduction
        </motion.h4>
        <motion.h1
          initial={titleInit}
          whileInView={titleResult}
          transition={{ duration: 1.25 }}
          viewport={{ once: true }}
          className="self-center mb-6 text-[48px] font-thin"
          style={{ color: "var(--textColor)" }}
        >
          About Me
        </motion.h1>
        <Abilities />
        <div className={Styles.aboutBody}>
          <div className={Styles.content}>
            <motion.aside
              initial={asideInit}
              whileInView={animateResult}
              transition={{ duration: 2 }}
              viewport={{ once: true }}
              className={Styles.imageContainer}
            >
              <Image
                src={
                  "https://firebasestorage.googleapis.com/v0/b/test-6f98f.appspot.com/o/my%20Portfolio%2FmyImage.jpeg?alt=media&token=ef14721d-5216-47f2-836a-e5c9f876c66e"
                }
                alt="about image"
                width={300}
                height={300}
                priority
              />
            </motion.aside>
            <motion.section
              initial={animateInit}
              whileInView={animateResult}
              transition={{ duration: 2 }}
              viewport={{ once: true }}
              className="flex flex-col justify-between gap-3"
            >
              <p className="text-[var(--textColor)] overflow-hidden md:text-justify sm:text-center">
                I am a passionate full-stack developer dedicated to creating
                innovative and user-friendly web solutions.I hold a degree in
                Management Information Systems from the Faculty of Commerce. My
                enthusiasm for technology led me to complete two intensive,
                four-month coding camps at the Information Technology Institute
              </p>

              <div className={Styles.aboutCards}>
                <AboutCards
                  svg={<Education width="31px" height="31px" />}
                  title="Education"
                  content="Bachelor Degree in Management Information Systems From the Faculty of Commerce"
                />
                <AboutCards
                  svg={<Code width="31px" height="31px" />}
                  title="Internships"
                  content="Software development fundamentals and MEARN stack at the Information Technology Institute (ITI)."
                />
                <AboutCards
                  svg={<Work width="31px" height="31px" />}
                  title="Projects"
                  content="Built multiple projects using React.js, Next.js, Node.js, Express.js, MongoDB, SQL, and TypeScript."
                />
              </div>
              <div className="flex gap-4 flex-col">
                <motion.h6
                  initial={asideInit}
                  whileInView={animateResult}
                  transition={{ duration: 2 }}
                  viewport={{ once: true }}
                >
                  {"I'm "}comfortable in...
                </motion.h6>
                <motion.section
                  variants={variants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  className="flex flex-wrap gap-2"
                >
                  {Skills.map(({ data, id }) => (
                    <Skill
                      className="skill opacity-0 hover:scale-110 cursor-pointer"
                      key={id}
                      title={data.name}
                    />
                  ))}
                </motion.section>
              </div>
            </motion.section>
          </div>
        </div>
        {children}
      </div>
    </div>
  );
}
