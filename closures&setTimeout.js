// 1

// function y(){
//     setTimeout(() => console.log(a), 1000)
//     console.log('Done Coding')
//     }
//     y();     //done coding //reference error: a is not defined

//2
// function y(){
// setTimeout(() => console.log(a), 0)
// console.log('Done Coding')
// }
// y();       //done coding  //reference error:a is not defined

//3
// function y(){
//     for(var i=1;i<6;i++){
//     setTimeout(() => console.log(i ), i * 1000)
//     }
//     console.log('Done Coding')
//     }
//     y();    //Done coding 6 6 6 6 6

//4
// function y(){
//     for(let i=1;i<6;i++){
//     setTimeout(() => console.log(i ), i * 1000)
//     }
//     console.log('Done Coding')
//     }
//     y();   //Done coding 1 2 3 4 5

//5

var count=0;
const name = (arr)=>{
    return () => {
    console.log("Hello " + arr[count]);
    count++;
    }
}

const fun = name(["Ram","Shyam"]);

fun()  //Hello Ram

fun()  //Hello Shyam