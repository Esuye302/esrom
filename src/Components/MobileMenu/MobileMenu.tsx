type MobileMenuProps = {
  isMobileMenuOpen: boolean;
  onClose: () => void;
};

const MobileMenu = ({ isMobileMenuOpen, onClose }: MobileMenuProps) => {
  if (!isMobileMenuOpen) return null;

  return (
    <div className="fixed top-21 right-2.5 left-2.5 z-40">
      {/* Menu card */}
      <div className="rounded-[10px] border border-white/40 bg-secondary/70 p-3 backdrop-blur-md">
        <nav className="flex flex-col items-start gap-2">
          <a
            href="#home"
            onClick={onClose}
            className="rounded-lg border border-black/10 bg-menu-background px-3 py-2 text-base font-bold leading-none transition-colors  duration-200 hover:bg-primary"
          >
            🏠 HOME
          </a>

          <a
            href="#about"
            onClick={onClose}
            className="rounded-lg border border-black/10 bg-menu-background px-3 py-2 text-base font-bold leading-none transition-colors duration-200 hover:bg-primary"
          >
            ◕ ABOUT ME
          </a>

          <a
            href="#projects"
            onClick={onClose}
            className="rounded-lg border border-black/10 bg-menu-background px-3 py-2 text-base font-bold leading-none transition-colors duration-200 hover:bg-primary"
          >
            🗂 PROJECTS
          </a>

          <a
            href="#what-you-get"
            onClick={onClose}
            className="rounded-lg border border-black/10 bg-menu-background px-3 py-2 text-base font-bold leading-none transition-colors duration-200 hover:bg-primary"
          >
            ▰ WHAT YOU GET
          </a>

          <a
            href="#services"
            onClick={onClose}
            className="rounded-lg border border-black/10 bg-menu-background px-3 py-2 text-base font-bold leading-none transition-colors duration-200 hover:bg-primary"
          >
            ⚡ SERVICES
          </a>

          <a
            href="#clients"
            onClick={onClose}
            className="rounded-lg border border-black/10 bg-menu-background px-3 py-2 text-base font-bold leading-none transition-colors duration-200 hover:bg-primary"
          >
            👤 CLIENTS
          </a>

          <a
            href="#faq"
            onClick={onClose}
            className="rounded-lg border border-black/10 bg-menu-background px-3 py-2 text-base font-bold leading-none transition-colors duration-200 hover:bg-primary"
          >
            ❔ FAQ
          </a>
        </nav>
      </div>

      {/* Email card */}
      <div className="mt-4 rounded-[10px] border border-white/40 bg-secondary/70 p-3 backdrop-blur-md">
        <a
          href="mailto:esrom1833@gmail.com"
          className="flex items-center justify-center gap-4 rounded-lg bg-menu-background px-3 py-3 text-sm"
        >
          <span>esrom1833@gmail.com</span>

          <span>▣</span>
        </a>
      </div>

      {/* Technology card */}
      <div className="mt-4 overflow-hidden rounded-[10px] border border-white/40 bg-secondary/70 p-4 backdrop-blur-md">
        <div className="flex items-center gap-8 whitespace-nowrap">
          <span>React</span>
          <span>Node.js</span>
          <span>MySQL</span>
          <span>Tailwind</span>
          <span>TypeScript</span>
        </div>
      </div>
    </div>
  );
};

export default MobileMenu;
