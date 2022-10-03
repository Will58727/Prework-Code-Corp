//You've decided to start with last night's menu and decide what adjustments to make from there
const menu = ["steak", "fish", "lobster", "chicken", "duck", "eggplant", "pork chop", "pasta"]

//You've decided to switch out the lobster at index 2 for crab and the eggplant at index 5 for lasagna
//The first replacement is done for you, add the code for the second replacement beneath it


menu[2] = "crab"
menu[5] = "lobster"//add your code on this line

//You've been persuaded to add beef wellington to the menu, but you really hope no one orders it so you add it to the end of the menu and hopefully no one will see.
//Conversely, you have some really great prawns that you'd like to feature. Add them to the beginning of the menu to highlight them.

menu.push("beef wellington");
menu.unshift("prawn");//add your code on this line

//You've decided you're happy with the menu now, so it's time to split the work between your sous chefs, Nico and Maria.
//You want to assign the first half of the menu to Maria and the second half to Nico. 

//You need to know which index position is the halfway point. Determine that by finding the length of the array and dividing by 2
const halfIndex = 3 //add your code on this line

//Use the array slice() method to assign the first half of the menu to Maria
const mariasDishes = menu.slice(0 , 5);//add your code here

//Use the array slice() method to assign the second half of the menu to Nico
const nicosDishes = menu.slice(5 , 10)//add your code here

console.log("Today's final menu is", menu);
console.log("Maria will be preparing", mariasDishes);
console.log("Nico will be preparing", nicosDishes);