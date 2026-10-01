//if there is a longer set f values, we cannot use if else or switch, as it becomes very long and difficult to read, so we use loops to iterate through the values and perform the same operation on each value

//if i know he limit, lets say upto 100, I can use for loop, if I dont know the limit, I can use while loop, and if I want to perform the operation at least once, I can use do while loop
//but if its an unknown limt, but a consition, we use while loop, if we want to perform the operation at least once, we use do while loop

//For Loops
//Basic and Advanced

//Basic for loop
// Initialisation, Condition, Increment/Decrement
//we use numeric values for the loop, and we can use the loop to print the values, or perform any operation on the values
for (let i=1; i<=10; i++) { //i=1 is the initialisation, i<=10 is the condition, i++ is the increment
    console.log(i)
}
//lets say I need to print odd numbers from 1 to 5
for (let j=1; j<=5; j+=2) { //iterations need not be always 1
    console.log(j)
}
//similarly if I wanted even numbers from 1 to 5, I can do j+=2, but I need to start from 2
for (let k=2; k<=5; k+=2) {
    console.log(k)
}

//Advanced for loop 
    //1. FOR OF loops
    var fruits= ["Apple", "Banana", "Mango", "Grapes", "Orange"]
    //we need to traverse through each elements, lets use FOR OF 

    for (const fruit of fruits) { //fruit is a variable that will hold the value of each element in the array, and we can use it to perform any operation on the element
        console.log(fruit)
    }
//usual for loops will traverse through indices, but 'for of' traverses through elements in an array

    //2. FOR IN  loops
        //dictionary: the key value pairs, we can use for in loops to traverse through the keys of the dictionary, and we can use the keys to retrieve the values
        // similar to how we use objects in JavaScript 

        var student = {ID:101, name: "Ambika", course:"PlayWright"} //key value pairs ~ javascript objects
        for (const key in student) { //key is a variable that will hold the value of each key in the object, and we can use it to retrieve the value of the key
            console.log(key) //this will print the keys of the object
            console.log(student[key]) //this will print the values of the keys
        }
//WHILE loops -- entry conrolled loops
// when we do not know the limit, but based on a condition 
// we neeed to initialise before we do the while loop

var i=1
while (i<=10) { //condition
    console.log(i)
    i++ //increment
}

var first_name= "Arunima" //initialisation
  let index=0 //initialisation of index variable to traverse through the string
while (index<first_name.length) { //condition, 0 to length-1, as index starts from 0, and length starts from 1
    console.log(first_name[index]) //retrieving the character at the index position
    index++ //increment --- if this is not provided, it will be an infinite loop, as the condition will always be true
}

//to avoid infinite loops, we should always provide an increment or decrement in the loop, so that the condition will eventually become false and the loop will terminate

//DO WHILE loops -- exit controlled loops 
// When we want to perform the operation atleast once, even if the condition is false 
//initialisation, statement, increment/decrement, condition


//we want vaalue of n to be printed at least once, and if the value of n is less than 10, then we want it to be printed, and value to be incremented by 1 until 10
var n= 1989 
do {
    console.log(n) //print the value of n first
    n++ //increment the value
} while (n<10) //condition 

// lets take another example wherein, if the string has 'i', in it, it needs to be skipped, and the rest of the characters need to be printed, 
var str1= "Mississippi" //we need to check if i and I are present, so we need to convert the string to lower case, and then check if the character is 'i', if yes, then we need to skip it, else print it
 // converting it into all lower case, makes it easy and effecive
 str1= str1.toLowerCase() //converting the string to lower case, so that we can check for 'i' and 'I' in a single condition 

 //.toUpperCase() can be used to convert the string to upper case 
 console.log(str1) //printing the string in lower case

 //we could use for loop, or 'for-of' loop 
 // 'continue'  --> opposite of 'break', it will skip the current iteration and move to the next iteration, but the loop will continue to run until the condition is false
 //for of, so that we can traverse through elements of the string 
var str2= "" //initialising an empty string to store the characters that are not 'i'
 for (const s of str1) {   
    if (s== 'i') { 
        continue
        //if the character is 'i', then skip it
    }

    console.log(s) 
    var str2=  str2+s //concatenating the characters. 
}
console.log(str2)
