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

class Student extends Users {
  studentId: number;

  constructor(userName: string, age: number, studentId: number) {
    super(userName, age);

    this.studentId = studentId;
  }

  display(): void {
    console.log(
      `username : ${this.userName}, age : ${this.age} , Student  Id: ${this.studentId}`
    );
  }
}

let student1 = new Student("Zakaria", 1, 123);

student1.display();
