
//  Write a function called "area" which receives 2 parameters (l1, l2) and calculates the area of the associated rectangle.
 
 
const area = function (l1, l2){     
  return l1*l2;   
 
}      

let areaResult = area(2 , 4);
console.log(areaResult); 



/* 
 Write a function called "crazySum" which receives two integers as parameters.
 It should return the sum of those two values, but if the two values are the same then it should return their sum multiplied by 3.
*/


 const crazySum = function (int1, int2) {
  return int1 !== int2 ? int1+int2 : (int1+int2) * 3
}

let crazySumResult = crazySum(2, 2);
console.log(crazySumResult);

/* 
 Write a function called "crazyDiff" that computes the absolute difference between a given number and 19.
 It should return triple their absolute difference if the given number is greater than 19.
*/




const crazyDiff = function (x) {
    return x > 19 ? (x-19)*3 : "number is under 19"
}

crazyDiffResult = crazyDiff(20);
console.log(crazyDiffResult);

/* 
 Write a function called "boundary" which accept an integer parameter n and returns true if n is within 20 and 100 (included) or if n it's equal to 400.
*/

const boundary = function (n) {
    if((n>20 && n<100 )|| (n===400)){
        return true
    } else{
        return false
    }
}

boundryResult = boundary(93);
console.log(boundryResult);



//  Write a function called "strivify" which accepts a string as a parameter.
//  It should add the word "Strive" in front of the given string, but if the given string already begins with "Strive", then it should just return the original string.


const strivify = function (str) {
    return str !== "strive" ? "strive"+str : str ;
 
}

strivifyResult = strivify("hello");
console.log(strivifyResult);


/*
 Write a function called "check3and7" which accepts a positive number as a parameter and checks if it is a multiple of 3 or a multiple of 7.
 HINT: Modulus Operator
*/

const check3and7 = function (n) {
    return n % 3 === 0|| n % 7 === 0 ? n : 'number is not right'
}

check3and7Result = check3and7(201);
console.log(check3and7Result);


/* 
 Write a function called "reverseString" which programmatically reverses a given string (es.: Strive => evirtS).
*/

const reverseString = function(str) {
    return str.split("").reverse().join("")
}

reverseStringResult = reverseString("hello");
console.log(reverseStringResult);


/* 
 Write a function called "upperFirst" which capitalizes the first letter of each word of a given string passed as a parameter.
*/

const upperFirst = function(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}

upperFirstResult = upperFirst("hello");
console.log(upperFirst("hello"));


/* 
 Write a function called "cutString" which creates a new string without the first and last character of a given string passed as a parameter.
*/

const cutString = function(str) {
    return str.substring(1, str.length - 1)
}

cutStringResult = cutString("javascript")
console.log(cutStringResult)


/* 
 Write a function called "giveMeRandom" which accepts a number n and returns an array containing n random numbers between 0 and 10.
*/

const giveMeRandom = function (n) {
    let arrWithNums = [];
    
    for(i = 0; i < n; i++) {
        arrWithNums.push(Math.floor(Math.random() * 10)); 
    }
    
    return arrWithNums;
}

giveMeRandomResult = giveMeRandom(3);
console.log(giveMeRandomResult);

