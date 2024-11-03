"use client";
import { usePathname, useRouter } from "next/navigation";
import React from "react";

type Props = {
  path: string;
  title: string;
  children?: React.ReactNode;
};

export default function NavigateButton({ path, title, children }: Props) {
  const router = useRouter();
  const pathname = usePathname();

  return (
    <button
      className={`button ${children && "flex gap-3"} ${
        pathname !== "/" ? "hidden" : ""
      }`}
      onClick={() => router.push(`/${path}`)}
    >
      {title} {children}
    </button>
  );
}
