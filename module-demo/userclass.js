"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Users = void 0;
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
exports.Users = Users;
