'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

const NAV_LINKS = [
  { href: '/', label: 'Home' },
  { href: '/cats', label: 'Cats' },
  { href: '/dogs', label: 'Dogs' },
  { href: '/snakes', label: 'Snakes' },
  { href: '/faqs', label: 'FAQs' },
];

export default function Header() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className={`site-header ${menuOpen ? 'nav-open' : ''}`}>
      <div className="nav-bar">
        <Link href="/" className="nav-brand" onClick={closeMenu}>
          <Image
            src="/logo.png"
            alt=""
            className="nav-logo"
            width={44}
            height={44}
          />
          <span className="nav-brand-text">Paradigm Pet Professionals</span>
        </Link>

        <button
          type="button"
          className="nav-toggle"
          onClick={() => setMenuOpen((o) => !o)}
          aria-expanded={menuOpen}
          aria-controls="nav-dropdown"
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
        >
          <span className="nav-toggle-bar" />
          <span className="nav-toggle-bar" />
          <span className="nav-toggle-bar" />
        </button>

        <div
          id="nav-dropdown"
          className={`nav-dropdown ${menuOpen ? 'nav-dropdown-open' : ''}`}
          aria-hidden={!menuOpen}
        >
          <nav className="nav-menu">
            <ul className="nav-list">
              {NAV_LINKS.map(({ href, label }) => {
                const isActive =
                  href === '/' ? pathname === '/' : pathname.startsWith(href);
                return (
                  <li key={href}>
                    <Link
                      href={href}
                      className={`nav-link ${isActive ? 'active' : ''}`}
                      onClick={closeMenu}
                    >
                      {label}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>
          <div className="nav-actions">
            <input
              type="search"
              placeholder="Find something..."
              className="nav-search-input"
              aria-label="Search"
            />
            <button type="button" className="nav-btn-fetch">
              Fetch
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
