export default (value) => {
  if (typeof value !== "string") {
    return value;
  }
  const lowerCase = value.toLowerCase().split(" ");
  const capitalizedValue = lowerCase.map(
    (word) => word.charAt(0).toUpperCase() + word.slice(1)
  );
  return capitalizedValue.join(" ");
};
