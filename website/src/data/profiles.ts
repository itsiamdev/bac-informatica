export interface Profile {
  name: string;
  description: string;
  href: string;
  topics: string[];
}

export const profiles: Profile[] = [
  {
    name: "Mate-Info",
    description:
      "Algoritmi și teme pentru pregătirea examenului de Bacalaureat la profilul matematică-informatică.",
    href: "#mate-info",
    topics: [
      "Programa oficială",
      "Algoritmi și pseudocod",
      "Limbajul C++",
      "Subprograme",
      "Tipuri structurate de date",
      "Fișiere text",
      "Algoritmi elementari",
      "Recursivitate",
      "Metoda backtracking",
      "Grafuri și arbori",
      "Probleme, exerciții și simulări",
    ],
  },
  {
    name: "Științe ale naturii",
    description:
      "Noțiuni, exerciții și simulări pentru profilul Științe ale naturii.",
    href: "#stiinte-ale-naturii",
    topics: [
      "Programa oficială",
      "Algoritmi și pseudocod",
      "Limbajul C++",
      "Subprograme",
      "Tipuri structurate de date",
      "Fișiere text",
      "Algoritmi elementari",
      "Probleme rezolvate",
      "Exerciții și simulări",
    ],
  },
];
