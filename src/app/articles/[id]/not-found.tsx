import Link from "next/link";
import React from "react";

export default function notFound() {
  return (
    <div
      className="flex flex-col gap-10 justify-center items-center"
      style={{ height: "calc(100vh - 150px)" }}
    >
      <h1 className="bg-inherit">page not found , 404</h1>
      <Link href={"/"} className="button">
        Go Home
      </Link>
    </div>
  );
}
