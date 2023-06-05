
// __proto__, [[prototype]] and prototype are different thing
 
// we will discuss prototype below
function hellow(){
console.log("hellow Bhaie")
}
// javascript function ek function bhi hai or object bhi hai 
//console.log(hellow.name)// this will return name of the function

//you can add your own proterties
// hellow.myownProperties="very unique value"
// console.log(hellow.myownProperties)
// dekha kai se hum ek function ko object jesa trit kr skte hai


// funtion provides more properties
console.log(hellow.prototype)
// function provides prototypes mean some free space 
// where we can store our unique data

// only function provides prototype property
if(hellow.prototype){
    console.log("prototype is present")
}
else{
    console.log("prototype is not present")
}

// object or array or any kind of other list does not provid 
// prototype
// only Function provids prototype