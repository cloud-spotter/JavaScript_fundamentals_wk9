// Exercise from video demonstration

// Define a function to use in another function as an argument
const printMessage = () => {
    console.log('Hello!');
}
// Pass function as an argument to another function, to be called later.
// Here, printMessage becomes a callback function  

// (Second arg is delay, in milliseconds)
setTimeout(printMessage, 3000);
//console.log(setTimeout(printMessage, 5000));

//--------------------------------------------------------------------

// console.log('1. The program starts');

// setTimeout(() => {
//   console.log('4. The timer is lapsed, this callback function is now called');
// }, 2000); // 2000ms = 2 seconds

// console.log('2. The timer has started, and the callback function registered to be called later');

// console.log('3. The rest of the program below (immediate tasks) will keep running immediately');

//--------------------------------------------------------------------
const executeAfterDelay = (delay, functionToExecute) => {
    return setTimeout(functionToExecute, (delay*1000));
}
console.log(executeAfterDelay(5, printMessage));