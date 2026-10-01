//1. Declare a variable name and store your name. Prin it using console.log()

var name= "Arunima"
console.log(name)

//2. Predict the o/p >> 20 will be printed

//3. David will be printed

//4.
var name1 = "Arunima V"
var age= 31
var city= "Canbridge"
console.log(name1)
console.log(age)
console.log(city)


//ASSIGNMENT 2
//1. Declaring variables.
var name= "Arunima"
var age= 31
var height= "160 cm"
var isStudent= false
var favSubject= "Maths"

console.log(name)
console.log(typeof(name))
console.log(age)
console.log(typeof(age))
console.log(height)
console.log(typeof(height))
console.log(isStudent)
console.log(typeof(isStudent))
console.log(favSubject)
console.log(typeof(favSubject))

//2. creating an array of 5 studenr names
var studentNames= ["Arunima", "Chirag", "Devika", "Vijayakumar", "Ananya"]
console.log(studentNames[0])
console.log(studentNames[4])
console.log(studentNames.length)

//3. create an array of 5 fruits.
var fruits= ["Apple", "Banana", "Mango", "Grapes", "Orange"]
fruits.push("Pineapple") //adding a new fruit to the end of the array
fruits.unshift("Watermelon") //adding a new fruit to the beginning of the array
console.log(fruits)
fruits.pop() //removing the last fruit from the array
fruits.shift() //removing the first fruit from the array
console.log(fruits)

//4. predict the output of the following code 
// ans: 3
//ans: {"Red', "Green", "Blue", "Yellow""}
//ans: {"Red", "Green", "Blue"}
//ans: {"Black", "Red", "Green", "Blue"}

//5. create a car object 
var car= {brand: "Toyota", model: "Camry", year: 2020, price: "$25,000"}
console.log(car)
console.log(car.brand)
console.log(car["model"])
console.log(car.year)
console.log(car.price)

//6. predict
//ans: "Anu"
//ans: 25
//ans: {name: "Anu", age: 26, city: "Kochi", country: "India"}

//7. create an array of 5 emp objects
var emp_data= [ {ID: 101, name: "Anu", department: "Development", salary: 50000,},
    {ID: 102, name: "Chirag", department: "Testing", salary: 40000,},
    {ID: 103, name: "Devika", department: "Development", salary: 60000,},
    {ID: 104, name: "Vijayakumar", department: "Testing", salary: 45000,},
    {ID: 105, name: "Ananya", department: "Development", salary: 55000,}
]

//ASSIGNMENT 3
//1. Write a javascript prgm to check whether a numb 
var num1= 89
if (num1>0) {
    console.log("The number is positive")
}
else if (num1<0) {
    console.log("The number is negative")
}
else {
    console.log("The number is zero")
}
//2. compare 2 nums
var num2= 56
var num3= 17
if (num2>num3) {
    console.log(num2 + " is greater than " + num3)
}
else {
    console.log(num3 + " is greater than " + num2)
}
//3. Use swtich to perform the following operations: +, -, *, /, %
var num4= 20
var num5= 5
var operator= "*"
switch (operator) {
    case "+":
        console.log(num4 + num5)
        break
    case "-":
        console.log(num4 - num5)
        break
    case "*":
        console.log(num4 * num5)
        break
    case "/":
        console.log(num4 / num5)
        break
    
    default:
        console.log("Invalid operator")
}
//4. calculaate the total bill based on units and charges
 //0-100 units --> 5/unit
 //101-200 units --> 7/unit
 //201-300 units --> 10/unit
 //301 and above --> 15/unit

var units= 250
var charges= 0
if (units<=100) {
    charges= units*5
}
else if (units> 100 && units<=200) {
    charges= units*7
}
else if (units>200 && units<=300) {
    charges= units*10
}
else {
    charges= units*15
}
console.log("Total bill is: " + charges)

//5. Print numbers from 10 to 1
for (let i=10; i>=1; i--) {
    console.log(i)
}

//6. Print numbers from1 to 10 that are divisible by 3
for (let i=1; i<=10; i++) {
    if (i%3==0) {
        console.log(i)
    }
}

//1. WRITE A FUNCTION
function calculateAverage(a,b,c){
    return (a+b+c)/3
   
}
console.log (calculateAverage(10,20,30))

//2. largest
function largest(a,b,c){
    if (a>b && a>c){
        console.log(a+" is the largest number")
    }
    else if (b>a && b>c){
        console.log(b+" is the largest number")
    }
    else {
        console.log(c+ " is the largest number")
    }
    }

console.log(largest(32,23,44))

//3. countVowels(str) to count the num of vowels in a string 
function countVowels(str) {
  let count = 0
  const vowels = "aeiouAEIOU"

  for (let char of str) {
    if (vowels.includes(char)) {
      count++
    }
  }
  return count
}

console.log(countVowels("Hello Arunima"))

//4. create a function calculateInterest() using:

function calculateInterest(){
    let principal= 5000
    let rate= 5
    let time= 2
    return (principal*rate*time)/100

}
console.log(calculateInterest())

//5. findFactorial() to find factorial of a predefined num
function findFactorial() {
  const num = 5 // predefined number
  let factorial = 1

  for (let i = 1; i <= num; i++) {
    factorial *= i
  }

  return factorial
}

console.log(findFactorial())

//ASSIGNMENT 5
//1. 
class Mobile{
    constructor(brand, model, price){
        this.brand=brand
        this.model=model
        this.price=price
    }
    displayDetails(){
        console.log(this.brand)
        console.log(this.model)
        console.log(this.price)

    }

}
let iphone17 = new Mobile("apple", "pro", 1600)
let pixel= new Mobile("Google", "Pixel7", 900)
let oppo= new Mobile ("Android", "basic", 450)
iphone17.displayDetails()
pixel.displayDetails()
oppo.displayDetails()

//2.
class Employee{
    constructor(name, experience){
        this.name=name
        this.experience=experience
    }
    expDetails(){
        if (this.experience < 1) {
            console.log("Fresher")
        }
        else if(this.experience >=1 && this.experience <=3 ){
            console.log("Junior")
        }
        else{
            console.log("Senior")
        }
    }
}

let emp_1= new Employee("Arunima", 4)
emp_1.expDetails()

//3.
class Car{
    constructor(brand, model,speed){
        this.brand=brand
        this.model=model
        this.speed=speed
    }
    accelerate(){
      
           this.speed= this.speed+10
            console.log(this.speed)
    }
    brake(){
        if (this.speed >= 10){
            this.speed = this.speed-10
            
        }
        else{
            this.speed= 0
            
        }
        console.log(this.speed)
    }
}

var toyota = new Car("Toyota", "Camry", 25)
//toyota.accelerate()
toyota.brake()