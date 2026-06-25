export default function Footer() {
  return (
    <footer className="site-footer" id="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-col">
            <span className="logo">
              Time<span style={{ color: "var(--color-gold)" }}>Travel</span>
            </span>
            <p>
              Agence de voyage temporel de luxe. Trois époques, une promesse :
              l'histoire vécue, pas seulement racontée.
            </p>
          </div>

          <div className="footer-col">
            <h4>Destinations</h4>
            <a href="#destinations">Paris 1889</a>
            <a href="#destinations">Crétacé · -65M</a>
            <a href="#destinations">Florence 1504</a>
          </div>

          <div className="footer-col">
            <h4>Contact</h4>
            <a href="mailto:contact@timetravel.agency">contact@timetravel.agency</a>
            <a href="tel:+33388000000">+33 3 88 00 00 00</a>
            <p>Strasbourg, France</p>
          </div>
        </div>

        <div className="footer-bottom">
          <span>© 2024 TimeTravel Agency — Tous droits réservés</span>
          <span>Projet pédagogique · Ynov Campus M1</span>
        </div>
      </div>
    </footer>
  );
}
