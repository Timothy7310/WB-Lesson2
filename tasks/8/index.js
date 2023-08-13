const runAllFunc = (functions) => {
  let fnResults = [];

  const run = async () => {
    for (let i = 0; i < functions.length; i += 1) {
      const result = await functions[i]();
      fnResults.push(result);
      console.log(fnResults);
    }
  };

  return { run };
};

// Пример
const testFn1 = () => {
  return new Promise((resolve) =>
    setTimeout(() => {
      resolve("testFn1");
    }, 2000)
  );
};
const testFn2 = () => {
  return new Promise((resolve) =>
    setTimeout(() => {
      resolve("testFn2");
    }, 1000)
  );
};
const testFn3 = () => {
  return new Promise((resolve) => resolve("testFn3"));
};
const testFn4 = () => {
  return "testFn4";
};
const fnArray = [testFn1, testFn2, testFn3, testFn4];

const some = runAllFunc(fnArray);
some.run();
