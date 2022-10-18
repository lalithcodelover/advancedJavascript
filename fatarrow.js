

// let getA= function(a) {
//     return a;
// }

let getA = (a) => { return a}
console.log(getA(4))

let mult = (a,b) => {
    return a*b;
}

console.log(mult(4,8))

let x= function() {
    this.val=1;
    setTimeout(() => {
        this.val++
        console.log(this.val)
    },1)
}

let abc = new x();

// passing arguments in normal

let y = function(){
    console.log(arguments[1])
}

y(2,3,4)

//passing arguments in fatarrow
let z= (...n) => {
    console.log(n[0])
}

z(5,4,2)