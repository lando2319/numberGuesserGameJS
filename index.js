
function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

var randomNumber = getRandomInt(1, 10)

console.log("WELCOME TO THE NUMBER PICKING GAME\nPICK A NUMBER")













// ask the user to pick their number
var stdin = process.openStdin();

stdin.addListener("data", function (d) {
    // note:  d is an object, and when converted to a string it will
    // end with a linefeed.  so we (rather crudely) account for that  
    // with toString() and then trim() 
    console.log("you entered: [" +
        d.toString().trim() + "]");
});

// tell the user if they are right