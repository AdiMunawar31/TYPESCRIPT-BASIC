// Learn Variabel in Typescript
let myName: string = "Adi Munawar";
let age: number = 20;
let isActive: boolean = true;
let all: any = true || 31 || "Adi";

myName = "This is String";
console.log(myName);
console.log(age);
console.log(isActive);
console.log(all);

// union types
let phone: string | number;
phone = "08231241241";
phone = 08123123124;