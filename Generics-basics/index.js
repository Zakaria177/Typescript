// function printUserInfo <x,y> (userId :x ,age :y) {
//     console.log (`user Id : ${userId} Age : ${age} ` )
// }
// printUserInfo ("Zakaria",20)
// printUserInfo(102,true)
//with arrow function
var printUserInfo = function (userId, age) {
    console.log("user Id : ".concat(userId, " Age : ").concat(age, " "));
};
printUserInfo("Zakaria", 20);
printUserInfo(102, true);
