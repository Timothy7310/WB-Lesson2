const input = document.querySelector("#password");
const inputProgress = document.querySelector("#progress");
const passwordButton = document.querySelector("#password-button");
const passwordButtonIcon = document.querySelector("#password-button-icon");
const hint = document.querySelector("#hint");
const hintLength = document.querySelector(".hint__item--length");
const hintSymbols = document.querySelector(".hint__item--symbols");
const hintNumbers = document.querySelector(".hint__item--numbers");
const hintRegister = document.querySelector(".hint__item--register");

input.addEventListener("input", (e) => {
  const value = e.target.value;

  const isLength = value.length >= 10;
  const isSymbols = /(?=.*[!@#$%^&*])/gm.test(value);
  const isNumbers = /\d/g.test(value);
  const isRegister = value.toLowerCase() !== value;

  const data = [
    {
      bool: isLength,
      node: hintLength,
    },
    {
      bool: isSymbols,
      node: hintSymbols,
    },
    {
      bool: isNumbers,
      node: hintNumbers,
    },
    {
      bool: isRegister,
      node: hintRegister,
    },
  ];

  inputProgress.style.width = `${value.length * 5}%`;

  if (value.length >= 1) {
    hint.classList.add("hint--active");
  } else {
    hint.classList.remove("hint--active");
  }

  data.forEach((x) => {
    x.bool
      ? x.node.classList.add("hint__item--includes")
      : x.node.classList.remove("hint__item--includes");
  });

  if (isLength && (isSymbols || isNumbers || isRegister)) {
    inputProgress.setAttribute("data-level", "normal");
  } else {
    inputProgress.setAttribute("data-level", "bad");
  }

  if (data.map((x) => x.bool).every((x) => x)) {
    hint.classList.remove("hint--active");
    if (value.length >= 18) {
      inputProgress.setAttribute("data-level", "good");
    }
  }
});

passwordButton.addEventListener("click", () => {
  input.setAttribute("type", input.type === "text" ? "password" : "text");
  passwordButtonIcon.setAttribute(
    "src",
    input.type === "text" ? "./eye-close.svg" : "./eye-open.svg"
  );
  passwordButton.setAttribute(
    "aria-label",
    input.type === "text" ? "Закрыть пароль" : "Открыть пароль"
  );
});
