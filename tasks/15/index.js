const asyncFunction = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const users = await response.json();
  return users;
};

// Пример
(async () => {
  console.log(await asyncFunction());
})();
