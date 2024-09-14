import React from "react";
import Styles from "./skill.module.css";
type Props = {
  title: string;
};

export default function Skill({ title }: Props) {
  return <p className={Styles.skill}>{title}</p>;
}
