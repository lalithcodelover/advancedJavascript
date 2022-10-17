// function abc() {

//     console.log(a);
    
//     }
    
    
    
//     abc();
    
//     var a = 7;
// function outerfunction() {
// console.log(a);

// var c = 10;



// innerfunction();



// function innerfunction() {

// console.log(b);

// console.log(c);

// }

// }



// var a = 7;

// var b =3

// function outerfunction() {
//     console.log(a);
//     var a = 10;
    
//     innerfunction();
//     function innerfunction() {
//     console.log(a);
//     //console.log(window.a);
//     console.log(this.a)
//     }    
// }
    
    
    
//     var a = 7;
    
//     var b =3
    
    
// outerfunction();    
//console.log(a)

// console.log(b);

// let a =5;

// var b =6;

// console.log(b);
// const b=10;
// b=100;
// let a=19;
// let a=18;
// console.log(a);

// var a = 5;



// console.log(b)


let obj ={
    name: 'ashok',
    age: '25',
    school: 'lisieux',
    college: 'krishna',
    gender: 'male'
}

let arrayOfKeys = Object.keys(obj);
console.log(arrayOfKeys);
arrayOfKeys.forEach(key => {
    console.log(obj[key]);
})