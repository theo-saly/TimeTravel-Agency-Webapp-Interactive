export default function Hero() {
  return (
    <section className="hero" id="top">
      <div className="hero-bg" aria-hidden="true">
        <video
          autoPlay
          muted
          loop
          playsInline
          style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
        >
          <source src="/assets/florence-video.mp4" type="video/mp4" />
        </video>
      </div>
      <div className="hero-content">
        <span className="eyebrow">TimeTravel Agency</span>
        <h1 className="hero-title">
          Voyagez à travers <em>le temps</em>
        </h1>
        <p className="hero-subtitle">
          Trois époques d'exception, encadrées par nos historiens et ingénieurs
          temporels, pour des voyageurs en quête d'absolu.
        </p>
        <div className="hero-actions">
          <a href="#destinations" className="btn-gold">
            Découvrir nos destinations
          </a>
        </div>
      </div>
    </section>
  );
}
