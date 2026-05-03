let anything: any;
anything = "suzan";

const kgToGMConverter = (input: number | string) => {
  if (typeof input === "number") {
    return input * 1000;
  } else if (typeof input === "string") {
    const [value] = input.split(" ");
    return Number(value) * 1000;
}
};

console.log(kgToGMConverter(10));
