// splice method
// start, delete , insert

// splice method is also used to manipulate array elements
// const myArray=["item1","item2","item3","item4"]
//  for delete
// here starting index and how many elements you want to delet
// here starting index is 1 and elements to be deleted are 
// 2 so item2 and item3 will be deleted
// myArray.splice(1,2)
// console.log(myArray)
 // we can print deleted item simply by storing it to new 
//  Variable
//const deletedItem=myArray.splice(1,2)
//console.log(deletedItem)
//console.log(myArray)

// for delete
// here starting index is 1 and element you want to delete
//is 0 
// you can delete elements id you want
//and to be inserted "item111" will be inserted 
//to index 1 
// myArray.splice(1, 0 ,"item111")
// console.log(myArray)

// for insert and delete equaly
// const deletedItem=myArray.splice(0,2,"item11","item22")
// console.log(myArray)
// console.log(deletedItem)


const myarr=['bhavesh','akash','rohit','aaa','bbbb']
const dl=myarr.splice(2,2,'xxx','zzz')//index,element to delet,element to insert
console.log(myarr) //output= ['bhavesh', 'akash', 'xxx', 'zzz', 'bbbb']
console.log(dl)