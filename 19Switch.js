// // switch statement
// let day= + prompt("enter your day between o to 6")
// switch(day)
// {
//     case 0:
//         console.log("Sunday");
//         break;
//     case 1:
//         console.log("Monday");
//         break;
//     case 2:
//         console.log("Tuesday");
//         break;
//     case 3:
//         console.log("Wednesday");
//         break;
//     case 4:
//         console.log("Thursday");
//         break;
//     case 5:
//         console.log("Friday");
//         break;
//     case 6:
//         console.log("Saturday");
//         break;
//     default:
//         console.log("invalid day");
//         break;

//         break;
// }

// let favMoblie=prompt("enter your favorite Mobile").toLowerCase()
// switch(favMoblie)
// {
//     case "mi": console.log(" Buy Mi phone") 
//     break;
//     case "samsung": console.log(" Buy SAMSUNG phone")
//     break;
//     case "iphone": console.log(" Buy IPHONE phone")
//     break;
//     case "realmi": console.log(" Buy REALMI phone")
//     break;
//     default: console.log("invalid")
//     break;
//     }


    const fruits=[
        {name:'apple',color:'red'},
        {name:'banana',color:'yellow'},
        {name:'orange',color:'orangy'},
        {name:'grapes',color:'purple'},
        
];

const userInput=prompt("enter your name of a fruit")
switch(userInput.toLowerCase())
{
    case 'apple': console.log(`the fruit name is ${fruits[0].name} and color is ${fruits[0].color}`)
    break;
    case 'banana': console.log(`the fruit name is ${fruits[1].name} and color is ${fruits[1].color}`)
    break;
    case 'orange': console.log(`the fruit name is ${fruits[2].name} and color is ${fruits[2].color}`)
    break;
    case 'grapes': console.log(`the fruit name is ${fruits[3].name} and color is ${fruits[3].color}`)
    break;
    default: console.log(" your choice is not int the database")
}