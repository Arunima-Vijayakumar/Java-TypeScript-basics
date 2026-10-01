//Conditional Statements
//decisions are based on conditions, check conditiion and decide 

//if- else, if else-if ladder, switch case, Ternary operators
var age = 8
var year = 2006

if(age > 10)
{
    console.log("Age is valid") //if condition is true, it prints the value, if it is not true, it doesnt print anything

}

//if-else
if(age > 10){
console.log("Age is valid") //if condition is true, it prints the value, if it is not true, it doesnt print anything
}
else {
    console.log("Age is invalid")
}

//if-else-if ladder
if (age <13) {
console.log("The person is child")
}
else if (age >=13 && age <=19) {
    console.log( "The person is a Teenager")
}
else if (age >19 && age <=59){
    console.log("This is an adult")
}
else {
    console.log("This is a senior citizen")
}

//Ternary operators --short key of if-else
    //syntax:: condition?value if true: value if false.  like if age >= 18, else: minor 

let age = 31
age>=18 ? console.log("Adult") : console.log("Minor") 


//Switch statements, used for day 1; sunday, such case
let day= 3
switch (day) {
    case 1: //similar to day==1
    console.log("Monday")
    break //to come out of the switch block

    case 2:
        console.log("Tuesday")
        break

    case 3:
        console.log("Wednesday")
        break
    
    case 4:
        console.log("Thursday")
        break

    case 5: 
        console.log("Friday")
        break
    
    case 6:
        console.log("Saturday")
        break
    
    case 7:
        console.log("Sunday")
        break

    default:
        console.log("Invalid day")
}