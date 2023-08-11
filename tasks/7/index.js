// с циклом for
async function runAllFunction(functions) {
  let fnResult;

  for (let i = 0; i < functions.length; i += 1) {
    fnResult = await functions[i]();
    console.log(fnResult, `index of function is ${i}`);
  }
}

// с циклом for of
async function runAllFunction2(functions) {
  let fnResult;

  for (const [index, fn] of functions.entries()) {
    fnResult = await fn();
    console.log(fnResult, `index of function is ${index}`);
  }
}

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

runAllFunction(fnArray);
runAllFunction2(fnArray);
