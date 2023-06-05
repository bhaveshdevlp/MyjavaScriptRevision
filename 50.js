//block scope vs function scope

// let and const are block scope
// var is function scope
// in javascript code written in 
// {

// } is block scope

// {
//     let myname="Bhavesh"
//     console.log(myname);

// }
// console.log(myname);
// if we try to access let or const myname outside the block it
// won't access as let and const are block scope
// we can only access them inside the block


// {
//     var  myname="Bhavesh"
// }
// console.log(myname)

// here when we declaire variable in var we can access it out side the block
// as var is function scope 
// javascript is kind of function 

function myapp(){
   function p(){
    
    if(true){
        let firstname="Bhavesh"
    }
    console.log(firstname)
}

}
myapp()
// this function will throw an error like this 
// Uncaught ReferenceError: firstname is not defined
// why because we are try to access 'firstname' out side the block