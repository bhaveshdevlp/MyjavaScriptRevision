// class keyword in javascript
// class is fake in javaScript


class creatUser{
    constructor(firstname,lastname,age,email){
        this.firstname=firstname;
        this.lastname=lastname;
        this.age=age;
        this.email=email;
       
    }
    about(){
        return`${this.firstname} is ${this.age}year old` 
    }
    is18(){
        return this.age>=18;
    }
    sing(){
        return " mera lelo "
    }
}
 const userset=new creatUser('Bhavesh','sutar',22,'bhaveshsutar622@gmail.com')
const userset1=new creatUser('Rohit','malvi',21,'rohitmalvi@gmail.com')
const userset2=new creatUser('Akash','sutar',21,'akasjsutar62@gmail.com')
const userset3=new creatUser('shambu','sutar',22,'sh622@gmail.com')
const userset4=new creatUser('Bhavna','sutar',22,'bhavna622@gmail.com')
console.log(userset.about())
console.log(userset1)
console.log(userset2)

// console.log(Object.getPrototypeOf(userset))
