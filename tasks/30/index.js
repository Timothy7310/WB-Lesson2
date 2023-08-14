const form = document.querySelector("#form");

const createCard = (name, year, posterSrc) => {
  const cardRoot = document.querySelector(".list");
  const card = document.createElement("li");
  card.classList.add("item");

  card.innerHTML = `
    <img src="${posterSrc}" alt="" class="item__poster" />
    <span class="item__name">${name}</span>
    <span class="item__year">${year} г.</span>
    `;

  cardRoot.append(card);
};

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const inputsValue = [...form.querySelectorAll("input")].map((x) => x.value);

  if (inputsValue.every((x) => x !== "")) {
    const [name, year] = inputsValue;
    const poster = document.querySelector('input[name="poster"]').files[0];
    const posterSrc = URL.createObjectURL(poster);
    createCard(name, year, posterSrc);
    return;
  }
  alert("Нужно заполнить все инпуты");
});
