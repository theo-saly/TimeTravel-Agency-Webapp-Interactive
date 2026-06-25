import { useEffect } from "react";

export default function DestinationModal({ destination, onClose }) {
  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", handleKey);
    return () => document.removeEventListener("keydown", handleKey);
  }, [onClose]);

  if (!destination) return null;

  const { title, badge, era, duration, price, longDescription } = destination;

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="modal-box" onClick={(e) => e.stopPropagation()}>
        <button type="button" className="modal-close" onClick={onClose} aria-label="Fermer">
          ✕
        </button>
        <h3>{title}</h3>
        <p className="modal-meta">{badge}</p>
        <p>{longDescription}</p>
        <div className="modal-facts">
          <div>
            <span>Époque</span>
            <strong>{era}</strong>
          </div>
          <div>
            <span>Durée</span>
            <strong>{duration}</strong>
          </div>
          <div>
            <span>À partir de</span>
            <strong>{price}</strong>
          </div>
          <div>
            <span>Encadrement</span>
            <strong>Historiens certifiés</strong>
          </div>
        </div>
        <a href="#footer" className="btn-gold" onClick={onClose}>
          Réserver ce voyage
        </a>
      </div>
    </div>
  );
}
