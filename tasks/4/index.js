const pluralWord = (count, word) => {
  const pr = new Intl.PluralRules();
  const form = pr.select(count);

  const suffixes1 = new Map([
    ["zero", ""],
    ["one", "а"],
    ["few", "ы"],
    ["many", ""],
  ]);

  const suffixes2 = new Map([
    ["zero", "й"],
    ["one", "я"],
    ["few", "и"],
    ["many", "й"],
  ]);

  const suffixes3 = new Map([
    ["zero", "й"],
    ["one", "е"],
    ["few", "я"],
    ["many", "й"],
  ]);

  const suffixes4 = new Map([
    ["zero", ""],
    ["one", "о"],
    ["few", "а"],
    ["many", ""],
  ]);

  const suffixes5 = new Map([
    ["zero", "ей"],
    ["one", "ь"],
    ["few", "я"],
    ["many", "ей"],
  ]);

  const suffixes6 = new Map([
    ["zero", "гов"],
    ["one", "г"],
    ["few", "га"],
    ["many", "гов"],
  ]);

  // мужского рода и женского рода с окончаниями -а
  if (word.at(-1) === "а") {
    return `${count} ${word.slice(0, -1)}${suffixes1.get(form)}`;
  }

  // мужского рода и женского рода с окончаниями -я
  if (word.at(-1) === "я") {
    return `${count} ${word.slice(0, -1)}${suffixes2.get(form)}`;
  }

  //  среднего рода с окончанием -e
  if (word.at(-1) === "е") {
    return `${count} ${word.slice(0, -1)}${suffixes3.get(form)}`;
  }

  //  среднего рода с окончанием -о
  if (word.at(-1) === "о") {
    return `${count} ${word.slice(0, -1)}${suffixes4.get(form)}`;
  }

  //  мужского рода с окончанием -ь
  if (word.at(-1) === "ь") {
    return `${count} ${word.slice(0, -1)}${suffixes5.get(form)}`;
  }

  // мужской род с нулевым окончанием долг
  return `${count} ${word.slice(0, -1)}${suffixes6.get(form)}`;
};

// Пример
console.log(pluralWord(0, "страна"));
console.log(pluralWord(0, "авария"));
console.log(pluralWord(0, "сообщение"));
console.log(pluralWord(0, "яблоко"));
console.log(pluralWord(0, "пользователь"));
console.log(pluralWord(0, "долг"));

console.log("\n");

console.log(pluralWord(1, "страна"));
console.log(pluralWord(1, "авария"));
console.log(pluralWord(1, "сообщение"));
console.log(pluralWord(1, "яблоко"));
console.log(pluralWord(1, "пользователь"));
console.log(pluralWord(1, "долг"));

console.log("\n");

console.log(pluralWord(2, "страна"));
console.log(pluralWord(2, "авария"));
console.log(pluralWord(2, "сообщение"));
console.log(pluralWord(2, "яблоко"));
console.log(pluralWord(2, "пользователь"));
console.log(pluralWord(2, "долг"));

console.log("\n");

console.log(pluralWord(5, "страна"));
console.log(pluralWord(5, "авария"));
console.log(pluralWord(5, "сообщение"));
console.log(pluralWord(5, "яблоко"));
console.log(pluralWord(5, "пользователь"));
console.log(pluralWord(5, "долг"));
