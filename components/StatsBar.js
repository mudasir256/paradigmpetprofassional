export default function StatsBar() {
  const stats = [
    { value: '60+', label: 'Cat breeds covered' },
    { value: 'All life stages', label: 'From kitten to senior' },
    { value: 'Dogs & more', label: 'Cats, dogs, birds, reptiles' },
  ];

  return (
    <section className="stats-bar">
      <div className="stats-bar-inner">
        {stats.map(({ value, label }) => (
          <div key={label} className="stat-item">
            <span className="stat-value">{value}</span>
            <span className="stat-label">{label}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
