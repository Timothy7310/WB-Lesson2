const showMaxCallStack = () => {
  let state = 0;
  try {
    const inc = () => {
      state += 1;
      inc();
    };
    inc();
  } catch (e) {
    document.querySelector("#current").textContent = state;
  }
};

showMaxCallStack();
