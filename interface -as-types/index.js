var users;
users = [];
// type User = {
//   id: number;
//   name: string;
//   age: number;
// };
var user1;
var user2;
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
var printUserInfo = function (user) {
    console.log("User Id = ".concat(user.id, ", name = ").concat(user.name, " ,age = ").concat(user.age));
};
users.forEach(function (a) { return printUserInfo(a); });
