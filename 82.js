
//  below is example of how function provids us prototype
//  so that we can store some extra functions inside the function
//  like we store in creatUser by doing creatUser.prototype
    function creatUser(firstname,lastname,age,email){
        const userinfo=Object.create(creatUser.prototype)
        userinfo.firstname=firstname;
        userinfo.lastname=lastname;
        userinfo.age=age;
        userinfo.email=email;
        return userinfo
    }
    creatUser.prototype.about=function(){
     return`${this.firstname} is ${this.age}year old`
    }
    creatUser.prototype.is18=function(){
        return this.age>=18;
    }
    creatUser.prototype.sing=function(){
        return " sing song "
    }
    const userset=creatUser('Bhavesh','sutar',22,'bhaveshsutar622@gmail.com')
    const userset1=creatUser('Rohit','malvi',21,'rohitmalvi@gmail.com')
    const userset2=creatUser('Akash','sutar',21,'akasjsutar62@gmail.com')
    const userset3=creatUser('shambu','sutar',22,'sh622@gmail.com')
    const userset4=creatUser('Bhavna','sutar',22,'bhavna622@gmail.com')
  
   console.log(userset)
   console.log(userset.about())
   console.log(userset1.is18())
   console.log(userset.sing())

   