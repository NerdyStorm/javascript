console.log('Hello World');

//Variables
var person = 'John';
console.log('Hello ' + person);


//Exercise: Declaring Variables
var petDog = 'Rex';
var petCat = 'Pepper';

console.log(petDog);
console.log(petCat);

console.log("My pet dog's name is: ", petDog);
console.log("My pet cat's name is: ", petCat);

var catSound = 'purr';
var dogSound = 'woof';

console.log(petDog + " says " + dogSound);
console.log(petCat + " says " + catSound);

catSound = 'meow';
console.log(petCat + " now says " + catSound);

//Data Types & Operators
var trueOrFalse = true;
var falseorTrue = false;

if (trueOrFalse && !falseorTrue) {
    console.log("Success!");
}

var large = 10;
var small = 3;

if (large > small){
    console.log(large, " is greater than ", small);
}

//Conditionals and Loops

var result = 65;

if (result >= 90){
    console.log("You passed the test with flying colors!");
} else if (result >= 65){
    console.log("You passed the test!");
} else{
    console.log("You failed the test!");
}

switch (result){
    case 65:
        console.log("But you barely passed...");
        break;
    default:
        console.log("Good job!");
}

for (var i = 1; i < 5; i ++){
    console.log(i, " is less than 5!");
}

var counter = 0;

while (counter < 10){
    console.log(counter, " is less than 10!");
    counter++;
}
