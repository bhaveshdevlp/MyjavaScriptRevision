// const user1={
//     firstname:"harshit",
//     age:8,
//     about:function(hobbie,game){
//         console.log(this.firstname,this.age,hobbie,game)
//     }
// }
// const user2={
//     firstname:"Bhavesh",
//     age:22,
   
// }

// user1.about.call(user2,"development ", "cricket")
//call
// if we want to call method from user1 in but want to 
// Print data of user2 then we use "call " method
// here we first write "user1" then "about" method and then "call "
// and inside brackets we write object from which we want to excess data 
// which is user2
 
//apply
//apply method is also same as call
// in call we put arguments saperaly but in apply we just
// pass array of arguments shown in follow

// user1.about.apply(user2,["watching","cricket"])


//bind
// bind simply does nothing it returns function 
// and we can call this function when ever we want in futur
//  const f1=user1.about.bind(user2,"codding","sudoko")
//  f1()


 const u1={
    name:"Bhavesh",
    age:23,
about:function(address,id){
    console.log(this.name,this.age,address,id)
}
 }
 const u2={
    name:"Akash",
    age:22,

}

u1.about.call(u2,"at jambhulpada ",123)