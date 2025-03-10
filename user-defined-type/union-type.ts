let Id: string | number | boolean;

Id = " 201";
Id = 101;
Id = true;

console.log(Id);

function user(Id: string | number) {
  console.log(Id);
}

user("201");
user(101);
