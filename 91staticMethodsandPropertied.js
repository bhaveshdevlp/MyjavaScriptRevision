class person{
    constructor(firstname,lastname,age)
    {
        this.firstname=firstname;
        this.lastname=lastname;
        this.age=age
    }
    set fullName(fullName){
        const[firstnamem,lastname,age]=fullName.split(" ")
        this.firstname=firstnamem;
        this.lastname=lastname;
        this.age=age;
        
        }
    
    get fullName(){
        return`${this.firstname} ${this.lastname} ${this.age}`
    }
   
    eat(){
        return `Overriding mathod ${this.firstname} is eating`;
    }
    static myInfo(){
        return "my name is Bhavesh"
    }
    
}

const person1=new person("bhavesh")
console.log(person1.eat())

console.log(person.myInfo()) 
 

// once we create static method we don't need to creat object of class
// or dont need to creat instanceof
// we can directly call the static method with class name like below
// console.log(person.myInfo()) 