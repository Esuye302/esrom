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
  const dotRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      gsap.to(dotRef.current, {
        top: "100%",
        ease: "none",

        scrollTrigger: {
          trigger: aboutRef.current,
          start: "top center",
          end: "bottom center",
          scrub: 1.5,
        },
      });
    },
    {
      scope: aboutRef,
    },
  );

  return (
    <section id="about" className="relative bg-background px-4 py-16">
      {/* About heading */}
      <div className="mb-10">
        <h2 className="text-4xl font-black leading-none">
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

      {/* What I Build */}
      <div ref={aboutRef}>
        <h3 className="mb-8 text-3xl font-black">What I Build?</h3>

        {/* Timeline */}
        <div ref={timelineRef} className="relative pl-8">
          {/* Fixed timeline */}
          <div className="border-2 absolute left-2 top-0 h-full w-px bg-black/30" />

          {/* Moving dot */}
          <div
            ref={dotRef}
            className="
              absolute
              left-2
              top-0
              z-20
              h-3
              w-3
              -translate-x-1/2
              -translate-y-1/2
              rounded-full
              border-2
              border-black
              bg-primary
            "
          />

          {/* Service cards */}
          <div className="flex flex-col gap-8">
            {services.map((service) => (
              <article
                key={service.number}
                className="
                  relative
                  rounded-xl
                  border
                  border-white/50
                  bg-white/20
                  p-5
                  backdrop-blur-sm
                "
              >
                <span className="text-5xl font-black text-primary">
                  {service.number}
                </span>

                <h4 className="mt-3 text-xl font-black">{service.title}</h4>

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
