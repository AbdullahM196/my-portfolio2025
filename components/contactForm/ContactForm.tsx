"use client";
import React, { useState } from "react";
import Styles from "./contact.module.css";
import * as motion from "framer-motion/client";
import emailjs from "@emailjs/browser";
import { toast } from "react-toastify";
const initAnimate = {
  opacity: 0,
  y: 50,
};
const animate = {
  opacity: 1,
  y: 0,
};
export default function ContactForm() {
  const [data, setData] = useState({
    username: "",
    useremail: "",
    userphone: "",
    message: "",
  });

  const sendEmail = () => {
    if (
      ((!data.useremail || !data.userphone) && !data.username) ||
      !data.message
    )
      return toast.error("Failed to send email");
    emailjs
      .send(
        process.env.NEXT_PUBLIC_Email_Js_ServiceId!,
        "template_t9igj9l",
        {
          ...data,
          subject: "New Project - " + data.username,
        },
        process.env.NEXT_PUBLIC_Email_Js_PublicKey
      )
      .then(
        (result) => {
          toast.success("Email sent successfully");
          setData({
            username: "",
            useremail: "",
            userphone: "",
            message: "",
          });
        },
        (error) => {
          toast.error("Failed to send email");
        }
      );
  };
  return (
    <motion.div
      id="contact"
      initial={initAnimate}
      animate={animate}
      transition={{ duration: 2 }}
      className="flex flex-col gap-5 mb-5"
    >
      <h2>{"Let's"} Connect!</h2>
      <section className={Styles.contactBody}>
        <p>
          Hello My name is{" "}
          <input
            className={Styles.input}
            type="text"
            placeholder="YourName"
            name="username"
            required
            onChange={(e) => setData({ ...data, username: e.target.value })}
            value={data.username}
          />
          and I want to discuss a potential project. You can email me at
          <input
            className={Styles.input}
            type="email"
            placeholder="YourEmail"
            name="userEmail"
            onChange={(e) => setData({ ...data, useremail: e.target.value })}
            value={data.useremail}
          />
          or reach out to me on{" "}
          <input
            className={Styles.input}
            type="text"
            placeholder="Your Phone"
            name="userPhone"
            onChange={(e) => setData({ ...data, userphone: e.target.value })}
            value={data.userphone}
          />
          Here are some details about my project:
          <textarea
            placeholder="Your Project Description"
            name="projectDescription"
            className={`resize-y auto-rows-auto w-full ${Styles.input}`}
            onChange={(e) => setData({ ...data, message: e.target.value })}
            value={data.message}
          />
        </p>
      </section>
      <button className={"button"} onClick={sendEmail}>
        Send Request
      </button>
    </motion.div>
  );
}
