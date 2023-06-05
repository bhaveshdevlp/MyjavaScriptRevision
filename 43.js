//nested destructuring
// const users=[
//     {userid:1, username:"Bhavesh", userphone:1323454,gender:"male"},
//     {userid:2, username:"Bhavika", userphone:2323476764,gender:"female"},
//     {userid:3, username:"Bhavna", userphone:33234564,gender:"female"},
//     {userid:4, username:"akash", userphone:4323454454,gender:"male"},
//     {userid:5, username:"Rohit", userphone:535423454,gender:'"male"'},

// ]

// in destructuring we creat an variable and store values in that 

// const[user1,user2,user3]=users;
// console.log(user3)

// if we want to access perticutler elemnt like username,userid
// then we follow following steps
    // const[{username:fname}]=users
    // const[,{username:sname}]=users
    // const[,,{username:tname}]=users

    // const[{userphone:us1},,
    //       {userphone:us3},,
    //       {userphone:us5}]=users

        //   in above example we use first "," to seperate the object which is 
        //   compulsory while creating object and second ", " to skip an object 
        //   here we have skiped userphone2 and userphone4

// console.log(sname) 
// console.log(tname)
// console.log(us1)
// console.log(us3)
// console.log(us5)


// const users=[
//     {userid:1, username:"Bhavesh", userphone:1323454,gender:"1male"},
//     {userid:2, username:"Bhavika", userphone:2323476764,gender:"2female"},
//     {userid:3, username:"Bhavna", userphone:33234564,gender:"3female"},
//     {userid:4, username:"akash", userphone:4323454454,gender:"4male"},
//     {userid:5, username:"Rohit", userphone:535423454,gender:'"5male"'}]

//     const[{gender:g5},,{username:u1}]=users
//     // console.log(g)
//     console.log(g5)
//     console.log(u1)

const user = {
    name: 'John Doe',
    email: 'john.doe@example.com',
    address: {
      street: '123 Main St',
      city: 'Anytown',
      state: 'CA'
    }
  };
  
  const{name,email, address:{street,city,state}}=user
  console.log(street)