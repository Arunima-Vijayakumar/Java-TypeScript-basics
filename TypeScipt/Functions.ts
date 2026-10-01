//normal functions like in JS is valid here, :

function firstFunction(){ //
    console.log("welcome to TS")
}
firstFunction()
//we could also add datatype
function firstFunction_1 () : void { //because we dont return anything here, lets do 'void'
console.log("void is added because we do not return anything")
}
firstFunction_1()

//lets try parameterised now
function addition(a: number, b:number) : number{
return a+b
}
console.log(addition(10,80))
