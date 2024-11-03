import ContactForm from "@/components/contactForm/ContactForm";
import Image from "next/image";
import React from "react";

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
