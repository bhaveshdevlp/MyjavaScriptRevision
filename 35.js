//array destructuring
// const myarray=["value1","value2","value3","value4"]
// let myvar1=myarray[0]
// let myvar2=myarray[1]
// console.log("my var 1",myvar1)
// console.log("my var 2",myvar2)
//this is old way to do but javaScript provides US short cut to do that
// let[myvar1, myvar2]=myarray
// console.log("my var 1",myvar1)
// console.log("my var 2",myvar2)


//if we want to store value3 in myvar2 variable just add ","
//, will skip second position
// let[myvar1, , myvar2]=myarray
// console.log("my var 1",myvar1)
// console.log("my var 2",myvar2)

//we can store remaining array elements in new array by using 
// spread operator 
// let[myvar1,myvar2, ...mynewarray]=myarray
// console.log("my var 1",myvar1)
// console.log("my var 2",myvar2)
// console.log(mynewarray)

// const myarray1=["bhavesh","akash","rohit","sahil","jitu"]
// let[name0,name1, ,name2]=myarray1
// console.log(name2)

// let[name0,name1,...mynewarray]=myarray1
// console.log(mynewarray)

// const marks=[98,78,99,78,67,89,87,56,90,87]
// let[bhavesh, Akash, rohit, sahit, sushil, rohan, jitu, pranay, sumit, kailash, 
// bhai, don, chota_don]=marks
// console.log(bhavesh) 

