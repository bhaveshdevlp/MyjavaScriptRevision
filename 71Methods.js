//methods
// function inside object is called method

// const person={
//     Firstname:"Bhavesh",
//     Age:22,
//     about:function(){
//         console.log("person name is Bhavesh and person age is 22")
//     }
// }
// person.about()
// but in above programme if we change  Firstname it wont change
// we want it to change dynamicaly by javaScrip
// so we is this keyword here and use templet string


// const person={
//     Firstname:" ",
//     Age:undefined,
//     about:function(){
//         console.log(`person name is ${this.Firstname} and person age is ${this.Age}`)
//     }
// }
// person.Age="34"
// person.Firstname="Rohit"
// person.about()


// lets see more example of this keyword
// now what happend here we have created an function outside
// and we call the function one by one now this keyword will Refere
// the value one by one whenver we call function
// function personInfo(){
// console.log(`person name is ${this.Firstname} and person age is ${this.Age}`)
// }

// const person1={
//     Firstname:"Bhavesh",
//     Age:22,
//     about:personInfo
// }
// const person2={
//     Firstname:"Akash",
//     Age:25,
//     about:personInfo
// }
// const person3={
//     Firstname:"Rohit",
//     Age:29,
//     about:personInfo
// }
// person1.about()
// person2.about()
// person3.about()


const course={
courseName:'',
fees:'',
selected:function(){
    //console.log(`you selected ${this.courseName} and fee is ${this.fees}`)
}

}

course.courseName="React"
course.fees=15000
course.selected();

function student()
{
    
    console.log(`you selected ${this.courseName} and fee is ${this.fees}`)
}
const student1={
    courseName:'vueJs',
    fees:'8000',
    selected:student  
}
const student2={
    courseName:'Angular',
    fees:'12000',  
    selected:student
}
const student3={
    courseName:'React',
    fees:'15000',  
    selected:student
}

student1.selected()
student2.selected()
student3.selected()

