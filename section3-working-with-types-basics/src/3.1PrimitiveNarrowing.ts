// narrow down primitives: with typeof
// Like a using typeof operator in JavaScript, TypeScript allows you to narrow down the type of a variable based on its value.
// This is useful when you want to perform different actions based on the type of a variable.

function getNumberValue(arg: unknown): number{
    if (typeof arg === 'number') {
        return arg;
    }
    if (typeof arg === 'string') {
        return Number(arg)
    }
    throw new Error(`Unsupported format: ${JSON.stringify(arg)}`);    
}

console.log(getNumberValue('dfg'));
getNumberValue({})