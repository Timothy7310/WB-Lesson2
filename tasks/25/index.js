const createCard = (data) => {
  const html = `<tr>
  <td>${data.fname}</td>
  <td>${data.lname}</td>
  <td>${data.tel}</td>
  <td>${data.address}</td>
  <td>${data.city}</td>
  <td>${data.state}</td>
  <td>${data.zip}</td>
  </tr>`;

  return html;
};

const createCards = (users) => {
  let result = "";
  const root = document.querySelector(".tbody");
  users.slice(0, 50).forEach((user) => (result += createCard(user)));

  root.innerHTML = result;
};

const handleSortUsers = (users) => {
  const thead = document.querySelector("thead");

  thead.addEventListener("click", (e) => {
    const { target } = e;
    if (target.closest(".sort-desc")) {
      const elementDataset = target.closest(".sort-desc").dataset;
      const { type, field } = elementDataset;
      users.sort((x, y) => {
        if (type === "phone") {
          return (
            Number(y[field].replace(/s*[-()]+/g, "")) -
            Number(x[field].replace(/s*[-()]+/g, ""))
          );
        }

        if (type === "number") {
          return y[field] - x[field];
        }
        if (type === "string") {
          return x[field].localeCompare(y[field]);
        }
      });
    }

    if (target.closest(".sort-asc")) {
      const elementDataset = target.closest(".sort-asc").dataset;
      const { type, field } = elementDataset;
      users.sort((x, y) => {
        if (type === "phone") {
          return (
            Number(x[field].replace(/s*[-()]+/g, "")) -
            Number(y[field].replace(/s*[-()]+/g, ""))
          );
        }

        if (type === "number") {
          return x[field] - y[field];
        }
        if (type === "string") {
          return y[field].localeCompare(x[field]);
        }
      });
    }

    createCards(users);
  });
};

const createPagination = (users, perPage = 50, currentPage = 1) => {
  const root = document.querySelector(".pagination");
  let result = "";
  const totalItem = users.length;
  const maxPage = Math.ceil(totalItem / perPage);

  for (let i = 1; i <= maxPage; i += 1) {
    result += `
    <button class="pagination__button ${
      currentPage === i ? "pagination__button--active" : ""
    }" data-page="${i}">${i}</button>
    `;
  }

  root.innerHTML = result;
};

const getNewUsers = (users, currentPage = 1) => {
  const perPage = 50;
  const newUsers = users.slice(
    perPage * (currentPage - 1),
    perPage * currentPage
  );

  return newUsers;
};

const handlePagination = (users) => {
  const root = document.querySelector(".pagination");

  root.addEventListener("click", (e) => {
    const { target } = e;
    if (target.closest(".pagination__button")) {
      const element = target.closest(".pagination__button");
      const allBtn = document.querySelectorAll(".pagination__button");
      allBtn.forEach((btn) =>
        btn.classList.remove("pagination__button--active")
      );
      element.classList.add("pagination__button--active");
      const page = +element.dataset.page;
      createCards(getNewUsers(users, page));
    }
  });
};

document.addEventListener("DOMContentLoaded", async () => {
  const response = await fetch(
    "http://www.filltext.com/?rows=1000&fname=%7BfirstName%7D&lname=%7BlastName%7D&tel=%7Bphone%7Cformat%7D&address=%7BstreetAddress%7D&city=%7Bcity%7D&state=%7BusState%7Cabbr%7D&zip=%7Bzip%7D&pretty=true"
  );
  const users = await response.json();

  createCards(users);

  handleSortUsers(users);

  createPagination(users);

  handlePagination(users);
});
