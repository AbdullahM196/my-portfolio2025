import Image from "next/image";
import ContactForm from "../../components/contactForm/ContactForm";

export default function page() {
  return (
    <div className="flex flex-col">
      <div className="flex items-center mt-10 gap-4 contactPage">
        <section className="w-1/3">
          <Image
            className="rounded"
            src={
              "https://res.cloudinary.com/abdullah-mahmoud/image/upload/v1778424495/my_img_hv1poa.png"
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
