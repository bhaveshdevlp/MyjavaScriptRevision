// primitive vs Reference data types
let num1=6;
let num2=num1;
console.log(num1)
console.log(num2)
num1++;
console.log(num1)
console.log(num2)

//Refeence data type
let array1=["a1","a2"]
let array2=array1
console.log(array1)
console.log(array2)
array1.push("a3")
// console.log(array1)
console.log(array2)

// in above code there is only one array so we have assign 
// array1 to array2
//  so if we make any changes it will reflect to array1 as 
//  both the array have the same address in stack memory
//   and is storeed in heap memroy