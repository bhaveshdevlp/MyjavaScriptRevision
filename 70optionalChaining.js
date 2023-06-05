// optional chaining
// why we use optional chaining now in below code if we 
// print then it will show error as Address.houseNumber
// does not exist here but it can be added at anytime
// in future we don't know when we use optional chaining
// so that we prevent arror 
// const user={
//     FirstName:"Bhavesh",
//     // Address:{houseNumber:''}
// }
// console.log(user.FirstName);
// console.log(user.Address.houseNumber);

// and we use ? operator to do this
const user={
    FirstName:"Bhavesh",
    // Address:{houseNumber:''}
}
console.log(user?.FirstName);
console.log(user?.Address?.houseNumber);