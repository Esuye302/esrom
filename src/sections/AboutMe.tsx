import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP, ScrollTrigger);

interface Service {
  number: string;
  title: string;
  description: string;
}

const services: Service[] = [
  {
    number: "01",
    title: "Frontend Development",
    description:
      "Interfaces that feel fast, responsive, and intentional with smooth interactions and attention to the details users actually notice.",
  },
  {
    number: "02",
    title: "Backend Development",
    description:
      "Building scalable and efficient server-side applications. The logic behind the experience. APIs, authentication, business logic, and systems built to work reliably beyond the screen.",
  },
  {
    number: "03",
    title: "Fullstack Development",
    description:
      "Developing complete web applications, integrating frontend with backend for seamless experiences.",
  },
  {
    number: "04",
    title: "Design & Experience",
    description:
      "Not just making things pretty. I focus on turning ideas into clear, usable interfaces where design and functionality work together.",
  },
];

const About = () => {
  const aboutRef = useRef<HTMLDivElement>(null);
  const timelineRef = useRef<HTMLDivElement>(null);
  const progressRef = useRef<HTMLDivElement>(null);

  const cardRefs = useRef<HTMLDivElement[]>([]);
  const circleRefs = useRef<HTMLDivElement[]>([]);

  useGSAP(
    () => {
      const timeline = timelineRef.current;
      const progress = progressRef.current;

      if (!timeline || !progress) return;

      const cards = cardRefs.current;
      const circles = circleRefs.current;

      // Start all circles hidden
      gsap.set(circles, {
        scale: 0,
      });

      // Main scroll animation
      gsap.to(progress, {
        height: "100%",
        ease: "none",

        scrollTrigger: {
          trigger: timeline,
          start: "top 60%",
          end: "bottom 60%",
          scrub: 1.2,
        },
      });

      // Circle animations
      circles.forEach((circle, index) => {
        const card = cards[index];

        if (!card) return;

        gsap.to(circle, {
          scale: 1,
          ease: "power2.out",

          scrollTrigger: {
            trigger: card,
            start: "top 60%",
            toggleActions: "play reverse play reverse",
          },
        });
      });
    },
    {
      scope: aboutRef,
    },
  );

  return (
    <section
      ref={aboutRef}
      id="about"
      className="relative w-full bg-background px-4 py-20  "
    >
      {/* ABOUT ME */}
      <div className="mb-16 2 -mt-6 ">
        <h2 className="text-center text-4xl font-black leading-none">
          About Me (&)
          <br />
          My Journey
        </h2>

        <p className="mt-6 text-sm leading-relaxed">
          I’m not one of those developers who always knew this was what they
          wanted to do. I stumbled into it, got curious, and then got obsessed
          with understanding it.
        </p>

        <p className="mt-4 text-sm leading-relaxed">
          Years later, I’ve gone from learning the basics of the web to building
          full-stack products and I still find myself going down rabbit holes
          over things most people never see. That’s probably the best
          description of me as a developer.
        </p>

        <p className="mt-4 text-sm leading-relaxed">
          I don’t like using things I don’t understand. I like building them.
        </p>
      </div>

      {/* WHAT I BUILD */}
      <div >
        <h3 id="services" className="mb-10 text-3xl font-black text-center">What I Build?</h3>

        {/* TIMELINE */}
        <div ref={timelineRef} className=" relative pl-8">
          {/* Gray background line */}
          <div className="absolute left-2 top-0 h-full w-px bg-black/20" />

          {/* Yellow growing line */}
          <div
            ref={progressRef}
            className=" absolute left-2 top-0 h-0 w-px bg-primary "
          />

          {/* CARDS */}
          <div className="flex flex-col gap-10">
            {services.map((service, index) => (
              <article
                key={service.number}
                ref={(element) => {
                  if (element) {
                    cardRefs.current[index] = element;
                  }
                }}
                className="relative rounded-xl border border-white/50 bg-white/20 p-5 backdrop-blur-sm "
              >
                {/* Milestone circle */}
                <div
                  ref={(element) => {
                    if (element) {
                      circleRefs.current[index] = element;
                    }
                  }}
                  className="
                    absolute
                    left-[-2.05rem]
                    top-8
                    z-20
                    h-3
                    w-3
                    
                    -translate-x-1/2
                    -translate-y-1/2
                    rounded-full
                    border
                    border-black
                    bg-primary
                  "
                />

                {/* Number */}
                <span className="text-5xl font-black text-primary">
                  {service.number}
                </span>

                {/* Title */}
                <h4 className="mt-3 text-xl font-black">{service.title}</h4>

                {/* Description */}
                <p className="mt-2 text-sm leading-relaxed">
                  {service.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
