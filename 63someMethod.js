//some method
const numbers=[3,5,11,9,]

// kya ek bhi number assa hai jo even hai if there is one true element still it will print true
const ans=numbers.some((numbers)=>numbers%2===0);
console.log(ans)
const userCart=[
    {ProductId:1,ProductName:"Mobile",price:20000},
    {ProductId:2,ProductName:"Watch",price:2000},
    {ProductId:3,ProductName:"AirBuds",price:122000},
    {ProductId:4,ProductName:"Laptop",price:14000},
    ]

const result=userCart.some((aboveonelakh)=>aboveonelakh.price>100000)
console.log(result)

// this method returns true if any of method is 
// true for the given condition

