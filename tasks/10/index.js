const getJSONFromString = (json) => JSON.parse(json);

// Пример
const string =
  '[{"id":"1","name":"Jhone","age":"25"},{"id":"2","name":"Sally","age":"55"},{"id":"3","name":"David","age":"65"},{"id":"4","name":"Peter","age":"35"},{"id":"5","name":"Sam","age":"15"}]';

console.log(getJSONFromString(string));
