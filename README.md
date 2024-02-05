# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).


### `npm start`

1.Interfaces 2. Type aliases 3. Unions .

Interfaces are used to define the structure of an object.
Type aliases are used to create new types from existing types.
Unions are used to define types that can be one of several different types.

An example of an interface would be:

interface Person {
name: string;
age: number;
}

An example of a type alias would be:

type alias Name = string;

An example of a union would be:

type Age = number | string;


Generics are used in TypeScript to write functions that can accept arguments of various types. T
This allows for greater flexibility when writing code.
function can be used with different types of data without having to be rewritten each time.
To use generics, you simply need to specify the type of data that the function can accept using angle brackets (<>). For example, if you wanted to write a function that could accept either a string or a number, you would write it as follows:

function myFunction(arg: T): T {
// function body goes here
}