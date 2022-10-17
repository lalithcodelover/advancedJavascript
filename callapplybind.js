//normal way to call function inside object.

// let obj={
//     firstname:"lalith",
//     lastname: "raghav",
//     printName : function() {
//         console.log(this.firstname + this.lastname)
//     }
// }
// obj.printName();

// Using call
// let name= {
//     firstname :"lalith",
//     lastname: "raghav"
// }

// let printName =function(city,state) {
//     console.log(this.firstname +" " +this.lastname + "from" + city + "," + state)
// }

// printName.call(name,"Coimbatore","Tamilnadu")

//using apply


// let name= {
//     firstname :"lalith",
//     lastname: "raghav"
// }

// let printName =function(city,state) {
//     console.log(this.firstname +" " + this.lastname + " from " + city +"," + state)
// }
// let details =["Coimbatore","Tamilnadu"];
// printName.apply(name ,details)

// using bind


// let name= {
//     firstname :"lalith",
//     lastname: "raghav"
// }

// let printName =function(city,state) {
//     console.log(this.firstname +" " + this.lastname + " from " + city +"," + state)
// }

// let printDetails = printName.bind(name,"Coimbatore","Tamilnadu");

// printDetails()

//assignment

let student ={age:20}

let studentAge = function() {
    console.log(this.age);
}

let studentDetails = studentAge.bind(student)

studentDetails()
