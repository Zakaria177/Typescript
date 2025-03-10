var users;
users = [];
var user1;
user1 = { userName: "zakaria", userID: 101 };
var user2;
user2 = { userName: "raihan ", userID: 102 };
users.push(user1);
users.push(user2);
// console.log(users);
for (var key in users) {
    //   console.log(users[key]); // to print the the value of each index of and object
    console.log(users[key]["userName"]);
}
