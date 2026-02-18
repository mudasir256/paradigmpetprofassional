import Image from 'next/image';
import PageHeader from '@/components/PageHeader';

export const metadata = {
  title: 'Dogs - Paradigm Pet Professionals',
  description: 'Diet, exercise, grooming, and health care for dogs.',
};

export default function DogsPage() {
  return (
    <>
      <PageHeader
        tag="Pet Care"
        title="Dogs"
        subtitle="Diet, exercise, grooming & health at every stage"
      />
      <main className="main-content">
      <p className="intro-text">
        The canis familiaris, or domestic dog, is a very social animal, and
        owning a dog can have many mutual benefits between both dog and owner.
        There have been many studies throughout the last couple of centuries
        citing not only social benefits of having a companion and reduced
        feelings of loneliness by adopting a dog, but even medical indicators
        such as{' '}
        <a href="#">reduced blood pressure and improved lipid profiles</a>. So if
        you have a dog, it is important to make sure that you care for your
        dog; be mindful of what you feed them, and provide enough opportunities
        for exercise. In this page, you will find more information about how to
        care for your pets throughout the various stages of their lives.
      </p>

      <div className="content-images">
        <Image src="/dog.png" alt="Fluffy dog" width={400} height={280} />
        <Image src="/dog2.png" alt="Dog on beach" width={400} height={280} />
      </div>

      <section className="content-section">
        <h2>Diet & Exercise</h2>
        <p>
          Throughout the lifespan of a dog, there should generally be fewer and
          fewer meals as your young one matures. First, they should start with
          being nursed for the first two months. Then, dogs should eat three
          meals per day when they are about 3-6 months years old, two meals
          per day when they are 6 months to one year old, and finally one meal
          per day after they reach one year old. Typically, somewhere between
          sixty and seventy percent of an adult dog&apos;s mass is water.{' '}
          <a href="https://www.aspca.org/">ASPCA says</a> just a 10% decrease in
          body water can cause illness, and 15% loss can cause death!
        </p>
        <p>
          Much like humans, dogs need to have a healthy level of activity to keep
          their blood, heart, and really every organ healthy. They need to
          exercise like we do. They need sun and fresh air. The recommended time
          necessary to qualify as sufficient exercise varies greatly with breed
          and size differences, but generally it is recommended to have at least
          30-120 minutes of exercise per day! Can you imagine exercising 2 hours
          per day? Okay, I know that wouldn&apos;t bother some of you reading
          this. But the thought of it to me makes me cringe! And by the way,
          exercising your dog does not mean they challenge you to a push-up
          contest. Brisk walks are okay, too!
        </p>
      </section>

      <section className="content-section">
        <h2>Grooming & Handling</h2>
        <p>
          Keeping your furry family member clean is important to the dog&apos;s
          health. So be sure to brush frequently to reduce the amount of hair
          that sheds all over the place, and check for insects such as ticks and
          fleas. And bathe them once in a while! This in itself can be an
          exercise depending on how strong-willed the dog is. Do make sure though
          to get ALL of the soap out! If there is any residual soap, it can
          result in a rash (if the soap is a harsh soap or if the dog is
          potentially allergic to the chemicals) or matted and tangled fur that
          can prove to be extremely difficult to remove. As always, be careful
          how you handle your loved one. No matter the size of your dog, you
          need to be cautious as you carry your dog. If you have a small dog,
          then cradle the pup with one hand under the chest and the forearm
          supporting the back half. If it is a large dog, reach under the belly
          with both your arms perpendicular to the dog, and use each arm to
          support the chest and rear as you lift.
        </p>
      </section>

      <section className="content-section">
        <h2>Vaccinations & Medications</h2>
        <p>
          You should ALWAYS consult with your veterinarian, but there is a core
          set of vaccines that are typically recommended. Vaccines reduce the
          exposure risk to things such as hepatitis, rabies, and parvovirus.
          Others may be determined by your vet depending on the environment in
          which the dog resides. Some of these include{' '}
          <a href="#">Bordetella bronchiseptica</a>,{' '}
          <a href="#">Borrelia burgdorferi</a>, and{' '}
          <a href="#">Leptospira bacteria</a>.
        </p>
      </section>
      </main>
    </>
  );
}
