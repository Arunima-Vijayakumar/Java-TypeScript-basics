
//Operators -- symbols used to perform an action, elements on whcih the operation is being done-- Operands
//Arithmetic operators --> +, -, x, /, %
//comparison operators--> equality can be checked in 2 ways, either the values alone (==), or
     //the variable and the datatype---> strict equality, symbolised by ===
//Logical Operator --> combines more than one operators, 
//Assignment operators
//Increment Operators

//Arithmetic --> returns a numeric value always
var x= 98
var y= 13

console.log(x+y)
console.log(x-y)
console.log(x*y)
console.log(x/y)
console.log(x%y)

//comparison operators -- returns boolean, default value is false 
console.log(x<y)
console.log(x>y)
console.log(x<=y)
console.log(x>=y)

//for equality, we cannot use a '=', because thats used for assigning values. so we use '==', to compare if values are equal
var a = "98"
console.log(x==a) //checks only value
console.log(x===a) //checks the data type too, since one is a number and another is a string

console.log(x!=a) //checks only valuea are not equal
console.log(x!==a)  //checks for value and data type

//Logical Operators -- to combine one or more conditions
console.log(x>y && x==a) //returns true only if both conditions are sarisfied 
//normally we dont use arithmetic inside logical, as arithmetic returns numeric

console.log(x>y || x==c) //OR operator
console.log(x>y || x===c) //returns true if either condition is true

//negation operator --> gives the opposite value of the original value, ie if operation returns true, it makes it false
console.log(!(x>y)) 

//Assignment operators
//basic assignment is =
// a= a+1 and a+=1, a=a-2 and a-=2 are the same, all arithmetic operations can be done this way 

//Increment Operators
//a=a++ (a=a+1), x=x-- (x=x-1)
//2 types-- post increment/decrement, and pre increment/decrement
// x++ or x-- : post; use and increase/decrease
// ++x or --x : pre; increase/decrease and use

let b = ++x
console.log(b) 
console.log(x) //both returns value added by 1 
let c= --x
console.log(c)
console.log(x) //both returns a value less than 1 

let d= x++
console.log(d) //returns added by 1
console.log(x) //returns old value

let e= x--
console.log(e) //returns subtracted by 1
console.log(x) //returns old value 
