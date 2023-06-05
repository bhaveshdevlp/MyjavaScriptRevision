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

for(let key in userset){
    // console.log(key)
    if(userset.hasOwnProperty(key))
    {
        console.log(key)
    }
}

// to print only keys of userset