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

// function creatUser(firstname,lastname,age,email){
//     const userinfo={};
//     userinfo.firstname=firstname;
//     userinfo.lastname=lastname;
//     userinfo.age=age;
//     userinfo.email=email;
//     userinfo.about=userMethod.about
//     userinfo.is18=userMethod.is18
//    now we have pass referene of this methods so every time when object is created
//    java script will call address at with the below functon is Store
//    and will give output 
//    and will not creatd function again and again as it is alredy creatd in usermethod object
//    which is store in heap memory some where else
    // return userinfo
    // }
    // const userMethod={
    //     about:function(){
    //         return`${this.firstname} is ${this.age} years old`
    //     },
    //    is18:function(){
    //         return this.age>=18;
        
    //     }
    // }
    
    // const userset=creatUser('Bhavesh','sutar',22,'bhaveshsutar622@gmail.com')
    // const userset1=creatUser('Rohit','malvi',21,'rohitmalvi@gmail.com')
    // const userset2=creatUser('Akash','sutar',21,'akasjsutar62@gmail.com')
    // const userset3=creatUser('shambu','sutar',22,'sh622@gmail.com')
    // const userset4=creatUser('Bhavna','sutar',22,'bhavna622@gmail.com')
    // console.log(userset)
    // const a=userset.about(userset)
    // console.log(a)

    // console.log(userset1.about(userset1))
    // console.log(userset2.about(userset2))
    
    // const is18=userset.is18()
    // console.log(is18)
    
    // but this code has lots of kamiya that we discused in next file ..78.js

    // so if we create multiple usersets every time about and is18 method will be
    // created in memory right we dont want this methods to print or store again and again
    // so we will store this methods in another object

    // 78 ka solution is below take reference from 80.js
    // so the matter is above we have created to two method inside userMethod
    // which is about and is18
    // and simply added them to creatUser funtion 
    // but what if there are thousands of method that we have to creat 
    // and we have to add all them to another function like we does above 
    // then is will be headack and code will be messy 

    // so we use another method to so same which will set __proto__
    // of userMethod
    // const obj=Object.create(methods to be set)


    function creatUser(firstname,lastname,age,email){
        const userinfo=Object.create(userMethod)
        userinfo.firstname=firstname;
        userinfo.lastname=lastname;
        userinfo.age=age;
        userinfo.email=email;
        return userinfo
    }
    // we creat methods here that we dont want to creat again and again
    const userMethod={
        about:function(){
            return`${this.firstname} is ${this.age} years old`
        },
       is18:function(){
            return this.age>=18;
        
        },
        lelo:function(){
            return "good boy"
        }
    }

    const userset=creatUser('Bhavesh','sutar',22,'bhaveshsutar622@gmail.com')
    const userset1=creatUser('Rohit','malvi',21,'rohitmalvi@gmail.com')
    const userset2=creatUser('Akash','sutar',21,'akasjsutar62@gmail.com')
    const userset3=creatUser('shambu','sutar',22,'sh622@gmail.com')
    const userset4=creatUser('Bhavna','sutar',22,'bhavna622@gmail.com')
    // console.log(userset)
    // const a=userset.about(userset)
    // console.log(a)

    // console.log(userset1.about(userset1))
    // console.log(userset2.about(userset2))
    
    // const is18=userset.is18()
    // console.log(is18)
    console.log(userset)
    console.log(userset.about(userset))
    console.log(userset.lelo(userset))
    console.log(userset1)
    console.log(userset1.about(userset1))
    console.log(userset1.lelo(userset1))

    // now you creat thousand million method all method will 
    // automaticaly called with this "const userinfo=Object.create(userMethod)" by one line of code
   