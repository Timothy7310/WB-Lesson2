const createHTMLElement = (rootSelector, tag, css) => {
  const root = document.querySelector(rootSelector);
  let element = "";
  const alphabetSingleTags = [
    "area",
    "base",
    "basefont",
    "bgsound",
    "br",
    "col",
    "command",
    "embed",
    "hr",
    "img",
    "input",
    "isindex",
    "keygen",
    "link",
    "meta",
    "param",
    "source",
    "track",
    "wbr",
  ];

  if (alphabetSingleTags.includes(tag)) {
    element += `<${tag} style="${css}">`;
  } else {
    console.log("test");
    element += `<${tag} style="${css}"></${tag}>`;
  }
  root.innerHTML = element;
};

// Пример
createHTMLElement(
  "#root",
  "div",
  "width: 200px; height: 200px; background-color: palevioletred"
);
