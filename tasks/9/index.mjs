import data from "./data.json" assert { type: "json" };

const getStringFromJSON = (json) => {
  if (typeof json !== "object" || json === null || json instanceof Array) {
    return getStringValue(json);
  }

  return (
    "{" +
    Object.keys(json)
      .map((key) =>
        typeof json[key] === "function"
          ? null
          : `"${key}":${getStringValue(json[key])}`
      )
      .filter((x) => x) +
    "}"
  );
};

function getStringValue(value) {
  switch (typeof value) {
    case "string":
      return `"${value}"`;
    case "number":
      return `${value}`;
    case "boolean":
      return `${value}`;
    case "function":
      return "null";
    case "object":
      if (value instanceof Date) return `"${value.toISOString()}"`;
      if (value instanceof Array)
        return `[${value.map((x) => getStringFromJSON(x)).join(",")}]`;
      if (value === null) return "null";
      return getStringFromJSON(value);
  }
}

// Пример
console.log(getStringFromJSON(data));
console.log(JSON.stringify(data));
