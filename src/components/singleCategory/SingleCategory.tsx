import React from "react";

type Props = {
  title: string;
  isActive: boolean;
};

export default function SingleCategory({ title, isActive }: Props) {
  return (
    <div
      className="button"
      style={{
        backgroundColor: isActive
          ? "var(--accentColor)"
          : "var(--primaryColor)",
      }}
    >
      {title}
    </div>
  );
}
