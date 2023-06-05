//defference between Dot and bracket notation
const person1={
    name:"bhavesh",
    age:22,
    //in javascript key are by default string 
    //space is not allows
    //so we write key in double or single quote
    "person hobbiles":["sleeping","cricket","youtube","music"]
}
// console.log(person1["person hobbiles"]);
// we can add key to the existing object
//by following way

// const key="email"
//this is new key  that we want add to so what we will do is
// person1[key]="bhaveshsutar622@gmail.com";
// console.log(person1)

const key="mobile"
person1[key]=6564643664346;
console.log(person1)
// we can do the same things using . notation also


const address='address'
const my_address=" 46, Mumbai, shanti nagar ,34"
person1[address]=my_address