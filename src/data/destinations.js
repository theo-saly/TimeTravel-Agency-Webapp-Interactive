// Données des 3 destinations — centralisées pour être réutilisées
// par la galerie, les modals, et le chatbot (cohérence des prix).

export const DESTINATIONS = [
  {
    id: "paris-1889",
    badge: "Belle Époque",
    title: "Paris 1889",
    tagline: "L'effervescence de l'Exposition Universelle",
    description:
      "Déambulez sur les boulevards haussmanniens au pied d'une Tour Eiffel encore neuve, dans une capitale électrisée par le progrès et l'art nouveau.",
    longDescription:
      "Foulez les pavés du Paris de la Belle Époque, alors que la toute nouvelle Tour Eiffel domine l'Exposition Universelle. Café-concerts, ateliers d'artistes et grands boulevards : une ville en pleine effervescence créative et industrielle vous accueille pour un séjour hors du temps.",
    duration: "3 jours",
    price: "4 200 €",
    era: "1889",
    imageUrl: null, // à remplacer par l'URL Imgur/Cloudinary réelle
  },
  {
    id: "cretace",
    badge: "Ère préhistorique",
    title: "Crétacé · -65M",
    tagline: "Une expédition encadrée au cœur du monde sauvage",
    description:
      "Observez les derniers grands dinosaures dans une nature totalement vierge, lors d'une expédition strictement encadrée par nos ingénieurs temporels.",
    longDescription:
      "Une expédition d'exception au cœur d'une nature primitive et intacte. Sous la supervision constante de nos guides spécialisés, observez la mégafaune du Crétacé depuis des postes d'observation sécurisés. Combinaison de protection temporelle incluse.",
    duration: "2 jours",
    price: "7 800 €",
    era: "-65 000 000",
    imageUrl: null,
  },
  {
    id: "florence-1504",
    badge: "Renaissance",
    title: "Florence 1504",
    tagline: "Dans les ateliers des maîtres de la Renaissance",
    description:
      "Visitez les ateliers d'artistes florentins, quelques mois après l'achèvement du David de Michel-Ange, au sommet de l'âge d'or de la Renaissance.",
    longDescription:
      "Plongez dans le Florence de 1504, alors que le David de Michel-Ange vient d'être dévoilé place de la Signoria. Visitez les ateliers d'artistes, croisez les grands esprits de la Renaissance et admirez une architecture en pleine renaissance classique.",
    duration: "4 jours",
    price: "5 100 €",
    era: "1504",
    imageUrl: null,
  },
];
