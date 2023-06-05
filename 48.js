//function inside funstion
// in javaScript we can create function inside function
function app(){
    const myfun=()=>{
        console.log("hellow this is function inside function")
    }
    const add=(n1,n2)=>{
        return n1+n2;
    }
    const mul=(n1,n2)=>n1*n2; // this is short cut way to implement arrow fun
    
    // this willl print first
    console.log("inside app")
    //calling function inside function
    myfun();
    console.log(add(2,3));
    console.log(mul(2,3));

}
app()
