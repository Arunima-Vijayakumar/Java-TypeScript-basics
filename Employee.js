


//class classname{
//constructor (special functions that help in the creation of objects)
//data
//behavior/functions}


//Store all details of the emploee, like emp id, name, salary, job level

//display the details. amd 
//based on the job level, I need to increment the base salary (job level 1,2,and 3)

//If we see STORE some data based on the entity --> means we need to constructors, that too parameterised 
//this -- > used to avoid clutter, and specify values corresponding to particular objects, so misplacement chances can be avoided 

class Employee {
#client_location= "New York"

    constructor(emplo_id, emp_name, salary, jobLevel){
        //this-- keyword refers to current object 
        this.emplo_id= emplo_id // value of emp_id of object1 = emp_id //value we got through parameterisation 
        this.emp_name=emp_name
        this.salary=salary
        this.jobLevel= jobLevel

        //no need to write 'function' to create a function
         }
    display_Details(){
            console.log(this.emplo_id)
            console.log(this.emp_name)
            console.log(this.salary)
            console.log(this.jobLevel)
            
            console.log(this.get_location())
        }
    update_Salary(){ //internally these are taken as behaviours, not functions, so we do not need 'function' inside a class
        if(this.jobLevel ==1){
            this.salary= this.salary +3000
        }
        else if(this.jobLevel==2){
            this.salary= this.salary+6000
        }
        else if (this.jobLevel ==3){
            this.salary= this.salary+10000
        }
        else{
            this.salary=this.salary
        }
    }

    get_location(){
        return this.#client_location //--> private variables/functions should be handled through functions only, and so w euse a get function and return it 
    }
}
//we do not need a main function, to execute like in Java,
// so we just 
   let emp_1 = new Employee (7001, "Arunima", 40000, 1)
   emp_1.display_Details ()
   emp_1.update_Salary () //--> globally updates the object, ie the salary value 
   emp_1.display_Details() //to retreive the updated value 

//ENCAPSULATOON
//i want a variable 'client_location' and i do not want it to go outside the Employee class
//so here we need to provatise it, or control its access level
// so I use 'private' access modifier , and is denoted y '#' instead of a keyword

//ABSTRACTION
//hiding implementation details, we so rely on access modifiers for this 
//fuctions are private in abstraction, data is provate in encapsulation

class Student{
    //student_id,  studentname, semester, s1mark, s2mark, s3mark
    //so inorder to have these attributes, w emake use of constructors

    constructor(student_id, student_name, semester, s1marks, s2marks, s3marks){
        this.student_id=student_id
        this.student_name=student_name
        this.semester=semester
        this.s1marks=s1marks
        this.s2marks=s2marks
        this.s3marks=s3marks
    }

    #calculateGrade(){ //privatising function, we are calculating grade, and making that function not accessible to anyone 
        //sum of marks, if >500- A+, b/w 400 and 500- b+, b/w 350 and 400- b, less than 350- failed
            let sumofMarks = this.s1marks+ this.s2marks+ this.s3marks
            if ( sumofMarks > 500){
                console.log("Grade A")
            }
            else if (sumofMarks <=500 && sumofMarks>=400){
                console.log("Grade B+")
            }
            else if (sumofMarks <400 && sumofMarks >350) {
                console.log("Grade B")
            }
            else {
                console.log("failed")
            }
        }
        display_Details() { 
            console.log(this.student_id)
            console.log(this.student_name)
            console.log(this.semester)
            console.log(this.s1marks)
            console.log(this.s2marks)
            console.log(this.s3marks)

            this.#calculateGrade() //abstracttion

        }  
       
    }
     let student_Ammu = new Student(1001, "Ammu", "s5", 78, 75,80) //creating an object outside the class
        student_Ammu.display_Details() //calling display details using object


//INHERITANCE
//oop concent by which we can reuse the functionalities of one class across other classes 
//base/parent class- the class whose functionalities are being reused
//child/derived class - the class that reuses the functions 
//eg:

