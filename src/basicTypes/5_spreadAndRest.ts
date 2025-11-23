//Spread Operator
const schoolFriends = ["Robin", "Nazmul", "Bijoy", "Nahid", "Meraj", "Sabbir"];
const collegeFriends = ["Alif", "Sohag"];
const varsityFriends = ["Humayun", "Nur"];

schoolFriends.push(...collegeFriends);
//console.log(schoolFriends);

const allFriends = [
  ...new Set([...schoolFriends, ...collegeFriends, ...varsityFriends]),
];
//console.log(allFriends);

const user1 = {
  name: "Humayun",
  age: "26",
};
const infoOfUser1 = {
  favColor: "Red",
  favMovie: "Titanic",
};

const detailsOfUser1 = { ...user1, ...infoOfUser1 };
//console.log(detailsOfUser1);

const sendInvite = () => {
  allFriends.forEach((friend: string) =>
    console.log(`Dear ${friend} you are invited.`)
  );
};
sendInvite();

//Rest Operator
const sendInvitation = (...friends: string[]) => {
  friends.forEach((friend: string) => console.log(`Send invitation ${friend}`));
};
sendInvitation("Rahim", "Karim", "Riya", "Rafiq");
