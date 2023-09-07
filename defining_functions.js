// JavaScript fundamentals section 04
// Here's an anonymous function:
() => {
    console.log('Hi!');
};
// To use it later, give it a name & store it in a variable:
const printMessage1 = () => {
    console.log('Hey!');
};
// Here's a function with one parameter:
const printMessage2 = (message) => {
    console.log(message);
}
printMessage2('Hi there!');

// In JS you need to explicitly return a value from a function:
const getName = () => {
    return 'Totoro';
}

// You need to call a function with parentheses, even without args
const returnFour = () => {
    return 4;
};
// Get rid if the parentheses below to see what is returned!
//const something = returnFour;
const something = returnFour();
console.log(something);

//Need to export a function to use it outside the file it's defined in:
// const hello = () => {
//     console.log('Hello!');
// };
// //Add this at the end of the file to enable export
// //Then you can use it in the node REPL (if in same directory)
// module.exports = hello; 
//This didn't work! Investigating in new file hello2.js and attempting
// to call it here instead...

//OK, it's a bit confusing because of all the 'hello's in the last example
// but essentially in L44 below you need to require the FILENAME and then 
// in L45 you call the function from that file
// Issues when trying in the REPL came from using a const variable and 
//trying it more than once when it didn't work (can't overwrite!)

//const goodbye = require.('./say_goodbye')
goodbye = require('./say_goodbye');
goodbye();

