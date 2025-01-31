import Image from "next/image";
import styles from "./hero.module.css";
import { TbSend } from "react-icons/tb";
import * as motion from "framer-motion/client";
import Jobs from "./Jobs";
import NavigateButton from "../ButtonComponent/NavigateButton";
import { RxDownload } from "react-icons/rx";
import { cv } from "../../../public/data";
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
    <motion.section
      id="home"
      className={styles.textContainer}
      initial={animateInit}
      animate={animate}
      transition={{ duration: 2 }}
    >
      <Image
        className="rounded-full"
        src="https://firebasestorage.googleapis.com/v0/b/test-6f98f.appspot.com/o/my%20Portfolio%2FmyImage.jpeg?alt=media&token=ef14721d-5216-47f2-836a-e5c9f876c66e"
        alt="abdullah mahmoud personal photo"
        width={120}
        height={120}
      />
      <h1 className="text-center">👋 Hi! {"I'm"} Abdullah Mahmoud</h1>
      <span>
        <p className="largeText">{"I'm"} a</p>
        <Jobs />
      </span>
      <p className={styles.description}>
        I am a web developer based on Alexandria, Egypt with a passion for
        creating <br /> innovative and reliable web solutions.
      </p>

      <div className="flex gap-4">
        <NavigateButton title="Contact Me" path="/contact">
          <TbSend size={24} fill="var(--textColor)" />
        </NavigateButton>
        <NavigateButton title={"preview cv"} path={cv}>
          <RxDownload size={24} />
        </NavigateButton>
      </div>
    </motion.section>
  );
}
