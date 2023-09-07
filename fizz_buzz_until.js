const fizzBuzzUntil = (max) => {
    let fizzBuzz = require('./fizzbuzz_refactored')
    for (let num = 1 ; num <= max ; num ++) {
        console.log(fizzBuzz(num))
    }
}

console.log(fizzBuzzUntil(10));

/*
I got stuck on this challenge as I originally put return instead of console.log
on line 4. I had just typed out this question for chatGPT when I realised it wasn't
printing all the numbers because I'd just return instead of print! 

"I don't seem to have constructed my for loop correctly here.
I'm still getting used to the JS syntax from Python. 
I thought my first line of the loop established a variable (num) and set the value to 1,
set a condition for the loop to run (until num is equal to the max argument passed 
to the function, and then added 1 to num after each action
(in the next line, to return fizzBuzz() with the num passed to it to check
what should be printed)."

Turns out, just using chatGPT as a rubber duck to talk it through to myself 
was enough to help me realise this particular error. Useful!
*/