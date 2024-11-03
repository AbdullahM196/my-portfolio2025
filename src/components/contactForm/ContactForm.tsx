import React from "react";
import Styles from "./contact.module.css";
import * as motion from "framer-motion/client";

const initAnimate = {
  opacity: 0,
  y: 50,
};
const animate = {
  opacity: 1,
  y: 0,
};
export default function ContactForm() {
  return (
    <motion.div
      id="contact"
      initial={initAnimate}
      animate={animate}
      transition={{ duration: 2 }}
      className="flex flex-col gap-5 separator contactForm"
    >
      <h2>{"Let's"} Connect!</h2>
      <section className={Styles.contactBody}>
        <p>
          Hello My name is{" "}
          <input
            className={Styles.input}
            type="text"
            placeholder="YourName"
            name="username"
          />
          and I want to discuss a potential project. You can email me at
          <input
            className={Styles.input}
            type="email"
            placeholder="YourEmail"
            name="userEmail"
          />
          or reach out to me on{" "}
          <input
            className={Styles.input}
            type="text"
            placeholder="Your Phone"
            name="userPhoneNumber"
          />
          Here are some details about my project:
          <textarea
            placeholder="Your Project Description"
            name="projectDescription"
            className={`resize-y auto-rows-auto w-full ${Styles.input}`}
          />
        </p>
      </section>
      <button className={"button"}>Send Request</button>
    </motion.div>
  );
}
