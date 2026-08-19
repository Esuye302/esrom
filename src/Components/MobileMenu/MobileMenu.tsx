import { gsap } from "gsap";

import {
  House,
  CircleUserRound,
  Folder,
  Layers,
  Zap,
  UserRound,
  CircleHelp,
  ClipboardCopy,
  Check,
} from "lucide-react";
import { FaReact, FaNodeJs, FaDocker, FaGitAlt, FaAws } from "react-icons/fa";

import {
  SiTailwindcss,
  SiTypescript,
  SiNextdotjs,
  SiGraphql,
  SiPrisma,
  SiPostgresql,
  SiMysql,
} from "react-icons/si";
import { useState, useRef, useEffect } from "react";
import { useGSAP } from "@gsap/react";
  gsap.registerPlugin(useGSAP);
type MobileMenuProps = {
  isMobileMenuOpen: boolean;
  onClose: () => void;
};

const menuItems = [
  { label: "HOME", href: "#home", icon: House, id: "home" },
  { label: "ABOUT ME", href: "#about", icon: CircleUserRound, id: "about" },
  { label: "PROJECTS", href: "#projects", icon: Folder, id: "projects" },
  {
    label: "WHAT YOU GET",
    href: "#what-you-get",
    icon: Layers,
    id: "what-you-get",
  },
  { label: "SERVICES", href: "#services", icon: Zap, id: "services" },
  { label: "CLIENTS", href: "#clients", icon: UserRound, id: "clients" },
  { label: "FAQ", href: "#faq", icon: CircleHelp, id: "faq" },
];

const techIcons = [
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
const MobileMenu = ({ isMobileMenuOpen, onClose }: MobileMenuProps) => {
  const [copied, setCopied] = useState(false);
  const menuRef = useRef<HTMLDivElement | null>(null);
  const tl = useRef<gsap.core.Timeline | null>(null);
  useGSAP(() => {
    if (!menuRef.current) return;

    tl.current = gsap.timeline({ paused: true });

    tl.current.fromTo(
      menuRef.current,
      {
        clipPath: "inset(0 0 100% 0)",
      },
      {
        clipPath: "inset(0 0 0% 0)",
        duration: 0.6,
        ease: "power3.inOut",
      },
    );
  });

  useEffect(() => {
    if (!tl.current) return;

    if (isMobileMenuOpen) {
      tl.current.play();
    } else {
      tl.current.reverse();
    }
  }, [isMobileMenuOpen]);
 

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText("esrom1833@gmail.com");
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy email:", err);
    }
  };

  return (
    <div ref={menuRef} className="fixed top-21 right-2.5 left-2.5 z-40">
      {/* Menu card */}
      <div className="rounded-[10px] border border-white/40 bg-secondary/70 p-3 backdrop-blur-md">
        <nav className="flex flex-col items-start gap-2">
          {menuItems.map((item) => (
            <a
              key={item.id}
              href={item.href}
              onClick={onClose}
              className="flex items-center gap-2 rounded-lg border border-black/10 bg-menu-background px-3 py-2 text-base font-bold leading-none transition-colors duration-200 hover:bg-primary"
            >
              <item.icon size={16} />
              <span>{item.label}</span>
            </a>
          ))}
        </nav>
      </div>

      {/* Email card */}
      <div className="mt-4 rounded-[10px] border border-white/40 bg-secondary/70 p-3 backdrop-blur-md">
        <div className="flex items-center justify-center gap-4 rounded-lg bg-menu-background px-3 py-3 text-sm">
          <span>esrom1833@gmail.com</span>
          <button
            onClick={handleCopyEmail}
            className="flex items-center gap-1 transition-colors hover:text-primary"
            aria-label="Copy email"
          >
            {copied ? (
              <>
                <Check size={16} className="text-green-500" />
                <span className="text-xs text-green-500 font-medium">
                  Copied!
                </span>
              </>
            ) : (
              <>
                <ClipboardCopy size={16} />
                <span className="text-xs font-medium">Copy</span>
              </>
            )}
          </button>
        </div>
      </div>

      {/* Technology card */}
      <div className="mt-4 overflow-hidden  rounded-[10px] border border-white/40 bg-secondary/70 p-4 backdrop-blur-md">
        <div className="animate-scroll flex   gap-8 whitespace-nowrap iconRow">
          {techIcons.map((tech) => (
            <div
              key={tech.name}
              className=" flex flex-col items-center justify-center gap-2"
            >
              <tech.icon size={24} />
              <span className="text-xs font-medium">{tech.name}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MobileMenu;
