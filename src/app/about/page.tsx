"use client";
import AboutMe from "@/components/AboutMe/AboutMe";
import React, { useState } from "react";
import Styles from "./about.module.css";
const cvs = [
  { Backend: "/Abdullah_Mahmoud_NodeJs.pdf" },
  { Frontend: "/Abdullah-Mahmoud-Frontend.pdf" },
  { MERN: "/Abdullah-Mahmoud-MERN-Dev.pdf" },
];
export default function Page() {
  const [cv, setCv] = useState("");
  return (
    <div className="mb-6">
      <AboutMe>
        <div className="flex mt-4 flex-col">
          <h2 className="self-center mb-5">What I Can Do</h2>
          <section className="flex flex-col gap-2">
            <p className="text-lg font-semibold">
              I specialize in creating fully responsive websites using HTML,
              CSS, JavaScript, and frameworks like Bootstrap and TailwindCSS,
              ensuring a seamless user experience.{"I'm"} proficient in building
              Single Page Applications (SPAs) with React.js and Next.js,
              delivering fast and dynamic web interfaces.
            </p>
            <p className="text-lg font-semibold">
              On the backend, I develop robust APIs using Node.js, MongoDB, and
              MySQL, prioritizing performance, security, and scalability. I have
              expertise in implementing secure authentication systems with JWT
              and OAuth, as well as building real-time applications.
            </p>

            <p className="text-lg font-semibold">
              With experience in deploying applications on cloud platforms like
              AWS and Google Cloud, I also manage CI/CD pipelines for automated
              testing and seamless deployment, ensuring that your applications
              are reliable and always up-to-date.
            </p>

            <p className="text-lg font-semibold">
              I am also passionate about staying up-to-date with the latest
              technologies and trends, and I am always looking for new
              opportunities to learn and grow. If you have any questions or
              comments, feel free to reach out to me.
            </p>
          </section>
        </div>
      </AboutMe>

      <ul className={Styles.cvsNav}>
        <li className={Styles.active}>Frontend</li>
        <li>Backend</li>
        <li>MERN</li>
      </ul>
    </div>
  );
}
