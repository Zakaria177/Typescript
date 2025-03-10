let users: object[];

users = [];

let user1: { userName: string; userID: number };

user1 = { userName: "zakaria", userID: 101 };

let user2: { userName: string; userID: number };

user2 = { userName: "raihan ", userID: 102 };

users.push(user1);
users.push(user2);

// console.log(users);

for (const key in users) {
  //   console.log(users[key]); // to print the the value of each index of and object
  console.log(users[key]["userName"]);
}
