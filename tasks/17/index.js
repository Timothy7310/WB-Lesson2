const searchForm = document.querySelector("#search-form");
const searchInput = document.querySelector("#search");
const showResultButton = document.querySelector("#show-result");
const resultList = document.querySelector("#search-result");

const getData = async (query) => {
  const url =
    "https://suggestions.dadata.ru/suggestions/api/4_1/rs/suggest/address";
  const token = "ba33e8f119cb415dd5f90e682966c0b449b8a987";
  const options = {
    method: "POST",
    mode: "cors",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      Authorization: `Token ${token}`,
    },
    body: JSON.stringify({ query: query }),
  };

  const response = await fetch(url, options);
  const addresses = await response.json();

  return addresses.suggestions;
};

const createCards = (addresses) => {
  showResultButton.textContent = "Закрыть";
  showResultButton.setAttribute("data-type", "close");
  if (addresses.length === 0) {
    resultList.innerHTML = `<li class="search__result-item">Нет результатов</li>`;
    return;
  }
  resultList.classList.add("search__result--active");
  let result = "";

  addresses.forEach((address) => {
    result += `<li class="search__result-item">
        <button class="search__result-item-button">${address.value}</button>
    </li>`;
  });

  resultList.innerHTML = result;
};

searchForm.addEventListener("submit", async (e) => {
  e.preventDefault();
  const query = searchInput.value;

  const info = await getData(query);
  createCards(info);
});

showResultButton.addEventListener("click", (e) => {
  const type = showResultButton.getAttribute("data-type");
  if (type === "open") {
    showResultButton.textContent = "Закрыть";
    showResultButton.setAttribute("data-type", "close");
    resultList.classList.add("search__result--active");
  } else if (type === "close") {
    showResultButton.textContent = "Открыть";
    showResultButton.setAttribute("data-type", "open");
    resultList.classList.remove("search__result--active");
  }
});

resultList.addEventListener("click", (e) => {
  const { target } = e;

  if (target.closest(".search__result-item-button")) {
    const element = target.closest(".search__result-item-button");
    const allButton = document.querySelectorAll(".search__result-item-button");
    allButton.forEach((btn) => btn.classList.remove("active"));

    element.classList.add("active");
  }
});
