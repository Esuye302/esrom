import heroImg from "../assets/images/esromHero.avif";

import {
  FaLightbulb,
  FaShieldAlt,
  FaBrain,
  FaHammer,
  FaTachometerAlt,
} from "react-icons/fa";
import type { IconType } from "react-icons";
interface Strength {
  label: string;
  icon: IconType;
}

const strengths: Strength[] = [
  {
    label: "Creative",
    icon: FaLightbulb,
  },
  {
    label: "Reliable",
    icon: FaShieldAlt,
  },
  {
    label: "Strategist",
    icon: FaBrain,
  },
  {
    label: "Builder",
    icon: FaHammer,
  },
  {
    label: "Efficient",
    icon: FaTachometerAlt,
  },
];
const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-dvh overflow-hidden bg-background"
    >
      <h1 className="absolute top-16 left-0 w-full text-center text-[20vw] font-black leading-none text-primary z-10 pointer-events-none select-none">
        ESROM
      </h1>
      <div className="absolute left-5 top-[47%] z-30 ">
        <div className="rounded-lg border border-white/50 bg-black/10  p-3 backdrop-blur-xs text-white font-medium">
          {strengths.map((strength, index) => (
            <div key={index} className="flex items-center gap-2 mb-2 last:mb-0">
              <span className="text-lg text-primary">
                <strength.icon />
              </span>
              <span>{strength.label}</span>
            </div>
          ))}
        </div>
      </div>
      <div className="absolute right-5 top-[34%] z-30">
        <div className="rounded-lg border border-white/50 bg-black/10 p-3 backdrop-blur-xs text-white">
          <p className="text-6xl font-black leading-none text-primary">2+</p>

          <p className="mt-1 text-xs font-medium leading-tight">
            Years of
            <br />
            Experience
          </p>
        </div>
      </div>
      <img
        src={heroImg}
        alt="Hero Image"
        loading="eager"
        className="absolute bottom-0 top-38 left-1/2 w-full scale-130 -translate-x-1/2 z-20"
      />

      <h1
        className="absolute top-16 left-0 w-full text-center text-[20vw] font-black leading-none text-transparent z-30 pointer-events-none select-none [-webkit-text-stroke:.4px_theme(colors.primary)] [text-stroke:.5px_theme(colors.primary)]"
        aria-hidden="true"
      >
        ESROM
      </h1>
    </section>
  );
};

export default Hero;
