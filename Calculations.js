//aadyathe syntaxx = ith is with commonjs in nammade package json 
//appo function sadha pole create cheyum, ennit module.exports use cheyum 
//ennit adutha file il poi, require use cheyum

//function addNums(num1, num2){
    //return num1 + num2
//}
    //we want this result of the function in another file, so we 'export'
    // so in common js, (in our package.json)

//module.exports = {addNums}; //export cheyumbo same func name arikanam

//lets create vere oru file-- validateCalculations.js

//change type to 'module' in package.json, and appo ingane aan function varunne
//ith ini namuk moudle aan json il, appo function create cheyumbo, athinu munne thanne 'export' nn kodukkanam 
//ennit matte file il import um 
export function addNums(a,b){
    return a+b
}