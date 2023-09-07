// // Assign an array to the constant numbers
// const numbers = [1, 2, 3, 4];

// const newNumbers = numbers.concat(5); // adds one element and return a new array

// // We can access elements with []
// console.log(numbers[0]); // 1

// console.log(numbers); // [1, 2, 3, 4]

// console.log(newNumbers) // [1, 2, 3, 4, 5]

// console.log(numbers.length) // 4

// console.log(newNumbers.length) // 5

// // Loop through the array and execute code for each element
// numbers.forEach((number) => {
//     // console.log(`now printing ${number}`)
//     console.log(number);
// })

//--------------------------------------------------------------------
// Exercise 1
const coaches = ["Eoin", "Leo", "Hunor", "John"];
console.log(`Length of the array: ${coaches.length}`);
console.log(`The second name in the array is: ${coaches[1]}`);

const newCoachesArray = coaches.concat("Kay");
console.log(newCoachesArray);

//--------------------------------------------------------------------
// Exercise 2

// Example of .forEach():
// const array1 = ['a', 'b', 'c'];
// array1.forEach((element) => console.log(element));
const myArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let total = 0;
myArray.forEach((element) => (total += element));
console.log(total);

//--------------------------------------------------------------------
// Challenge

const orders = [1, 2, 3]
let batches = []

const addToBatch = (array, number) => {
    if (array.length < 5) {
        return array.concat(number) 
    } else {
        return array
    };
};
console.log(addToBatch(orders, 4));
console.log(addToBatch([1], 3));
console.log(addToBatch([], 8));
console.log(addToBatch([1, 2, 3, 4, 5, 6], 7));
console.log(addToBatch([1, 2, 3, 4, 5, 6, 7, 8, 9], 10));
