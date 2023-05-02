import type { IFilme } from "../model/IFilme";

export let filmes: IFilme[] = [
  {
    nome: "Mortal Kombat (2021)",
    lancamento: "15/04/2021",
    duracao: "1h50m",
    classificacao: 9,
    cartaz:
      "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/w8BVC3qrCWCiTHRz4Rft12dtQF0.jpg",
    generos: ["Ação", "Fantasia", "Aventura"],
    pagina: "/mortal-kombat",
    favorito: false,
  },
  {
    nome: "Vingadores: Ultimato (2019)",
    lancamento: "25/04/2019 (BR)",
    duracao: "3h01m",
    classificacao: 6,
    cartaz:
      "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/q6725aR8Zs4IwGMXzZT8aC8lh41.jpg",
    generos: ["Aventura", "Ficção científica", "Ação"],
    pagina: "/avengers",
    favorito: false,
  },
  {
    nome: "Tudo em Todo o Lugar ao Mesmo Tempo",
    lancamento: "23/06/2022",
    duracao: "2h 19m",
    classificacao: 7.8,
    cartaz:
      "https://www.themoviedb.org/t/p/w300_and_h450_bestv2/bW21kbvqAt2kMGlaU8qY86C8kQE.jpg",
    generos: ["Aventura", "Ação", "Sci-Fi"],
    pagina: "everything-everywhere-all-at-once",
    favorito: false,
  },
  {
    nome: "Vingadores: Guerra Infinita",
    lancamento: "26/04/2018",
    duracao: "3h 2m",
    classificacao: 8.3,
    cartaz:
      "https://www.themoviedb.org/t/p/w300_and_h450_bestv2/rkHe0BfOo1f5N2q6rxgdYac7Zf6.jpg",
    generos: ["Aventura", "Ação", "Sci-Fi"],
    pagina: "/avengers-infinite-war",
    favorito: false,
  },
  {
    nome: "Star Wars V",
    lancamento: "21/05/1980",
    duracao: "2h 4m",
    classificacao: 8.4,
    cartaz:
      "https://www.themoviedb.org/t/p/w300_and_h450_bestv2/dLGT8b4Ut10z44uYLaip4QiwKta.jpg",
    generos: ["Ação", "Sci-Fi"],
    pagina: "/starwarsV",
    favorito: false,
  },
];
