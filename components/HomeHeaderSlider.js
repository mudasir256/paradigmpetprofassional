'use client';

import Link from 'next/link';

const BENEFITS = [
  'Evidence-based care for cats, dogs & more',
  'Guidance for every life stage',
  'Trusted resources from our Pexperts',
];

function CheckIcon() {
  return (
    <span className="hero-check" aria-hidden>
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="10" cy="10" r="10" fill="currentColor" />
        <path d="M6 10l3 3 5-6" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
      </svg>
    </span>
  );
}

export default function HomeHeaderSlider() {
  return (
    <header className="hero-header">
      <div className="hero-header-bg" aria-hidden />
      <div className="hero-header-inner">
        <h1 className="hero-headline">
          <span className="hero-headline-line">Care for every kind of pet –</span>
          <span className="hero-headline-emphasis">Expert guidance</span>
        </h1>
        <ul className="hero-benefits">
          {BENEFITS.map((text) => (
            <li key={text} className="hero-benefit">
              <CheckIcon />
              <span>{text}</span>
            </li>
          ))}
        </ul>
        <Link href="/cats" className="hero-cta">
          Explore guides →
        </Link>
        <p className="hero-trust">
          Free resources you can trust. From kittens to seniors, and every pet in between.
        </p>
      </div>
    </header>
  );
}
