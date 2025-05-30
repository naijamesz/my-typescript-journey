function greet(name: string): string {
  return 'Hello ' + name;
}

const johnGreet = greet('John');

function greetToUpperCase(name: string) {
  return 'Hello ' + name.toUpperCase();
}

// default parameters
function consoleGreetJohn(name = 'John') {
  console.log('Hello ' + name.toUpperCase());
}

consoleGreetJohn(); // Hello JOHN
consoleGreetJohn('Bil'); // Hello BIL

const greetToConsole = (name: string) => {
  console.log('Hello ' + name);
};

function greetMultiple(...names: string[]) {
  names.forEach((name) => {
    greetToConsole(name);
  });
}

greetMultiple('John'); // Hello John
greetMultiple('John', 'Mary'); // Hello John, Hello Mary

// Output :
/*
Hello JOHN
Hello BIL
Hello John
Hello John
Hello Mary
*/
