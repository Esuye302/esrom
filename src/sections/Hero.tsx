
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";

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

gsap.registerPlugin(useGSAP);

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
  const heroRef = useRef<HTMLElement | null>(null);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();

      /* =========================================
         MOBILE
      ========================================= */

      mm.add("(max-width: 767px)", () => {
        const tl = gsap.timeline({
          defaults: {
            ease: "power4.out",
          },
        });

        tl.from(".hero-mobile-title", {
          opacity: 0,
          y: 60,
          scale: 0.85,
          duration: 0.9,
        })

          .from(
            ".hero-mobile-image",
            {
              opacity: 0,
              y: 80,
              scale: 1.08,
              filter: "blur(18px)",
              duration: 1.2,
            },
            "-=0.55",
          )

          .from(
            ".hero-mobile-strengths",
            {
              opacity: 0,
              x: -50,
              duration: 0.65,
            },
            "-=0.55",
          )

          .from(
            ".hero-mobile-experience",
            {
              opacity: 0,
              x: 50,
              duration: 0.65,
            },
            "-=0.5",
          )

          .from(
            ".hero-mobile-projects",
            {
              opacity: 0,
              y: 40,
              duration: 0.65,
            },
            "-=0.45",
          );
      });

      /* =========================================
         TABLET
         768 - 899
      ========================================= */

      mm.add("(min-width: 768px) and (max-width: 899px)", () => {
        const tl = gsap.timeline({
          defaults: {
            ease: "power4.out",
          },
        });

        tl.from(".hero-desktop-title", {
          opacity: 0,
          y: 100,
          scale: 0.78,
          duration: 1,
        })

          .from(
            ".hero-desktop-image",
            {
              opacity: 0,
              y: 100,
              scale: 1.08,
              filter: "blur(20px)",
              duration: 1.15,
            },
            "-=0.65",
          )

          .from(
            ".hero-project-card",
            {
              opacity: 0,
              x: -90,
              duration: 0.7,
            },
            "-=0.55",
          )

          .from(
            ".hero-strength-card",
            {
              opacity: 0,
              x: 90,
              duration: 0.7,
            },
            "-=0.55",
          )

          .from(
            ".hero-experience-card",
            {
              opacity: 0,
              x: 80,
              duration: 0.65,
            },
            "-=0.5",
          )

          .from(
            ".hero-outline-title",
            {
              opacity: 0,
              duration: 0.45,
            },
            "-=0.2",
          );
      });

      /* =========================================
         MEDIUM DESKTOP
         900 - 1199
      ========================================= */

      mm.add("(min-width: 900px) and (max-width: 1199px)", () => {
        const tl = gsap.timeline({
          defaults: {
            ease: "power4.out",
          },
        });

        tl.from(".hero-desktop-title", {
          opacity: 0,
          y: 110,
          scale: 0.75,
          duration: 1.05,
        })

          .from(
            ".hero-desktop-image",
            {
              opacity: 0,
              y: 110,
              scale: 1.08,
              filter: "blur(20px)",
              duration: 1.15,
            },
            "-=0.65",
          )

          .from(
            ".hero-project-card",
            {
              opacity: 0,
              x: -100,
              duration: 0.7,
            },
            "-=0.55",
          )

          .from(
            ".hero-strength-card",
            {
              opacity: 0,
              x: 100,
              duration: 0.7,
            },
            "-=0.55",
          )

          .from(
            ".hero-experience-card",
            {
              opacity: 0,
              x: 90,
              duration: 0.65,
            },
            "-=0.5",
          )

          .from(
            ".hero-outline-title",
            {
              opacity: 0,
              duration: 0.5,
            },
            "-=0.25",
          );
      });

      /* =========================================
         LARGE DESKTOP
         1200+
      ========================================= */

      mm.add("(min-width: 1200px)", () => {
        const tl = gsap.timeline({
          defaults: {
            ease: "power4.out",
          },
        });

        /*
         * 1. GIANT ESROM
         */

        tl.from(".hero-desktop-title", {
          opacity: 0,
          y: 130,
          scale: 0.72,
          duration: 1.2,
        })

          /*
           * 2. PERSON
           *
           * Starts blurred inside the background.
           */

          .from(
            ".hero-desktop-image",
            {
              opacity: 0,
              y: 140,
              scale: 1.1,
              filter: "blur(24px)",
              duration: 1.25,
            },
            "-=0.75",
          )

          /*
           * 3. PROJECT CARD
           */

          .from(
            ".hero-project-card",
            {
              opacity: 0,
              x: -120,
              duration: 0.75,
            },
            "-=0.6",
          )

          /*
           * 4. STRENGTHS
           */

          .from(
            ".hero-strength-card",
            {
              opacity: 0,
              x: 120,
              duration: 0.75,
            },
            "-=0.6",
          )

          /*
           * 5. EXPERIENCE
           */

          .from(
            ".hero-experience-card",
            {
              opacity: 0,
              x: 110,
              duration: 0.7,
            },
            "-=0.58",
          )

          /*
           * 6. OUTLINE
           */

          .from(
            ".hero-outline-title",
            {
              opacity: 0,
              duration: 0.55,
            },
            "-=0.3",
          );
      });

      return () => {
        mm.revert();
      };
    },
    {
      scope: heroRef,
    },
  );

  return (
    <section
      ref={heroRef}
      id="home"
      className="
        relative
        h-[190vw]
        min-h-[700px]
        w-full
        overflow-hidden
        bg-background

        md:h-[1000px]

        min-[900px]:h-[633px]

        min-[1200px]:h-[630px]
      "
    >
      {/* =====================================================
          MOBILE
      ====================================================== */}

      <div className="md:hidden">
        {/* GIANT ESROM */}

        <h1
          className="
            hero-mobile-title
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

        {/* PERSON */}

        <img
          src={heroImg}
          alt="Esrom"
          loading="eager"
          className="
            hero-mobile-image
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

        <div
          className="
            hero-mobile-strengths
            absolute
            left-[5vw]
            top-[77vw]
            z-40
          "
        >
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

        <div
          className="
            hero-mobile-experience
            absolute
            right-[5vw]
            top-[99vw]
            z-40
          "
        >
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
            <p
              className="
                text-[12vw]
                font-black
                leading-none
                text-primary
              "
            >
              2+
            </p>

            <p
              className="
                mt-[1vw]
                text-[3vw]
                font-medium
                leading-tight
              "
            >
              Years of
              <br />
              Experience
            </p>
          </div>
        </div>

        {/* OUTLINE */}

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

        <div
          className="
            hero-mobile-projects
            absolute
            left-[5vw]
            top-[170vw]
            z-40
          "
        >
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

            <p
              className="
                mt-[1vw]
                pr-3
                text-[3vw]
                font-medium
                leading-tight
              "
            >
              <span className="text-primary">20+</span> Projects
            </p>
          </div>
        </div>
      </div>

      {/* =====================================================
          DESKTOP
      ====================================================== */}

      <div className="hidden md:block">
        {/* FILLED ESROM */}

        <h1
          className="
            hero-desktop-title
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

            top-0
            text-[227px]

            min-[900px]:-top-1
            min-[900px]:text-[300px]

            min-[1200px]:-top-[50px]
            min-[1200px]:text-[370px]
          "
        >
          ESROM
        </h1>

        {/* PERSON */}

        <img
          src={heroImg}
          alt="Esrom"
          loading="eager"
          className="
            hero-desktop-image
            pointer-events-none
            absolute
            left-1/4
            z-20
            
            flex-center
            object-contain

            top-0
            h-175

            min-[900px]:h-[680px]

            min-[1200px]:h-[780px]
          "
        />

        {/* OUTLINE ESROM */}

        <h1
          aria-hidden="true"
          className="
            hero-outline-title
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
            [-webkit-text-stroke:0.3px_theme(colors.primary)]

            top-0
            text-[227px]

            min-[900px]:-top-1
            min-[900px]:text-[300px]

            min-[1200px]:-top-[50px]
            min-[1200px]:text-[370px]
          "
        >
          ESROM
        </h1>

        {/* PROJECTS */}

        <div
          className="
            hero-project-card
            absolute
            z-40

            left-[10%]
            top-[40%]

            min-[900px]:left-[18%]
            min-[900px]:top-[40%]

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

        {/* STRENGTHS */}

        <div
          className="
            hero-strength-card
            absolute
            z-40

            right-[10%]
            top-[28%]

            min-[900px]:right-[35%]

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

        {/* EXPERIENCE */}

        <div
          className="
            hero-experience-card
            absolute
            z-40

            right-[18%]
            top-[50%]

            min-[900px]:right-[18%]

            min-[1200px]:right-[30%]
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

            <p
              className="
                mt-2
                text-sm
                font-medium
                leading-tight
              "
            >
              Years of
              <br />
              Experience
            </p>
          </div>
        </div>
      </div>

      {/* IMAGE FADE INTO BACKGROUND */}

      <div
        className="
          pointer-events-none
          absolute
          inset-x-0
          bottom-0
          z-30
          h-28
          bg-gradient-to-t
          from-background
          via-background/70
          to-transparent
        "
      />
    </section>
  );
};

export default Hero;