const createHTMLElement = (rootSelector, tag, css) => {
  const root = document.querySelector(rootSelector);
  const element = document.createElement(tag);
  element.style.cssText = css;
  root.append(element);
};

// Пример
createHTMLElement(
  "body",
  "div",
  "width: 200px; height: 200px; background-color: tomato"
);
