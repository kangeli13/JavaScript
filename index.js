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