var User = /** @class */ (function () {
    function User(fullname, age) {
        var _this = this;
        this.fullname = fullname;
        this.age = age;
        this.formatUser = function () {
            return "Name: ".concat(_this.fullname, "  Age : ").concat(_this.age);
        };
    }
    return User;
}());
var user = new User("Zakaria", 25);
console.log(user.formatUser());
