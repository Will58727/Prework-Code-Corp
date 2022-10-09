const myArray = [2, 5, 6, 9];

const firstItem = myArray[0];

console.log("the first item in the array is" , firstItem)

console.log(myArray);

myArray[1] = 50;

console.log(myArray);

const myNewArray = myArray.slice(0 , 2).concat([100])
let myNewerArray = myNewArray.concat(myArray.slice(2 , ))

console.log(myNewerArray);
myNewerArray.splice(3, 0, 999);
console.log(myNewerArray);

const pets = ["dog", "cat", "fish", "iguana"]

const petToGet = pets.pop();

console.log("I am going to get my kids a", petToGet);
console.log("They still want", pets);

const myNewPassword = "password";
if (myNewPassword.length < 10) {
    console.log("password not long enough.");
} else {
    console.log("password not long enough.");
}
const realPassword = "p455w@rd!!!"
const enteredPassword = "password!!!"
if (realPassword != enteredPassword) {
    console.log("ACCESS DENIED")
}

// console.log(1);
// console.log(2);
// console.log(3);
// console.log(4);
// console.log(5);


//         const names = ["Jonny", "Carrie", "Chris", "Sheila", "Tammy", "Doug", "Cassidy"] 

// for (let i = 0, i< names.length, i++)
// let names = "No Go"
// let
// let partyList = names[i];
// if (partyList[0] == "C")
// console.log("${partyList} is invited to the party!"); {

//     else console.log("${NAMES} isn't cool enough!");
// }


// for (let i = 1; i <= 10; i++) {console.log(i); }
// let i = 1;
// // while (i <= 10) { console.log(i); i++;}

// let grade = [85, 92, 99, 76, 0, 91];

// let total = 0

// while (grade.length > 0) { 
// const currentGrade = grade.pop();
// total = total + currentGrade;}
// // console.log("my total grade is, ${total}")

// const gradeAverage = total / grade.Length;

// console.log("my average is", gradeAverage.toFixed(2));
let score = 0;
let count = 0;

while (score <= 1000) {
    let randomNumber = Math.random() * 100;
    score = score + randomNumber
    count++
    
}

console.log("Score: ", score)
console.log("Number of steps: ", count)
