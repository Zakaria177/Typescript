var Users = /** @class */ (function () {
    function Users(userName, age) {
        this.userName = userName;
        this.age = age;
    }
    Users.prototype.display = function () {
        console.log("username : ".concat(this.userName, ", age : ").concat(this.age));
    };
    return Users;
}());
var user5 = new Users("Zakaria", 15);
var user4 = new Users("khan", 50);
user5.display();
user4.display();
