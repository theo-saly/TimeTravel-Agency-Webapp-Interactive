# TimeTravel Agency — Webapp Interactive

> Agence de voyage temporel fictive. Explorez Paris 1889, le Crétacé, ou la Florence de la Renaissance — avec un conseiller IA intégré.

🌐 **Site en ligne :** [timetravel-agency.theo-saly.com](https://timetravel-agency.theo-saly.com/)  
📦 **Dépôt GitHub :** [theo-saly/TimeTravel-Agency-Webapp-Interactive](https://github.com/theo-saly/TimeTravel-Agency-Webapp-Interactive/tree/main)

Projet pédagogique réalisé en M1 Digital & IA — Ynov Campus.  
Application front-end single-page avec chatbot IA conversationnel en temps réel.

---

## Aperçu

| Section | Description |
|---|---|
| Hero | Page d'accueil animée avec vidéo de fond |
| Destinations | Galerie de 3 voyages avec modal détail |
| Quiz IA | Quiz de personnalisation → recommandation générée par IA |
| Chatbot IA | Conseiller virtuel propulsé par Groq / Llama 3.1 |
| Notre histoire | Présentation de l'agence |
| Footer | Contact, liens, crédits |

---

## Stack Technique

| Couche | Technologie |
|---|---|
| UI Framework | React 18 |
| Build tool | Vite 5 |
| Styles | CSS3 pur — variables, grid, keyframes, backdrop-filter |
| Fonts | Google Fonts — Cormorant Garamond, Jost |
| IA Chatbot | Groq API — modèle `llama-3.1-8b-instant` |
| Hébergement (cible) | Vercel / Netlify / GitHub Pages |

Aucune librairie UI externe (pas de Bootstrap, Tailwind, Material UI).  
Aucune librairie d'animation tierce (animations CSS natives uniquement).

---

## Features Implémentées

### Landing Page
- Hero plein écran avec **vidéo de fond** (`hero.mp4`) et animation de gradient (drift 14–18s)
- Animations d'entrée en cascade (fade + slide-up)
- Navigation fixe avec effet blur, menu burger responsive

### Galerie de destinations
- 3 destinations temporelles avec card hover (zoom image)
- Badge d'époque (Belle Époque, Préhistoire, Renaissance)
- Modal détail : description longue, durée, prix, certification
- Visuels intégrés localement (`public/assets/`)

**Destinations disponibles :**

| Destination | Époque | Durée | Prix | Visuel |
|---|---|---|---|---|
| Paris 1889 | Belle Époque | 3 jours | 4 200 € | `paris-1889.png` |
| Crétacé −65 Ma | Préhistorique | 2 jours | 7 800 € | `cretace.png` |
| Florence 1504 | Renaissance | 4 jours | 5 100 € | `florence.png` + `florence-video.mp4` |

### Chatbot IA conversationnel
- Widget flottant (bas-droite), ouverture/fermeture toggle
- Historique de conversation conservé en session
- Indicateur "En train d'écrire…" pendant l'appel API
- Soumission par Entrée ou bouton
- Prompt système : conseiller virtuel, réponses en français, 3–5 phrases max
- Gestion d'erreur avec message de repli

### Quiz de recommandation personnalisée
- 4 questions à choix multiples (3 options chacune) sur les préférences de voyage
- Système de scoring : chaque réponse attribue des points aux 3 destinations
- Calcul automatique de la destination la mieux adaptée au profil
- Appel Groq API pour générer un texte de recommandation personnalisé (3–4 phrases, basé sur les réponses)
- Affichage du résultat : carte destination + texte IA contextualisé + durée/prix
- Gestion d'erreur : fallback si l'API est indisponible, la destination reste affichée
- Option "Refaire le quiz" pour recommencer

**Questions du quiz :**

| # | Question | Options |
|---|---|---|
| 1 | Type d'expérience recherché | Culturelle/artistique · Aventure/nature · Élégance/raffinement |
| 2 | Période préférée | XIXe–XXe s. · Temps anciens · Renaissance |
| 3 | Environnement | Effervescence urbaine · Nature vierge · Art/architecture |
| 4 | Activité idéale | Monuments historiques · Mégafaune ancienne · Ateliers/musées |

### UX & Accessibilité
- Scroll reveal (Intersection Observer) sur les sections clés
- Fermeture du modal via Escape ou clic arrière-plan
- Navigation clavier complète
- Responsive : 3 colonnes → 2 → 1 selon la largeur
- Attributs ARIA sur les éléments interactifs

---

## IA Utilisées

### Chatbot — Groq API
- **Modèle :** `llama-3.1-8b-instant` (Meta Llama 3.1, inférence ultra-rapide)
- **Fournisseur :** [Groq](https://groq.com) — API gratuite, clé requise
- **Rôle assigné :** conseiller de voyage temporel, francophone, en personnage
- **Paramètres :** température 0.7, max 220 tokens

### Quiz de recommandation — Groq API
- **Modèle :** `llama-3.1-8b-instant` (même modèle que le chatbot)
- **Usage :** génération d'un texte de recommandation personnalisé en fonction des 4 réponses du quiz
- **Prompt dynamique :** inclut les questions + réponses de l'utilisateur, titre et tagline de la destination calculée
- **Paramètres :** température 0.8, max 200 tokens
- **Fallback :** message statique si l'API échoue — la destination reste affichée

### Génération de code — Claude (Anthropic)
- Assistance à la génération et au débogage du code via Claude Code

### Visuels — Assets locaux
- Images de destinations générées via IA (DALL-E 3 / Bing Image Creator)
- Vidéos d'ambiance générées via IA (Runway / Sora)
- Fichiers hébergés en local : `public/assets/`
  - `paris-1889.png`, `cretace.png`, `florence.png`
  - `hero.mp4` (fond vidéo hero), `florence-video.mp4` (ambiance Renaissance)

---

## Installation

### Prérequis
- Node.js ≥ 18
- Compte [Groq](https://console.groq.com) (gratuit) pour obtenir une clé API

### Étapes

```bash
# 1. Cloner le dépôt
git clone <url-du-repo>
cd TimeTravel-Agency-Webapp-Interactive

# 2. Installer les dépendances
npm install

# 3. Configurer les variables d'environnement
cp .env.example .env
# Éditer .env et renseigner votre clé Groq :
# VITE_GROQ_API_KEY=votre_cle_groq_ici

# 4. Lancer le serveur de développement
npm run dev
# → http://localhost:5173
```

### Scripts disponibles

| Commande | Action |
|---|---|
| `npm run dev` | Serveur local avec hot-reload |
| `npm run build` | Build de production (dossier `dist/`) |
| `npm run preview` | Prévisualisation du build de production |

---

## Variables d'environnement

| Variable | Obligatoire | Description |
|---|---|---|
| `VITE_GROQ_API_KEY` | Oui | Clé API Groq pour le chatbot |

Créer un fichier `.env` à la racine à partir de `.env.example`.  
Ne jamais commiter ce fichier (déjà dans `.gitignore`).

---

## Structure du projet

```
public/
└── assets/
    ├── paris-1889.png
    ├── cretace.png
    ├── florence.png
    ├── hero.mp4
    └── florence-video.mp4
src/
├── components/
│   ├── ChatWidget.jsx       # Widget chatbot IA
│   ├── DestinationCard.jsx  # Card destination
│   ├── DestinationModal.jsx # Modal détail destination
│   ├── Destinations.jsx     # Section galerie
│   ├── Footer.jsx
│   ├── Header.jsx
│   ├── Hero.jsx             # Vidéo de fond hero.mp4
│   ├── Histoire.jsx         # Section "Notre histoire"
│   ├── Intro.jsx
│   └── Quiz.jsx             # Quiz personnalisé + recommandation IA
├── data/
│   └── destinations.js      # Données centralisées des destinations
├── hooks/
│   └── useReveal.js         # Hook Intersection Observer (scroll reveal)
├── App.jsx
├── index.css
└── main.jsx
```

---

## Crédits & Ressources

| Ressource | Usage | Lien |
|---|---|---|
| Groq API | Inférence LLM chatbot | [console.groq.com](https://console.groq.com) |
| Meta Llama 3.1 | Modèle de langage chatbot | Via Groq |
| Google Fonts | Cormorant Garamond, Jost | [fonts.google.com](https://fonts.google.com) |
| Vite | Build tool | [vitejs.dev](https://vitejs.dev) |
| React | UI Framework | [react.dev](https://react.dev) |

---

## Équipe

| Membre | Rôle |
|---|---|
| RODRIGUES Inacio | Développement & intégration IA |
| SALY Théo | Développement & design |
| DICK Olivier | Développement & contenus |
| MEGHLAT Hayat | Développement & UX |

---

## Licence

Projet pédagogique — M1 Digital & IA, Ynov Campus (2024–2025).  
Usage non-commercial, à des fins d'apprentissage uniquement.
