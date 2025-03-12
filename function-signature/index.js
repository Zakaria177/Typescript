var userInfo1;
var userInfo2;
var userInfo3;
userInfo1 = function () {
    console.log("Zakaria Khan");
};
userInfo2 = function (name) {
    console.log("Name : ".concat(name));
};
userInfo3 = function (name, age) {
    return "".concat(name, " is ").concat(age, " years old");
};
userInfo1();
userInfo2("Raihan");
console.log(userInfo3("Zak", 25));
