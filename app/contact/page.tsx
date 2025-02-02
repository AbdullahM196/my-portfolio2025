import ContactForm from "../../components/contactForm/ContactForm";
import Image from "next/image";
import React from "react";

export default function page() {
  return (
    <div className="flex flex-col">
      <div className="flex items-center mt-10 gap-4 contactPage">
        <section className="w-1/3">
          <Image
            className="rounded"
            src={
              "https://firebasestorage.googleapis.com/v0/b/test-6f98f.appspot.com/o/my%20Portfolio%2FmyImage.jpeg?alt=media&token=ef14721d-5216-47f2-836a-e5c9f876c66e"
            }
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
