// //break
// //continue keyword
// for(let i=0; i<10; i++){
//     if(i===5){
//         break;
//     }
//     console.log(i)
// }
// console.log("break after 5 number won print")

// for(let i=0; i<10; i++){
//     if(i===5){
//         continue;
//     }
//     console.log(i)
// }
// console.log("continue will skipe 5 ")

const names=["bhavesh","akash","rohit","sahil"]

console.log(names.length)
for(let i=0; i<names.length;i++)
{
    if(names[i]==="rohit"){
        continue;
    }
    
    console.log(names[i])
}