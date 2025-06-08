type Programmer = 'Programmer';
type HR = 'HR';

let bestProgrammer: Programmer = 'Programmer';

// this is a "literal union type" - a type that can be one of several literal types
// it is useful when you want to restrict a variable to a specific set of string values
// Like a declaration type in 1st and 2nd lines
/*
type programmer = 'Programmer'
type hr = 'HR' 
*/
type PositionType = Programmer | HR;

/*
type Programmer = 'Programmer';
type HR = 'HR';
type CEO = 'CEO';
*/
// This is a union type that can be one of the three positions
type Position = 'Programmer' | 'HR' | 'CEO';

function getSalaryForPosition(position: Position): number | undefined /*return types*/ {
  if (position === 'Programmer') {
    bestProgrammer = position;
    return 100000;
  }
  if (position === 'HR') {
    return 120000;
  }
  console.warn(`We don't have a salary for ${position}`);
}

// Output the salary for a programmer
console.log(getSalaryForPosition('Programmer')); // 100000

