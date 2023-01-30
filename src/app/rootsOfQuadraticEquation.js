const prompt = require("prompt-sync")();

const rootsOfQuadraticEquation = () => {
  let root1 = null;
  let root2 = null;

  // Liczby uzupełniane po włączeniu programu
  let a = prompt("Wprowadź wartość A: ");
  let b = prompt("Wprowadź wartość B: ");
  let c = prompt("Wprowadź wartość C: ");

  // Obliczanie delty
  let delta = b * b - 4 * a * c;

  // Sprawdzenie pierwiastków
  if (delta > 0) {
    root1 = (-b + Math.sqrt(delta)) / (2 * a);
    root2 = (-b - Math.sqrt(delta)) / (2 * a);

    console.log(`Pierwiastki równania kwadratowego to ${root1} i ${root2}`);
  }
  // Kiedy delta jest równa 0
  else if (delta == 0) {
    root1 = root2 = -b / (2 * a);

    console.log(`Pierwiastki równania kwadratowego to ${root1} i ${root2}`);
  }
  // Pierwiastki zespolone
  else {
    let realPart = (-b / (2 * a)).toFixed(2);
    let imagPart = (Math.sqrt(-delta) / (2 * a)).toFixed(2);

    console.log(
      `Pierwiastki równania kwadratowego to ${realPart} + ${imagPart}i i ${realPart} - ${imagPart}i`
    );
  }
};

rootsOfQuadraticEquation();
