// enum - store constrants, duplicate value is not allowed here

// enum types : numeric, string and heterogenous

//numeric enum

enum RequesType {
  readdata,
  saveData,
  deleData,
}

console.log(RequesType);

//string enum

enum RequesType2 {
  readdata = "read-data",
  deleteData = "Delere-data",
}

console.log(RequesType2);
console.log(RequesType2.readdata);
// console.log(RequesType2["read-data"]);

//herterogenous enum

enum RequesType3 {
  readData = "Read data",
  deleteData = "Delte data",

  id = 201,
}

console.log(RequesType3.id);
console.log(RequesType3.deleteData);
