// for loop in array
// let fruits=["apple","mango","banana","grapes"]

// let fruits2=[]
// for(let i=0;i<fruits.length;i++){
// fruits2.push(fruits[i].toUpperCase())
// }
// console.log(fruits2)

// console.log(fruits[fruits.length-1])//last elemet will be print


// let namem=["bhavesh","akash","rohit"]
// for(let i=0;i<namem.length;i++){
    
    
//     console.log(namem[i].toUpperCase())

// }

// using for of loop 
// let fruits=["apple","mango","banana","grapes"]
// let fruits2=[]
// for(let a of fruits){
//     fruits2.push(a.toUpperCase())
// }
// console.log(fruits2)

let cars=["bmw",'audi','tata','mercedise']
let cars2=[]
for(i=0;i<cars.length;i++)
{
    if(cars[i]==='audi')
    {
        continue
    }
    cars2.push(cars[i].toUpperCase())
}
console.log(cars2)