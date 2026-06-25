import { useEffect, useRef, useState } from "react";

const SYSTEM_PROMPT = `Tu es l'assistant virtuel de TimeTravel Agency, une agence de voyage temporel de luxe.
Ton rôle : conseiller les clients sur les meilleures destinations temporelles et répondre à leurs questions.

Ton ton : professionnel mais chaleureux, passionné d'histoire, enthousiaste sans être familier.

Tu connais parfaitement 3 destinations :
1. Paris 1889 (Belle Époque) - Tour Eiffel neuve, Exposition Universelle, vie de café, art nouveau. Prix : à partir de 4 200€ pour 3 jours.
2. Crétacé -65M (préhistoire) - dinosaures, nature vierge, expédition encadrée. Prix : à partir de 7 800€ pour 2 jours (combinaison de protection incluse).
3. Florence 1504 (Renaissance) - ateliers d'artistes, David de Michel-Ange récemment achevé, architecture. Prix : à partir de 5 100€ pour 4 jours.

Règles :
- Réponses courtes et engageantes (3-5 phrases max)
- Toujours proposer une destination adaptée si le client hésite
- Si on te demande un prix non listé, reste cohérent avec l'échelle ci-dessus
- Ne sors jamais du rôle de conseiller en voyage temporel
- Réponds en français`;

export default function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      role: "assistant",
      content:
        "Bonjour ! Je suis votre conseiller en voyage temporel. Quelle époque vous fait rêver ?",
    },
  ]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const scrollRef = useRef(null);

  useEffect(() => {
    scrollRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, loading]);

  const sendMessage = async () => {
    const text = input.trim();
    if (!text || loading) return;

    const userMsg = { role: "user", content: text };
    const newMessages = [...messages, userMsg];
    setMessages(newMessages);
    setInput("");
    setLoading(true);

    try {
      const response = await fetch(
        "https://api.groq.com/openai/v1/chat/completions",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${import.meta.env.VITE_GROQ_API_KEY}`,
          },
          body: JSON.stringify({
            model: "llama-3.1-8b-instant",
            messages: [{ role: "system", content: SYSTEM_PROMPT }, ...newMessages],
            temperature: 0.7,
            max_tokens: 220,
          }),
        }
      );

      if (!response.ok) throw new Error("Erreur API");

      const data = await response.json();
      const reply =
        data.choices?.[0]?.message?.content ||
        "Désolé, une perturbation temporelle empêche ma réponse.";

      setMessages((prev) => [...prev, { role: "assistant", content: reply }]);
    } catch (err) {
      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content:
            "Une perturbation temporelle empêche ma réponse pour le moment. Réessayez dans un instant.",
        },
      ]);
    } finally {
      setLoading(false);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") sendMessage();
  };

  return (
    <>
      {isOpen && (
        <div className="chat-window">
          <div className="chat-header">
            <h4>Conseiller TimeTravel</h4>
            <span>En ligne · répond en quelques secondes</span>
          </div>

          <div className="chat-messages">
            {messages.map((message, index) => (
              <div key={index} className={`chat-bubble ${message.role}`}>
                {message.content}
              </div>
            ))}
            {loading && <div className="chat-typing">Le conseiller réfléchit…</div>}
            <div ref={scrollRef} />
          </div>

          <div className="chat-input-row">
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder="Posez-moi vos questions sur les voyages temporels..."
              aria-label="Votre message"
            />
            <button type="button" className="chat-send" onClick={sendMessage} aria-label="Envoyer">
              ➤
            </button>
          </div>
        </div>
      )}

      <button
        type="button"
        className="chat-launcher"
        onClick={() => setIsOpen((open) => !open)}
        aria-label={isOpen ? "Fermer le chat" : "Ouvrir le chat"}
      >
        {isOpen ? "✕" : "💬"}
      </button>
    </>
  );
}
