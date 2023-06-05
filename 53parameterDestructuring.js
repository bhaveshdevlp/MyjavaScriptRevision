// paramerter destructuring
// mostly used in React library

// used with object
// const person={
//     firstName:"Bhavesh",
//     gender:"male",
//     number:"9309958622"

// }
// this is old way to do parameters de Structuring
// const printDetails=(obj)=>{
// console.log(obj.firstName)
// console.log(obj.gender)
// }

// now new way to do Same is following as we already studied destructuring 
// in previous chapters
// syntax let[{var1},{var2}]
// const printDetails=({firstName:v1,gender:v2,number})=>{
//     console.log(v1)
//     console.log(v2)
//     console.log(number)
//     }
//     printDetails(person)
// that sit paremeter destructuring is done
// const printall=({firstName,gender})=>{
// console.log(firstName)
// console.log(gender)
// }
// printall(person)

// this is object destructuring
// const{firstName:r,gender:p}=person;
// console.log(r)
// console.log(p)


const pperson={
    name:'Bhavesh',
    roll_no:320,
    phone: 1234567677

}
const personDetails=({name,roll_no,phone})=>
{
console.log(name)
console.log(roll_no)
console.log(phone)
}
personDetails(pperson)