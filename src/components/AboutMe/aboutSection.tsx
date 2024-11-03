import React from "react";
import Styles from "./aboutme.module.css";
type Props = {
  title: string;
  subtitle?: string;
  content: string;
};

export default function AboutSection({ title, subtitle, content }: Props) {
  return (
    <section className={Styles.AboutSection}>
      <p className={Styles.aboutSectionTitle}>{title}</p>
      {subtitle && <h3>{subtitle}</h3>}
      <p className={Styles.body}>{content}</p>
    </section>
  );
}
