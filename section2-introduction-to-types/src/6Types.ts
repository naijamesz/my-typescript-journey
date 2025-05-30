// Type aliases: define the shape of an object
// Literaly types
type Position = 'Programmer' | 'HR';

const myPosition: Position = 'Programmer';

// Type aliases: define the shape of an object ไทป์ที่ใช้ในการกำหนดรูปแบบโครงสร้างของอ็อบเจ็กต์
type Colleague = {
  name: string;
  age: number;
  position: Position;
  greetBack?: Function; // optional property
};

// Type aliases: define the shape of an object ระบุไทป์ Colleague ให้กับอ็อบเจ็กต์ที่มีชื่อว่า myColleagueๆ
const myColleague: Colleague = {
  name: 'John',
  age: 30,
  position: 'Programmer',
  // greetBack: () => do not define greetBack cause it is optional
};

// Inlining the type definition ระบุไทป์ในอ็อบเจ็กต์โดยตรง(inline type definition)
const myOtherColleague: {
  name: string;
  age: number;
  position: Position;
  tasks: string[];
} = {
  name: 'Mary',
  age: 30,
  position: 'HR',
  tasks: ['HR stuff'],
};

// Type aliases: define the shape of an object ระบุไทป์ Colleague ให้กับอ็อบเจ็กต์ที่มีชื่อว่า myTalkyColleague
const myTalkyColleague: Colleague = {
  name: 'John',
  age: 30,
  position: 'Programmer',
  greetBack: () => {
    // define greetBack function ที่เป็น optional property
    console.log('Cheers!!!');
  },
};

function greetColleague(colleague: Colleague) {
  console.log('Hi ' + colleague.name);
  if (colleague.greetBack) {
    colleague.greetBack();
  }
}

greetColleague(myColleague);
greetColleague(myOtherColleague); // notice ty
greetColleague(myTalkyColleague);

/* The `g` in the code snippet seems to be a typo or an incomplete statement. It is not part of any valid TypeScript syntax or function call. It should be removed or corrected to avoid any errors during compilation. */
function add(a: number, b: number): number {
  return a + b;
}
const result = add(1, 2);
console.log(result); // 3

/*
Hi John
Hi Mary
Hi John
Cheers!!!
 */

