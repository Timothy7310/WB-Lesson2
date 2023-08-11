const pluralWord = (count, word) => {
  const pr = new Intl.PluralRules();
  const form = pr.select(count);

  const suffixes1 = new Map([
    ["zero", "й"],
    ["one", "е"],
    ["few", "я"],
    ["many", "й"],
  ]);

  const suffixes2 = new Map([
    ["zero", "ей"],
    ["one", "ь"],
    ["few", "я"],
    ["many", "ей"],
  ]);

  if (word.at(-1) === "е") {
    return `${count} ${word.slice(0, -1)}${suffixes1.get(form)}`;
  }

  if (word.at(-1) === "ь") {
    return `${count} ${word.slice(0, -1)}${suffixes2.get(form)}`;
  }
};

console.log(pluralWord(121, "конь"));
