//lexical scope
// const myvar="value2";
// function myapp(){
//     const myvar="value1";
     
//     const myfun=function(){ //function expression
//         const myvar="value69";

//         console.log("inside function",myvar)
//     }
//     console.log(myvar)
//     myfun()
// }
// myapp()

// so when we call myapp() it will print myvar="value1"which is 
// inside the main function and then it will check myfun()function 
// and simply print value inside inside myvar which is "value69"

// but if we comment const myvar="value69"; then javaScript will check myvar in
// lexical environment ,laxical environment of myfun is myapp()and when its will find "myvar" it will print the value 
// and if myvar does not found in myapp then it will check lexical environment 
// of myapp which is global scope

