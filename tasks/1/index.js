const isPalindrome = (string) => {
  return (
    string.toLowerCase().replaceAll(" ", "").split("").reverse().join("") ===
    string.toLowerCase().split(" ").join("")
  );
};

// Пример
console.log(isPalindrome("аргентина манит негра"));
