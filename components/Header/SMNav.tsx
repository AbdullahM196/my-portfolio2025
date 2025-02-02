"use client";
import React from "react";
import { CiHome } from "react-icons/ci";
import { RxAvatar } from "react-icons/rx";
import Work from "../Icons/work";
import { RiContactsLine } from "react-icons/ri";
import Styles from "./header.module.css";
import * as motion from "framer-motion/client";
import useScrollSpy from "../../hooks/scrollSpy";
import Link from "next/link";
import ToggleTheme from "./ToggleTheme";
import { useTheme } from "../../hooks/toogleTheme";
import LinkedIn from "../Icons/linkedIn";
import Github from "../Icons/github";
import { FaWhatsapp } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
const listItems = [
  {
    Icon: <CiHome size={21} />,
    label: "Home",
  },
  {
    Icon: <RxAvatar size={21} />,
    label: "About",
  },
  {
    Icon: <Work width={"21px"} height={"21px"} />,
    label: "Projects",
  },
  {
    Icon: <RiContactsLine size={21} />,
    label: "Contact",
  },
];
export default function SMNav() {
  const activeSection = useScrollSpy();
  const { theme } = useTheme();
  return (
    <motion.nav
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0 }}
      className={Styles.smallNav}
    >
      {listItems.map(({ label, Icon }, index) => (
        <Link
          href={`#${label.toLowerCase()}`}
          key={index}
          className={activeSection === label.toLowerCase() ? Styles.active : ""}
        >
          {Icon}
          {label}
        </Link>
      ))}
      <span className="flex gap-3">
        <ToggleTheme /> {theme === "dark" ? "Light" : "Dark"}
      </span>
      <span className="flex justify-between w-full px-4">
        <Link href={"https://github.com/AbdullahM196"} target="_blank">
          <Github width="24" height="24" />
        </Link>
        <Link
          href={"https://www.linkedin.com/in/abdullah-mahmoud-f196/"}
          target="_blank"
        >
          <LinkedIn />
        </Link>
        <Link href={"https://wa.me/01066868100"} target="_blank">
          <FaWhatsapp size={24} fill="green" />
        </Link>
        <Link href={"mailTo:abdullah.mahmoud.f196@gmail.com"} target="_blank">
          {" "}
          <MdEmail size={24} fill="var(--textColor)" />
        </Link>
      </span>
    </motion.nav>
  );
}
