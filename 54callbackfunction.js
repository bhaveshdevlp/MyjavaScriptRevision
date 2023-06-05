// callback function
// in call back funstion we creeat function and call this function in 
// anohter function 
//here we createdd  fun1 ,fun3 and then call both function using
//fun2  by using call back function mathods of JavaScript

// const fun1=(a,b)=>{
//     console.log(a+b) 
//     console.log("i am function to be called")
    

// }
// const fun3=(a,b)=>{
//     console.log(a*b) 
//     console.log("i am function3 to be called")
    

// }

// const fun2=(callback,callback1)=>{
//     console.log("i am function to called")
//     callback(3,4)
//     callback1(3,4)
    
// }
// fun2(fun1,fun3);

// const fun1=(a,b)=>{
//     console.log(a+b)
// }

// const fun2=(callback)=>{
//     callback(2,8)
// }
// fun2(fun1)

// const fun1=()=>{
//     console.log("i am fun 1")
// }
// const fun2=()=>{
//     console.log("i am fun 2")
// }
// const fun3=(callback, callback2)=>{
//     console.log("mai call karunga")
//     callback()
//     callback2()
// }
// fun3(fun1,fun2)



const func1=()=>{
    console.log(" i am inside func1")
}

const myfunc=(callback)=>
{
    callback()
console.log(a)
console.log("hellow")
}

myfunc(func1)