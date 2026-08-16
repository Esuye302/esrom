type MobileMenuProps = {
  isMobileMenuOpen: boolean;
  onClose: () => void;
};

const MobileMenu = ({ isMobileMenuOpen, onClose }: MobileMenuProps) => {
  if (!isMobileMenuOpen) return null;

  return (
    <div className="fixed inset-0 z-40 bg-menu-background">
     
      <div className="flex min-h-full flex-col px-4 pt-24 pb-6">
        <nav className="flex flex-col">
          <a
            href="/"
            onClick={onClose}
            className="border-b border-black/20 py-4 text-4xl font-bold"
          >
            HOME
          </a>

          <a
            href="/about"
            onClick={onClose}
            className="border-b border-black/20 py-4 text-4xl font-bold"
          >
            ABOUT ME
          </a>

          <a
            href="/projects"
            onClick={onClose}
            className="border-b border-black/20 py-4 text-4xl font-bold"
          >
            PROJECTS
          </a>

          <a
            href="/contact"
            onClick={onClose}
            className="border-b border-black/20 py-4 text-4xl font-bold"
          >
            CONTACT
          </a>

          <a href="/faq" onClick={onClose} className="py-4 text-4xl font-bold">
            FAQ
          </a>
        </nav>

        <a
          href="mailto:esrom1833@gmail.com"
          className="mt-auto text-sm underline"
        >
          esrom1833@gmail.com
        </a>
      </div>
      
    </div>
  );
};

export default MobileMenu;
