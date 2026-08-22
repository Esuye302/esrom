import heroImg from "../assets/images/esromHero.avif";
import logo from "../assets/logo/eLogo.svg";

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
      className="relative h-[190vw]  overflow-hidden bg-background "
    >
     
      <h1
        className="
          pointer-events-none
          absolute
          left-0
          top-[20vw]
          z-10
          w-full
          select-none
          text-center
          text-[20vw]
          font-black
          leading-none
          text-primary
        "
      >
        ESROM
      </h1>

      {/* Hero Image */}
      <img
        src={heroImg}
        alt="Hero Image"
        loading="eager"
        className="
          absolute
          -bottom-13
          left-1/2
          z-20
          w-[120%]
          max-w-none
          -translate-x-1/2
        "
      />

      {/* Strengths Card */}
      <div className="absolute left-[5vw] top-[77vw] z-30">
        <div
          className="
            rounded-lg
            border
            border-white/50
            bg-black/10
            p-[3vw]
            font-medium
            text-white
            backdrop-blur-xs
          "
        >
          {strengths.map((strength) => (
            <div
              key={strength.label}
              className="mb-[2vw] flex items-center gap-[2vw] last:mb-0"
            >
              <span className="text-[4vw] text-primary">
                <strength.icon />
              </span>

              <span className="text-[3.2vw]">{strength.label}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Experience Card */}
      <div className="absolute right-[5vw] top-[88vw] z-30">
        <div
          className="
            rounded-lg
            border
            border-white/50
            bg-black/10
            p-[3vw]
            text-white
            backdrop-blur-xs
          "
        >
          <p className="text-[12vw] font-black leading-none text-primary">2+</p>

          <p className="mt-[1vw] text-[3vw] font-medium leading-tight">
            Years of
            <br />
            Experience
          </p>
        </div>
      </div>

      {/* Outline ESROM */}
      <h1
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          left-0
          top-[20vw]
          z-30
          w-full
          select-none
          text-center
          text-[20vw]
          font-black
          leading-none
          text-transparent
          [-webkit-text-stroke:.4px_theme(colors.primary)]
          [text-stroke:.5px_theme(colors.primary)]
        "
      >
        ESROM
      </h1>

      {/* Projects Card */}
      <div className="absolute left-[5vw] top-[170vw] z-30">
        <div
          className="
            flex-center
            rounded-lg
            border
            border-white/50
            bg-black/10
            p-[3vw]
            text-white
            backdrop-blur-xs
          "
        >
          {/* shadow */}
          <div className="logo ">
            <img src={logo} alt="Logo" className="h-[10vw] w-[20vw]" />
            </div>

            <p className="mt-[1vw] text-[3vw] font-medium leading-tight pr-3">
           <span className="text-primary">20+</span>  Projects
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
