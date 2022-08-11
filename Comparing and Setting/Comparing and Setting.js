//The first is the double equal sign (==)
5 == "5"; //This will return True.
//The "Identical" operator is three conjunctive equal signs (===). 
5 === "5"; //This will return False.

//Declaring the variable puppy and setting it to the name Spot. In the if statement, you are checking to see if puppy is identical in value and data type to the literal string “Spot”. If the result is true then an alert will happen.
var puppy = "Spot";

if (puppy === "Spot"){
  alert("Hi Spot! You are so cute!");
}

//if statements are the less than (<), greater than (>), less than or equal to (<=), and the greater than or equal to (>=). Below is an example of how you could use one of these comparisons:
var age = 26;

if (age <= 30){
  alert ("You aren't THAT old!");
}