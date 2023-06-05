//reduce method of array
// const numbers=[1,2,3,4,5];
// aim:sum of all the numbers in array
// const sum=numbers.reduce((accumulator,currentValue)=>{
//     return accumulator+currentValue;
// })
// console.log(sum)
// lets understand code how its working
//accumulator  ,  currentValue  , return
// 1                     2              3
// 3                     3              6
// 6                     4              10
// 10                    5               15

// we can pass intial value of accumulator for example if i pass intial v
// value 100 then currentValue will be 1
// and then it will add 100+1 example is below

// const sum=numbers.reduce((accumulator,currentValue)=>{
//     return accumulator+currentValue;
// },100)
// console.log(sum)
// lets understand code how its working
//accumulator  ,  currentValue  , return
// 100                    1            101
// 101                    2             103
// 103                    3             106
// 106                    4               110
//110                      5               115

// in this first adds two value and then accumulator
// take value of return and and currentValue takes next value

// it basicaly sums  the array that sit 
// below given real world example 
// where product has added to card and usding reduce method
// we can find totalCost of products by giving intial value 0
const userCard=[
    {productId:1, ProductName:"Mobile", ProductPrice:12000},
    {productId:2, ProductName:"Laptop", ProductPrice:58000},
    {productId:3, ProductName:"Tv", ProductPrice:55000},
    {productId:4, ProductName:"iphone", ProductPrice:112000},
]

const totalcost=userCard.reduce((totalPrice,currentPrice)=>{
    return totalPrice+currentPrice.ProductPrice;
},0)
console.log(totalcost)

const valueLessThan_60k=userCard.filter(product=>product.ProductPrice<=60000)
const nameProductlessThan_60k=valueLessThan_60k.map(product=>product.ProductName)
console.log(nameProductlessThan_60k)
console.log(valueLessThan_60k)


const total_valueLessThan_60k=valueLessThan_60k.reduce((totalPrice,currentPrice)=>{
    return totalPrice+currentPrice.ProductPrice
},0)
console.log(total_valueLessThan_60k)

// const marks1=[
// {roll:1, name:"Bhavesh",marks:89},
// {roll:2, name:"avesh",marks:90},
// {roll:3, name:"vesh",marks:67}
// ]
// const tmark=marks1.reduce((totalmarks,currentmarks)=>{
//     return totalmarks+currentmarks.marks
// },0)
// console.log(tmark)
