// let num= +prompt("enter your number")
// let total=0;
// for(i=0;i<=num;i++){
//     total=total+i;
// }
// console.log(total)


let input_num=+prompt("enter your num")
if(input_num<10)
{
    alert("please inter greater than 10 number")
}
else {

    let total=0
    for(i=0;i<=input_num;i++)
    {
        total+=i
    }
    console.log(total)
}