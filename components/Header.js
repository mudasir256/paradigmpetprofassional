'use client';

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

  return (
    <header className="site-header">
      <div className="nav-bar">
        <Link href="/" className="nav-brand">
          <Image
            src="/logo.png"
            alt=""
            className="nav-logo"
            width={44}
            height={44}
          />
          <span className="nav-brand-text">Paradigm Pet Professionals</span>
        </Link>
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
    </header>
  );
}
