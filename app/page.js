import Link from 'next/link';
import Image from 'next/image';
import HomeHeaderSlider from '@/components/HomeHeaderSlider';
import FeatureCards from '@/components/FeatureCards';
import StatsBar from '@/components/StatsBar';
import CTASection from '@/components/CTASection';

export default function HomePage() {
  return (
    <>
      <HomeHeaderSlider />
      <main className="main-content">
      <p className="intro-text">
        Pets are nature&apos;s gift to humanity as it has been scientifically
        proven they increase the longevity of both the owners&apos; and
        pets&apos; lives and improve the overall quality of life for everyone
        involved. Our mission to you and pets, big and small, is to offer
        resources to help you care for your furry, scaly, feathery, or slimy
        loved ones. Click the links below to learn more about each type of pet.
      </p>

      <h2 className="section-heading">Explore by pet</h2>
      <section className="pet-cards">
        <Link href="/cats" className="pet-card">
          <span className="pet-card-title">Cats</span>
          <div className="pet-card-images">
            <Image
              src="/cat.png"
              alt="Calico cat"
              className="pet-img"
              width={240}
              height={240}
            />
            <Image
              src="/cat2.png"
              alt="Cat on stairs"
              className="pet-img"
              width={240}
              height={240}
            />
          </div>
        </Link>
        <Link href="/dogs" className="pet-card">
          <span className="pet-card-title">Dogs</span>
          <div className="pet-card-images">
            <Image
              src="/dog.png"
              alt="Fluffy dog"
              className="pet-img"
              width={240}
              height={240}
            />
            <Image
              src="/dog2.png"
              alt="Dog on beach"
              className="pet-img"
              width={240}
              height={240}
            />
          </div>
        </Link>
        <Link href="/snakes" className="pet-card">
          <span className="pet-card-title">Snakes</span>
          <div className="pet-card-images">
            <Image
              src="/snak.png"
              alt="Ball python"
              className="pet-img"
              width={240}
              height={240}
            />
            <Image
              src="/snak2.png"
              alt="Ball python resting"
              className="pet-img"
              width={240}
              height={240}
            />
          </div>
        </Link>
        <Link href="/faqs" className="pet-card">
          <span className="pet-card-title">FAQs</span>
          <div className="pet-card-images">
            <Image
              src="/snak.png"
              alt="Ball python"
              className="pet-img"
              width={240}
              height={240}
            />
            <Image
              src="/snak2.png"
              alt="Ball python resting"
              className="pet-img"
              width={240}
              height={240}
            />
          </div>
        </Link>
      </section>

      <StatsBar />

      <FeatureCards />

      <CTASection />
      </main>
    </>
  );
}
