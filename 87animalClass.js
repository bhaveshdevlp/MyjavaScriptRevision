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
const lucky=new animal("lucky",3)

console.log(lucky.eat())
console.log(lucky.ages())
console.log(lucky.iscute())
