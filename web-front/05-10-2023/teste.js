let fruits = ["morango", "banana", "mamão", "pera"];

if (fruits.includes("abacaxi")) {
  console.log(`A string "abacaxi" existe no array fruits.`);
} else if (fruits.includes("pera")) {
  console.log(`A string "pera" existe no array fruits.`);
} else {
  console.log(`Nem pera nem abacaxi existem no array "fruits".`);
}


const age = 65;

if (age <= 7 || age >= 65) {
  console.log(`Para você, a entrada é grátis!`);
} else {
  console.log(`A entrada é R$ 30,00.`);
}