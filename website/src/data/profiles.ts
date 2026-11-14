export interface Topic {
  id: string;
  title: string;
  description: string;
  difficulty: "Începător" | "Mediu" | "Avansat";
  concept: string;
  cppExample: string;
  tips: string[];
}

export interface QuizQuestion {
  id: string;
  question: string;
  options: string[];
  correctAnswer: string;
  explanation: string;
}

export interface StudyPlanItem {
  week: string;
  focus: string;
  tasks: string[];
}

export interface ResourceItem {
  title: string;
  description: string;
  type: "Teorie" | "Exercițiu" | "Simulare" | "Resursă";
}

export interface Profile {
  name: string;
  description: string;
  href: string;
  highlights: string[];
  topics: Topic[];
  quiz: QuizQuestion[];
  studyPlan: StudyPlanItem[];
  resources: ResourceItem[];
}

export const profiles: Profile[] = [
  {
    name: "Mate-Info",
    description:
      "Algoritmi, structuri de date, probleme practice și simulări pentru pregătirea examenului la profilul matematică-informatică.",
    href: "#mate-info",
    highlights: ["Algoritmi", "Pseudocod", "C++", "Grafuri", "Exerciții"],
    topics: [
      {
        id: "algoritmi-pseudocod",
        title: "Algoritmi și pseudocod",
        description: "Noțiuni fundamentale pentru a descrie clar o soluție și a analiza pașii unei rezolvări.",
        difficulty: "Începător",
        concept: "Un algoritm este o succesiune ordonată de pași care rezolvă o problemă într-un număr finit de etape.",
        cppExample: "int n = 10;\nint suma = 0;\nfor (int i = 1; i <= n; ++i) {\n    suma += i;\n}\ncout << suma;",
        tips: ["Scrie clar intrarea și ieșirea.", "Verifică condițiile de oprire.", "Testează pe exemple mici."],
      },
      {
        id: "structura-liniara",
        title: "Structură liniară",
        description: "Află cum funcționează instrucțiunile secvențiale, condiționale și repetitive în C++.",
        difficulty: "Începător",
        concept: "În programare, structura liniară execută instrucțiuni în ordine, fără ramificare sau repetiție implicită.",
        cppExample: "int a = 5, b = 7;\nint suma = a + b;\ncout << suma;",
        tips: ["Folosirea variabilelor clare reduce erorile.", "Verifică întotdeauna tipurile."],
      },
      {
        id: "vectori-siruri",
        title: "Vectori și șiruri",
        description: "Organizează datele pentru acces rapid și prelucrare eficientă.",
        difficulty: "Mediu",
        concept: "Vectorii permit accesul direct la elemente prin indice, iar șirurile de caractere sunt folosite pentru text.",
        cppExample: "int v[5] = {2, 4, 6, 8, 10};\nint suma = 0;\nfor (int i = 0; i < 5; ++i) suma += v[i];",
        tips: ["Atenție la indicele 0.", "Folosește bucle pentru parcurgere."],
      },
      {
        id: "subprograme",
        title: "Subprograme",
        description: "Împarte problema în funcții și proceduri pentru claritate și reutilizare.",
        difficulty: "Mediu",
        concept: "O funcție are un scop bine definit, primește parametri și returnează un rezultat sau execută o acțiune.",
        cppExample: "int suma(int a, int b) {\n    return a + b;\n}\ncout << suma(3, 4);",
        tips: ["Rezolvă partea mică înainte de ansamblu.", "Păstrează funcțiile simple și logice."],
      },
      {
        id: "recursivitate",
        title: "Recursivitate",
        description: "Află cum funcțiile se autoapelează și cum să gândești corect în termeni de caz de bază și recurență.",
        difficulty: "Avansat",
        concept: "Recursivitatea împarte o problemă în aceeași problemă mai mică, până când ajunge la un caz trivial.",
        cppExample: "int fact(int n) {\n    if (n == 0) return 1;\n    return n * fact(n - 1);\n}",
        tips: ["Definirea cazului de bază este esențială.", "Verifică dacă apelurile recursive se apropie de soluția finală."],
      },
      {
        id: "grafuri-arbori",
        title: "Grafuri și arbori",
        description: "Studiază relațiile dintre noduri și structura de date orientată pentru probleme complexe.",
        difficulty: "Avansat",
        concept: "Un graf reprezintă relații între elemente, iar un arbore este un graf fără cicluri și cu o structură ierarhică.",
        cppExample: "vector<int> vec[6];\nvec[1].push_back(2);\nvec[1].push_back(3);",
        tips: ["Păstrează claritatea între nod, muchie și parcurgere.", "Verifică dacă grafurile sunt orientate sau neorientate."],
      },
    ],
    quiz: [
      {
        id: "quiz-1",
        question: "Ce este un algoritm eficient?",
        options: [
          "Un algoritm care rulează fără erori",
          "Un algoritm care folosește cât mai puțin timp și resurse",
          "Un algoritm fără condiții",
          "Un algoritm cu doar o singură variabilă",
        ],
        correctAnswer: "Un algoritm care folosește cât mai puțin timp și resurse",
        explanation: "Eficiența se referă la timpul de execuție și resursele folosite pentru a obține rezultatul.",
      },
      {
        id: "quiz-2",
        question: "Care este scopul unei funcții în C++?",
        options: [
          "Să descrie o structură de date",
          "Să organizeze codul și să îi ofere o responsabilitate clară",
          "Să înlocuiască instrucțiunile de citire",
          "Să genereze un fișier text",
        ],
        correctAnswer: "Să organizeze codul și să îi ofere o responsabilitate clară",
        explanation: "Funcțiile permit reutilizarea codului, claritate și împărțirea problemelor în unități mai mici.",
      },
    ],
    studyPlan: [
      {
        week: "Săptămâna 1",
        focus: "Baza și algoritmi elementari",
        tasks: ["Revizuie structura de program și variabilele.", "Exersează suma, produsul și media.", "Rezolvă 3 exerciții scurte."],
      },
      {
        week: "Săptămâna 2",
        focus: "Vectori, șiruri și funcții",
        tasks: ["Lucrează pe vectori și siruri de caractere.", "Rezolvă probleme cu funcții.", "Verifică 1 simulare scurtă."],
      },
      {
        week: "Săptămâna 3",
        focus: "Recursivitate și grafuri",
        tasks: ["Înțelege recursivitatea pas cu pas.", "Studiază arborii și grafurile simple.", "Fă o simulare completă."],
      },
    ],
    resources: [
      { title: "Teorie: algoritmi și pseudocod", description: "Pași de rezolvare și criterii de claritate", type: "Teorie" },
      { title: "Exercițiu: vectori", description: "Determinarea minimului, maximului și sumei", type: "Exercițiu" },
      { title: "Simulare scurtă", description: "Exersare pentru partea de scriere a codului", type: "Simulare" },
    ],
  },
  {
    name: "Științe ale naturii",
    description:
      "Noțiuni fundamentale, exerciții practice și instrumente de recapitulare pentru profilul Științe ale naturii.",
    href: "#stiinte-ale-naturii",
    highlights: ["Programare", "Divizibilitate", "Fișiere", "Exerciții", "Rezolvare"],
    topics: [
      {
        id: "programa-oficiala",
        title: "Programa oficială",
        description: "Recapitulare după competențe și obiectivele din curriculum.",
        difficulty: "Începător",
        concept: "Programa stabilește capitolele care trebuie stăpânite pentru a rezolva cerințele examinărilor.",
        cppExample: "int x = 10;\ncout << x;",
        tips: ["Fii atent la fiecare capitol.", "Revizuie elementele de bază înainte de simulări."],
      },
      {
        id: "algoritmi-elementari",
        title: "Algoritmi elementari",
        description: "Operații de bază: sumă, produs, divizibilitate, verificare a condițiilor.",
        difficulty: "Începător",
        concept: "Algoritmii elementari sunt soluții simple, clare și eficiente pentru probleme fundamentale.",
        cppExample: "int a = 9, b = 3;\nif (a % b == 0) cout << \"Divizibil\";",
        tips: ["Testarea pe date mici este foarte utilă.", "Verifică explicit cazurile limită."],
      },
      {
        id: "fisiere-text",
        title: "Fișiere text",
        description: "Citește și scrie date din fișiere pentru problemelor practice.",
        difficulty: "Mediu",
        concept: "Fișierele text permit salvarea și prelucrarea datelor de mai multe ori într-un flux logic.",
        cppExample: "ofstream g(\"date.txt\");\ng << \"Bacalaureat\";",
        tips: ["Nu uita să închizi fișierul.", "Verifică dacă fișierul s-a deschis corect."],
      },
      {
        id: "tipuri-structurate",
        title: "Tipuri structurate de date",
        description: "Înregistrează mai multe informații într-o singură structură logicală.",
        difficulty: "Mediu",
        concept: "O structură permite gruparea datelor care au sens împreună, cum ar fi un elev sau un produs.",
        cppExample: "struct Elev {\n    string nume;\n    int nota;\n};",
        tips: ["Structura se folosește pentru date legate între ele.", "Alege nume descriptive."],
      },
      {
        id: "subprograme-stiinte",
        title: "Subprograme",
        description: "Reutilizează logică repetitivă în funcții și proceduri bine definite.",
        difficulty: "Mediu",
        concept: "Subprogramele fac codul mai ușor de citit și de testat, și reduc redundanța.",
        cppExample: "int maxim(int a, int b) {\n    return a > b ? a : b;\n}",
        tips: ["Păstrează funcțiile simple.", "Verifică efectul fiecărui parametru."],
      },
      {
        id: "simulari-bac",
        title: "Simulări BAC",
        description: "Exersează subiectele de tip examen pentru a construi ritmul și încrederea necesare.",
        difficulty: "Avansat",
        concept: "Simulările ajută la exersarea timpului, clarității și organizării soluțiilor în condiții reale.",
        cppExample: "for (int i = 0; i < 10; ++i) {\n    cout << i << \" \";\n}",
        tips: ["Împarte timpul pe subiecte.", "Nu rata verificarea finală a codului."],
      },
    ],
    quiz: [
      {
        id: "quiz-s1",
        question: "Ce reprezintă un fișier text?",
        options: [
          "O structură de date grafică",
          "Un set de informații stocate în formă textuală",
          "O funcție din bibliotecă",
          "Un algoritm de sortare",
        ],
        correctAnswer: "Un set de informații stocate în formă textuală",
        explanation: "Fișierele text păstrează date sub formă de caractere și pot fi citite de către program.",
      },
      {
        id: "quiz-s2",
        question: "Care este rolul unei structuri?",
        options: [
          "De a separa codul în file",
          "De a grupa datele care sunt legate între ele",
          "De a crea fișiere", 
          "De a elimina erorile de sintaxă",
        ],
        correctAnswer: "De a grupa datele care sunt legate între ele",
        explanation: "Structurile permit organizarea mai clară a informațiilor dintr-un program.",
      },
    ],
    studyPlan: [
      {
        week: "Săptămâna 1",
        focus: "Noțiuni fundamentale și algoritmi elementari",
        tasks: ["Repetă variabilele și operatorii.", "Lucrează pe probleme simple de divizibilitate.", "Parcurge 2 subiecte scurte."],
      },
      {
        week: "Săptămâna 2",
        focus: "Funcții și structuri de date",
        tasks: ["Rezolvă exerciții cu funcții.", "Învață structuri și vectori.", "Revizuiește un set de exemple."],
      },
      {
        week: "Săptămâna 3",
        focus: "Fișiere și simulări",
        tasks: ["Exersează citiri și scrieri în fișiere.", "Fă o simulare de tip BAC.", "Corectează greșelile frecvente."],
      },
    ],
    resources: [
      { title: "Programă oficială recapitulată", description: "Lista temelor-cheie pentru examen", type: "Teorie" },
      { title: "Exerciții de fișiere text", description: "Aplicarea citirii și scrierii datelor", type: "Exercițiu" },
      { title: "Model de simulare BAC", description: "Exersare cu subiecte tipice și verificare rapidă", type: "Simulare" },
    ],
  },
];
