//filter method
// fillter functon alway return true value 
// it execude only for true
const numbers=[1,2,3,4,5,6,7,8,9]

// const isOdd=(num)=>{
//     return num%2!==0;
// }
// const result=numbers.filter(isOdd)
// console.log(result)

// we dont need to creat extra function we can do it in filter 
// function
// like we done in previous
// const result=numbers.filter((num)=>{
//     return num%2===0;
// })
// console.log(result)

// const resultOdd=numbers.filter((num)=>{
//     return num%2!==0;
// })
// console.log(resultOdd)
// const result=numbers.filter((num)=>{
//     return num>5;
// })
// console.log(result)

const namee=["bhavesh","akash","bhaveka","Rhit","bhanudas","bhavya"]
const result=namee.filter((nam)=>{
    return nam[0]=="b";
})
console.log(result)