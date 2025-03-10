let users: object[];
users = [];

type User = { userName: string; userID: number };

let user1: User;
user1 = { userName: "zakaria", userID: 101 };

let user2: User;
user2 = { userName: "raihan ", userID: 102 };

let user3: User;
user3 = { userName: "Khan ", userID: 103 };

users.push(user1);
users.push(user2);
users.push(user3);

console.log(users);
