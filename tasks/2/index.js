const isNumberWierd = (number) => {
  let sum = 0;
  for (let i = 1; i < number; i += 1) {
    if (number % i === 0) {
      sum += i;
    }
  }
  return sum === number;
};

const isNumberWierdWithOneLine = (number) => Array.from(Array(number - 1), (_, index) => index + 1).reduce((acc, x) => (number % x === 0 ? acc + x : acc), 0) === number;

// Пример
console.log(isNumberWierd(6), "isNumberWierd с 6");
console.log(isNumberWierd(5), "isNumberWierd с 5");

console.log(isNumberWierdWithOneLine(6), "isNumberWierdWithOneLine с 6");
console.log(isNumberWierdWithOneLine(5), "isNumberWierdWithOneLine с 5");
