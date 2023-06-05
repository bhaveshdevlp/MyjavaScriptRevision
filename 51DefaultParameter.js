//default parameters
// const addTwo=(a,b)=>{
//     if(typeof b==="undefined"){

//         b=1;
//  what happenig in above code is it will check whether the value
// of b is undefinded or not in its not then it will set
//b=1 here value of a is defined but not value of b is defined

//     }
// return a+b
// }
// const and=addTwo(4)
// console.log(and)
//this is old method to set defaul parameter 
// new mathod is below
const addTwo=(a,b=0)=>{
    return a+b
}
const and=addTwo(4)
console.log(and)

// in new method we dont need to creat if condition 
//we just set value in parameters so its is called default
//parameter