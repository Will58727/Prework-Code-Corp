// let word = "scientific";



// console.log(word);

// let wordSlice = word.slice(2, 5);
// console.log(wordSlice);
// for (let i = 0; i < word.length; i++) { 
//     if (word[i] == "i"){
//         let frontSlice = word.slice(0, i);
        
//         frontSlice = frontSlice + "_";

//         let backSlice = word.slice(i+1,);

//         word = frontSlice + backSlice;
//         console.log(word);
//     }      


// }

// let word = "chirping";
// let newWord = "";

// for (let i=0; i < word.length; i++){
//     if (word[i] == "i"){
//     newWord = newWord + "_"
//     } else {
//     newWord = newWord + word[i];
//     }
// }
// console.log(`${newWord}`)

let word = "grilling";

// let wordArray = word.split("");

// for (let i=0; i < wordArray.length; i++) { 
//    if (wordArray[i] ==  "i") {  

//         wordArray[i] = "_";

//    }

// }


// let joinedWord = wordArray.join("");
// console.log(joinedWord);

word = word.replaceAll("i", "_");
console.log(word)