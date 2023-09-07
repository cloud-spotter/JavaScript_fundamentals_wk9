//Refactored my fizzBuzz.js after asking ChatGPT whether my code
// could be improved for concision.

const fizzBuzz = (number) => {
    const divisibleBy3 = number % 3 === 0;
    const divisibleBy5 = number % 5 === 0;
    if (divisibleBy3 && divisibleBy5) {
    return "FizzBuzz";
}
    if (divisibleBy3) {
    return "Fizz";
}
    if (divisibleBy5) {
    return "Buzz";
}
    return number;
};

module.exports = fizzBuzz;