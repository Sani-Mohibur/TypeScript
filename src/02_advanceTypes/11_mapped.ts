const arrNum: number[] = [1, 4, 9, 16];

const arrString: string[] = arrNum.map((value) => value.toString());
console.log(arrString);

type AreaOfnum = {
  height: number;
  width: number;
};
type Height = AreaOfnum["height"];

type Area<T> = {
  [key in keyof T]: T[key];
};

const area1: Area<{ height: string; width: number; deep: boolean }> = {
  height: "50",
  width: 160,
  deep: false,
};
const area2: Area<{ height: number; width: string; deep: boolean }> = {
  height: 50,
  width: "200",
  deep: false,
};
