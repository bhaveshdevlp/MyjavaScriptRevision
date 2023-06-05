const user1={
    firstname:"Bhavesh",
    age:22,
    about:function(){
        console.log(this.firstname,this.age)
    }
}
// user1.about();
// don't do this 
// const fun=user1.about
// fun()

// it wont bind with this as we are just storing referenc 
// of user1 but we are not calling the function
// alway do this to avoid arror
// do this 
// const fun=user1.about.bind(user1)
// fun()