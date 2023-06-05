// sort method in javaScript?
//ASCII TABLE
//char : ascii value
//'0' : 48
//'1' : 49
//'2' : 50
//'3' : 51
//'4' : 52
//'5' : 53
//'6' : 54
//'7' : 55
//'8' : 56
//'9' : 57

//':' : 58
//';' : 59
//'<' : 60
//'=' : 61
//'>' : 62
//'?' : 63
//'@' : 64

// A  : 65
// B  : 66
// C  : 67
// D  : 68
// E  : 69
// F  : 70
// G  : 71
// H  : 72
// I  : 73
// J  : 74
// K  : 75
// L  : 76
// M  : 77
// N  : 78
// O  : 79
// P  : 80
// Q  : 81
// R  : 82
// S  : 83
// T  : 84
// U  : 85
// V  : 86
// W  : 87
// X  : 88
// Y  : 89
// Z  : 90


// [  : 91
// \  :  : 92
// ]  : 93
// ^  : 94
// _  : 95
// '  : 96


  
// a  : 97
// b  : 98
// c  :99
// d  :100
// e  :101
// f  :102
// g  :103
// h  :104
// i :105
// j :106
// k :107
// l :108
// m :109
// n :110
// o :111
// p :112
// q :113
// r:114
// s:115
// t:116
// u:117
// v:118
// w:119
// x:120
// y:121
// z:122
//{  :123
//'/':124
//}  :125

// const numbers=[5,9,1200,400,3000]
//sort() converts array ements in string elements
//["5","9","1200","400","3000"]
//  53  57   49    52    51
//  const result=numbers.sort()
// console.log(result)
// output: 1200,3000,400,5,6 
// because sort converts it to string and take first accurance

// const userNames=['bhavesh','abcd','mohit'.'ABCD']
// userNames.sort()
// console.log(userNames)

// in above string  example  it will print value alphabets which
// starts from a to z

// so the output will be
//'ABCD', 'abcd','bhavesh','mohit'

// but i want my number to print in assending order and not in 
// ascii value
// const numbers=[5,9,1200,400,3000]
// numbers.sort((a,b)=>{
//     return a-b;
// })
// console.log(numbers)

// explain:
//  suppose take 1200, 400 a as 1200 b as 400
// now a-b =1200-400 =790 so it is possitive
// mean greater than 0 then we will take b first in this case 400
//400,1200 will print 
// and if number is nagative

// a=5 b=9 
// a-b will be -4 output is negative in this case 
// a's value will be printed first

// and if we want to print in decending order 
// simply do b-a 

// lest see an real time example of this 
const products=[
    {productId:1,productName:"NoiseSmartWatch",ProductPrice:1999},
    {productId:2,productName:"EarPhones",ProductPrice:1599},
    {productId:3,productName:"KeyBoard",ProductPrice:2999},
    {productId:4,productName:"ZebMouse",ProductPrice:1000},
    {productId:5,productName:"Hp Laptop",ProductPrice:58000},
]


//  products.sort((a,b)=>{
//     return a.ProductPrice-b.ProductPrice
// })
// console.log(products)

// the above method will give you the properOutPut but It will 
// Change orignal array as well 
// and to avoide this we should clone an array
// below function is using clonig array using spread operator

// const LowToHigh=[...products]=products.sort((a,b)=>{
//     return a.ProductPrice-b.ProductPrice
// })
// console.log(LowToHigh)
// the above method shows arror dont know why


// the below method is using slice method output will be same


// const LowToHigh=products.slice(0).sort((a,b)=>{
//     return a.ProductPrice-b.ProductPrice
// })
// console.log(LowToHigh)

// below method is using array concat( ) which is use to 
// clone un arrya
// const LowToHigh=[].concat(products).sort((a,b)=>{
//     return a.ProductPrice-b.ProductPrice
// })
// console.log(LowToHigh)

// refrence from 29.js


const books = [
    { title: 'The Great Gatsby', author: 'F. Scott Fitzgerald', year: 1925 },
    { title: 'To Kill a Mockingbird', author: 'Harper Lee', year: 1960 },
    { title: 'The Catcher in the Rye', author: 'J.D. Salinger', year: 1951 },
    { title: '1984', author: 'George Orwell', year: 1949 },
    { title: 'Animal Farm', author: 'George Orwell', year: 1945 }
  ];

  const HighToLow=books.slice(0).sort((a,b)=>
  {
    return b.year-a.year
  })
  console.log(HighToLow)

