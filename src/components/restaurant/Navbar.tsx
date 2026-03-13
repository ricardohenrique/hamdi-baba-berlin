import { useState } from "react";
import { useLang } from "@/i18n/LanguageContext";
import { Menu, X, Globe } from "lucide-react";

const Navbar = () => {
  const { t, toggleLang, lang } = useLang();
  const [open, setOpen] = useState(false);

  const links = [
    { label: t.nav.home, href: "#home" },
    { label: t.nav.about, href: "#about" },
    { label: t.nav.menu, href: "#menu" },
    { label: t.nav.gallery, href: "#gallery" },
    { label: t.nav.visit, href: "#visit" },
    { label: t.nav.contact, href: "#contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-warm-dark/95 backdrop-blur-sm border-b border-primary/20">
      <div className="container flex items-center justify-between h-16">
        <a href="#home" className="font-display text-2xl font-bold text-primary-foreground tracking-wide">
          Hamdi Baba
        </a>
        {/* Desktop */}
        <div className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="text-sm font-medium text-primary-foreground/80 hover:text-primary transition-colors">
              {l.label}
            </a>
          ))}
          <button onClick={toggleLang} className="flex items-center gap-1.5 text-sm text-primary-foreground/70 hover:text-primary transition-colors">
            <Globe className="w-4 h-4" />
            {t.langSwitch}
          </button>
        </div>
        {/* Mobile */}
        <div className="flex md:hidden items-center gap-3">
          <button onClick={toggleLang} className="text-primary-foreground/70 hover:text-primary">
            <Globe className="w-5 h-5" />
          </button>
          <button onClick={() => setOpen(!open)} className="text-primary-foreground">
            {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>
      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-warm-dark border-t border-primary/20 pb-4">
          {links.map((l) => (
            <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="block px-6 py-3 text-primary-foreground/80 hover:text-primary transition-colors">
              {l.label}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
