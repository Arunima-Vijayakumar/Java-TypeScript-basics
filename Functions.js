//FUNCTIONS IN JAVASCRIPT
  // FUNCTIONS are blocks of code that can be used to perform a specific task, and can be reused multiple times in the code.

//function delcaration/ definition --> what needs to performed 
//syntax of a function: 
    //function function_name(parameters if any) {
       //code to be executed
    //}
//function calling/ invoking --> when we want to perform the task, we call the function
//syntax of calling a function:
    //function_name(arguments if any)

//Types:
    //Parameterised 
    //non -parameterised
    //parameterised with return type
    //non -parameterised with return type
    //arrow functions --> short cut of writing functions 

// we want 'welcome to the firm' to be printed whenever we need it 
function welcome_message() { //function definition (tite + body)
    console.log("Welcome to the firm") //code to be executed
}

welcome_message() //function calling 

//we want to add 2 numbers and print the result
function add_numbers(num1, num2) { //parameterised function --> 'formal parameters' are num1 and num2, ie any type of value can be passed to these parameters, and the function will work accordingly
    var result= num1+num2 //code to be executed
    console.log(result) 
    //or console.log(num1+num2) //we can also do this, but the result will not be stored in a variable, and cannot be used later in the code
}
 
add_numbers(1980, 200) //function calling --> 'actual parameters' are 1980 and 200, ie the values that are passed to the function when it is called

//create a function that returns true if the marks are greater than 200, else returns false
//static function --> the values are fixed, and cannot be changed when the function is called, and non-parameterised 

function mark_evaluation(){
    var marks= 45
    return (marks>200) ? "True" : "False" //ternary operator used to check the condition, and print the result, 
                                            //we cannot use return multiple times, so we give it before we give the cndition

    }

        console.log(mark_evaluation()) //function calling, and printing the result of the function, as it returns a value

//multiply 2 numbers and return the result //parameterised function --> the values are passed to the function when it is called, and can be changed when the function is called
function multiply_numbers(num1, num2) {
    return num1 * num2;
}
console.log(multiply_numbers(10, 5)); //function calling, and printing the result of the function, as it returns a value

//now, if the mark_evaluation returns true, and the multiply_numbers returns a value, greater than 20, print 'valid'

function evaluate(){
    var marks_ev = mark_evaluation
    var product= multiply_numbers(10, 20)
    if (marks_ev == true && product>20)
    {
        console.log("Valid")
    }
    else
    {
        console.log("invalid")
    }
}
evaluate()

//ARROW FUNCTIONS **
//short keys of functions 
//without parameters

const arr_fun =  () => {console.log ("arrow functions")} //arr_fun -->name of the arrow function, also called as anonymous functions
arr_fun() //calling the function is the same 

//pass a number and return the square of the num
const square = (result) => result * result; //in this context, only one parameter is being passed here

console.log(square(8))