// new keyword
// function creatUser(firstname, age){
//     this.firstname=firstname;
//     this.age=age;
// }
// creatUser.prototype.about=function(){
//    console.log( this.firstname,this.age)
// }
// const user1=new creatUser("bhavesh",22)
// user1.about();

// new keyword
//1.)empty object this={} empty object creat kiya 
//2.) retrun this

// in back we did Object.create(creatUser.prototype) to creat prototype
// but here new keyword does it automaticaly for us just be creat  reference Object
// user1

//  below is example of how function provids us prototype
//  so that we can store some extra functions inside the function
//  like we store in creatUser by doing creatUser.prototype
function creatUser(firstname,lastname,age,email){
    this.firstname=firstname;
    this.lastname=lastname;
    this.age=age;
    this.email=email;
   
}
creatUser.prototype.about=function(){
 return`${this.firstname} is ${this.age}year old`
}
creatUser.prototype.is18=function(){
    return this.age>=18;
}
creatUser.prototype.sing=function(){
    return " mera lelo "
}
 const userset=new creatUser('Bhavesh','sutar',22,'bhaveshsutar622@gmail.com')
const userset1=new creatUser('Rohit','malvi',21,'rohitmalvi@gmail.com')
const userset2=new creatUser('Akash','sutar',21,'akasjsutar62@gmail.com')
const userset3=new creatUser('shambu','sutar',22,'sh622@gmail.com')
const userset4=new creatUser('Bhavna','sutar',22,'bhavna622@gmail.com')

console.log(userset)
console.log(userset.about())
console.log(userset1.is18())
console.log(userset.sing())

// here we take 82.js program and add new keyword to this program
// which does the same thing new keyword automaticaly sets tha
// prototype we dont need to add manualy

