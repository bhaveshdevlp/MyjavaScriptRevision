const user={
    firsname:"Bhavesh",
    age:8,
    about:()=>{
        console.log(this,firsname, this.age)
    }
}

// we dont need to write key value pair we can write in below way to
const user1={
    firsname:"Bhavesh",
    age:8,
    about(){
        console.log(this,firsname, this.age)
    }
}
