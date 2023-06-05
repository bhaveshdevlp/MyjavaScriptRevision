
//rest parameters
// what is rest parameter 
//so  if we creat function and give three parameters 
//in that function and pass argument more than three 
// then what will happen the function will take only three parameters
// and we want to store remaining arguments  in other parameter we use 
// rest paramter

// so here comes rest parameter in action we create rest parameters using
// ... "spread operator"
// Example

// const showRest=(a,b, ...c)=>{
//  console.log(`a is ${a}`)
//  console.log(`b is ${b}`)
//  console.log(`c is ${c}`)
// }
// const ans=showRest(1,2,3,4,5,5,6,7,8)
//   a=1 will be store in a b=2 will be store in b and other remaining 
//   will be store in c thats Rest Parameter|
// lets write function to add all numbers given in argument

// const addAllNUm=(...numbers)=>{
//     let total=0
//     for(number of numbers){
//      total+=number
//     }
//     return total
// }
// let ad=addAllNUm(1,2,3,4,5,6,7,8,9)
// console.log(ad)





const even=(...number)=>{
    for(const i of number){
        if(i %2===0){
            console.log(i)
        }
    }
}

even(1,2,3,4,5,6,7,8,9,10)


