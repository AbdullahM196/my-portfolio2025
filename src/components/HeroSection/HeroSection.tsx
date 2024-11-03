import Image from "next/image";
import styles from "./hero.module.css";
import { TbSend } from "react-icons/tb";
import * as motion from "framer-motion/client";
import Jobs from "./Jobs";
import NavigateButton from "../ButtonComponent/NavigateButton";

const animateInit = {
  opacity: 0,
  y: 50,
};
const animate = {
  opacity: 1,
  y: 0,
};
export default function HeroSection() {
  return (
    <div id="hero" className={styles.hero}>
      <motion.section
        className={styles.textContainer}
        initial={animateInit}
        animate={animate}
        transition={{ duration: 2 }}
      >
        <h1>👋 Hi {"I'm"} Abdullah Mahmoud</h1>
        <span>
          <p className="largeText">{"I'm"} a</p>
          <Jobs />
        </span>
        <p className={`smallText ${styles.description}`}>
          Passionate about crafting innovative, reliable web solutions across
          e-commerce, social media, and blogging platforms. Driven to become a
          senior developer, I specialize in building impactful applications
          using React, Node.js, and MongoDB or PostgresSql.
        </p>

        <NavigateButton title="Contact Me" path="contact">
          <TbSend size={24} fill="var(--textColor)" />
        </NavigateButton>
      </motion.section>
      <motion.aside
        initial={animateInit}
        animate={animate}
        transition={{ duration: 2 }}
      >
        <Image
          src={"/developer.svg"}
          alt="Hero image"
          width={400}
          height={400}
          priority
        />
      </motion.aside>
    </div>
  );
}
