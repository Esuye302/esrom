import { Link } from "react-router-dom";
import MobileMenu from "../MobileMenu/MobileMenu";
import { useState, useRef, useEffect } from "react";
import { Menu, X } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger, useGSAP);

if (typeof window !== "undefined") {
  window.history.scrollRestoration = "manual";
}

const leftNavItems = [
  { label: "HOME", href: "#home", id: "home" },
  { label: "ABOUT ME", href: "#about", id: "about" },
  { label: "PROJECTS", href: "#projects", id: "projects" },
];

const rightNavItems = [
  { label: "WHAT YOU GET", href: "#what-you-get", id: "what-you-get" },
  { label: "SERVICES", href: "#services", id: "services" },
  { label: "FAQ", href: "#faq", id: "faq" },
];

interface NavItem {
  label: string;
  href: string;
  id: string;
}

const DesktopNavLink = ({ item }: { item: NavItem }) => (
  <a
    href={item.href}
    data-nav-link={item.id}
    className="group relative block overflow-hidden leading-none text-[11px] font-bold min-[900px]:text-xs min-[1200px]:text-[13px]"
  >
    <span
      data-nav-text
      className="block transition-transform duration-300 ease-[cubic-bezier(.22,1,.36,1)] group-hover:-translate-y-full"
    >
      {item.label}
    </span>
    <span
      aria-hidden="true"
      className="absolute inset-0 block translate-y-full transition-transform duration-300 ease-[cubic-bezier(.22,1,.36,1)] group-hover:translate-y-0"
    >
      {item.label}
    </span>
  </a>
);

