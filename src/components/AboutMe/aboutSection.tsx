import React from "react";
import Styles from "./aboutme.module.css";
type Props = {
  title: string;
  subtitle?: string;
  body: string;
};

export default function AboutSection({ title, subtitle, body }: Props) {
  return (
    <section className={Styles.AboutSection}>
      <p className={Styles.aboutSectionTitle}>{title}</p>
      {subtitle && <h3>{subtitle}</h3>}
      <p className={Styles.body}>{body}</p>
    </section>
  );
}
