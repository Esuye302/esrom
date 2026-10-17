import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

import amazonImg from "../assets/images/amazon.png";
import netflixImg from "../assets/images/netflix.png";
import apple from "../assets/images/apple.png";
import evangadiForum from "../assets/images/evangadiForum.png";

gsap.registerPlugin(ScrollTrigger, useGSAP);

interface Project {
  number: string;
  title: string;
  categories: string[];
  image: string;
  description: string;
  link: string;
}

const projects: Project[] = [
  {
    number: "01",
    title: "Amazon",
    categories: ["React", "Node.js", "Stripe"],
    image: amazonImg,
    description: "A fullstack e-commerce experience.",
    link: "https://fancy-tiramisu-f90fb5.netlify.app/",
  },
  {
    number: "02",
    title: "Netflix",
    categories: ["React", "API", "Responsive"],
    image: netflixImg,
    description: "A responsive movie streaming interface.",
    link: "https://esuye302.github.io/Netflix-clone-2024/",
  },
  {
    number: "03",
    title: "Apple",
    categories: ["React.js", "Node.js", "PostgreSQL"],
    image: apple,
    description: "A fullstack web application.",
    link: "https://esudevreact-appl.netlify.app/",
  },
  {
    number: "04",
    title: "Evangadi Forum",
    categories: ["React", "Node.js", "MySQL"],
    image: evangadiForum,
    description: "A community discussion platform.",
    link: "https://inquisitive-begonia-8299b7.netlify.app/",
  },
];

const Projects = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const triggerRef = useRef<HTMLDivElement>(null);
  const horizontalRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const trigger = triggerRef.current;
      const horizontal = horizontalRef.current;

      if (!trigger || !horizontal) return;

      const getScrollAmount = () => {
        return -(horizontal.scrollWidth - window.innerWidth);
      };

      const tween = gsap.to(horizontal, {
        x: getScrollAmount,
        ease: "none",
      });

      ScrollTrigger.create({
        trigger: trigger,
        start: "top top",
        end: () => `+=${horizontal.scrollWidth - window.innerWidth}`,
        pin: true,
        scrub: 1,
        animation: tween,
        invalidateOnRefresh: true,
        anticipatePin: 1,
      });
    },
    { scope: sectionRef },
  );

  return (
    <section
      id="projects"
      ref={sectionRef}
      className="relative w-full bg-[#1f1f1f] text-white"
    >
      {/* 
        Standard flex layout. 
        min-h-[700px] ensures it won't break on very short screens.
      */}
      <div
        ref={triggerRef}
        className="relative flex h-screen min-h-[700px] w-full flex-col justify-between overflow-hidden pt-16 pb-12 md:pt-24 md:pb-16"
      >
        {/* HEADER */}
        <div className="w-full shrink-0 px-6 md:pl-[320px] md:pr-12">
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-start">
            {/* LEFT */}
            <div className="max-w-3xl">
              <span className="inline-flex rounded-full border border-white/50 px-3 py-1 text-[10px] font-bold uppercase tracking-widest leading-none">
                Selected Work
              </span>
              {/* Standard margin-top so it sits nicely below the pill */}
              <h2 className="mt-6 text-4xl font-black leading-[0.95] md:text-6xl lg:text-[72px] tracking-tight">
                Built with Code,
                <br />
                Made to Perform.
              </h2>
            </div>

            {/* RIGHT */}
            <div className="max-w-[320px] md:mt-14">
              <p className="text-sm leading-relaxed text-white/80 md:text-base">
                I’ve spent the last two years learning, building, and turning
                ideas into real websites and fullstack products. Here’s a look
                at some of the work I’ve built along the way.
              </p>
            </div>
          </div>
        </div>

        {/* HORIZONTAL TRACK */}
        <div className="w-full shrink-0 overflow-visible">
          <div
            ref={horizontalRef}
            className="flex w-max items-end gap-6 pl-6 pr-[20vw] will-change-transform md:pl-[320px]"
          >
            {projects.map((project) => (
              <article
                key={project.number}
                className="
                  group
                  w-[80vw]
                  max-w-[400px]
                  shrink-0
                  overflow-hidden
                  rounded-xl
                  border
                  border-white/20
                  bg-[#2a2a2a]
                  shadow-2xl
                "
              >
                {/* TOP */}
                <div className="flex items-center justify-between gap-3 px-4 py-3">
                  <span className="flex h-5 min-w-5 items-center justify-center rounded-full border border-white/50 px-2 text-[9px]">
                    {project.number}
                  </span>
                  <div className="flex flex-wrap justify-end gap-1.5">
                    {project.categories.map((category) => (
                      <span
                        key={category}
                        className="rounded-full border border-white/30 bg-white/5 px-2 py-0.5 text-[8px] font-medium leading-none"
                      >
                        {category}
                      </span>
                    ))}
                  </div>
                </div>

                {/* 
                  IMAGE 
                  Changed to aspect-[16/9] (wide) instead of 4/3 (tall) 
                  This saves a massive amount of vertical space so the cards don't get cut off.
                */}
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block"
                >
                  <div className="relative aspect-[16/9] w-full overflow-hidden">
                    <img
                      src={project.image}
                      alt={`${project.title} project`}
                      loading="lazy"
                      className="
                        absolute inset-0 h-full w-full
                        object-cover object-top
                        transition-transform duration-500 ease-out
                        group-hover:scale-105
                      "
                    />
                  </div>
                </a>

                {/* INFO */}
                <div className="flex items-end justify-between gap-4 p-4">
                  <div>
                    <h3 className="text-xl font-black leading-none">
                      {project.title}
                    </h3>
                    <p className="mt-1 text-[11px] leading-relaxed text-white/60">
                      {project.description}
                    </p>
                  </div>
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Visit ${project.title}`}
                    className="
                      flex h-8 w-8 shrink-0 items-center justify-center
                      rounded-full bg-primary text-lg text-black
                      transition-transform duration-300
                      group-hover:translate-x-1
                    "
                  >
                    ↗
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>

        {/* Fade */}
        <div className="pointer-events-none absolute bottom-0 left-0 z-0 h-32 w-full bg-gradient-to-t from-[#1f1f1f] to-transparent" />
      </div>
    </section>
  );
};

export default Projects;
