import AboutMe from "@/components/AboutMe/AboutMe";
import Blog from "@/components/Blog/Blog";
import ContactForm from "@/components/contactForm/ContactForm";
import HeroSection from "@/components/HeroSection/HeroSection";
import AllProjects from "@/components/projects/AllProjects";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col ">
      <HeroSection />
      <AboutMe />
      <AllProjects />
      <Blog />
      <ContactForm />
    </div>
  );
}
