import React from "react";
import Styles from "./skill.module.css";
import * as motion from "framer-motion/client";
type Props = {
  title: string;
  className: string;
};
const childVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.2 } },
};
export default function Skill({ title, className }: Props) {
  return (
    <motion.p
      variants={childVariants}
      className={`${Styles.skill} ${className}`}
    >
      {title}
    </motion.p>
  );
}
