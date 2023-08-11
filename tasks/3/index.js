const mathX = () => {
  const getFibonachiNumber = (number) => {
    if (number <= 1) {
      return number;
    }
    let numberArr = [...Array.from(Array(number), (_, index) => index), number];

    for (let i = 2; i < numberArr.length; i += 1) {
      numberArr[i] = numberArr[i - 1] + numberArr[i - 2];
    }

    return numberArr[number];
  };

  const getAllFibonachiNumbers = (number) => {
    return Array.from(Array(number), (_, index) => index).map((number) =>
      getFibonachiNumber(number)
    );
  };

  const isPrime = (number) => {
    for (let i = 2; i < number; i += 1) {
      if (number % i === 0) {
        return false;
      }
    }
    return number > 1;
  };

  const getAllPrimeNumbers = (number) => {
    return Array.from(Array(number), (_, index) => index + 1).filter((number) =>
      isPrime(number)
    );
  };

  return {
    isPrime,
    getAllPrimeNumbers,
    getFibonachiNumber,
    getAllFibonachiNumbers,
  };
};

// Пример
const some = mathX();

console.log(some.getFibonachiNumber(6), "getFibonachiNumber(6)");
console.log(some.getAllFibonachiNumbers(10), "getAllFibonachiNumbers(10)");

console.log(some.isPrime(6), "isPrime(6)");
console.log(some.isPrime(3), "isPrime(3)");
console.log(some.getAllPrimeNumbers(28), "getAllPrimeNumbers(28)");
