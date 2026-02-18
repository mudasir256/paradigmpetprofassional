export default function PageHeader({ tag, title, subtitle }) {
  return (
    <header className="page-header">
      <div className="page-header-inner">
        {tag && (
          <span className="page-header-tag">
            <span className="page-header-dot" aria-hidden />
            {tag}
          </span>
        )}
        <h1 className="page-header-title">{title}</h1>
        {subtitle && (
          <p className="page-header-subtitle">{subtitle}</p>
        )}
        <span className="page-header-dot page-header-dot-bottom" aria-hidden />
      </div>
    </header>
  );
}
