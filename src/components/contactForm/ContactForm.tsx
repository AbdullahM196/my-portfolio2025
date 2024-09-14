"use client";
import React, { useRef } from "react";
import Styles from "./contact.module.css";
export default function ContactForm() {
  const textareaRef = useRef(null);
  return (
    <div className="flex flex-col gap-5 separator">
      <h2>{"Let's"} Connect!</h2>
      <section className={Styles.contactBody}>
        <p>
          Hello My name is{" "}
          <input
            className={Styles.input}
            type="text"
            placeholder="YourName"
            name="username"
          />
          and I want to discuss a potential project. You can email me at
          <input
            className={Styles.input}
            type="email"
            placeholder="YourEmail"
            name="userEmail"
          />
          or reach out to me on{" "}
          <input
            className={Styles.input}
            type="text"
            placeholder="Your Phone"
            name="userPhoneNumber"
          />
          Here are some details about my project:
          <textarea
            placeholder="Your Project Description"
            name="projectDescription"
            className={`resize-y auto-rows-auto w-full ${Styles.input}`}
          />
        </p>
      </section>
      <button className={"button"}>Send Request</button>
    </div>
  );
}
