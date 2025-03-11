var users;
users = [];
var user1;
user1 = { userName: "zakaria", userID: 101 };
var user2;
user2 = { userName: "raihan ", userID: 102 };
var user3;
user3 = { userName: "Khan ", userID: 103 };
users.push(user1);
users.push(user2);
users.push(user3);
console.log(users);
var getRequest;
getRequest = "GET";
function requestHandler(requestType) {
    console.log(requestType);
}
requestHandler("GET");
