
//i want a function that performs asynchronously, 
// i want to add 2 nums, and return the result
async function add(num1, num2){
    return await Promise.resolve(num1+num2)
}

//console.log(add(70,88))
add(45,67).then(result=>{console.log(result)}) //result is a standard word

//we could even execute js codes through browser rendering, but then it brought up flakiness, and so a platform was introduced, 
//and hence came up the tool-- node to execute independently
//Modules -- old js and new js are 2 different node modules, old --> common JS , new--> es modules(we are using this, even 'let' is a part of this)
//when we install node, npm and npx get installed by default, but are not initialised, command--> npm init -y
//Node Package Manager NPM --> all the tools or packages under node are handled by NPM, like typescript, playwright, allure, ie connecting JS with other tools in the package (like playwright)
   // mostly takes the syntax, NPM INSTALL
//Node Package Executor NPX --> to execute the implementation of additional packages 

//Common JS--> if i want to refer a file on another file, i use keywords- 'require', and 'module.exports'
//Modules --> for the same, we use, 'export default', and 'import'

//steps
//1. initialise--> npm init -y (all yes)