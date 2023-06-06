import type IFilme from "../model/IFilme";

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


import type ISerie from "../model/ISerie";

export let series: ISerie[] = [
  {
    nome: "The Mandalorian",
    //duracao: "2h 4m",
    classificacao: 8.5,
    cartaz: "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/eU1i6eHXlzMOlEq0ku1Rzq7Y4wA.jpg",
    generos: ["Sci-Fi", "Fantasy", "Action" ,"Adventure", "Drama"],
    pagina: "/TheMandalorian",
    favorito: false,
    description: "Bounty hunting is a complicated profession.",
    overview: "After the fall of the Galactic Empire, lawlessness has spread throughout the galaxy. A lone gunfighter makes his way through the outer reaches, earning his keep as a bounty hunter."
  },
  {
    nome: "The Last of Us",
    duracao: "59m",
    classificacao: 8.7,
    cartaz: "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/aUQKIpZZ31KWbpdHMCmaV76u78T.jpg",
    generos: ["Drama"],
    description: "When you're lost in the darkness, look for the light.",
    favorito: false,
    pagina: "/TheLastOfUs",
    overview: "Twenty years after modern civilization has been destroyed, Joel, a hardened survivor, is hired to smuggle Ellie, a 14-year-old girl, out of an oppressive quarantine zone. What starts as a small job soon becomes a brutal, heartbreaking journey, as they both must traverse the United States and depend on each other for survival."
  },
  {
    nome: "Wednesday",
    classificacao: 8.6,
    cartaz: "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/9PFonBhy4cQy7Jz20NpMygczOkv.jpg",
    generos: ["Sci-Fi", "Fantasy", "Mystery", "Comedy" ],
    description: "None",
    favorito: false,
    pagina: "/Wednesday",
    overview: "Wednesday Addams is sent to Nevermore Academy, a bizarre boarding school where she attempts to master her psychic powers, stop a monstrous killing spree of the town citizens, and solve the supernatural mystery that affected her family 25 years ago — all while navigating her new relationships."
  }
];

import type IAtores from "../model/IAtores";

