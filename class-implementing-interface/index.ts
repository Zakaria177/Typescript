interface IFormatter {
  formatUser: () => string;
}

class User implements IFormatter {
  constructor(private fullname: string, private age: number) {}
  formatUser = () => {
    return `Name: ${this.fullname}  Age : ${this.age}`;
  };
}

let user = new User("Zakaria", 25);

console.log(user.formatUser());
