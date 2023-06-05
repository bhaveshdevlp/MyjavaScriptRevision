// spread operator
// const array1=[1,2,3]
// const array2=[4,5,6]

// //const newArray=[...array1,...array2,"bhavesh"];
// const newArray=[..."123456789"];
// console.log(newArray)

// console.log(typeof newArray)
// console.log(newArray)

// spread operator in Object
const obj1={
    key1:"value1",
    key2:"value2"
};
const obj2={
    key3:"value3",
    key4:"value4"
};

const newObject={...obj1,...obj2,key45:"value34" }
//  const  newObject={..."bhavesh",..."akash" }//output= 0:b,1:h 2:a....


console.log(newObject)
