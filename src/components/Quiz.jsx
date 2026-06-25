import { useState } from "react";
import { DESTINATIONS } from "../data/destinations.js";
import { useReveal } from "../hooks/useReveal.js";

const QUESTIONS = [
  {
    question: "Quel type d'expérience recherchez-vous ?",
    options: [
      { label: "Culturelle et artistique", scores: { "florence-1504": 2, "paris-1889": 1 } },
      { label: "Aventure et nature sauvage", scores: { cretace: 3 } },
      { label: "Élégance et raffinement", scores: { "paris-1889": 2, "florence-1504": 1 } },
    ],
  },
  {
    question: "Votre période préférée ?",
    options: [
      { label: "Histoire moderne (XIXe-XXe siècle)", scores: { "paris-1889": 3 } },
      { label: "Temps anciens et origines", scores: { cretace: 3 } },
      { label: "Renaissance et classicisme", scores: { "florence-1504": 3 } },
    ],
  },
  {
    question: "Vous préférez :",
    options: [
      { label: "L'effervescence urbaine", scores: { "paris-1889": 2, "florence-1504": 1 } },
      { label: "La nature vierge et sauvage", scores: { cretace: 3 } },
      { label: "L'art et l'architecture", scores: { "florence-1504": 2, "paris-1889": 1 } },
    ],
  },
  {
    question: "Votre activité idéale :",
    options: [
      { label: "Visiter des monuments historiques", scores: { "paris-1889": 2, "florence-1504": 1 } },
      { label: "Observer la mégafaune ancienne", scores: { cretace: 3 } },
      { label: "Explorer ateliers et musées", scores: { "florence-1504": 2, "paris-1889": 1 } },
    ],
  },
];

function computeDestinationId(answers) {
  const totals = { "paris-1889": 0, cretace: 0, "florence-1504": 0 };
  answers.forEach(({ scores }) => {
    Object.entries(scores).forEach(([id, pts]) => {
      totals[id] = (totals[id] || 0) + pts;
    });
  });
  return Object.entries(totals).sort((a, b) => b[1] - a[1])[0][0];
}

async function fetchRecommendation(answers, destId) {
  const dest = DESTINATIONS.find((d) => d.id === destId);
  const lines = QUESTIONS.map((q, i) => `${i + 1}. ${q.question} → « ${answers[i].label} »`).join("\n");

  const prompt = `Tu es conseiller pour TimeTravel Agency, une agence de voyage temporel de luxe.
Un client a répondu à notre quiz de personnalisation :
${lines}

Rédige en 3-4 phrases une recommandation enthousiaste et personnalisée pour la destination « ${dest.title} » (${dest.tagline}), en faisant le lien avec ses réponses. Reste dans l'univers du voyage temporel. Réponds en français uniquement, sans titre ni introduction.`;

  const res = await fetch("https://api.groq.com/openai/v1/chat/completions", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${import.meta.env.VITE_GROQ_API_KEY}`,
    },
    body: JSON.stringify({
      model: "llama-3.1-8b-instant",
      messages: [{ role: "user", content: prompt }],
      temperature: 0.8,
      max_tokens: 200,
    }),
  });

  if (!res.ok) throw new Error("API error");
  const data = await res.json();
  return data.choices?.[0]?.message?.content?.trim() || "";
}

export default function Quiz() {
  const [ref, isVisible] = useReveal();
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);
  const [apiError, setApiError] = useState(false);

  const handleStart = () => setStep(1);

  const handleReset = () => {
    setStep(0);
    setAnswers([]);
    setResult(null);
    setApiError(false);
  };

  const handleAnswer = async (option) => {
    const newAnswers = [...answers, option];
    setAnswers(newAnswers);

    if (newAnswers.length < QUESTIONS.length) {
      setStep(step + 1);
      return;
    }

    setStep(5);
    setLoading(true);
    setApiError(false);
    const destId = computeDestinationId(newAnswers);

    try {
      const text = await fetchRecommendation(newAnswers, destId);
      setResult({ destId, text });
    } catch {
      setApiError(true);
      setResult({ destId, text: null });
    } finally {
      setLoading(false);
    }
  };

  const currentQ = step >= 1 && step <= 4 ? QUESTIONS[step - 1] : null;
  const dest = result ? DESTINATIONS.find((d) => d.id === result.destId) : null;

  return (
    <section className="quiz" id="quiz">
      <div className="container">
        <div className={`section-head reveal ${isVisible ? "is-visible" : ""}`} ref={ref}>
          <span className="eyebrow">Personnalisation</span>
          <h2>Trouvez votre destination idéale</h2>
          <p className="quiz-subtitle">
            4 questions · recommandation personnalisée par IA
          </p>
        </div>

        <div className="quiz-card">
          {step === 0 && (
            <div className="quiz-intro">
              <p>
                En 4 questions, notre algorithme temporel identifie l'époque qui
                vous correspond et génère une recommandation sur-mesure.
              </p>
              <button className="btn-gold" onClick={handleStart}>
                Démarrer le quiz →
              </button>
            </div>
          )}

          {currentQ && (
            <div className="quiz-step">
              <div className="quiz-progress-bar">
                <div
                  className="quiz-progress-fill"
                  style={{ width: `${((step - 1) / QUESTIONS.length) * 100}%` }}
                />
              </div>
              <p className="quiz-counter">
                Question {step} sur {QUESTIONS.length}
              </p>
              <h3 className="quiz-question">{currentQ.question}</h3>
              <div className="quiz-options">
                {currentQ.options.map((opt) => (
                  <button
                    key={opt.label}
                    className="quiz-option"
                    onClick={() => handleAnswer(opt)}
                  >
                    {opt.label}
                  </button>
                ))}
              </div>
            </div>
          )}

          {step === 5 && (
            <div className="quiz-result">
              {loading && (
                <div className="quiz-loading">
                  <div className="quiz-spinner" />
                  <p>Analyse temporelle en cours…</p>
                </div>
              )}

              {!loading && dest && (
                <>
                  <p className="quiz-result-label">
                    <span className="eyebrow">Votre destination idéale</span>
                  </p>
                  <div className="quiz-dest-card">
                    {dest.imageUrl && (
                      <div className="quiz-dest-img-wrap">
                        <img src={dest.imageUrl} alt={dest.title} className="quiz-dest-img" />
                        <div className="quiz-dest-img-overlay" />
                      </div>
                    )}
                    <div className="quiz-dest-body">
                      <span className="dest-card-badge" style={{ position: "static", marginBottom: "12px", display: "inline-block" }}>
                        {dest.badge}
                      </span>
                      <h3 className="quiz-dest-title">{dest.title}</h3>
                      <p className="quiz-dest-tagline">{dest.tagline}</p>
                      <div className="quiz-dest-divider" />
                      {apiError ? (
                        <p className="quiz-error">
                          Une perturbation temporelle a interrompu l'analyse. La destination recommandée reste valide.
                        </p>
                      ) : (
                        <p className="quiz-dest-reco">{result.text}</p>
                      )}
                      <div className="quiz-dest-meta">
                        <div>
                          <span>Durée</span>
                          <strong>{dest.duration}</strong>
                        </div>
                        <div>
                          <span>À partir de</span>
                          <strong>{dest.price}</strong>
                        </div>
                      </div>
                    </div>
                  </div>
                  <button className="quiz-retry" onClick={handleReset}>
                    ↺ Refaire le quiz
                  </button>
                </>
              )}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
