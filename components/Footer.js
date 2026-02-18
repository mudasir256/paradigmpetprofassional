import Link from 'next/link';
import Image from 'next/image';

const QUICK_LINKS = [
  { href: '/', label: 'Home' },
  { href: '/cats', label: 'Cats' },
  { href: '/dogs', label: 'Dogs' },
  { href: '/snakes', label: 'Snakes' },
  { href: '/faqs', label: 'FAQs' },
];

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-inner">
        <div className="footer-grid">
          <div className="footer-brand">
            <Link href="/" className="footer-logo-link">
              <Image
                src="/logo.png"
                alt=""
                width={48}
                height={48}
                className="footer-logo"
              />
              <span className="footer-brand-name">Paradigm Pet Professionals</span>
            </Link>
            <p className="footer-tagline">
              Trusted resources for every kind of pet—furry, scaly, feathery, or slimy.
            </p>
          </div>
          <div className="footer-col">
            <h3 className="footer-heading">Quick links</h3>
            <ul className="footer-links">
              {QUICK_LINKS.map(({ href, label }) => (
                <li key={href}>
                  <Link href={href} className="footer-link">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="footer-col">
            <h3 className="footer-heading">Resources</h3>
            <ul className="footer-links">
              <li><Link href="/cats" className="footer-link">Cat care</Link></li>
              <li><Link href="/dogs" className="footer-link">Dog care</Link></li>
              <li><Link href="/snakes" className="footer-link">Snake care</Link></li>
              <li><Link href="/faqs" className="footer-link">FAQs</Link></li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <p className="footer-copy">
            © {new Date().getFullYear()} Paradigm Pet Professionals. All rights reserved.
          </p>
          <p className="footer-legal">
            Resources for every kind of pet. Not a substitute for professional veterinary advice.
          </p>
        </div>
      </div>
    </footer>
  );
}
