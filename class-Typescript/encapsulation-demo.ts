//access modifier : public,private,protected, readonly

class Users {
  userName: string;
  age: number;

  constructor(userName: string, age: number) {
    this.userName = userName;
    this.age = age;
  }

  display(): void {
    console.log("hi");
  }
}

class Student extends Users {
  private studentId: number;

  constructor(userName: string, age: number, studentId: number) {
    super(userName, age);

    this.studentId = studentId;
  }

  display(): void {
    console.log(
      `username : ${this.userName}, age : ${this.age} , Student  Id: ${this.studentId}`
    );
  }

  setStudentId(studentId: number): void {
    this.studentId = studentId;
  }
  getStudentId(): number {
    return this.studentId;
  }
}

let student1 = new Student("Zakaria", 1, 123);
student1.setStudentId(15);
console.log(student1.getStudentId());

student1.display();
