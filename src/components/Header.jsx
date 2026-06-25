import { useState } from "react";

const NAV_LINKS = [
  { label: "Destinations", href: "#destinations" },
  { label: "Quiz", href: "#quiz" },
  { label: "Notre histoire", href: "#histoire" },
  { label: "Contact", href: "#footer" },
];

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <header className="site-header">
      <div className="container">
        <a href="#top" className="logo" onClick={closeMenu}>
          Time<span>Travel</span>
        </a>

        <nav className="nav-links">
          {NAV_LINKS.map((link) => (
            <a key={link.href} href={link.href}>
              {link.label}
            </a>
          ))}
        </nav>

        <a href="#destinations" className="btn-gold header-cta">
          Planifier mon voyage
        </a>

        <button
          type="button"
          className={`burger ${isMenuOpen ? "is-open" : ""}`}
          aria-label={isMenuOpen ? "Fermer le menu" : "Ouvrir le menu"}
          aria-expanded={isMenuOpen}
          onClick={() => setIsMenuOpen((open) => !open)}
        >
          <span />
          <span />
          <span />
        </button>
      </div>

      {isMenuOpen && (
        <div className="mobile-dropdown">
          {NAV_LINKS.map((link) => (
            <a key={link.href} href={link.href} onClick={closeMenu}>
              {link.label}
            </a>
          ))}
          <a href="#destinations" className="btn-gold" onClick={closeMenu}>
            Planifier mon voyage
          </a>
        </div>
      )}
    </header>
  );
}
