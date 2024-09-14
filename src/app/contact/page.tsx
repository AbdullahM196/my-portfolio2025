import ContactForm from "@/components/contactForm/ContactForm";
import Image from "next/image";
import React, { CSSProperties } from "react";
import Style from "./contact.module.css";
interface customCssProperties extends CSSProperties {
  "--position"?: number;
  "--quantity"?: number;
}
const listStyle: customCssProperties = {
  "--quantity": 4,
};
const p1Style: customCssProperties = {
  "--position": 1,
};
const p2Style: customCssProperties = {
  "--position": 2,
};
const p3Style: customCssProperties = {
  "--position": 3,
};
const p4Style: customCssProperties = {
  "--position": 4,
};
export default function page() {
  return (
    <div className="flex flex-col" style={{ height: "calc(100vh - 150px)" }}>
      <div className="flex items-center  mt-10">
        <section className="w-1/3 ">
          <Image
            className="rounded"
            src={"/myImage.jpeg"}
            alt="abdullah mahmoud personal photo"
            width={400}
            height={400}
          />
        </section>
        <aside className="w-2/3 ">
          <ContactForm />
        </aside>
      </div>
    </div>
  );
}
