// function helloWord() {
//     console.log("Hello World!");
// }
// // helloWord();

// for (let i=0; i < 5; i++) { 
//     helloWord();
// }



// function greetCustomer(name) {
//     name = name.toUppercase  
//     console.log(`Hi, ${name}`);
//     console.log(`How are you today?`);

// }
// greetCustomer("Will");


// function combinedName(firstName, lastName) {   
//     let combinedName = firstName+ " " + lastName;
//     return combinedName
// }
// let fullName = combinedName("William", "Powell")
// console.log(fullName);

// function convertMilesToFeet(feet) { 
//     let mile = feet / 5280;
//     mile = mile.toFixed(3);
//     console.log(`${feet} ft is equivalent to ${mile} miles`)
//     return mile;
// }
// convertMilesToFeet(4000);
// let miles = convertMilesToFeet(5280);
// console.log(miles)
// console.log(convertMilesToFeet(10000));

// function isEven(num) {   
//     if(num % 2==0){
//     return("True");
//         //The number is even
//      }
//      else {
//     return("False");    
//         //The number is odd
//      }
// }
// console.log(isEven(12));


// for (let i = 1; i<= 20; i++); { 
//     if (isEven(i)){ 
//         console.log(i);
//     }
// }

// word = "";
// function capitalize(word) {
   
//    let firstLetter = word[0]
//    firstLetter = firstLetter.toUpperCase();
//    let backSlice = word.slice(1);
//    let capitalizedWord = firstLetter + backSlice;
//    return capitalizedWord;
// }
// console.log(capitalize("luck"));

// let myArray = [1, 4, 2, 10, -4,];

// functionfindMaxValue = someArray

// let currentMax = someArray[0];
// for (let i = 0; i < someArray.length; i++)
// if (someArray[i] > currentMax) { 
//     currentMax = someArray[i];
//     return currentMax
// }
// console.log(functionfindMaxValue([1, 4, 2, 10, -4]));

// function farenheitToCelsius(degF) { 
//     let celsius = (degF - 32) * (5/9);
//     return celsius.toFixed(2);
// }
// console.log(farenheitToCelsius(32));

// console.log(farenheitToCelsius(212));

// function reverseString2(myString) {  
//     let length =myString.length;
//     let newString = "";
//     for (let i = length - 1; i>= 0; i--) {  
//         newString = newString + myString [i];
//     }
//      return newString;
// }
// console.log(reverseString2("REDRUM"));

function reverseStringArray(myString) { 
    // convert myStringto an Array
    // ["P", "r", "o", "g", "r", "a", "m"]
    let stringArray = myString.split("");
    let newArray = [];
    while (stringArray.length > 0){    
        let letter = stringArray.pop();
        newArray.push(letter);
    }
    let finalString = newArray.join("");
        
    return finalString
}
console.log(reverseStringArray("program"));

function isNumberPalindrome(num) {  
//     let numString = num.toString();  // 5 -> "5"

//     // let numStringArray = num.toString().split("").reverse();

//     let numStringArrayReversed = num.toString().split("").reverse().reverse();

//     let numStringReversed = numStringArrayReversed.join("");
//     if (num.toString() === numStringReversed) {  
//     return true;
//     } else { 
//         return false;
//     }
// }
return (num.toString() === num.toString().split("").reverse(""))
}
console.log(isNumberPalindrome(0001));

