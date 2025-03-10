// built in type : number ,string, void, undefined, null, boolean

let userId: number;
let firstName: string;
let lastName: string;
let fullName: string;
let isActuive: boolean;

userId = 12;
firstName = "Zakaria";
lastName = " khan";
isActuive = true;

fullName = firstName.concat(lastName);

console.log(
  `Your id: ${userId}, Username: ${fullName} , Account activated : ${isActuive}  `
);
