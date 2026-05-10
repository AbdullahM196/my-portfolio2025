import Styles from "./styles.module.css";
const abilities = [
  "Crafting Fully Responsive Websites for All Devices",
  "Delivering Seamless, Intuitive User Experiences",
  "Expert in Building Dynamic, Fast Single Page Applications (SPAs) with React.js and Next.js",
  "Developing High-Performance APIs with Node.js, MongoDB, and MySQL for Security and Scalability",
  "Implementing Secure Authentication with JWT & OAuth for Safe, Real-Time Applications",
];

export default function Abilities() {
  return (
    <div
      className="w-full whitespace-nowrap overflow-hidden rounded-xl mb-4 box-border"
      style={{
        backgroundColor: "var(--accentColor)",
        maskImage:
          "linear-gradient(to right, transparent, #000 10% 90%, transparent)",
      }}
    >
      <section
        className={`${Styles.list} animate-roll w-full py-2 sm:py-3 flex items-center justify-center capitalize font-semibold tracking-wider text-sm sm:text-base`}
      >
        {abilities.map((ability, index, abilities) => {
          return (
            <div key={ability} className="text-black">
              {ability}
              {index < abilities.length - 1 && (
                <span className="px-4 text-black">|</span>
              )}
            </div>
          );
        })}
      </section>
    </div>
  );
}
