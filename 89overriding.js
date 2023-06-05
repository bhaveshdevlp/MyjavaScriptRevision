// same method in subclass
// when method is overriding javascript will check
// the method is exist in subclass ,derives class ,child class or not 
// and if its exist it will print otherwise it will check in
// parent class and print parent class method
class animal{
    constructor(namem,age){
        this.namem=namem;
        this.age=age;
    }
    eat(){
        return `${this.namem} is eating`;
    }
    ages(){
        return `${this.namem}is ${this.age} years old`
    }
    iscute(){
        return true;
    }
    }
    // let creat inheritance
    class dog extends animal{
        constructor(namem,age, speed){
        super(namem,age);
        this.speed=speed;
        }
    run(){
        return`${this.namem} is ${this.age} year old and speed is ${this.speed}`

    }
    eat(){
        return `Overriding mathod ${this.namem} is eating`;
    }
    }
    
    const lucky=new dog("lucky",3,45)
    console.log(lucky)
    console.log(lucky.run())
    console.log(lucky.eat())
    // console.log(lucky.eat())
    // console.log(lucky.ages())
    // console.log(lucky.iscute())
   const animal1=new animal("fuccky")
   console.log(animal1.eat())

    // super key word is use to call parent class constructor or method 
    