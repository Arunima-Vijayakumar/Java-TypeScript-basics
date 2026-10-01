console.log("Hello, today is Tuesday")
var x=17
console.log(x)
console.log(typeof(x))

var x = "Arunima is a midukki" //redeclaration of var 
console.log(x)

x=177  //reassignment
console.log(x)

let y= 11
console.log(y)

//let y=1994
//console.log(y).  //this cannot be done, because let doesnt allow redeclaration

y=1994
console.log(y)

const z= "Vijayakumar"
console.log(z)

//const z= "Vijay"
//z= "vij"
//console.log(z)
//now we are trying to identify the datatype

var isValid= true //just trying a boolean
console.log(typeof(isValid))

var random //just declaring a variable
console.log(typeof(random)) //returns "undefined" as a datatype.

var min= -30
console.log(typeof(min))
 
let numbers= [20, 12, 15, 90] //non primitive datattype
console.log(typeof(numbers)) //never specifies what it is, but just returns  Objevct

console.log(numbers.length) //length is an attribute, not a function
console.log(numbers.indexOf(15)) //to determine the index of a value

console.log(Array.isArray(numbers)) //to check if a variable is an array 
console.log(Array.isArray(x))

console.log(numbers.includes(90)) //to check if an element exists in an array

numbers.pop() //removes the last element
console.log(numbers)

numbers.push(81) //adds extra element to the end
console.log(numbers)

numbers.unshift("hello") //adds an element in the beginning
console.log(numbers)

numbers.shift() //removes the first element from an array
console.log(numbers)

var student = {ID:101, name: "Ambika", course:"PlayWright"} //key value pairs ~ javascript objects

//keys are unique , ie, cannot be repeated, ie, name cannot come again
console.log(student)

// lets say we need to retrieve just the value for the key 'ID'
console.log(student.ID)

//can also be done by using sq brackets instead of 'period'
console.log(student["ID"])

//lets add a new key-value pair to the same, simply add the key value pair after 'period', lets add--> semester=3 
student.semester=3 
console.log(student)

student.name="Vijayakumar" //thi step, reassigns the value of the key 'name', but will not create another pair (keys are unique)
console.log(student)

//lets try adding the same for 3 students--> array of JS objects 
let student_data= [ {ID:101, name: "Chirag", course: "Python"}, 
    {ID:102, name: "Arunima", course: "Selenium"}, 
    {ID:103, name: "Devika", course: "JAVA"}
]
//lets try accessing some data from this array
console.log(student_data[2].ID) //we retrieve the value for ID for the 3rd element ie, index=2 

//JSON objects --> JS object notation 
//JSON is a format, not related to any particular progrmm language, In Javascript, we call it JSON objects
//if I declare the key in double quotes --> JSON objects, extn- .json
let employee= {"emp_id": 312, "emp_name": "Athira", "emp_unit": "Testing"} //keys are provided in double quotes 
console.log(employee)

//we retireve the values in a similar way like Arrays
console.log(employee.emp_name)

//lets create an array of json objs
let employee_data= [ 
    {"emp_id":301, "emp_name": "Ammu", "emp_unit": "Selenium"},
    {"emp_id": 303, "emp_name": "Karthik", "emp_unit": "Java dev"},
    {"emp_id":304, "emp_name": "Ananthu", "emp_unit": "Python"}
]

console.log(employee_data[1].emp_unit) //retrieving from the array of json obj, we do not need to use double quotes for the keys, as it is already defined in the json obj

