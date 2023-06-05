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
    }
    
    const lucky=new dog("lucky",3,45)
    console.log(lucky)
    console.log(lucky.run())
    // console.log(lucky.eat())
    // console.log(lucky.ages())
    // console.log(lucky.iscute())


    // super key word is use to call parent class constructor or method 
    