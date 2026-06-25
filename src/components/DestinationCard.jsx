export default function DestinationCard({ destination, onOpen }) {
  const { badge, title, tagline, imageUrl } = destination;

  return (
    <article className="dest-card" onClick={() => onOpen(destination)}>
      <div className="dest-card-media">
        {imageUrl ? (
          <img
            src={imageUrl}
            alt={`${title} — ${badge}`}
            style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
            loading="lazy"
          />
        ) : (
          <div className="placeholder-gradient">{title}</div>
        )}
      </div>
      <div className="dest-card-overlay" aria-hidden="true" />
      <span className="dest-card-badge">{badge}</span>
      <div className="dest-card-body">
        <h3>{title}</h3>
        <p>{tagline}</p>
        <span className="dest-card-link">En savoir plus →</span>
      </div>
    </article>
  );
}
