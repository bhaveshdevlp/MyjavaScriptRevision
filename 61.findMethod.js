// find method
// const myarray=["Bhavesh","Ravi","ak","vir"]

// const findit=((string)=>{
// return string.length===4;
// })

//  console.log(myarray.find(findit))

// using arrow function 
// both below and above funtions are same 
// if we have single parameter we can use below fnc
// const ans=myarray.find((String)=>String.length==3)
// console.log(ans)

// lets see an realistic example of Find method

// const user=[
//     {UserId:1,UserName:"Bhavesh" },
//     {UserId:2,UserName:"Ravi" },
//     {UserId:3,UserName:"Vir" },
//     {UserId:4,UserName:"jeet" },
//     {UserId:5,UserName:"Ramakant" },
// ]
// const findme=user.find((user)=>user.UserName.length===4)
// console.log(findme)
// const findme=((user)=>{
//     return user.UserName.length===4
// })
// console.log(user.find(findme))
// const findit=user.find((user)=>{
//     return user.UserName.length===3
// })
// console.log(findit)
// find method is used to find perticuler object in array
// herewe are finding array three


// const product=[
// {ProductId:1, ProductName:'watch'},
// {ProductId:2, ProductName:'phone'},
// {ProductId:3, ProductName:'laptop'}
// ]

// const id_3=product.find(product=>product.ProductId===3)
// console.log(id_3)

console.log("bhavesh sutar")