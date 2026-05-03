let anything: any;
anything = "suzan";

const kgToGMConverter = (input: number | string): number | string | undefined => {
  if (typeof input === "number") {
    return input * 1000;
  } else if (typeof input === "string") {
    const [value] = input.split(" ");
    return Number(value) * 1000;
}
};

const result1 = kgToGMConverter(10) as number;
const result2 = kgToGMConverter("10") as number;

