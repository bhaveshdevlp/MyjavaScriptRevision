// how to iterate object
const person1={
    name:"bhavesh",
    age:22,
    key:'tala'
}
for(let key in person1)
{
    // console.log(person1[key])
    console.log(`${key}:${person1[key]}`)

}
// we can iterate  object by following ways
//for in loop
//object.keys

// for(let key in person1 ){
//     console.log(person1[key]);
//     console.log(`${key}:${person1[key]}`)
//console.log(key,":",person1)
// }

// for(let key of Object.keys(person1)){
//     console.log(person1[key]);
//     console.log(key,":",person1)
    
// }
