const navLinks = [
  ["Home", "/"],
  ["Vision", "/#vision"],
  ["Gallery", "/vision-gallery"],
  ["Moratorium", "/#moratorium"],
  ["History", "/history"],
  ["Tohi Plan", "/tohi-plan"],
  ["Research", "/research"],
  ["Take Action", "/take-action"],
  ["Contact", "/contact"],
];

export default function SiteNav() {
  return (
    <nav className="site-nav" aria-label="Main navigation">
      <a className="site-brand" href="/" aria-label="Ecusta Land homepage">
        Ecusta Land
      </a>

      <div className="site-nav-links" aria-label="Desktop navigation links">
        {navLinks.map(([label, href]) => (
          <a key={href} href={href}>
            {label}
          </a>
        ))}
      </div>

      <details className="mobile-menu">
        <summary aria-label="Open navigation menu">Menu</summary>
        <div className="mobile-menu-panel">
          {navLinks.map(([label, href]) => (
            <a key={href} href={href}>
              {label}
            </a>
          ))}
        </div>
      </details>
    </nav>
  );
}
