import data from "./data.json" assert { type: "json" };

const getStringFromJSON = (json) => JSON.stringify(json);

// Пример
console.log(getStringFromJSON(data));
