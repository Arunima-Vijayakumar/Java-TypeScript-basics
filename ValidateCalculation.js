
//here we need to import matte result ffro calculations.js
//const {addNums} = require ("./Calculations") // for commonjs, same func name as in calculations. require is the keyword to be used, nd the file name in the quotes

import { addNums } from "./Calculations.js"; //for modules 
console.log(addNums(7,9))