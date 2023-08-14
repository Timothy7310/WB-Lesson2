const showMaxCallStack = () => {
  let state = 0;
  try {
    const inc = () => {
      state += 1;
      inc();
    };
    inc();
  } catch (e) {
    console.log(state);
  }
};

showMaxCallStack();
