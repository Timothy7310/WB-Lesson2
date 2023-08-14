const addAnimation = (node) => {
  const keyFrames = [
    { transform: "translateX(0%)" },
    { transform: "translateX(50%)" },
    { transform: "translateX(100%)" },
    { transform: "translateX(50%)" },
    { transform: "translateX(0%)" },
  ];
  const animateOption = {
    duration: 2000,
    iterations: Infinity,
  };
  node.animate(keyFrames, animateOption);
};

// Пример
const node = document.querySelector("#test-block");
addAnimation(node);
