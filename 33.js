// for of loop in  array
// const fruits=["banana","grape","orange"]
// const f=[];
// for (const i of fruits) {
// f.push(i.toUpperCase())    
    
// }
// console.log(f)


// const mymap=new Map([['name','john'],['age','30'],['city','Mumbai']])
// for (const [key,value] of mymap) {
//     console.log(`${key}:${value}`)
// }
const products = new Map();

// add a new product to the map
products.set("12345", {
  name: "Widget",
  description: "A small widget",
  price: 10.99
});

// get the details of a product by ID
const widget = products.get("12345");
console.log(widget); // { name: "Widget", description: "A small widget", price: 10.99 }

// update the price of a product
widget.price = 12.99;
products.set("12345", widget);

// delete a product from the map
products.delete("12345");