export let atores: IAtores[] = [
  {
    nome: "Harrison Ford",
    genero: true,
    cidade: "Chicago, Illinois, USA",
    obras: ["Star Wars","Indiana Jones"],
    foto: "https://www.themoviedb.org/t/p/w300_and_h450_bestv2/ActhM39LTxgx3tnJv3s5nM6hGD1.jpg",
    biografia: "Legendary Hollywood Icon Harrison Ford was born on July 13, 1942 in Chicago, Illinois. His family history includes a strong lineage of actors, radio personalities, and models. Harrison attended public high school in Park Ridge, Illinois where he was a member of the school Radio Station WMTH. Harrison worked as the lead voice for sports reporting at WMTH for several years. Acting wasn’t a major interest to Ford until his junior year at Ripon College when he first took an acting class. Harrison Ford’s career started in 1964 when he travelled to California in search of a voice-over job. He never received that position, but instead signed a contract with Columbia Pictures where he earned $150 weekly to play small fill in roles in various films.\nThrough the 60’s Harrison worked on several TV shows including Gunsmoke, Ironside, Kung Fu, and American Style. It wasn’t until 1967 that Harrison received his first credited role in the Western film, A Time for Killing. Dissatisfied with the meager roles he was being offered, Ford took a hiatus from acting to work as a self-employed carpenter. This seemingly odd diversion turned out to be a blessing in disguise for Harrison’s acting career when he was soon hired by famous film producer George Lucas. This was a turning point in Harrison’s life that led to him be casted in milestone roles such as Hans Solo and Indiana Jones.\nSince his most famous roles in the Star Wars Trilogy and Raiders of the Lost Ark, Harrison Ford has starred in over 40 films. Many criticize his recent work, saying his performances have been lackluster leading to commercially disappointing films. Harrison has always worked hard to protect his off-screen private life, keeping details about his children and marriages quite. He has a total of five children including one recent adoption with third and current wife Calista Flockhart. In addition to acting Harrison Ford is passionate about environmental conservation, aviation, and archeology.", 
    nascimento: "1942-07-13",
    favorito: false
  },
  {
    nome: "Samuel L. Jackson",
    genero: true,
    cidade: "Washington, District of Columbia, USA",
    obras: ["Star Wars","Spider-Man:Far From Home"],
    foto: "https://www.themoviedb.org/t/p/w300_and_h450_bestv2/nCJJ3NVksYNxIzEHcyC1XziwPVj.jpg",
    biografia: "Samuel Leroy Jackson (born December 21, 1948) is an American actor and producer. One of the most widely recognized actors of his generation, the films in which he has appeared have collectively grossed over $27 billion worldwide, making him the second highest-grossing actor of all time. The Academy of Motion Picture Arts and Sciences gave him an Academy Honorary Award in 2022 as A cultural icon whose dynamic work has resonated across genres and generations and audiences worldwide.\nJackson started his career on stage making his professional theatre debut in Mother Courage and her Children in 1980 at The Public Theatre. From 1981 to 1983 he originated the role of Private Louis Henderson in A Soldier's Play Off-Broadway. He also originated the role of Boy Willie in August Wilson's The Piano Lesson in 1987 at the Yale Repertory Theatre. He returned to the play in the 2022 Broadway revival playing Doaker Charles. Jackson early film roles include Coming to America (1988), Goodfellas (1990), Patriot Games (1992), Juice (1992), True Romance (1993), and Jurassic Park (1993), Menace II Society (1993), and Fresh (1994). His collaborations with Spike Lee led to greater prominence with films such as School Daze (1988), Do the Right Thing (1989), Mo' Better Blues (1990), Jungle Fever (1991), Oldboy (2013), and Chi-Raq (2015).\nJackson's breakout role was in Quentin Tarantino's Pulp Fiction (1994) which earned him a BAFTA Award win and a nomination for the Academy Award for Best Supporting Actor. He further collaborated with Tarantino, acting in Jackie Brown (1997), Django Unchained (2012), and The Hateful Eight (2015). He's known for having appeared in a number of big-budget films, including Die Hard with a Vengeance (1995), A Time to Kill (1996), The Long Kiss Goodnight (1996), The Negotiator (1997), Deep Blue Sea (1999), Unbreakable (2000), Shaft (2000) and its reboot (2019), XXX (2002), S.W.A.T. (2003), Coach Carter (2005), Snakes on a Plane (2006), Kingsman: The Secret Service (2014), Kong: Skull Island (2017), and Glass (2019).\nHe also gained widespread recognition as the Jedi Mace Windu in the Star Wars prequel trilogy (1999–2005), later voicing the role in the animated film Star Wars: The Clone Wars (2008) and the video game Lego Star Wars: The Clone Wars (2011). With his permission, his likeness was used for the Ultimate version of the Marvel Comics character Nick Fury; he subsequently played Fury in 11 Marvel Cinematic Universe films, beginning with a cameo appearance in Iron Man (2008), as well as guest-starring in the television series Agents of S.H.I.E.L.D. He will reprise this role in the upcoming Disney+ series Secret Invasion, which is set to premiere on June 21, 2023. Jackson has provided his voice for several animated films, documentaries, television series, and video games, including Lucius Best / Frozone in the Pixar films The Incredibles (2004) and Incredibles 2 (2018).", 
    nascimento: "1948-12-21",
     favorito: false
  },
  {
    nome: "Billy Dee Williams",
    genero: true,
    cidade: "New York City, New York, USA",
    obras: ["Star Wars","Batman","Mission: Impossible" ],
    foto: "https://www.themoviedb.org/t/p/w300_and_h450_bestv2/dCiHLiCapPuRwKkM1ytVZ7PwYQY.jpg",
    biografia: "William December 'Billy Dee' Williams Jr. (born April 6, 1937) is an American actor, voice actor, and artist. He is best known as Lando Calrissian in the Star Wars franchise, first in the early 1980s, and nearly forty years later in The Rise of Skywalker (2019), marking one of the longest intervals between onscreen portrayals of a character by the same actor in American film history.\nDescription above from the Wikipedia article Billy Dee Williams, licensed under CC-BY-SA, full list of contributors on Wikipedia.",
    nascimento: "1937-04-06",
    favorito: false
  }

]