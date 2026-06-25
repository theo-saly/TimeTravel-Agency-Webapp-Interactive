import { useReveal } from "../hooks/useReveal.js";

export default function Histoire() {
  const [ref, isVisible] = useReveal();

  return (
    <section className="histoire" id="histoire">
      <div className="container">
        <div className={`histoire-inner reveal ${isVisible ? "is-visible" : ""}`} ref={ref}>
          <span className="eyebrow">Notre histoire</span>
          <h2>Fondée en 2019, réinventée en 2024</h2>
          <p>
            TimeTravel Agency est née d'une obsession : rendre les grands
            moments de l'histoire humaine accessibles, non plus dans les
            livres, mais en chair et en os. Nos fondateurs, passionnés
            d'histoire et d'ingénierie temporelle, ont ouvert leur premier
            bureau à Paris.
          </p>
          <p>
            Aujourd'hui, nous accompagnons des voyageurs exigeants vers trois
            époques d'exception. Chaque expédition est encadrée par des
            historiens certifiés et des ingénieurs temporels agréés par le
            Conseil International du Voyage Temporel.
          </p>
        </div>
      </div>
    </section>
  );
}
