import { useEffect, useRef, useState } from "react";
import {
  House, CircleUserRound, Folder, Layers, Zap, UserRound, CircleHelp, ClipboardCopy, Check, Square,
} from "lucide-react";
import { FaReact, FaNodeJs, FaDocker, FaGitAlt, FaAws } from "react-icons/fa";
import { SiTailwindcss, SiTypescript, SiNextdotjs, SiGraphql, SiPrisma, SiPostgresql, SiMysql } from "react-icons/si";
import type { IconType } from "react-icons";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface SideNavItem { label: string; href: string; icon: IconType; }

const navItems: SideNavItem[] = [
  { label: "HOME", href: "#home", icon: House },
  { label: "ABOUT ME", href: "#about", icon: CircleUserRound },
  { label: "PROJECTS", href: "#projects", icon: Folder },
  { label: "WHAT YOU GET", href: "#what-you-get", icon: Layers },
  { label: "SERVICES", href: "#services", icon: Zap },
  { label: "CLIENTS", href: "#clients", icon: UserRound },
  { label: "FAQ", href: "#faq", icon: CircleHelp },
];

const techIcons: { name: string; icon: IconType }[] = [
  { name: "React", icon: FaReact },
  { name: "Node.js", icon: FaNodeJs },
  { name: "MySQL", icon: SiMysql },
  { name: "Tailwind", icon: SiTailwindcss },
  { name: "TypeScript", icon: SiTypescript },
  { name: "Next.js", icon: SiNextdotjs },
  { name: "GraphQL", icon: SiGraphql },
  { name: "Docker", icon: FaDocker },
  { name: "AWS", icon: FaAws },
  { name: "Prisma", icon: SiPrisma },
  { name: "Git", icon: FaGitAlt },
  { name: "PostgreSQL", icon: SiPostgresql },
];

const EMAIL = "esrom1833@gmail.com";

const SideNav = () => {
  const navRef = useRef<HTMLElement>(null);
  const [active, setActive] = useState("#about");
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const nav = navRef.current;
    if (!nav) return;

    const sections = navItems.map((item) => item.href.slice(1));
    const triggers = sections.map((id) =>
      ScrollTrigger.create({
        trigger: `#${id}`,
        start: "top 40%",
        end: "bottom 40%",
        onEnter: () => setActive(`#${id}`),
        onEnterBack: () => setActive(`#${id}`),
      })
    );

    return () => triggers.forEach((t) => t.kill());
  }, []);

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(EMAIL);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy email:", err);
    }
  };

  return (
    <>
      <style>{`
        @keyframes sidenav-marquee {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .sidenav-marquee {
          animation: sidenav-marquee 22s linear infinite;
        }
      `}</style>

      <aside
        ref={navRef}
        data-side-nav
        className="fixed left-4 top-4 z-[100] hidden w-[220px] flex-col gap-2 md:flex"
        aria-label="Side navigation"
      >
        {/* BRAND */}
        <div data-block="brand" className="rounded-[12px] border border-white/20 bg-background/80 p-3 backdrop-blur-md">
          <div className="flex items-center justify-between">
            <span data-badge className="inline-block rounded-md bg-primary px-2 py-0.5 text-xs font-black text-black">
              ESROM®
            </span>
            <div className="flex gap-1">
              <a href="https://www.linkedin.com/in/esrom-yowhans-5b4023301" target="_blank" rel="noreferrer" className="flex h-4 w-4 items-center justify-center rounded-[3px] bg-[#222] text-white transition-colors hover:bg-[#000]">
                <span className="text-[8px] font-bold">in</span>
              </a>
              <span className="flex h-4 w-4 items-center justify-center rounded-[3px] bg-[#222] text-white">
                <Square size={8} fill="currentColor" />
              </span>
            </div>
          </div>
          <p className="mt-2 text-[10px] leading-relaxed text-black/70">
            Working closely with your team to deliver builds that merge creativity, technical excellence, and long-term value.
          </p>
        </div>

        {/* STATS */}
        <div data-block="stats" className="grid grid-cols-2 gap-1.5 rounded-[12px] border border-white/20 bg-background/80 p-2 backdrop-blur-md">
          <div className="text-center">
            <p className="text-xl font-black text-primary">10+</p>
            <p className="mt-0.5 text-[9px] font-bold leading-tight text-black">Projects</p>
          </div>
          <div className="text-center">
            <p className="text-xl font-black text-primary">1+</p>
            <p className="mt-0.5 text-[9px] font-bold leading-tight text-black">Years of<br />experience</p>
          </div>
        </div>

        {/* LINKS */}
        <nav data-block="links" className="flex flex-col gap-1 rounded-[12px] border border-white/20 bg-background/80 p-2 backdrop-blur-md">
          {navItems.map((item) => {
            const id = item.href.slice(1);
            const isActive = active === item.href;
            const Icon = item.icon;
            return (
              <a
                key={item.href}
                href={item.href}
                data-nav-link={id}
                className={`
                  flex items-center gap-1.5
                  rounded-md bg-white/90
                  px-2.5 py-1.5
                  text-[10px] font-bold leading-none text-black
                  transition-colors duration-200
                  ${isActive ? "bg-primary" : "hover:bg-primary/50"}
                `}
              >
                <Icon size={11} strokeWidth={2.5} />
                <span data-nav-text>{item.label}</span>
              </a>
            );
          })}
        </nav>

        {/* TECH CAROUSEL */}
        <div data-block="carousel" className="overflow-hidden py-0.5">
          <div className="sidenav-marquee flex w-max gap-4 px-1">
            {[...techIcons, ...techIcons].map((tech, i) => (
              <div key={`${tech.name}-${i}`} className="flex flex-col items-center justify-center gap-0.5">
                <tech.icon size={14} />
                <span className="text-[8px] font-bold">{tech.name}</span>
              </div>
            ))}
          </div>
        </div>

        {/* EMAIL */}
        <div data-block="email" className="flex items-center justify-between gap-1.5 rounded-[12px] border border-white/20 bg-background/80 px-2.5 py-1.5 text-[10px] font-medium text-black/70 backdrop-blur-md">
          <span className="truncate">{EMAIL}</span>
          <button type="button" onClick={handleCopyEmail} className="flex flex-shrink-0 items-center gap-0.5 transition-colors hover:text-black">
            {copied ? (
              <><Check size={10} className="text-green-600" /><span className="text-[9px] font-bold text-green-600">Copied!</span></>
            ) : (
              <><ClipboardCopy size={10} /><span className="text-[9px] font-bold">Copy</span></>
            )}
          </button>
        </div>

        {/* CTA */}
        <a data-block="cta" href="#contact" className="rounded-full bg-primary py-2 text-center text-[11px] font-black text-black transition-transform hover:scale-[1.02]">
          Book a Call
        </a>
      </aside>
    </>
  );
};

export default SideNav;