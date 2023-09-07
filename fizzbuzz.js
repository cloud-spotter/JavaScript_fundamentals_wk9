const fizzBuzz = (number) => {
  if (number % 3 === 0 && number % 5 === 0) {
    return "FizzBuzz";
  } else if (number % 3 === 0) {
    return "Fizz";
  } else if (number % 5 === 0) {
    return "Buzz";
  } else {
    return number;
  }
};

console.log(fizzBuzz(3)); //'Fizz'
console.log(fizzBuzz(5)); //'Buzz'
console.log(fizzBuzz(8)); //8
console.log(fizzBuzz(15)); //'FizzBuzz'
console.log(fizzBuzz(18)); //'Fizz'
console.log(fizzBuzz(20)); //'Buzz'


