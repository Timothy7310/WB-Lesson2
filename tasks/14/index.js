const getImage = (url) => {
  return new Promise((resolve, reject) => {
    let xhr = new XMLHttpRequest();
    xhr.open("GET", url);
    xhr.responseType = "json";
    xhr.send();
    xhr.onload = function () {
      if (xhr.status != 200) {
        reject(`Ошибка ${xhr.status}: ${xhr.statusText}`);
      } else {
        resolve(xhr.response.image);
      }
    };
  });
};

// Пример
const createCard = (url) => {
  const html = `<img src="${url}" alt=""/>`;
  document.querySelector("body").innerHTML = html;
};

getImage("https://rickandmortyapi.com/api/character/1")
  .then((res) => createCard(res))
  .catch((err) => console.log(err));
