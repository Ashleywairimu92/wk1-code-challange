const prompt = require("prompt-sync")(); 

let score = prompt('Please enter the score: ');
score = parseInt(score); 
if (score > 79) {
    console.log('A');
} else if (score >= 60 && score <= 79) {
    console.log('B');
} else if (score >= 50 && score <= 59) {
    console.log('C');
} else if (score >= 40 && score <= 49) {
    console.log('D');
} else {
    console.log('E');
}
