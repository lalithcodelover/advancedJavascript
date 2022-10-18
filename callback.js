//1
// setTimeout(() => console.log('timer expired'), 1000)

// function x(y) {
// console.log('inside x');
// y();
// }

// x(function y(){
// console.log('inside y')
// })

//2
// setTimeout(() => console.log('timer1 expired'), 1000)

// setTimeout(() => console.log('timer2 expired'), 0)

// function x(y) {
// console.log('inside x');
// y();
// }

// x(function y(){
// console.log('inside y')
// })

//3
// setTimeout(() => console.log('timer1 expired'), 1000)

// setTimeout(() => console.log('timer2 expired'), 0)

// function x(y) {
// console.log('inside x');
// y();
// }

// x(function y(){
// setTimeout(() => console.log('inside y'), 0)
// })

function attachEventListeners(){
let count=0;
document.getElementById("clickme").addEventListener("click", function xyz() {
    console.log("Button clicked ",++count);
})
}
attachEventListeners();


document.addEventListener("DOMContentLoaded", function abc() {
    console.log("DOM has loaded")
})
