// function in javaScript
// simple function

// function singSong(){
//     console.log("kendy hundy see")
// }


// singSong()
// singSong()
// singSong()
// singSong()

// we follow do not repeat the code  so we use function 
// write once use any time
// so we will create addition function here and use 
//it multiple time

// function addTwoNUm(n1,n2){
//    this.num1=n1
//    this.num2=n2
//     return num1+num2;
// }
// const result=addTwoNUm(4,5)
// console.log(result)

// function mul(num1, num2)
// {
//     console.log( num1*num2)

// }
// mul(3,3)

//isEven
// inpute:1 number
// outupt: true or false

// function isEven(num){
//     if(num % 2===0){
//         return true;
//     }
//     return false;
// }
// const result=isEven(4)
// console.log(result)

// less code
// function isEven(num){
//     return num%2===0
// }
// console.log(isEven(4))

//function to print firstchar of string

// function firstchar(String){
//     console.log(String[0])
// }
// firstchar("bhavesh")

// functoin to find given number is preesnt in array or not
//input: array, targer(number)
//output :index of target id target present in array

// function findTarget(array,target){
//     for(let i in array){
//         if(array[i]===target){
//             return i;
//         }
//     }
//     return -1
// }
// const myarray=[1,2,3,4,5]
// const result=findTarget(myarray,3)
// console.log(result)

const cart=[
    { product:'jeans',price:450, quantity:5},
    { product:'Tshirt',price:550, quantity:2},
    { product:'shirt', price:850, quantity:2}
]

 function calculateTotalCose(cart)
 {
     let total=0
for(let item of cart)
{      
    // product=item.product
    total+=item.price*item.quantity
    // console.log(product)
}
return total
 }
 const totalcost=calculateTotalCose(cart)
 console.log(totalcost)

 
// function isthere(array, value)
// {
//     for(let i of array)
//     {
//         if(array[i]===value)
//         {
//             return true
//         }
//         return false
//     }

// }
// const myarray=[1,2,3,4,5,67,78,9]
// const result=isthere(myarray,98)
// console.log(result)


// const arr=[11,22,33,44,55,66,77]
// for(const a of arr)
// {
//     console.log(a)
// }
 
//  function check(String)
//  {
//     if(String[0]==='a'){
//     return String[0]
//     }
//     else{
//         console.log('invalid ')
//     }
//  }
//   const a=check('akash')
//   console.log(a)