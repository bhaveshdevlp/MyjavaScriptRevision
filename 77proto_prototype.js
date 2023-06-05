// const user={
//     firstname:"Bhavesh",
//     lastname:"Sutar",
//     email:"bhaveshsutar622@gmail.com",
//     age:22,
//     about(){
//         return`${this.firstname} is ${this.age} years old`
//     },
//     is18(){
//         return this.age>=18;

//     }
// }
// const result=user.about(user)
// console.log(result)

// the above object is fine but what will we do if we want to creat
// 1million object as above it will we to much hard word to write this
// so we need better aproach 

// so we will creat function that will take all key  as input
// and will retun object to me and will return object

function creatUser(firstname,lastname,age,email){
const userinfo={};
userinfo.firstname=firstname;
userinfo.lastname=lastname;
userinfo.age=age;
userinfo.email=email;
userinfo.about=function(){
    return`${this.firstname} is ${this.age} years old`
},
userinfo.is18=function(){
    return this.age>=18;

}
return userinfo
}

const userset=creatUser('Bhavesh','sutar',22,'bhaveshsutar622@gmail.com')
const userset1=creatUser('Rohit','malvi',21,'rohitmalvi@gmail.com')
const userset2=creatUser('Akash','sutar',21,'akasjsutar62@gmail.com')
const userset3=creatUser('shambu','sutar',22,'sh622@gmail.com')
const userset4=creatUser('Bhavna','sutar',22,'bhavna622@gmail.com')
console.log(userset)
const a=userset.about(userset)
console.log(a)

const is18=userset.is18()
console.log(is18)

// but this code has lots of kamiya that we discused in next file ..78.js