import React from "react";
import Styles from "./skill.module.css";
import * as motion from "framer-motion/client";
import { Variants } from "framer-motion";
type Props = {
  title: string;
  className: string;

};

const variants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
    },
  },
};
export default function Skill({ title, className }: Props) {
  return (
    <motion.p
      variants={variants}
      className={`${Styles.skill} ${className}`}
    >
      {title}
    </motion.p>
  );
}
