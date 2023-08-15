import moment from "moment";

export const awesomeDateFunction = (...args) => {
  return moment(...args);
};

// Пример
const today = awesomeDateFunction().format("dddd");
const time = new Date().getTime() - 86400000;
const yesterday = awesomeDateFunction(time).format("dddd");
console.log(today, yesterday);
