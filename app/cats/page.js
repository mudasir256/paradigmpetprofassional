import Image from 'next/image';
import PageHeader from '@/components/PageHeader';

export const metadata = {
  title: 'Cats - Paradigm Pet Professionals',
  description: 'Cat care by age: kittens, adults, and seniors.',
};

export default function CatsPage() {
  return (
    <>
      <PageHeader
        tag="Pet Care"
        title="Cats"
        subtitle="Care by life stage — from kitten to senior"
      />
      <main className="main-content">
      <p className="intro-text">
        The felis silvestris catus (or common cat), domesticated around 7500
        B.C. in Western Asia, is the second-most popular domestic pet in the US
        and has over 60 documented breeds. Care and diet vary greatly but here is
        a general recommendation for the well-being of your fluffy family
        member.
      </p>

      <div className="content-images">
        <Image src="/cat.png" alt="Calico cat" width={400} height={280} />
        <Image src="/cat2.png" alt="Cat on stairs" width={400} height={280} />
      </div>

      <section className="content-section">
        <h2>0 - 4 Weeks</h2>
        <p>
          It is preferred that the kitten nurses from the queen (mother cat)
          directly. If that is not possible, you need to monitor the growth of
          the kittens closely. If a kitten is not gaining weight appropriately,
          a caretaker might need to feed the kitten directly. This can be done
          with a bottle or feeding tube. Reasons a kitten might not gain weight
          appropriately include:
        </p>
        <ul>
          <li>Too many other siblings are competing for mom&apos;s milk</li>
          <li>Gastrointestinal disease</li>
          <li>
            Environmental conditions such as extreme heat or cold, or
            unsanitary conditions
          </li>
        </ul>
      </section>

      <section className="content-section">
        <h2>4 Weeks - 1 Year</h2>
        <p>
          Kittens can be introduced to soft wet kitten food around 3-4 weeks after
          birth. According to the <a href="https://www.aspca.org/">ASPCA</a>,
          kittens should be fed 0.5-1 cup of dry kitten food or 6-9 ounces of wet
          kitten food per day. If you have a kitten that has difficulty eating
          hard food, add a small amount of water to the hard food to soften it.
          It is important to use kitten-optimized cat food for growth, energy,
          and wellness. Consult your veterinarian for recommendations on dietary
          requirements, as they can vary by cat breed.
        </p>
      </section>

      <section className="content-section">
        <h2>1 Year - 7 Years</h2>
        <p>
          At this age, when kittens are no longer kittens and have reached the{' '}
          <em>cat stage</em>, they do not need as much nutrients. At this
          point, their level of activity decreases, and so does their
          metabolism. It is recommended that you <strong>NOT</strong> leave
          food out for the cats all day. Instead, provide food a couple times a
          day so they eat meals rather than snack throughout the day. This
          practice is intended to reduce the risk of the cats suffering from
          obesity and other weight-related ailments.
        </p>
      </section>

      <section className="content-section">
        <h2>7 Years +</h2>
        <p>
          Much like many living organisms, the cat body begins to deteriorate and
          experience a lot of changes. Cats in this age should be fed fewer fats
          and calories, but more quality proteins. This mean when you are
          purchasing packaged foods for your cat, look for food that states a
          particular protein (such as &quot;salmon&quot;) and{' '}
          <strong>NOT</strong> just a category (such as fish). The latter usually
          means the ingredients are byproducts, or combinations, of lesser
          quality proteins.
        </p>
        </section>
      </main>
    </>
  );
}
