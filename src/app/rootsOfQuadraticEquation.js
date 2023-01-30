const readline = require("readline-sync");

const rootsOfQuadraticEquation = (a, b, c) => {
  let root1 = null;
  let root2 = null;

  // Obliczanie delty
  let delta = b * b - 4 * a * c;

  // Sprawdzenie pierwiastków
  if (delta > 0) {
    root1 = ((-b + Math.sqrt(delta)) / (2 * a)).toFixed(2);
    root2 = ((-b - Math.sqrt(delta)) / (2 * a)).toFixed(2);

    console.log(
      `Pierwiastki równania kwadratowego to ${root1} i ${root2}`
    );
    return [
      Number(root1),
      Number(root2)
    ];
  }
  // Kiedy delta jest równa 0
  else if (delta == 0) {
    root1 = root2 = (-b / (2 * a)).toFixed(2);

    console.log(`Pierwiastek równania kwadratowego to ${root1}`);
    return Number(root1);
  }
  // Brak pierwiastków
  else {
    return "Brak pierwiastków";
  }
};

// Liczby uzupełniane po włączeniu programu
const runProgram = () => {
  let a = Number(readline.question("Podaj wartosc a: "));
  let b = Number(readline.question("Podaj wartosc b: "));
  let c = Number(readline.question("Podaj wartosc c: "));
  
  console.log(rootsOfQuadraticEquation(a, b, c));
}

// Aby uruchomić program manualnie - bez testów należy odkomentować poniższą linię i wpisać w terminalu npm start
// runProgram()

module.exports = rootsOfQuadraticEquation
