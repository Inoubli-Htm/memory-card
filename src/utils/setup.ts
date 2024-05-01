// Définition du symbole
const shuffleSymbol = Symbol("shuffle");

// Définition de l'interface pour la structure du tableau
interface CardArray extends Array<any> {
  [shuffleSymbol]?: boolean;
}

export const distrubCards = (arr: CardArray): CardArray => {
  if (!arr[shuffleSymbol]) {
    arr[shuffleSymbol] = true;
    let m = arr.length;
    while (m) {
      const i = Math.floor(Math.random() * m--);
      [arr[m], arr[i]] = [arr[i], arr[m]];
    }
  }
  return arr;
};
