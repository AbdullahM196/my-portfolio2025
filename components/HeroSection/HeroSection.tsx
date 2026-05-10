import * as motion from "framer-motion/client";
import Image from "next/image";
import { RxDownload } from "react-icons/rx";
import { TbSend } from "react-icons/tb";
import NavigateButton from "../ButtonComponent/NavigateButton";
import styles from "./hero.module.css";
import Jobs from "./Jobs";
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
        src="https://res.cloudinary.com/abdullah-mahmoud/image/upload/v1778424495/my_img_hv1poa.png"
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
        <NavigateButton
          title="preview cv"
          path="/abdullah-MERN-cv.pdf"
          target="_blank"
          rel="noopener noreferrer"
        >
          <RxDownload size={24} />
        </NavigateButton>
      </div>
    </motion.section>
  );
}
