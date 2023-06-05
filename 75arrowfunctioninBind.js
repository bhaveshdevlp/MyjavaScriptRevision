const user1={
    firsname:"Bhavesh",
    age:8,
    about:()=>{
        console.log(this.firsname, this.age)
    }
}
user1.about(user1)
// arrow function ka this nhi hota iska this ek level up hot hai
// arrow functon ka this window object hota hai