export default (value) => {
  if (typeof value !== "number") {
    return value;
  }
  // TODO probably nullish values should have the same output as (0 | currency)
  var formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  });
  return formatter.format(value);
};
