//1
// function x(){
//     let a = 10;
//     function y(){
//     console.log(a);
//     }
//     y()
//     }  
//     x();  //10

//2
// function x(){
//     let a = 10;
//     function y(){
//     console.log(a);
//     }
//     return y();
//     }
//     x();
        
//3
// function x(){
//     let a = 10;
//     function y(){
//     console.log(a);
//     }
//     return y;
//     }
//     console.log(x());  //y function is returned .

//4
// function x(){
//     let a = 10;
//     function y(){
//     console.log(a);
//     }
//     return y;
//     }
//     const z = x()       // 10
//     console.log(z());    //undefined

//5
// function x(){
//     let a = 10;
//     function y(){
//     console.log(a);
//     }
//     a= 50;
//     return y;
    
//     }    
//     const z = x()
//     console.log(z());

