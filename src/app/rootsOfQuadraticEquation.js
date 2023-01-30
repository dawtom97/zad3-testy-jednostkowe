const readline = require("readline-sync");

const rootsOfQuadraticEquation = (a, b, c) => {
  let root1 = null;
  let root2 = null;

  if(typeof a !== "number" || typeof b !== "number" || typeof c !== "number") {
    return "Możesz podawać tylko liczby"
  }

  // Obliczanie delty
  let delta = b * b - 4 * a * c;

  // Sprawdzenie pierwiastków
  if (delta > 0) {
    root1 = (-b + Math.sqrt(delta)) / (2 * a);
    root2 = (-b - Math.sqrt(delta)) / (2 * a);

    console.log(
      `Pierwiastki równania kwadratowego to ${root1.toFixed(
        2
      )} i ${root2.toFixed(2)}`
    );
    return {
      root1,
      root2
    };
  }
  // Kiedy delta jest równa 0
  else if (delta == 0) {
    root1 = root2 = -b / (2 * a);

    console.log(`Pierwiastek równania kwadratowego to ${root1}`);
    return {
      root1,
      root2
    };
  }
  // Brak pierwiastków
  else {
    return "Brak pierwiastków";
  }
};

// Liczby uzupełniane po włączeniu programu
let a = Number(readline.question("Podaj wartosc a: "));
let b = Number(readline.question("Podaj wartosc b: "));
let c = Number(readline.question("Podaj wartosc c: "));

console.log(rootsOfQuadraticEquation(a, b, c));

module.exports = {
  a,
  b,
  c,
  rootsOfQuadraticEquation
};
