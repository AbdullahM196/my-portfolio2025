"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

type Props = {
  path: string;
  title: string;
  children?: React.ReactNode;
  borderColor?: string;
  target?: string;
  rel?: string;
};

export default function NavigateButton({
  path,
  title,
  children,
  borderColor,
  target = "",
  rel = "",
}: Props) {
  const pathname = usePathname();

  return (
    <Link
      className={`button ${children && "flex gap-3"} ${
        pathname !== "/" ? "hidden" : ""
      }`}
      href={path}
      style={{ borderColor }}
      target={target}
    >
      {title} {children}
    </Link>
  );
}
