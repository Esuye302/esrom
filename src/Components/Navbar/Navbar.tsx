import { Link } from "react-router-dom";
import MobileMenu from "../MobileMenu/MobileMenu";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const leftNavItems = [
  { label: "HOME", href: "#home" },
  { label: "ABOUT ME", href: "#about" },
  { label: "PROJECTS", href: "#projects" },
];

const rightNavItems = [
  { label: "WHAT YOU GET", href: "#what-you-get" },
  { label: "SERVICES", href: "#services" },
  { label: "CONTACT", href: "#contact" },
  { label: "FAQ", href: "#faq" },
];

interface NavItem {
  label: string;
  href: string;
}

/* --------------------------------
   Desktop animated nav link
--------------------------------- */

const DesktopNavLink = ({ item }: { item: NavItem }) => {
  return (
    <a
      href={item.href}
      className="
        group relative block overflow-hidden
        leading-none
        text-[11px] font-bold
        min-[900px]:text-xs
        min-[1200px]:text-[13px]
      "
    >
      {/* Original text */}
      <span
        className="
          block
          transition-transform
          duration-300
          ease-[cubic-bezier(.22,1,.36,1)]
          group-hover:-translate-y-full
        "
      >
        {item.label}
      </span>

      {/* Clone that slides into place */}
      <span
        aria-hidden="true"
        className="
          absolute inset-0
          block translate-y-full
          transition-transform
          duration-300
          ease-[cubic-bezier(.22,1,.36,1)]
          group-hover:translate-y-0
        "
      >
        {item.label}
      </span>
    </a>
  );
};

/* --------------------------------
   Desktop nav group
--------------------------------- */

const NavGroup = ({ items }: { items: NavItem[] }) => {
  return (
    <div
      className="
        flex items-center
        gap-3
        whitespace-nowrap
      "
    >
      {items.map((item, index) => (
        <div key={item.label} className="flex items-center gap-3">
          <DesktopNavLink item={item} />

          {/* Separator */}
          {index !== items.length - 1 && (
            <span aria-hidden="true" className="select-none text-current/70">
              |
            </span>
          )}
        </div>
      ))}
    </div>
  );
};

/* --------------------------------
   Navbar
--------------------------------- */

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <>
      {/* =========================
          MOBILE NAVBAR
      ========================== */}

      <nav
        className="
          fixed
          left-0
          right-0
          top-0
          z-50
          flex
          items-center
          justify-between
          px-4
          pt-4
          md:hidden
        "
      >
        {/* Logo */}
        <Link
          to="/"
          className="
            flex
            h-10
            w-30
            items-center
            justify-center
            rounded-md
            bg-primary
            text-2xl
            font-bold
          "
        >
          ESROM®
        </Link>

        {/* Menu button */}
        <button
          type="button"
          aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
          aria-expanded={isMobileMenuOpen}
          onClick={() => setIsMobileMenuOpen((prev) => !prev)}
          className="
            flex
            h-10
            w-10
            items-center
            justify-center
            rounded-md
            bg-secondary
          "
        >
          {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>

      {/* =========================
          DESKTOP NAVBAR
      ========================== */}

      <nav
        className="
          pointer-events-none
          fixed
          left-1/2
          z-50
          hidden
          -translate-x-1/2
          items-center
          justify-between
          md:flex

          top-[35%]
          w-[90%]

          min-[900px]:top-[40%]
          min-[900px]:w-[95%]

          min-[1052px]:top-[45%]
          min-[1052px]:w-[95%]

          min-[1200px]:top-[50%]
          min-[1200px]:w-[94%]
        "
      >
        {/* LEFT NAV */}
        <div className="pointer-events-auto">
          <NavGroup items={leftNavItems} />
        </div>

        {/* RIGHT NAV */}
        <div className="pointer-events-auto">
          <NavGroup items={rightNavItems} />
        </div>
      </nav>

      {/* =========================
          MOBILE MENU
      ========================== */}

      <div className="md:hidden">
        <MobileMenu
          isMobileMenuOpen={isMobileMenuOpen}
          onClose={() => setIsMobileMenuOpen(false)}
        />
      </div>
    </>
  );
};

export default Navbar;
