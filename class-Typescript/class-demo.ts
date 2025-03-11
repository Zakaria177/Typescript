class Users {
  userName: string;
  age: number;

  constructor(userName: string, age: number) {
    this.userName = userName;
    this.age = age;
  }

  display(): void {
    console.log(`username : ${this.userName}, age : ${this.age}`);
  }
}

let user5 = new Users("Zakaria", 15);
let user4 = new Users("khan", 50);
user5.display();
user4.display();
