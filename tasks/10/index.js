const getJSONFromString = (string) => {
  let i = 0;

  return parseValue();

  function parseObject() {
    if (string[i] === "{") {
      i += 1;
      skipWhitespace();

      const result = {};

      let initial = true;
      // if it is not '}',
      // we take the path of string -> whitespace -> ':' -> value -> ...
      while (string[i] !== "}") {
        if (!initial) {
          eatComma();
          skipWhitespace();
        }
        const key = parseString();
        skipWhitespace();
        eatColon();
        const value = parseValue();
        result[key] = value;
        initial = false;
      }
      // move to the next character of '}'
      i += 1;

      return result;
    }
  }

  function parseArray() {
    if (string[i] === "[") {
      i += 1;
      skipWhitespace();

      const result = [];
      let initial = true;
      while (string[i] !== "]") {
        if (!initial) {
          eatComma();
        }
        const value = parseValue();
        result.push(value);
        initial = false;
      }
      // move to the next character of ']'
      i += 1;
      return result;
    }
  }

  function parseValue() {
    skipWhitespace();
    const value =
      parseString() ??
      parseNumber() ??
      parseObject() ??
      parseArray() ??
      parseKeyword("true", true) ??
      parseKeyword("false", false) ??
      parseKeyword("null", null);
    skipWhitespace();
    return value;
  }

  function parseKeyword(name, value) {
    if (string.slice(i, i + name.length) === name) {
      i += name.length;
      return value;
    }
  }

  function skipWhitespace() {
    while (
      string[i] === " " ||
      string[i] === "\n" ||
      string[i] === "\t" ||
      string[i] === "\r"
    ) {
      i += 1;
    }
  }

  function parseString() {
    if (string[i] === '"') {
      i += 1;
      let result = "";
      while (string[i] !== '"') {
        if (string[i] === "\\") {
          const char = string[i + 1];
          if (
            char === '"' ||
            char === "\\" ||
            char === "/" ||
            char === "b" ||
            char === "f" ||
            char === "n" ||
            char === "r" ||
            char === "t"
          ) {
            result += char;
            i += 1;
          } else if (char === "u") {
            if (
              isHexadecimal(string[i + 2]) &&
              isHexadecimal(string[i + 3]) &&
              isHexadecimal(string[i + 4]) &&
              isHexadecimal(string[i + 5])
            ) {
              result += String.fromCharCode(
                parseInt(string.slice(i + 2, i + 6), 16)
              );
              i += 5;
            }
          }
        } else {
          result += string[i];
        }
        i += 1;
      }
      i += 1;
      return result;
    }
  }

  function isHexadecimal(char) {
    return (
      (char >= "0" && char <= "9") ||
      (char.toLowerCase() >= "a" && char.toLowerCase() <= "f")
    );
  }

  function parseNumber() {
    let start = i;
    if (string[i] === "-") {
      i += 1;
    }
    if (string[i] === "0") {
      i += 1;
    } else if (string[i] >= "1" && string[i] <= "9") {
      i += 1;
      while (string[i] >= "0" && string[i] <= "9") {
        i += 1;
      }
    }

    if (string[i] === ".") {
      i += 1;
      while (string[i] >= "0" && string[i] <= "9") {
        i += 1;
      }
    }
    if (string[i] === "e" || string[i] === "E") {
      i += 1;
      if (string[i] === "-" || string[i] === "+") {
        i += 1;
      }
      while (string[i] >= "0" && string[i] <= "9") {
        i += 1;
      }
    }
    if (i > start) {
      return Number(string.slice(start, i));
    }
  }

  function eatComma() {
    if (string[i] !== ",") {
      throw new Error('Expected ",".');
    }
    i += 1;
  }

  function eatColon() {
    if (string[i] !== ":") {
      throw new Error('Expected ":".');
    }
    i += 1;
  }
};

// Пример
const string =
  '[{"id":"1","name":"Jhone","age":"25"},{"id":"2","name":"Sally","age":"55"},{"id":"3","name":"David","age":"65"},{"id":"4","name":"Peter","age":"35"},{"id":"5","name":"Sam","age":"15"}]';

console.log(getJSONFromString(string));
