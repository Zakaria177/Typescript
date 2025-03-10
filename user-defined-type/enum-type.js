// enum - store constrants, duplicate value is not allowed here
// enum types : numeric, string and heterogenous
//numeric enum
var RequesType;
(function (RequesType) {
    RequesType[RequesType["readdata"] = 0] = "readdata";
    RequesType[RequesType["saveData"] = 1] = "saveData";
    RequesType[RequesType["deleData"] = 2] = "deleData";
})(RequesType || (RequesType = {}));
console.log(RequesType);
//string enum
var RequesType2;
(function (RequesType2) {
    RequesType2["readdata"] = "read-data";
    RequesType2["deleteData"] = "Delere-data";
})(RequesType2 || (RequesType2 = {}));
console.log(RequesType2);
console.log(RequesType2.readdata);
// console.log(RequesType2["read-data"]);
//herterogenous enum
var RequesType3;
(function (RequesType3) {
    RequesType3["readData"] = "Read data";
    RequesType3["deleteData"] = "Delte data";
    RequesType3[RequesType3["id"] = 201] = "id";
})(RequesType3 || (RequesType3 = {}));
console.log(RequesType3.id);
console.log(RequesType3.deleteData);
