//object destructuring
const user = {
  id: 2023,
  name: {
    firstName: "Shihab",
    lastName: "Rahamn",
  },
  designation: "Senior Developer",
};

const {
  designation: role,
  name: { firstName: nickname },
} = user; //name alias
//console.log(nickname, "->", role);

//array destructuring
// const members = ["Mustary", "Ria", "Pronoy", "Shithil", "Ashraful"];
// const [, , , , Designer] = members;

// console.log("Designer: ", Designer);

const members = ["Mustary", "Ria", "Pronoy", "Shithil", "Ashraful"];
const [Picchi] = members;
console.log("Picchi: ", Picchi);
