interface IUser {
  id: number;
  name: string;
  age: number;
}

let users: IUser[];
users = [];

// type User = {
//   id: number;
//   name: string;
//   age: number;
// };

let user1: IUser;
let user2: IUser;

user1 = {
  id: 11,
  name: "zakria",
  age: 25,
};

user2 = {
  id: 12,
  name: "khan",
  age: 27,
};

users.push(user1);
users.push(user2);

// console.log(users);

const printUserInfo = (user: IUser) => {
  console.log(`User Id = ${user.id}, name = ${user.name} ,age = ${user.age}`);
};

users.forEach((a) => printUserInfo(a));
