// cloning using Object.assign
// so there is heap memory in which object is store 
// and each object has unique address we have assign
// obj to obj2 so both will share same memroy address

const obj={
    key1:"value1",
    key2:"value2"
}
// const obj2=obj;
//key3 will be added in both as it shares same address
//and to avoid this we use object cloning
// using spread operator
//const obj2={...obj}
// we can use Object.assign method to do same
const obj2=Object.assign({},obj); 

obj.key3="value3"
console.log(obj)
// obj2.key4="value4"
console.log(obj2)