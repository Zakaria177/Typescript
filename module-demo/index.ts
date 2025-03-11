// import { studentName as name, studentAge as age } from "./student";
import * as student from "./student";

// function displayinfo(): void {
//   console.log(`${name}, ${age}`);
// }

function displayinfo(): void {
  console.log(`${student.studentName}, ${student.studentAge}`);
}

displayinfo();
