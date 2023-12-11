// Create a variable named x and assign to it the number 14. 
// Execute a subtraction between the number 12 and the variable x.
let x = 14;   
console.log(x/12);  
        
// Create two variables: name1 and name2. Assign to name1 the string "john", and to name2 the string "John" (this one has a capital J!)
//  Verify that name1 is different from name2 (HINT: check their equality to be false).
//  Finally, verify that the equality between name1 and name2 becomes true if both are lowercase (without changing the value of name2).
let name1 = "john";
   
let name2 = "John";    
     
console.log(name1 === name2)

if (name2.toLowerCase() === name1.toLowerCase()) {
    
    console.log(true)
}


// Create a variable named x, and assign to it a numeric value less than 10.
// Write the code to print the literal value of x (ex.: if x is 1, it should print "one", if x is 5 it should print "five" etc.).

// 
// Create a variable and assign to it an array containing the first 5 positive numbers.


let z=1 ;

if (z === 1) {
console.log("one");
} 
else if (z === 2) {
 console.log("two");
}
else if (z === 3) {
    console.log("three");
}
else {
    console.log("finish");
}

let positiveNumbers = [1,2,3,4,5]
console.log(positiveNumbers);

// Create a variable called age and assing a number to it. if age is less than 18 years, print 'You can not buy alcohol',
// if age is above or equal 18, print 'it is okay'.  (use ternort operator)
let age = 17;
 newAge = age < 18 ? 'You can not buy alcohol' : 'it is okay';
console.log(newAge)


// Create a variable and assign to it an object containing your name, surname, email address and age.
// add to the previously created object a property with a boolean value to rappresent wheter you have or not a driving license.
// Remove from the previously created object the age property.

 let personal = {
     firstname : 'sergio', 
     surname : 'romero', 
     email: 'sergioromero@mosley.com', 
     age:87}

 personal.havedriverlicense = true;

 delete personal.age;

console.log(personal)
 
// Create a second object with another name, surname, email address and verify that this object has a different email address than the previous one.
let secondPerson = {
    firstname : 'audry',
    surname : 'toldo', 
    email: 'toldo@company.com',
    age:93}    

emailsComparison = personal.email !== secondPerson.email ? 'emails are different' : 'emails are same';

console.log(emailsComparison)


// You are working on an e-commerce website. In the variable totalShoppingCart you are storing the total amount spent by the current user.
//  Currently you have a promotion: if the customer's shopping cart total is more than 50, the user is eligible for free shipping (otherwise it costs 10).
//  Write an algorithm that calculates the total cost to charge the user with.
let totalShoppingCart = 90;


 totalShoppingCart > 50 ? 'user are eligible for free shipping' : totalShoppingCart +=10


