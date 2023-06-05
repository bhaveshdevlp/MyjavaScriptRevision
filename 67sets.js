// *Sets (it is iterable)
// *store data
// *sets also have its own methods
// *No index-based access
// *Order is not Guaranteed
// *Unique items only ( no duplicate allowed)
// const numbers = new  Set([1,2,3,4]);
// console.log(numbers)

// some time what we do we creat empty set 
// and then add values to  that empty sets
// const numbers=new Set();
// numbers.add(1);
// numbers.add(2);
// numbers.add(3);
// numbers.add(4);
// numbers.add(5);
// numbers.add(6);
// numbers.add(7);
// numbers.add(8);
// we can store defferent datatype in set 
// const items=["item1","item2","item3"]
// numbers.add(items)
// numbers.add(items)// this will be ignore as item is already store



// numbers.add(["item1","item2"])this is different array with different address
// numbers.add(["item1","item2"])this is different array with different address
// in above case it will print both arrays because
// everyelemt has its unique address
// when we create array using square brace mean both are defferent arrays
// both will have defferent memory addreses
// in set if we want to check perticuler
// element is present in set or not
//  then we use has( )method
// if(numbers.has(1)){
//     console.log("1 is present")
// }
// else{
//     console.log("1 is not present")
// }
// is it iterable or not lets check
//  for(let itr of numbers){

//      console.log(itr)
//  }

//  now lets see where to use Set()
// set is used when we know there is unique values in our list of elements
// like roll numbers, phone number , email address


// if we want unique element of array we can use
// set to find unique  elemnt form array
const myArray=[1,2,3,4,4,5,6,6]
const uniqueElement=new Set(myArray);
console.log(uniqueElement)
// to print length of array
let length =0
 for(let element of myArray)
 {
    length++
 }
 console.log(length)

