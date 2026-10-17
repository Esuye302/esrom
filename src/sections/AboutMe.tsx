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
  const aboutRef = useRef<HTMLElement>(null);
  const journeyRef = useRef<HTMLDivElement>(null);
  const pathRef = useRef<SVGPathElement>(null);
  const svgRef = useRef<SVGSVGElement>(null);

  const desktopCardRefs = useRef<(HTMLElement | null)[]>([]);
  const desktopCircleRefs = useRef<(HTMLDivElement | null)[]>([]);
  const mobileCardRefs = useRef<(HTMLElement | null)[]>([]);
  const mobileCircleRefs = useRef<(HTMLDivElement | null)[]>([]);

  useGSAP(
    () => {
      const journey = journeyRef.current;
      const path = pathRef.current;
      const svg = svgRef.current;

      if (!journey || !path || !svg) return;

      const desktopCards = desktopCardRefs.current;
      const desktopCircles = desktopCircleRefs.current;
     

      const mm = gsap.matchMedia();

      // DESKTOP: pinned timeline, smooth curve, scroll-linked reveals.
      mm.add("(min-width: 768px)", () => {
        const cards = desktopCards.filter(
          (card): card is HTMLElement => card !== null,
        );
        const circles = desktopCircles.filter(
          (circle): circle is HTMLDivElement => circle !== null,
        );

        if (cards.length !== 4 || circles.length !== 4) return;

        const drawCurve = () => {
          const journeyBox = journey.getBoundingClientRect();

          // Convert each dot's center to SVG-local coordinates.
          const points = circles.map((circle) => {
            const rect = circle.getBoundingClientRect();

            return {
              x: rect.left + rect.width / 2 - journeyBox.left,
              y: rect.top + rect.height / 2 - journeyBox.top,
            };
          });

          if (points.length < 2) return 0;

          let d = `M ${points[0].x} ${points[0].y}`;

          // Catmull-Rom-style cubic handles keep the curve smooth.
          for (let i = 0; i < points.length - 1; i++) {
            const previous = points[Math.max(0, i - 1)];
            const current = points[i];
            const next = points[i + 1];
            const following = points[Math.min(points.length - 1, i + 2)];

            const cp1x = current.x + (next.x - previous.x) / 6;
            const cp1y = current.y + (next.y - previous.y) / 6;
            const cp2x = next.x - (following.x - current.x) / 6;
            const cp2y = next.y - (following.y - current.y) / 6;

            d += ` C ${cp1x} ${cp1y}, ${cp2x} ${cp2y}, ${next.x} ${next.y}`;
          }

          svg.setAttribute(
            "viewBox",
            `0 0 ${journeyBox.width} ${journeyBox.height}`,
          );

          path.setAttribute("d", d);

          return path.getTotalLength();
        };

        // Ensure the geometry is measured before hiding the cards.
        const pathLength = drawCurve();

        if (!pathLength) return;

        // IMPORTANT: Removed y: 35 so the cards don't move away from the drawn line
        gsap.set(cards, {
          autoAlpha: 0,
          scale: 0.95,
        });

        gsap.set(circles, {
          scale: 0,
          transformOrigin: "center center",
        });

        gsap.set(path, {
          strokeDasharray: pathLength,
          strokeDashoffset: pathLength,
        });

        const timeline = gsap.timeline({
          scrollTrigger: {
            trigger: journey,
            start: "top top",
            end: "+=2200",
            scrub: 1,
            pin: true,
            anticipatePin: 1,
            invalidateOnRefresh: true,
            onRefreshInit: drawCurve,
          },
        });

        // Reveal cards in sequence; draw the line toward each milestone.
        cards.forEach((card, index) => {
          const progress = (index + 1) / cards.length;

          timeline
            .to(
              card,
              {
                autoAlpha: 1,
                scale: 1,
                duration: 1,
                ease: "power2.out",
              },
              index === 0 ? 0 : `>${0.15}`,
            )
            .to(
              circles[index],
              {
                scale: 1,
                duration: 0.25,
                ease: "back.out(1.7)",
              },
              "<",
            )
            .to(
              path,
              {
                strokeDashoffset: pathLength * (1 - progress),
                duration: 1,
                ease: "none",
              },
              "<",
            );
        });

        // Recalculate geometry after responsive layout changes.
        const onResize = () => {
          const newLength = drawCurve();

          if (!newLength) return;

          // FIX: Cast to 'any' to bypass the GSAP TypeScript bug
          const st = timeline.scrollTrigger as any;
          const currentProgress = st ? st.progress() : 0;

          gsap.set(path, {
            strokeDasharray: newLength,
            strokeDashoffset: newLength * (1 - currentProgress),
          });

          ScrollTrigger.refresh();
        };
        window.addEventListener("resize", onResize);

        return () => {
          window.removeEventListener("resize", onResize);
          timeline.scrollTrigger?.kill();
          timeline.kill();
        };
      });

      // MOBILE: normal document flow; no pinning.
      mm.add("(max-width: 767px)", () => {
        const cards = mobileCardRefs.current;
        const circles = mobileCircleRefs.current;

        circles.forEach((circle, index) => {
          const card = cards[index];

          if (!circle || !card) return;

          gsap.set(circle, { scale: 0 });

          gsap.to(circle, {
            scale: 1,
            duration: 0.45,
            ease: "back.out(1.7)",
            scrollTrigger: {
              trigger: card,
              start: "top 75%",
              toggleActions: "play reverse play reverse",
            },
          });
        });
      });

      return () => mm.revert();
    },
    { scope: aboutRef },
  );

  return (
    <section
      ref={aboutRef}
      id="about"
      className="relative w-full overflow-hidden bg-background px-4 py-20"
    >
      {/* ABOUT INTRO */}
      <div className="mx-auto mb-20 max-w-3xl">
        <h2 className="text-center text-4xl font-black leading-none md:text-6xl lg:text-7xl">
          About Me (&)
          <br />
          My Journey
        </h2>

        <div className="mx-auto mt-8 max-w-xl">
          <p className="text-sm leading-relaxed md:text-base">
            I’m not one of those developers who always knew this was what they
            wanted to do. I stumbled into it, got curious, and then got obsessed
            with understanding it.
          </p>

          <p className="mt-4 text-sm leading-relaxed md:text-base">
            Years later, I’ve gone from learning the basics of the web to
            building full-stack products and I still find myself going down
            rabbit holes over things most people never see. That’s probably the
            best description of me as a developer.
          </p>

          <p className="mt-4 text-sm leading-relaxed md:text-base">
            I don’t like using things I don’t understand. I like building them.
          </p>
        </div>
      </div>

      {/* WHAT I BUILD */}
      <div>
        <h3
          id="services"
          className="mb-10 text-center text-3xl font-black md:text-5xl"
        >
          What I Build?
        </h3>

        {/* DESKTOP TIMELINE */}
        <div
          ref={journeyRef}
          className="relative hidden h-[720px] w-full md:block"
        >
          <svg
            ref={svgRef}
            className="pointer-events-none absolute inset-0 z-0 h-full w-full overflow-visible"
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            <path
              ref={pathRef}
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="text-black/80"
            />
          </svg>

          {/* CARD 01 */}
          <article
            ref={(el) => {
              desktopCardRefs.current[0] = el;
            }}
            className="absolute right-[5%] top-4 z-10 w-[min(380px,32vw)] rounded-xl border border-white/50 bg-white/20 p-6 shadow-sm backdrop-blur-sm"
          >
            <div
              ref={(el) => {
                desktopCircleRefs.current[0] = el;
              }}
              className="absolute -left-2 top-1/2 z-30 h-4 w-4 -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-black bg-primary shadow-sm"
            />
            <span className="text-6xl font-black text-primary">
              {services[0].number}
            </span>
            <h4 className="mt-3 text-2xl font-black">{services[0].title}</h4>
            <p className="mt-3 text-sm leading-relaxed">
              {services[0].description}
            </p>
          </article>

          {/* CARD 02 */}
          <article
            ref={(el) => {
              desktopCardRefs.current[1] = el;
            }}
            className="absolute left-[10%] top-[190px] z-10 w-[min(380px,32vw)] rounded-xl border border-white/50 bg-white/20 p-6 shadow-sm backdrop-blur-sm"
          >
            <div
              ref={(el) => {
                desktopCircleRefs.current[1] = el;
              }}
              className="absolute -right-2 top-1/2 z-30 h-4 w-4 translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-black bg-primary shadow-sm"
            />
            <span className="text-6xl font-black text-primary">
              {services[1].number}
            </span>
            <h4 className="mt-3 text-2xl font-black">{services[1].title}</h4>
            <p className="mt-3 text-sm leading-relaxed">
              {services[1].description}
            </p>
          </article>

          {/* CARD 03 */}
          <article
            ref={(el) => {
              desktopCardRefs.current[2] = el;
            }}
            className="absolute right-[12%] top-[350px] z-10 w-[min(380px,32vw)] rounded-xl border border-white/50 bg-white/20 p-6 shadow-sm backdrop-blur-sm"
          >
            <div
              ref={(el) => {
                desktopCircleRefs.current[2] = el;
              }}
              className="absolute -left-2 top-1/2 z-30 h-4 w-4 -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-black bg-primary shadow-sm"
            />
            <span className="text-6xl font-black text-primary">
              {services[2].number}
            </span>
            <h4 className="mt-3 text-2xl font-black">{services[2].title}</h4>
            <p className="mt-3 text-sm leading-relaxed">
              {services[2].description}
            </p>
          </article>

          {/* CARD 04 */}
          <article
            ref={(el) => {
              desktopCardRefs.current[3] = el;
            }}
            className="absolute left-[8%] top-[470px] z-10 w-[min(380px,32vw)] rounded-xl border border-white/50 bg-white/20 p-6 shadow-sm backdrop-blur-sm"
          >
            <div
              ref={(el) => {
                desktopCircleRefs.current[3] = el;
              }}
              className="absolute -right-2 top-1/2 z-30 h-4 w-4 translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-black bg-primary shadow-sm"
            />
            <span className="text-6xl font-black text-primary">
              {services[3].number}
            </span>
            <h4 className="mt-3 text-2xl font-black">{services[3].title}</h4>
            <p className="mt-3 text-sm leading-relaxed">
              {services[3].description}
            </p>
          </article>
        </div>

        {/* MOBILE TIMELINE */}
        <div className="relative pl-8 md:hidden">
          <div className="absolute left-2 top-0 h-full w-px bg-black/20" />
          <div className="absolute left-2 top-0 h-full w-px bg-primary/70" />

          <div className="flex flex-col gap-10">
            {services.map((service, index) => (
              <article
                key={service.number}
                ref={(el) => {
                  mobileCardRefs.current[index] = el;
                }}
                className="relative rounded-xl border border-white/50 bg-white/20 p-5 backdrop-blur-sm"
              >
                <div
                  ref={(el) => {
                    mobileCircleRefs.current[index] = el;
                  }}
                  className="absolute -left-[2.05rem] top-8 z-20 h-4 w-4 -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-black bg-primary shadow-sm"
                />
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
