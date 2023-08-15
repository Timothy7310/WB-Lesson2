export const debounce = (cb, time) => {
  let timeoutId;

  return (...args) => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => cb(...args), time);
  };
};

export const throttle = (cb, time) => {
  let timeoutId = null;

  return (...args) => {
    if (timeoutId) return;

    timeoutId = setTimeout(() => {
      cb(...args);
      clearTimeout(timeoutId);
      timeoutId = null;
    }, time);
  };
};
