// function returning function
// const myfun=()=>{
// const returnFun=()=>{
//   console.log("hellow word")
// }
// return returnFun
// }
// const result=myfun();
// console.log(result())

// function returning function
// mean we are returnig  function inside function quit same 
// as callbackFunction

// its is called as higher order function

const sum=(a,b)=>{
  const returnSun=()=>
  {
  return a+b      
  }
return returnSun
  
}
const result=sum(4,5)
console.log(result())
