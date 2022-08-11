//if statements; that is the else if statement. The else-if condition will be checked when the first if statement is not true but before going to the else code. If the condition within the else-if statement is true, then the code block proceeding the condition will be executed instead.
var puppy = "Lassie";

if (puppy === "Spot"){
  alert("Hi Spot! You are so cute!");
}
else if (puppy === "Lassie"){
  alert("That's not Spot, that's Lassie!!");
}
else {
  alert("That's not Spot. Is that a cat??");
}