//object
//object is reference type
// array are good but not sufficient for real world data
//object stores key value data
//how to creat object

// const person={
//    name:"Bhavesh", 
//     age:22
// };
//   console.log(person)
//     console.log(typeof person)
    // we can store array in object
    // const person1={
    //  name:"bhavesh",
    //  age:22,
    //  hobbies:["sleeping","cricket","youtube","music"]
    // }
                                    // how to access data from object
// console.log(person1)
// console.log(person1.age)
// console.log(person1.name)
// console.log(person1.hobbies.slice(0))

// console.log(person1.hobbies[2])
// how to add key vlaue pair to object
// person.gender="male"
// console.log(person.gender)

const student={
    names:["Bhavesh","Akash","Rohit","Sahil","jay",],
    age:[22,23,43,2,3,2,3,2,3],
    'person hobies':['guitar','codding',]
}
// console.log(student['person hobies'])
console.log(student.names.slice(0,3))
// console.log(student['age'])

// student.phone=[555,88888888,88909000]
// console.log(student['phone'])

// in object key is by default string  