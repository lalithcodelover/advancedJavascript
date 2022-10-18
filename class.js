class Student {
    static count=0;
    constructor(name,age,number,marks) {
        this.name=name;
        this.age=age;
        this.number=number;
        this.marks=marks;
        Student.count=Student.count+1;
    }
    eligiblity() {
        if(this.marks>40){
            console.log("Student is eligible for college")
        }
        else {
            console.log("Student is not eligible for college")
        }
    }
    numberOfStudents() {
        console.log(`There are ${Student.count} students`)
    }
}
let student1 = new Student("lalith",21,5467455,55)
let student2 = new Student("ashok",25,5464255,38)
let student3 = new Student("paul",27,5467455,70)
let student4 = new Student("alex",30,5467455,45)
let student5 = new Student("smith",26,5467455,28)

student2.eligiblity()
student1.numberOfStudents()