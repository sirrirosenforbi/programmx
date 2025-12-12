let myName ="sirri Rose"
let age    =18
console.log(myName)

function add(num1, num2){
    let sum = num1 + num2 
return sum;
}
//calling the add function to add 2 numbers
console.log(add(4,2))

if(age >=18 && age <70){
    console.log("oops you are too old")
}else if(age > 70){
    console.log("sorry you are a baby")
}

let amount =4
do{
    console.log("The number is less than 8 " + amount)
    amount++

}while(amount < 8 )