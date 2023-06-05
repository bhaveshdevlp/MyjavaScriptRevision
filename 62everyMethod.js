// every Method
// every method check each and every element
// and if every elements are true then it returns true
// const numbers=[2,4,6,8,10,12,14]

// function isEven(numbers){
//     return numbers%2===0;
// }
// const ans=numbers.every(isEven)
// console.log(ans)

// lets do is using arrow method
// const ans=numbers.every((number)=>number%2===0)
// console.log(ans)

// lets see realistic image
// check the price of all product are less than 30000 thousand
const userCart=[
{ProductId:1,ProductName:"Mobile",price:20000},
{ProductId:2,ProductName:"Watch",price:2000},
{ProductId:3,ProductName:"AirBuds",price:22000},
{ProductId:4,ProductName:"Laptop",price:24000},
]

const ans=userCart.every((cardPrice)=>cardPrice.price<30000)
console.log(ans)


const is18=[
    {name1:"Bhavesh",age:22},
    {name1:"Bhavesh",age:22},
    {name1:"Bhavesh",age:22},
    {name1:"Bhavesh",age:22},
    {name1:"Bhavesh",age:22},
]
const result=is18.every((age)=>age.age>18)
console.log(result)