const NavGroup = ({ items }: { items: NavItem[] }) => (
  <div className="flex items-center gap-3 whitespace-nowrap">
    {items.map((item, index) => (
      <div key={item.label} className="flex items-center gap-3">
        <DesktopNavLink item={item} />
        {index !== items.length - 1 && (
          // Added data-nav-separator here
          <span data-nav-separator aria-hidden="true" className="select-none text-current/70">
            |
          </span>
        )}
      </div>
    ))}
  </div>
);

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const desktopNavRef = useRef<HTMLElement>(null);

  useEffect(() => {
    window.scrollTo(0, 0);
    const handleResize = () => {
      window.scrollTo(0, 0);
      ScrollTrigger.refresh();
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useGSAP(() => {
    const desktopNav = desktopNavRef.current;
    if (!desktopNav) return;

    const sideNav = document.querySelector<HTMLElement>("[data-side-nav]");
    if (!sideNav) return;

    const filledTitle = document.querySelector<HTMLElement>(".hero-desktop-title");
    const outlineTitle = document.querySelector<HTMLElement>(".hero-outline-title");
    const heroImage = document.querySelector<HTMLElement>(".hero-desktop-image");
    const badge = sideNav.querySelector<HTMLElement>("[data-badge]");
    const blocks = sideNav.querySelectorAll("[data-block]");
    const separators = desktopNav.querySelectorAll("[data-nav-separator]");

    if (!filledTitle || !outlineTitle || !heroImage || !badge) return;

    const mm = gsap.matchMedia();

    mm.add("(min-width: 768px)", () => {
      let state = {
        esromDx: 0,
        esromDy: 0,
        esromScale: 1,
        linkPairs: [] as { h: HTMLElement; dx: number; dy: number; scale: number }[],
      };

      const measure = () => {
        gsap.set([filledTitle, outlineTitle], { xPercent: -50, x: 0, y: 0, scale: 1 });
        desktopNav.querySelectorAll("[data-nav-link]").forEach((l) => gsap.set(l, { x: 0, y: 0, scale: 1 }));

        const fRect = filledTitle.getBoundingClientRect();
        const bRect = badge.getBoundingClientRect();

        state.esromDx = bRect.left + bRect.width / 2 - (fRect.left + fRect.width / 2);
        state.esromDy = bRect.top + bRect.height / 2 - (fRect.top + fRect.height / 2);
        state.esromScale = bRect.height / fRect.height;

        state.linkPairs = [];
        desktopNav.querySelectorAll<HTMLElement>("[data-nav-link]").forEach((h) => {
          const id = h.dataset.navLink;
          if (!id) return;
          const sLink = sideNav.querySelector<HTMLElement>(`[data-nav-link="${id}"]`);
          if (!sLink) return;

          const hText = h.querySelector<HTMLElement>("[data-nav-text]") ?? h;
          const sText = sLink.querySelector<HTMLElement>("[data-nav-text]") ?? sLink;

          const hr = hText.getBoundingClientRect();
          const sr = sText.getBoundingClientRect();

          state.linkPairs.push({
            h,
            dx: sr.left + sr.width / 2 - (hr.left + hr.width / 2),
            dy: sr.top + sr.height / 2 - (hr.top + hr.height / 2),
            scale: sr.height / hr.height,
          });
        });
      };

      measure();

      gsap.set(sideNav, { autoAlpha: 0, pointerEvents: "none" });
      gsap.set(blocks, { opacity: 0, y: 15 });

      const tl = gsap.timeline({
        defaults: { ease: "none" },
        scrollTrigger: {
          trigger: "#home",
          start: "top top",
          end: "+=150%",
          scrub: 1,
          pin: true,
          anticipatePin: 1,
          invalidateOnRefresh: true,
          onRefreshInit: measure,
        },
      });

      // 1. Hero image and cards fade out
      tl.to(heroImage, { filter: "blur(24px)", opacity: 0, duration: 0.4 }, 0);
      tl.to([".hero-project-card", ".hero-strength-card", ".hero-experience-card"], { opacity: 0, y: 20, duration: 0.4 }, 0);

      // 2. Fade out the `|` separators instantly
      tl.to(separators, { opacity: 0, duration: 0.1 }, 0);

      // 3. Header links fly to side menu
      state.linkPairs.forEach((p, i) => {
        const start = i * 0.03;
        const arrive = start + 0.4;

        tl.to(p.h, {
          x: () => p.dx,
          y: () => p.dy,
          scale: () => p.scale,
          duration: 0.4,
        }, start);
        
        tl.to(p.h, { opacity: 0, duration: 0.1 }, arrive);
      });

      // 4. ESROM flies to badge
      tl.to([filledTitle, outlineTitle], {
        x: () => state.esromDx,
        y: () => state.esromDy,
        scale: () => state.esromScale,
        duration: 0.5,
      }, 0.1);
      
      tl.to([filledTitle, outlineTitle], { opacity: 0, duration: 0.2 }, 0.4);

      // 5. Side Menu builds box by box
      tl.to(sideNav, { autoAlpha: 1, duration: 0.1 }, 0.4);
      
      tl.to('[data-block="brand"]', { opacity: 1, y: 0, duration: 0.2 }, 0.2);
      tl.to('[data-block="stats"]', { opacity: 1, y: 0, duration: 0.2 }, 0.3);
      tl.to('[data-block="links"]', { opacity: 1, y: 0, duration: 0.2 }, 0.4);
      tl.to('[data-block="carousel"]', { opacity: 1, y: 0, duration: 0.2 }, 0.5);
      tl.to('[data-block="email"]', { opacity: 1, y: 0, duration: 0.2 }, 0.6);
      tl.to('[data-block="cta"]', { opacity: 1, y: 0, duration: 0.2 }, 0.7);

      const pointerTrigger = ScrollTrigger.create({
        trigger: "#home",
        start: "bottom 60%",
        onEnter: () => {
          sideNav.style.pointerEvents = "auto";
          desktopNav.style.pointerEvents = "none";
        },
        onLeaveBack: () => {
          sideNav.style.pointerEvents = "none";
          desktopNav.style.pointerEvents = "auto";
        },
      });

      return () => {
        tl.scrollTrigger?.kill();
        tl.kill();
        pointerTrigger.kill();
      };
    });

    return () => mm.revert();
  });

  return (
    <>
      <nav className="fixed left-0 right-0 top-0 z-[110] flex items-center justify-between px-4 pt-4 md:hidden">
        <Link to="/" className="flex h-10 w-30 items-center justify-center rounded-md bg-primary text-2xl font-bold">
          ESROM®
        </Link>
        <button
          type="button"
          aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
          aria-expanded={isMobileMenuOpen}
          onClick={() => setIsMobileMenuOpen((prev) => !prev)}
          className="flex h-10 w-10 items-center justify-center rounded-md bg-secondary"
        >
          {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>

      <nav
        ref={desktopNavRef}
        className="pointer-events-none fixed left-1/2 z-[110] hidden -translate-x-1/2 items-center justify-between md:flex top-[35%] w-[90%] min-[900px]:top-[45%] min-[900px]:w-[95%] min-[1052px]:top-[45%] min-[1052px]:w-[95%] min-[1200px]:top-[50%] min-[1200px]:w-[94%]"
      >
        <div className="pointer-events-auto">
          <NavGroup items={leftNavItems} />
        </div>
        <div className="pointer-events-auto">
          <NavGroup items={rightNavItems} />
        </div>
      </nav>

      <div className="md:hidden">
        <MobileMenu isMobileMenuOpen={isMobileMenuOpen} onClose={() => setIsMobileMenuOpen(false)} />
      </div>
    </>
  );
};

export default Navbar;