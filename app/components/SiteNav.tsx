"use client";

import { useEffect, useRef, useState } from "react";

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
  const [open, setOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const btnRef = useRef<HTMLButtonElement>(null);

  /* Close when tapping outside the menu or the toggle button */
  useEffect(() => {
    if (!open) return;

    function handleClick(e: MouseEvent | TouchEvent) {
      const target = e.target as Node;
      if (
        menuRef.current &&
        !menuRef.current.contains(target) &&
        btnRef.current &&
        !btnRef.current.contains(target)
      ) {
        setOpen(false);
      }
    }

    /* Close on Escape key */
    function handleKey(e: KeyboardEvent) {
      if (e.key === "Escape") setOpen(false);
    }

    document.addEventListener("mousedown", handleClick);
    document.addEventListener("touchstart", handleClick);
    document.addEventListener("keydown", handleKey);
    return () => {
      document.removeEventListener("mousedown", handleClick);
      document.removeEventListener("touchstart", handleClick);
      document.removeEventListener("keydown", handleKey);
    };
  }, [open]);

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

      {/* Mobile menu — replaces <details> for proper click-outside handling */}
      <div className="mobile-menu" ref={menuRef}>
        <button
          ref={btnRef}
          className="mobile-menu-toggle"
          aria-label={open ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={open}
          onClick={() => setOpen((prev) => !prev)}
        >
          {open ? "Close" : "Menu"}
        </button>

        {open && (
          <div className="mobile-menu-panel" role="menu">
            {navLinks.map(([label, href]) => (
              <a
                key={href}
                href={href}
                role="menuitem"
                onClick={() => setOpen(false)}
              >
                {label}
              </a>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
}
