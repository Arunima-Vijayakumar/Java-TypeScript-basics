//Basic for Loop - same format,  but here we provide extra :number after i, ie, let i:number = 0

for (let i: number = 0; i< 5; i++ ){
console.log(i)
}

//for of, and for in
//lets say we want an array and want to traverse through it , string[] means it is a string array, number[] for number array
const fruits_1 : string[]= ["Apple", "Coconut", "Banana"] 
for (const fruit of fruits_1) { //focuses on elements
    console.log(fruit)
}

for (const fruit in fruits_1){ //focuses on index
    console.log( fruits_1[fruit] )
}

//while. do while
var numb : number = 9 //add datatype 

while(numb >0){
   console.log(numb) 
   numb -= 1 
}

var numb1: number = 10 //initialise again, because value of numb has come to zero after the while loop
do {
    console.log(numb1)
    numb1 --
}
while(numb1>5)
