const sortUsers = (users) =>
  users.sort((x, y) =>
    x.age !== y.age ? x.age - y.age : x.name.localeCompare(y.name)
  );

// Пример
const data = [
  {
    name: "B. John",
    age: "25",
  },
  {
    name: "A. Sally",
    age: "25",
  },
  {
    name: "David",
    age: "65",
  },
  {
    name: "Peter",
    age: "35",
  },
  {
    name: "Sam",
    age: "15",
  },
];
console.log(sortUsers(data));
