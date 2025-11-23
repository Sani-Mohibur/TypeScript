const kgToGMConverter = (
  input: number | string
): number | string | undefined => {
  if (typeof input === "number") {
    return input * 1000;
  } else if (typeof input === "string") {
    const [value] = input.split(" ");
    return `Converted gram is ${Number(value) * 1000}`;
  }
};

const numberOutput = kgToGMConverter(5) as number;
console.log({ numberOutput });
const stringOutput = kgToGMConverter("6 kg") as string;
console.log({ stringOutput });

type CustomError = {
  message: string;
};
try {
} catch (err) {
  console.log((err as CustomError).message);
}
