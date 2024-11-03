import { useEffect, useState } from "react";
const ids = ["hero", "about", "projectsSection", "contact"];
const useScrollSpy = () => {
  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    const handleScroll = () => {
      const offsets = ids.map((id) => {
        const element = document.getElementById(id);
        return element ? element.offsetTop : 0;
      });

      const currentSection = offsets.reduce((closest, offset, index) => {
        return Math.abs(offset - window.scrollY) <
          Math.abs(offsets[closest] - window.scrollY)
          ? index
          : closest;
      }, 0);

      setActiveSection(ids[currentSection]);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return activeSection;
};

export default useScrollSpy;