class Bank{
    //acc_num, accHolder_name, IFSC, min_balance, current_balance
    constructor(acc_num, accHolder_name, IFSC, min_balance, current_balance){
        this.acc_num= acc_num
        this.accHolder_name=accHolder_name
        this.IFSC=IFSC
        this.min_balance=min_balance
        this.current_balance=current_balance
    }
    display_BankData(){
        console.log(this.acc_num)
        console.log(this.accHolder_name)
        console.log(this.IFSC)
        console.log(this.min_balance)
        console.log(this.current_balance)
    }

}

class ScotiaBank extends Bank {
//Scotia is the child class, that inherits Bank class

//if only one parent and one child - single level inheritance
//if one parent, multiple children - hierarchical ingeritance
//multiple parent, one child- multiple inheritance 
// B inherits A, C inherits B - multi-level inheritance
//combining any of these inheritance- Hybrid Inheritance 

//OG attributes- bank_name and branchname, but when we create the constructor, we should use the properties of super class too
//only then it will work

constructor(acc_num, accHolder_name, IFSC, min_balance, current_balance, bank_name, branch_name,){
    //for the child class to access prperties or behaviours (variables, functionns or anything) of the parent, we use Super keyword
    super(acc_num, accHolder_name,IFSC,min_balance,current_balance) 
    this.bank_name=bank_name
    this.branch_name=branch_name
}
    display_BankData(){
        //super.display_BankData() //using super keyword, we reuse the parent class function
        console.log(this.bank_name)
        console.log(this.branch_name)
    }

}
//lets create child class object now
//let customer_Ammu= new ScotiaBank(1010, "Arunima Vijay", "sc2233", 1000, 40000, "Scotia Bank", "Mississauga")
//customer_Ammu.display_Details()

//suppose we have the same name function with same num of args in both parent and child classes-- function overriding 
// it is a type of polymorphism, that is integrated with Inheritance 
// if we create a child class object, and call the function, the child class function only gets excuted ignoring the parent class function
//this particular 'over write' is termed Overriding

// to avoid overriding, we can use the key word ;super' to refer to the parent class function, but this should be inside child class function

//Multi-level Inheritance
class ScotiaLife extends ScotiaBank {
    constructor(acc_num, accHolder_name, IFSC, min_balance, current_balance, bank_name, branch_name,life_id, life_scheme){
        super(acc_num, accHolder_name,IFSC,min_balance,current_balance, bank_name, branch_name) //attributes of both parents
        this.life_id= life_id
        this.life_scheme= life_scheme


    }
    displaylife_Details(){
        super.display_BankData() //to access the thott munnathe parent, ippo grandparent access venam enkil, ipo vilicha ee function lu super keyword venam inside child il
        console.log(this.life_id)
        console.log(this.life_scheme)

    }
}
let cust_scoLife= new ScotiaLife(1011, "Ammu", "SCO001", 1000, 4000, "sCOTI", "kITCHENER", 490, "Ultra")
cust_scoLife.displaylife_Details()

//polymorphism -- overriding-- in Inheritance
    //lets say we have functions to calculate interests in banks,
    // we create a function in parent class, and reuse the same function, but different implementation in sub classes

//Overloading- within the same class, with same function names, we need not even need a class in JS
class Numerics{
    add(num1, num2){
        return num1 + num2
    }
    add(num1, num2, num3){ //same function name, with diff paramters, but wont work if we do not implement as this
        if (arguments.length === 2){
            return arguments[0] + arguments[1]
        }
        if (arguments.length===3){
            return arguments[0] +arguments[1]+ arguments[2]
        }
        return num1+num2+num3
    }

    addition (num1, num2=0, num3=0){ //default valued functions , defaulting num2 and num3 to 0, or any number 
        //namuk value urepp illatha arguments inu value 0  ang kodukuka
        return num1+num2+num3
    }

}
let newAdd = new Numerics ()
console.log (newAdd.add(40,70)) //if we simply provide add with 2 numbers, it wont be added becuase there is another function that takes 3 

console.log (newAdd.add(5,7,90)) //only this will return value in the beginning, if we do not give if conditions

//other way is to use default 
console.log(newAdd.addition(3,5,6))
console.log(newAdd.addition(10,50))
console.log( newAdd.addition(89))
