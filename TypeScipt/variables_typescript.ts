//end of the day, it gets excuted as a js file only
//then why we need ts?
 //we can ensure type safety even at compile time itself 
 //so the code gets more robust
 //we use var, let , const here too

 var age_1: number= 45
 //age_1 = true //reassigning the value for age, using a different type  --> throws error because boolean is not expected
 if (age_1 > 18) {
    console.log("Eligible")
}
 
 else {
    console.log("Not Elgible")
 }

 if (age_1<13){
    console.log("child")
 }
else if (age_1 >=13 && age_1<20 ){
    console.log("teenager")
}
else if (age_1 >=20 && age_1 <60){
    console.log("adult")
}
else{
    console.log ("senior citizen")
}

console.log(age_1)

//for execution, we need a type script plugin within npm (node package manager), but not just node
// npm install g typescript
//tsc the file name, will create a js file with the same name
//this file is the file created from compilation of the ts file, we can see 'use script'
//we execute the js file, not the ts file



//var age_2: Number = "34" //we get instan error, because it is a string when we say type is Number

 //are datatypes mandatory in ts?
    //No, it is just optional. we make it mandatory for our own use. so 'var age= 45' is also valid
    //by default, the typ is 'any'
    // used mainly in react, angular, test scripts using this language, and thats when we adopt this format
    // ie, i can use type safety, if needed in ts, whilst js cannot

//tsc --init --> will create a tsconfig.json file , default config is 'Modern' here, whereas for JS it is 'common'
//ts config json-- can be used to do configurations

//we can also execute ts directly, without having to convert it into js file, lthough internally it gets converted to js

//tsx along with npx -- is the module that helps it, comes with npx
//npx tsx filename
//syntax for conditional statements and such are same as js


