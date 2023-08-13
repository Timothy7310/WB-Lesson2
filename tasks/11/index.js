const closureFunction = () => {
  let state = 0;

  const showState = () => {
    return state;
  };

  const setState = (value) => {
    state = value;
  };

  return {
    showState,
    setState,
  };
};

// Пример

const someFunc = closureFunction();

console.log(someFunc.showState());

someFunc.setState(10);

console.log(someFunc.showState());
