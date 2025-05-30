export {};
// Arrays:
const duties: string[] = ['write code', 'fix bugs', 'test code']; // This is arrays of strings in TS
// const duties: Array<string> = ['write code', 'fix bugs']; // This is the second way to define arrays in TS using generics
duties.push('write documentation');

duties.push('refactor code');
duties.map((duty) => {
  console.log(duty.toUpperCase());
});

// Tuples:
let employeeLockerCode: [string, number] = ['John', 345];
employeeLockerCode = ['5', 6];
employeeLockerCode.push(12); //
console.log(employeeLockerCode);

// Output:
/*
WRITE CODE
FIX BUGS
TEST CODE
WRITE DOCUMENTATION
REFACTOR CODE
[ '5', 6, 12 ]
*/

