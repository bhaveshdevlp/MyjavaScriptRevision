//getter and setters
class person{
constructor(firstname,lastname,age)
{
    this.firstname=firstname;
    this.lastname=lastname;
    this.age=age
}
// set fullName(fullName){
//     const[firstnamem,lastname,age]=fullName.split(" ")
//     this.firstname=firstnamem;
//     this.lastname=lastname;
//     this.age=age;
    
//     }

get fullName(){
    return`${this.firstname} ${this.lastname} ${this.age}`
}
// setName(firstname,lastname){
//     this.firstname=firstname;
//     this.lastname=lastname;
// }

}
const bhavesh=new person("bhavesh","sutar",22)
// console.log(bhavesh.fullName)
// console.log(bhavesh.firstname);/
// console.log(bhavesh.lastname);
// bhavesh.fullName="Rohit malvi 22";
console.log(bhavesh.fullName)

// bhavesh.setName("Akash","sutar")
// console.log(bhavesh.firstname);
// console.log(bhavesh.lastname);
