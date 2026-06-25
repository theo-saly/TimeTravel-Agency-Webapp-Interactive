import { useState } from "react";
import { DESTINATIONS } from "../data/destinations.js";
import DestinationCard from "./DestinationCard.jsx";
import DestinationModal from "./DestinationModal.jsx";
import { useReveal } from "../hooks/useReveal.js";

export default function Destinations() {
  const [activeDestination, setActiveDestination] = useState(null);
  const [ref, isVisible] = useReveal();

  return (
    <section className="destinations" id="destinations">
      <div className="container">
        <div className={`section-head reveal ${isVisible ? "is-visible" : ""}`} ref={ref}>
          <span className="eyebrow">Nos époques</span>
          <h2>Trois destinations d'exception</h2>
        </div>

        <div className="cards-grid">
          {DESTINATIONS.map((destination) => (
            <DestinationCard
              key={destination.id}
              destination={destination}
              onOpen={setActiveDestination}
            />
          ))}
        </div>
      </div>

      <DestinationModal
        destination={activeDestination}
        onClose={() => setActiveDestination(null)}
      />
    </section>
  );
}
