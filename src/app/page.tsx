import AboutMe from "@/components/AboutMe/AboutMe";
import ContactForm from "@/components/contactForm/ContactForm";
import HeroSection from "@/components/HeroSection/HeroSection";
import AllProjects from "@/components/projects/AllProjects";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <HeroSection />
      <AboutMe />
      <AllProjects />
      <ContactForm />
    </div>
  );
}
