// important array methods
// foreach
//map .... very important
//filter
//reduce


// forEach

// the following function is simple funtion take number index as input
// and simply multiply it by two
//  const numbers=[2,3,4,5,6]
//  const mulByTwo=(number,index)=>{
//     console.log(index)
//     console.log(`${number}*2=${number*2}`)
//  }
//  mulByTwo(numbers[0],0) //number[0]=8,0=index

//now we want to access all element one by one 
// so we will first use tradition for loop
 // we will just call function in for loop see how and 
 // function will call for each element one by one

// const mulByTwo=(number,index)=>{
//         console.log(index)
//         console.log(`${number}*2=${number*2}`)
//      }
//      for(let i=0;i<numbers.length;i++){
//         mulByTwo(numbers[i],i);/number[i]=8,i=index
//      }

// but we literally dont need to write as much code as above 
// we can do it by simply using for each loop show below how 

// const mulByTwo=(number,index)=>{
//     console.log(index)
//     console.log(`${number}*2=${number*2}`)
//  }
    //  syntax arrayname.foreach(functionName)
//  numbers.forEach(mulByTwo)
//  for each will do everything automatic for you

// we can do same thing using Anonymous function see how
// what is Anonymous function it is basical function without name function which has no specific name
// numbers.forEach(function(number,index){
//     console.log(index)
//     console.log(`${number}*2=${number*2}`)
// })
// now lets see realistic example of for each loop where we cn use it 
const person=[
    {FirstName:"Bhavesh",Age:22,gender:"male"},
    {FirstName:"Avesh",Age:22,gender:"male"},
    {FirstName:"Akash",Age:22,gender:"male"},
    {FirstName:"Rohit",Age:22,gender:"male"},
]

// for(element of person){
//     console.log(element)
// }
// person.forEach(element => {
//     console.log(element.Age)
// });
// person.forEach((abc)=>{
//    console.log(abc.FirstName) 
// })


// person.forEach((a)=>{
//     console.log(a.gender)
// })


const number=[2,3,4,5,6,7]
const mulByTwo=(number,index)=>{
    console.log("index is ",index)
    console.log(`${number}*2= ${number*2}`)
}
//     for(let i in number)
//     {

//     mulByTwo(number[i] i)
// }

number.forEach(mulByTwo )