// const obj1={
//     key1:"value1",
//     key2:"value2"
// }
// const obj2={
//     key3:"value3"
// }

// we can creat empty object and store value in that 
// const obj3={}
// obj3.key4="value"
// console.log(obje2.key1)
// console.log(obj3.key4)

// there is one more way to creat an Object
// const obj5=Object.create(obj1)
// obj5.key6="value6"
// console.log(obj5)
// if we print the program we will get value6 out put 
// but what if we cant to access value of 
// vlaue of obj1,obj2,obj3 the we use above step
// so now i am printing other object valuus
// console.log(obj5.key2)


// __proto__, and [[prototype]] is same
// only prototype is different thing than above
// so what is __proto__ basicaly 
// so if we creat an object with below method
// const obj5=Object.create(obj1) so here obj5 is proto of obj1
// we can access value inside obj1 this will give us proto of obj5 which is obj1
// we can set any obj as proto

// console.log(obj5.__proto__)


const classroom={
    student1:"bhavesh",
    id:1
}
const classroom1={
    student1:"akash",
    id:1
}
const classroom2={
    student1:"rohit",
    id:1
}
const c4=Object.create(classroom)
console.log(c4.student1)
console.log(c4.__proto__)