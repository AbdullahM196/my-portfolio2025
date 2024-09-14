import React from "react";
import Github from "../Icons/github";
import LinkedIn from "../Icons/linkedIn";
import { MdEmail } from "react-icons/md";
import { FaWhatsapp } from "react-icons/fa";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className=" relative bottom-2  flex justify-center gap-2 mt-6">
      <p>2024 My Portfolio. All rights reserved.</p>

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
    </footer>
  );
}
