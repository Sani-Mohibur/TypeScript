type Vehicle = {
  car: string; //key: value
  bike: string;
  cycle: string;
};
type user1UsedVehicle = "car" | "bike" | "cycle";
type user2UsedVehicle = keyof Vehicle;
const newUserOfVehicle: user2UsedVehicle = "car";

type User = {
  id: number;
  name: string;
  address: {
    city: string;
  };
};
const user: User = {
  id: 6162,
  name: "Sunny",
  address: {
    city: "Gazipur",
  },
};

//Get property from object
//const userId = user["id"];
// const userId = user.id;
// const userName = user.name;
// const userCity = user.address.city;
// console.log(userId, userName, userCity);

const getPropertyFromObj = <X>(obj: X, key: keyof X) => {
  return obj[key];
};
const product = {
  brand: "Asus",
};
const product2 = {
  model: "Vivobook",
  brand: "Asus",
};

const result1 = getPropertyFromObj(user, "id");
const result2 = getPropertyFromObj(user, "name");
const result3 = getPropertyFromObj(user, "address");
console.log({ result1, result2, result3 });
const result4 = getPropertyFromObj(product, "brand");
const result5 = getPropertyFromObj(product2, "model");
console.log({ result4, result5 });
