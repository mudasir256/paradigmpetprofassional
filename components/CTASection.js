import Link from 'next/link';

export default function CTASection() {
  return (
    <section className="cta-section">
      <h2 className="cta-heading">Have questions?</h2>
      <p className="cta-text">
        Our Pexperts answer common questions about fleas, bird lifespan, snake
        feeding, and more.
      </p>
      <Link href="/faqs" className="cta-link">
        View FAQs
      </Link>
    </section>
  );
}
