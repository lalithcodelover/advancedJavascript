class Student {
    static count=0;
    constructor(name,age,marks) {
        this.name=name;
        this.age=age;
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
    eligibileForPlacements(minPlacementAge) {
        return (minMarks) => {
            if(this.marks>minMarks && this.age>minPlacementAge) {
                console.log(this.name + " is ready for placements!!")
            }
            else {
                console.log(this.name + " is not ready for placements!!")
            }
        }
    }
}
let student1 = new Student("Lalith",21,55)
let student2 = new Student("Ashok",25,38)
let student3 = new Student("Paul",27,70)
let student4 = new Student("Alex",16,45)
let student5 = new Student("Smith",17,28)

student2.eligiblity()
student1.numberOfStudents()

student1.eligibileForPlacements(18)(40)
student2.eligibileForPlacements(18)(40)
student3.eligibileForPlacements(18)(40)
student4.eligibileForPlacements(18)(40)
student5.eligibileForPlacements(18)(40)