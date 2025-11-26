type A = string;
type B = number;
type C = A extends null ? true : B extends undefined ? true : false;

type Vehicle = {
  bike: string;
  car: string;
  cycle: string;
};

//type CheckVehicle<T> = T extends "bike" | "car" | "cycle" ? true : false;
type CheckVehicle<T> = T extends keyof Vehicle ? true : false;

type HasBike = CheckVehicle<"car">;
