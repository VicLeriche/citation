document.querySelector("#generate").addEventListener("click", () => {
  generate();
});

generate = () => {
  let quotes = {
    "- frani bizi": `"L' èspoir est un risque a courir sans être surpris."`,
    "- Robert Greene": `"Le changement peut faire peur, mais il est aussi rafraîchissant, voire exaltant."`,
    "- Adonis": `"L'échec fait partie intégrante de notre réussite. L'échec, c'est l'envers de la réussite."`,
    "- Victor Hugo": `"Vivre est une chanson dont mourir est le refrain."`,
    "- Martin Fowler": `"N’importe quel idiot peut écrire du code qu'un ordinateur peut comprendre. Les bons programmeurs écrivent du code que les humains peuvent comprendre."`,
    "- Frederick Brooks": `"Ajouter des personnes à un projet en retard accroît son retard."`,
    "- Jesus": `"Ce que vous voulez que les hommes fassent pour vous, faites-le de même pour eux."`
  };
  let authors = Object.keys(quotes);
  let author = authors[Math.floor(Math.random() * authors.length)];
  let quote = quotes[author]
  document.querySelector("#quote").textContent = quote;
  document.querySelector("#author").textContent = author;

}