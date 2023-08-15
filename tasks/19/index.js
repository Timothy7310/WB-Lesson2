const showMaxSizeOfLS = () => {
  let value = "1".repeat(10000);
  for (let i = 0; i < Infinity; i += 1) {
    try {
      localStorage.setItem("--test--", value);
      value += "1".repeat(10000);
    } catch (e) {
      const totalLength = localStorage.getItem("--test--").length;
      const total = Math.round(totalLength / 1024);
      const root = document.querySelector("#root");
      root.innerHTML = `Максимальный размер LocalStorage: <span>${total} kB</span>`;
      return;
    }
  }

  localStorage.removeItem("--test--");
};

showMaxSizeOfLS();
