
function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

var randomNumber = getRandomInt(1, 10)
// var randomNumber = 5;

console.log("WELCOME TO THE NUMBER PICKING GAME\nPICK A NUMBER")













// ask the user to pick their number
var stdin = process.openStdin();

stdin.addListener("data", function (d) {
    // note:  d is an object, and when converted to a string it will
    // end with a linefeed.  so we (rather crudely) account for that  
    // with toString() and then trim() 

    var numberGuessed = parseInt(d);

    var verdict = "YOU LOST the number was " + randomNumber;

    if (numberGuessed == randomNumber) {
        verdict = "YOU WON the number was " + randomNumber;
    }

    console.log("\n\nyour number is entered: " + parseInt(d) + " " + verdict);
});

// tell the user if they are right