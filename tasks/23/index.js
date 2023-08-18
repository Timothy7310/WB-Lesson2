const generateWrite = () => {
  document.write(document.querySelector("#test").innerHTML);
};

const showCount = () => {
  const count = document.querySelectorAll(".test").length;
  const root = document.querySelector("#count-num");

  root.textContent = count;
};
