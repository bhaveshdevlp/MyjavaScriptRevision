// Map objects
// store data in ordered fashion
// store key are not allowed Like objects
// different between maps and object
//objects can only have string and symbols as key
// in maps you can use anything as key like array, numbers ,string

// object literal
// in object we can set key as string  or symbol only
// but in map we can set key anything as we want
// key-> String
// key->symbol

// const person={
//     firstName:"Bhavesh",
//     age:7,
//     1:"one"
// }
// for(let key in person){
//     console.log(typeof key)
//    }
//    console.log(typeof person)


// key value pair
// in map we can set any type of key 
// in below code we are using set function to add elements in 
// Map()
// const person= new Map();
// person.set('firstname','Bhavesh')
// person.set('Number',9309958622)
// person.set('age',22)
// person.set('gender','Male')
// person.set(1,'one')

// for(let key of person.keys()){
//     console.log(key, typeof key)
// }
// map is iterable
 
// for( let [key,value] of person){
//     // console.log(key,":", value)
//     console.log(typeof key)
//     console.log(`${key}:${value}`)
// }

// we can directly add elements in Map( ) method using following
// const person= new Map([['firstName','Bhavesh'],['num',9309956434]])
// console.log(person)

// where we use Map()
// so if we want to store extra info of person1 object
// but not in  object so we use Map() object 
 const person1={
    id:1,
    fname:"bhavesh"
 }

const extraInfo=new Map()
extraInfo.set(person1,{age:22,gender:"male"})
console.log(extraInfo)
console.log(extraInfo.get(person1).gender)