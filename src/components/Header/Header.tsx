"use client";
import Link from "next/link";
import Styles from "./header.module.css";
import { CiLight, CiDark } from "react-icons/ci";
import { useEffect } from "react";
import { toggleTheme } from "@/store/slices/themeSlice";
import Image from "next/image";
import { useAppDispatch, useAppSelector } from "@/store/store";
import Github from "../Icons/github";
import { MdEmail } from "react-icons/md";
import LinkedIn from "../Icons/linkedIn";
import { FaWhatsapp } from "react-icons/fa";
import useScrollSpy from "@/hooks/scrollSpy";
import { usePathname,useRouter } from "next/navigation";

export default function Header() {
  const activeSection = useScrollSpy();
  const pathname = usePathname();
  const router = useRouter();
  const theme = useAppSelector((state) => state.theme.theme);
  function handleToggleTheme() {
    dispatch(toggleTheme());
  }
  const dispatch = useAppDispatch();
  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme!);
  }, [theme]);

  return (
    <header className={Styles.header}>
      <div className={Styles.logo} onClick={() => router.push("/")}>
        <Image
          src={"/myImage.jpeg"}
          alt="portfolio logo"
          width={48}
          height={48}
        />
        <h1>Abdullah</h1>
      </div>

      {pathname === "/" && (
        <nav className={Styles.nav}>
          <Link
            className={activeSection === "hero" ? Styles.active : ""}
            href={"#hero"}
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
            href={"#projectsSection"}
          >
            Projects
          </Link>
          <Link
            className={activeSection === "contact" ? Styles.active : ""}
            href={"#contact"}
          >
            Contact
          </Link>
          <span onClick={handleToggleTheme}>
            {theme === "dark" ? (
              <CiLight size={24} fill="black" />
            ) : (
              <CiDark size={24} fill="black" />
            )}
          </span>
        </nav>
      )}
      <aside className={Styles.liftSide}>
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
    </header>
  );
}
