"use client";
import AboutMe from "@/components/AboutMe/AboutMe";
import React, { useEffect, useState } from "react";
import Styles from "./about.module.css";
import "@react-pdf-viewer/core/lib/styles/index.css";
import "@react-pdf-viewer/default-layout/lib/styles/index.css";
import CVPreview from "@/components/CVPreview/CVPreview";
import Abilities from "@/components/WhatCanDo/Abilities";
const cvs = {
  Backend: "/Abdullah_Mahmoud_NodeJs.pdf",
  Frontend: "/Abdullah-Mahmoud-Frontend.pdf",
  MERN: "/Abdullah-Mahmoud-MERN-Dev.pdf",
};

export default function Page() {
  const [activeCV, setActiveCV] = useState("Frontend");
  const [CVURL, setCVURL] = useState(cvs.Frontend);
  useEffect(() => {
    switch (activeCV) {
      case "Backend":
        setCVURL(cvs.Backend);
        break;
      case "Frontend":
        setCVURL(cvs.Frontend);
        break;
      case "MERN":
        setCVURL(cvs.MERN);
        break;
    }
  }, [activeCV]);
  return (
    <div className="mb-6">
      <AboutMe>
        <div className="flex mt-4 flex-col">
          <h2 className="self-center mb-5">What I Can Do</h2>
        </div>
      </AboutMe>
      <Abilities />
      <ul className={Styles.cvsNav}>
        <li
          onClick={() => setActiveCV("Frontend")}
          className={activeCV === "Frontend" ? Styles.active : ""}
        >
          Frontend
        </li>
        <li
          onClick={() => setActiveCV("Backend")}
          className={activeCV === "Backend" ? Styles.active : ""}
        >
          Backend
        </li>
        <li
          onClick={() => setActiveCV("MERN")}
          className={activeCV === "MERN" ? Styles.active : ""}
        >
          MERN
        </li>
      </ul>
      <CVPreview fileUrl={CVURL} />
    </div>
  );
}
