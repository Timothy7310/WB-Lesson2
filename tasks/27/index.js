const showDOMElements = (node, cb) => {
  const children = node.children;

  for (let child of children) {
    cb(child);
    if (child.children) {
      showDOMElements(child, cb);
    }
  }
};

// Пример
const node = document.querySelector("body");
const showNode = (node) => console.log(node);
showDOMElements(node, showNode);
