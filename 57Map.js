//map method 
// map is array method 
// it is kind of callback function which take callback funtion                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    
// const numbers=[2,3,4,5,6]
// const square=(n)=>{
//     return (n*n)
// }
// const result=numbers.map(square);
// console.log(result)



// this is example of arrow function below

//  const result1=numbers.map((num)=>{
//     return num*num
//  })
// console.log(result1)

// map function returns new array of existing array
// so it is mendetory to return 


// practice for array

// const StringArrat=["INDIA","USA","RUSSIA","JAPAN"]

// const result=StringArrat.map(sd=(country)=>{
//       
// })
// // console.log(result[0]="CHINA")
// console.log(result)


// realistic example of map method
// const persondata=[
//     {FirstName:"Bhavesh",Age:22,gender:"male"},
//     {FirstName:"Avesh",Age:22,gender:"male"},
//     {FirstName:"Akash",Age:22,gender:"male"},
//     {FirstName:"Rohit",Age:22,gender:"male"},
// ]
// const result=persondata.map((users)=>{
//     return users.FirstName

    
 
// })
// console.log(result)



// console.log(persondata)


// const schoolStudents=[
//     {std_id:1,std_name:"Bhavesh",Std_lastName:"Sutar"},
//     {std_id:2,std_name:"avesh",Std_lastName:"khan"},
//     {std_id:3,std_name:"Akash",Std_lastName:"Sutar"},
//     {std_id:4,std_name:"Rohit",Std_lastName:"Malvi"},
//     {std_id:5,std_name:"Sahil",Std_lastName:"Patil"}
    
// ]

// const result=schoolStudents.map((std_name)=>{
//      return std_name.Std_lastName
// })
// console.log(result)


// const numbers=[1,2,3,4,5]
// const square=numbers.map((n)=>{
//     return n*n
// })
// console.log(square)



const products = [
    { name: 'iPhone 12', price: 999, category: 'Electronics' },
    { name: 'Macbook Pro', price: 1499, category: 'Electronics' },
    { name: 'Nike Air Max', price: 129, category: 'Shoes' },
    { name: 'Levi’s 501', price: 89, category: 'Clothes' },
    { name: 'Canon EOS R', price: 1999, category: 'Electronics' },
  ];


  const expensiveElectronics=products.filter((product)=>{
     return product.category==='Electronics' && product.price>1000
  })

  const expensiveElectronicss=expensiveElectronics.map((product)=>{
            return product.name
  })
  console.log(expensiveElectronicss)
  console.log(expensiveElectronics)

// const products = [
//     { name: 'iPhone 12', price: 999, category: 'Electronics' },
//     { name: 'Macbook Pro', price: 1499, category: 'Electronics' },
//     { name: 'Nike Air Max', price: 129, category: 'Shoes' },
//     { name: 'Levi’s 501', price: 89, category: 'Clothes' },
//     { name: 'Canon EOS R', price: 1999, category: 'Electronics' },
//   ];
  
//   //Filter the products which are in the 'Electronics' category and have a price greater than 1000.
//   const expensiveElectronics = products.filter(product => product.category === 'Electronics' && product.price > 1000);
  
//   //Map the names of the expensive electronics products
//   const expensiveElectronicsNames = expensiveElectronics.map(product => product.name);
  
//   console.log(expensiveElectronicsNames);
//   // Output: [ 'iPhone 12', 'Macbook Pro', 'Canon EOS R' ]
  
