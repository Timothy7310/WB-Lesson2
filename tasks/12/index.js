const book = {
  name: "Злые самаритяне",
  author: "Ха-Джун Чанг",
  yearOfPublish: 2018,
  getName() {
    return this.name;
  },
  setName(value) {
    this.name = value;
  },
  getAuthor() {
    return this.author;
  },
  setAuthor(value) {
    this.author = value;
  },
  getYearOfPublish() {
    return this.yearOfPublish;
  },
  setYearOfPublish(value) {
    this.yearOfPublish = value;
  },
};

// Пример
console.log("Название книги: ", book.getName());
console.log("Автор: ", book.getAuthor());
console.log("Год издания: ", book.getYearOfPublish());

book.setName("Грокаем алгоритмы");
book.setAuthor("Адитья Бхаргава");
book.setYearOfPublish(2017);

console.log("Название книги: ", book.getName());
console.log("Автор: ", book.getAuthor());
console.log("Год издания: ", book.getYearOfPublish());
