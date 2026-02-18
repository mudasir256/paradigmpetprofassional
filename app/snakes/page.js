import Image from 'next/image';
import PageHeader from '@/components/PageHeader';

export const metadata = {
  title: 'Snakes - Paradigm Pet Professionals',
  description: 'Care and feeding guidance for pet snakes.',
};

export default function SnakesPage() {
  return (
    <>
      <PageHeader
        tag="Pet Care"
        title="Snakes"
        subtitle="Housing, feeding & health for your reptile"
      />
      <main className="main-content">
      <p className="intro-text">
        Snakes are fascinating reptiles that can make rewarding pets for
        committed owners. Species like ball pythons are popular for their
        manageable size and generally calm temperament. Proper housing, heating,
        and feeding are essential for your snake&apos;s health and well-being.
      </p>

      <div className="content-images">
        <Image src="/snak.png" alt="Ball python" width={400} height={280} />
        <Image
          src="/snak2.png"
          alt="Ball python resting"
          width={400}
          height={280}
        />
      </div>

      <section className="content-section">
        <h2>Feeding</h2>
        <p>
          Most snakes eat one to two times per week, depending on their age,
          size, and activity level. Female snakes often increase their food
          intake as breeding season gets underway. Some snakes can go as long as
          two weeks before needing their next meal; this is normal. However, if
          your snake has not eaten in two or three weeks and seems lethargic,
          reach out to your local vet to determine if your snake might be ill or
          injured.
        </p>
      </section>

      <section className="content-section">
        <h2>Housing & Environment</h2>
        <p>
          Provide an enclosure that allows your snake to stretch out and that
          has secure ventilation. Temperature gradients are important—a warm
          basking area and a cooler side let your snake regulate its body
          temperature. Use appropriate substrate and include hides so your snake
          can feel secure. Always ensure fresh water is available.
        </p>
      </section>

      <section className="content-section">
        <h2>Handling & Health</h2>
        <p>
          Handle your snake gently and support its body. Avoid handling
          immediately after feeding. Watch for signs of illness such as
          prolonged refusal to eat, wheezing, or mouth rot. Schedule regular
          check-ups with a veterinarian experienced in reptile care.
        </p>
      </section>
      </main>
    </>
  );
}
