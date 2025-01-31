import React, { ReactNode } from "react";

type Props = {
  title: string;
  svg: ReactNode;
  content: string;
};

export default function AboutCards({ svg, title, content }: Props) {
  return (
    <div
      className="flex flex-col gap-4 border border-[var(--mutedColor)] p-4 rounded-lg w-[200px] h-[200px]"
      style={{ color: "var(--textColor)" }}
    >
      {svg}
      <p className="font-bold">{title}</p>
      <p className="text-sm">{content}</p>
    </div>
  );
}
