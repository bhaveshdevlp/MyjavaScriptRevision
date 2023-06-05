// function expression

// in function expresion we assign perticular function to the variable
// besicaly we creat variable and give function to that created variable
// const addThreeNum=function(num1,num2,num3){ // here addThreeNum is variable and function has assign to it 
// return num1+num2+num3
// }
// console.log(addThreeNum(2,3,4))

// function in javaScript
// simple function

// const singSong=function (){
//     console.log("kendy hundy see")
// }



// singSong()
// singSong()
// singSong()
// singSong()

// we follow do not repeat the code  so we use function 
// write once use any time
// so we will create additoion function here and use 
//it multiple time

// addTwoNUm=function(n1,n2){
//    this.num1=n1
//    this.num2=n2
//     return num1+num2;
// }
// const result=addTwoNUm(4,5)
// console.log(result)

//isEven
// inpute:1 number
// outupt: true or false

// const isEven=function(num){
//     if(num % 2===0){
//         return true;
//     }
//     return false;
// }
// const result=isEven(4)
// console.log(result)
//**********SAME FOR ALL BELOW******************** */
// less code
// function isEven(num){
//     return num%2===0
// }
// console.log(isEven(4))

//function to print firstchar of string

// function firstchar(String){
//     console.log(String[0])
// }
// firstchar("bhavesh")

// functoin to find given number is preesnt in array or not
//input: array, targer(number)
//output :index of target id target present in array

// function findTarget(array,target){
//     for(let i in array){
//         if(array[i]===target){
//             return i;
//         }
//     }
//     return -1
// }
// const myarray=[1,2,3,4,5]
// const result=findTarget(myarray,3)
// console.log(result)
 

//  if we already have function declaration why we need function expression
// In JavaScript, function declarations and function expressions are two ways to define a function, and they have different use cases.

// A function declaration is created with the function keyword, followed by the function name, parameter list, and function body. A function declaration is hoisted to the top of its scope, which means that it can be called before it is declared. Here's an example of a function declaration:
// function add(a, b) {
//     return a + b;
//   }
//  A function expression, on the other hand, is created by assigning a function to a variable or a property of an object. Function expressions are not hoisted, so they cannot be called before they are declared. Here's an example of a function expression: 
//  const subtract = function(a, b) {
//     return a - b;
//   };

//  1 Assigning a function to a variable:
// Suppose you are building a shopping cart application, and you want to create a function that calculates the total price of all the items in the cart. You might use a function expression to define the function and assign it to a variable:
  
// const calculateTotal = function(cartItems) {
//     let total = 0;
//     for (let i = 0; i < cartItems.length; i++) {
//       total += cartItems[i].price;
//     }
//     return total;
//   };

//   2.Defining a function inside another function:
// Suppose you are building a todo list application, and you want to create a function that adds a new todo item to the list. You might use a function expression to define the addTodo function inside the TodoList constructor function:

// function TodoList() {
//     this.todos = [];
  
//     const addTodo = function(todoText) {
//       const todo = {
//         id: this.todos.length + 1,
//         text: todoText,
//         completed: false
//       };
//       this.todos.push(todo);
//     };
  
//     this.getTodos = function() {
//       return this.todos;
//     };
  
//     this.addTodo = addTodo;
//   }
  
  
 