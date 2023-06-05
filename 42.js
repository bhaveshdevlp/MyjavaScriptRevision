// object inside array
//very useful in real world application

// we can creat miltiple object inside single array

const users=[
    1,
    {userid:1, username:"Bhavesh", userphone:1323454,gender:"male"},
    {userid:2, username:"Bhavika", userphone:1323476764,gender:"female"},
    {userid:3, username:"Bhavna", userphone:13234564,gender:"female"},
    {userid:4, username:"akash", userphone:1323454454,gender:"male"},
    {userid:5, username:"Rohit", userphone:135423454,gender:'"male"'},

]
for(let user in users){
    // console.log(users[user])

}