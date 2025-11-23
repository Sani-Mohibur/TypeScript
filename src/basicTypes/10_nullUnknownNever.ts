//nullable type
const getUser = (input: string | null) => {
  const findUser = input ? "User Found" : "User not found";
  return findUser;
};
//console.log(getUser(null));

//Unknown type
const discountCalculator = (input: unknown) => {
  if (typeof input === "number") {
    const discountPrize = input * 0.1;
    console.log(discountPrize);
  } else if (typeof input === "string") {
    const [discountPrize] = input.split(" ");
    console.log(Number(discountPrize) * 0.1);
  } else {
    console.log("Wrong input");
  }
};
// discountCalculator(100);
// discountCalculator("200 TK");
// discountCalculator(null);

//never
const throwError = (msg: string) => {
  throw new Error(msg);
};
throwError("Error...");
