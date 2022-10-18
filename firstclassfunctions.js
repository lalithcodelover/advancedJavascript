
//1
// a()
// b()
// function a(){
// console.log('inside a');
// }
// var b = function (){
// console.log('inside b');
// }

//Function declaration aka Function Statement
// function a() {
//     console.log("function statement")
// }

// //Function Expression
// var b = function() {
//     console.log("function expression")
// }

// Parameters:
// Parameters are the identifiers or labels given in a function definition.
// function a(param1,param2) {

// }

// Arguments:
// Arguments are values which are passed when invoking a function.

// a(arg1,arg2);

// First class functions
//      The ability to use functions as values is called First class functions.
//      They can be passed as arguments to another function.
//      They can be returned from the function: 

// As value to a variable:

// var a= function() {

// }

// As arguments:

// function hello() {
//     return "Hello "
// }

// function name(greet,name) {
//     console.log(greet() + name)
// }

// name(hello,"Lalith")

//Returning
// function a() {
//     return () => {
//         console.log("Hello")
//     }
// }

//Curring
// function salary(basic,bonus) {
//     return basic + bonus;
// }

// console.log(salary(15000,3000))

function salary(bonus) {
    return (basic) => {
        return bonus + basic
    }
}

 let totalSalary = salary(5000)

 console.log(totalSalary(43000))

