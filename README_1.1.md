# Exercice 1.1 — Définition des features
 
**Projet :** TimeTravel Agency — Webapp Interactive
**Équipe :** SALY Théo - DICK Olivier - MEGHLAT Hayat - RODRIGUES Inacio
 
---
 
## 1. Page d'accueil
 
- **Hero section** : fond avec animation (gradient animé ou vidéo courte en boucle évoquant le voyage temporel — vortex, horloge, particules), titre accrocheur ("Voyagez à travers le temps"), sous-titre
- **Présentation de l'agence** : court paragraphe sur TimeTravel Agency, son concept, sa promesse (voyager dans le temps en toute sécurité et élégance)
- **CTA** : bouton "Découvrir nos destinations" qui scroll/navigue vers la galerie
 
## 2. Galerie des destinations
 
- **3 cards interactives** : Paris 1889 (Belle Époque), Crétacé -65M (préhistoire), Florence 1504 (Renaissance)
- **Effet hover** : zoom léger sur l'image + apparition d'infos au survol
- **Visuels** : régénérés via IA générative (Bing Image Creator / DALL-E 3), un visuel par destination
- **Modal / page détail** : au clic, affiche les infos détaillées — contexte historique, activités proposées, durée, prix indicatif
 
## 3. Agent conversationnel
 
- **Widget de chat flottant** en bas à droite, icône bulle de dialogue, ouverture au clic
- **Conseils personnalisés** : recommande une destination selon les goûts exprimés par l'utilisateur
- **FAQ automatisée** : répond aux questions classiques (prix, sécurité, durée, comment réserver)
- **Technologie** : API Groq (modèle llama-3.1-8b-instant), gratuite et rapide
 
## 4. Formulaire de réservation *(optionnel selon le temps disponible)*
 
- Sélection de la destination (dropdown ou pré-rempli depuis la card cliquée)
- Sélection de dates (date picker simple)
- Nombre de voyageurs
- Validation automatisée avec message de confirmation (pas de backend réel nécessaire — état "réservation confirmée" affiché côté front)
 
---
 
## Priorisation pour la séance (2h)
 
| Priorité | Feature | Justification |
|---|---|---|
| 🔴 Must-have | Page d'accueil + Galerie destinations | Base obligatoire, notée dans le critère "Technique" |
| 🔴 Must-have | Chatbot IA | Critère "Fonctionnalités IA" (6 pts) |
| 🟡 Si le temps le permet | Quiz de recommandation (ex. 3.2) | Complète les "Fonctionnalités IA" |
| 🟢 Bonus | Formulaire de réservation | Optionnel selon le brief, non noté en soi |