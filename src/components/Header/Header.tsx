"use client";
import Link from "next/link";
import Styles from "./header.module.css";
import { CiLight, CiDark } from "react-icons/ci";
import { useEffect } from "react";
import Image from "next/image";
import Github from "../Icons/github";
import { MdEmail } from "react-icons/md";
import LinkedIn from "../Icons/linkedIn";
import { FaWhatsapp } from "react-icons/fa";
import useScrollSpy from "@/hooks/scrollSpy";
import { usePathname, useRouter } from "next/navigation";
import { useTheme } from "@/hooks/toogleTheme";
import { useState } from "react";
import SMNav from "./SMNav";
import { AnimatePresence } from "framer-motion";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoCloseSharp } from "react-icons/io5";
import ToggleTheme from "./ToggleTheme";

export default function Header() {
  const [isVisible, setIsVisible] = useState(false);
  const activeSection = useScrollSpy();
  const pathname = usePathname();
  const router = useRouter();

  return (
    <header className={Styles.header}>
      <div className={Styles.logo} onClick={() => router.push("/")}>
        <Image
          src={
            "https://firebasestorage.googleapis.com/v0/b/test-6f98f.appspot.com/o/my%20Portfolio%2FmyImage.jpeg?alt=media&token=ef14721d-5216-47f2-836a-e5c9f876c66e"
          }
          alt="portfolio logo"
          width={48}
          height={48}
        />
        <h1>Abdullah</h1>
      </div>

      {pathname === "/" && (
        <nav className={Styles.nav}>
          <Link
            className={activeSection === "home" ? Styles.active : ""}
            href={"#home"}
          >
            Home
          </Link>
          <Link
            className={activeSection === "about" ? Styles.active : ""}
            href={"#about"}
          >
            About
          </Link>
          <Link
            className={activeSection === "projectsSection" ? Styles.active : ""}
            href={"#projects"}
          >
            Projects
          </Link>
          <Link
            className={activeSection === "contact" ? Styles.active : ""}
            href={"#contact"}
          >
            Contact
          </Link>
          <ToggleTheme />
        </nav>
      )}
      <aside className={Styles.rightSide}>
        <span className="flex gap-3">
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
      </aside>

      {pathname === "/" && (
        <div className={Styles.burgerContainer}>
          {isVisible ? (
            <IoCloseSharp
              size={24}
              className={Styles.burger}
              onClick={() => setIsVisible(false)}
            />
          ) : (
            <GiHamburgerMenu
              size={24}
              className={Styles.burger}
              onClick={() => setIsVisible(true)}
            />
          )}
          <AnimatePresence initial={false}>
            {isVisible && <SMNav />}
          </AnimatePresence>
        </div>
      )}
    </header>
  );
}
