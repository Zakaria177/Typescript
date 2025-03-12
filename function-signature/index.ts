//function signature template

let userInfo1: () => void;
let userInfo2: (name: string) => void;

let userInfo3: (name: string, age: number) => string;

userInfo1 = () => {
  console.log("Zakaria Khan");
};

userInfo2 = (name: string) => {
  console.log(`Name : ${name}`);
};

userInfo3 = (name: string, age: number) => {
  return `${name} is ${age} years old`;
};

userInfo1();
userInfo2("Raihan");
console.log(userInfo3("Zak", 25));
