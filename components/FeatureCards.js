export default function FeatureCards() {
  const features = [
    {
      title: 'Expert guidance',
      description:
        'Evidence-based care tips for diet, exercise, grooming, and health at every life stage.',
      icon: '📋',
    },
    {
      title: 'All pets welcome',
      description:
        'From cats and dogs to birds and reptiles—find advice tailored to your companion.',
      icon: '🐾',
    },
    {
      title: 'Trusted by pet parents',
      description:
        'Clear, practical information so you can give your pet the best care at home.',
      icon: '✓',
    },
  ];

  return (
    <section className="feature-cards-section">
      <h2 className="feature-cards-heading">Why Paradigm Pet Professionals</h2>
      <div className="feature-cards">
        {features.map(({ title, description, icon }) => (
          <div key={title} className="feature-card">
            <span className="feature-card-icon" aria-hidden>
              {icon}
            </span>
            <h3 className="feature-card-title">{title}</h3>
            <p className="feature-card-desc">{description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
