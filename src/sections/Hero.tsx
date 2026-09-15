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
      className="
        relative
        h-[190vw]
        min-h-[700px]
        w-full
        overflow-hidden
        bg-background

        md:h-250

        min-[900px]:h-[633px]

        min-[1200px]:h-[630px]
      "
    >
      {/* =====================================================
          MOBILE
      ====================================================== */}

      <div className="md:hidden">
        {/* BACKGROUND ESROM */}

        <h1
          className="
            pointer-events-none
            absolute
            left-0
            top-[15vw]
            z-10
            w-full
            select-none
            text-center
            text-[25vw]
            font-black
            leading-none
            text-primary
          "
        >
          ESROM
        </h1>

        {/* IMAGE */}

        <img
          src={heroImg}
          alt="Esrom"
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

        {/* STRENGTHS */}

        <div className="absolute left-[5vw] top-[77vw] z-40">
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
            {strengths.map((strength) => {
              const Icon = strength.icon;

              return (
                <div
                  key={strength.label}
                  className="
                    mb-[2vw]
                    flex
                    items-center
                    gap-[2vw]
                    last:mb-0
                  "
                >
                  <span className="text-[4vw] text-primary">
                    <Icon />
                  </span>

                  <span className="text-[3.2vw]">{strength.label}</span>
                </div>
              );
            })}
          </div>
        </div>

        {/* EXPERIENCE */}

        <div className="absolute right-[5vw] top-[99vw] z-40">
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
            <p className="text-[12vw] font-black leading-none text-primary">
              2+
            </p>

            <p className="mt-[1vw] text-[3vw] font-medium leading-tight">
              Years of
              <br />
              Experience
            </p>
          </div>
        </div>

        {/* OUTLINE ESROM */}

        <h1
          aria-hidden="true"
          className="
            pointer-events-none
            absolute
            left-0
            top-[15vw]
            z-30
            w-full
            select-none
            text-center
            text-[25vw]
            font-black
            leading-none
            text-transparent
            [-webkit-text-stroke:.4px_theme(colors.primary)]
          "
        >
          ESROM
        </h1>

        {/* PROJECTS */}

        <div className="absolute left-[5vw] top-[170vw] z-40">
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
            <div>
              <img src={logo} alt="Logo" className="h-[10vw] w-[20vw]" />
            </div>

            <p className="mt-[1vw] pr-3 text-[3vw] font-medium leading-tight">
              <span className="text-primary">20+</span> Projects
            </p>
          </div>
        </div>
      </div>

      {/* =====================================================
          DESKTOP
      ====================================================== */}

      <div className="hidden md:block">
        {/* =================================================
            FILLED ESROM
        ================================================== */}

        <h1
          className="
            pointer-events-none
            absolute
            left-1/2
            z-10
            -translate-x-1/2
            select-none
            whitespace-nowrap
            text-center
            font-black
            leading-none
            text-primary

            /* TABLET */
           min-[768px]:top-0
           min-[768px]:text-[227px]

            /* MEDIUM */
            min-[1052px]:-top-1.25
            min-[1052px]:text-[300px]
            min-[900px]:-top-1.25
            min-[900px]:text-[259px]

            /* LARGE DESKTOP */
            min-[1200px]:-top-13
            min-[1200px]:text-[380px]
          "
        >
          ESROM
        </h1>

        {/* =================================================
            PERSON
        ================================================== */}

        <img
          src={heroImg}
          alt="Esrom"
          loading="eager"
          className="
            pointer-events-none
            absolute
            left-1/2
            z-20
            -translate-x-1/2
            object-contain

            /* TABLET */
            top-0
            h-[700px]
            w-auto

            /* MEDIUM */
            min-[900px]:top-0
            min-[900px]:h-[680px]

            /* LARGE DESKTOP */
            min-[1200px]:top-[0px]
            min-[1200px]:h-[760px]
          "
        />

        {/* =================================================
            OUTLINE ESROM
        ================================================== */}

        <h1
          aria-hidden="true"
          className="
            pointer-events-none
            absolute
            left-1/2
            z-30
            -translate-x-1/2
            select-none
            whitespace-nowrap
            text-center
            font-black
            leading-none
            text-transparent
            [-webkit-text-stroke:0.2px_theme(colors.primary)]

            /* TABLET */
            min-[768px]:top-0
            min-[768px]:text-[227px]

            /* MEDIUM */
            min-[1052px]:-top-1.25
            min-[1052px]:text-[300px]
            min-[900px]:-top-1.25
            min-[900px]:text-[259px]

            /* LARGE DESKTOP */
            min-[1200px]:-top-13
            min-[1200px]:text-[380px]
          "
        >
          ESROM
        </h1>

        {/* =================================================
            PROJECTS CARD
        ================================================== */}

        <div
          className="
            absolute
            z-40

            /* TABLET */
            left-[10%]
            top-[40%]

            /* MEDIUM */
            min-[900px]:left-[18%]
            min-[900px]:top-[40%]

            /* LARGE */
            min-[1200px]:left-[20%]
            min-[1200px]:top-[40%]
          "
        >
          <div
            className="
              flex
              h-[90px]
              w-[250px]
              items-center
              gap-5
              rounded-lg
              border
              border-white/5
              bg-black/10
              px-5
              text-white
              backdrop-blur-xs

              min-[900px]:h-[94px]
              min-[900px]:w-[250px]

              min-[1200px]:h-[98px]
              min-[1200px]:w-[255px]
            "
          >
            <img
              src={logo}
              alt="Logo"
              className="
                h-12
                w-16
                object-contain

                min-[1200px]:h-14
                min-[1200px]:w-20
              "
            />

            <p className="text-sm font-bold">
              <span className="text-primary">20+</span> Projects
            </p>
          </div>
        </div>

        {/* =================================================
            STRENGTHS CARD
        ================================================== */}

        <div
          className="
            absolute
            z-40

            /* TABLET */
            right-[10%]
            top-[28%]

            /* MEDIUM */
            min-[900px]:right-[25%]
            min-[900px]:top-[28%]

            /* LARGE */
            min-[1200px]:right-[25%]
            min-[1200px]:top-[30%]
          "
        >
          <div
            className="
              w-37
              rounded-lg
              border
              border-white/50
              bg-black/10
              p-4
              font-medium
              text-white
              backdrop-blur-xs

              min-[1200px]:w-[160px]
            "
          >
            {strengths.map((strength) => {
              const Icon = strength.icon;

              return (
                <div
                  key={strength.label}
                  className="
                    mb-2
                    flex
                    items-center
                    gap-2
                    last:mb-0
                  "
                >
                  <span className="text-lg text-primary">
                    <Icon />
                  </span>

                  <span className="text-sm">{strength.label}</span>
                </div>
              );
            })}
          </div>
        </div>

        {/* =================================================
            EXPERIENCE CARD
        ================================================== */}

        <div
          className="
            absolute
            z-40

            /* TABLET */
            right-[18%]
            top-[50%]

            /* MEDIUM */
            min-[900px]:right-[18%]
            min-[900px]:top-[50%]

            /* LARGE */
            min-[1200px]:right-[30%]
            min-[1200px]:top-[50%]
          "
        >
          <div
            className="
              h-[125px]
              w-[110px]
              rounded-lg
              border
              border-white/50
              bg-black/10
              p-4
              text-white
              backdrop-blur-xs
            "
          >
            <p
              className="
                text-6xl
                font-black
                leading-none
                text-primary
              "
            >
              2+
            </p>

            <p className="mt-2 text-sm font-medium leading-tight">
              Years of
              <br />
              Experience
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
