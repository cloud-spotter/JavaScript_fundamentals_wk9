// Exercise - phone numbers

const checkLength = (phoneNumber) => {
    return phoneNumber.length <= 10;
}
//console.log(checkLength('17636873644'));

const filterLongNumbers = (phoneNumberArray) => {
    return phoneNumberArray.filter(checkLength);
}

//module.exports = './array_ops_phone_numbers.js'
const numbers = [
    '1763687364',
    '4763687363',
    '7867867862',
    'aaaaaaaabbbbbbbcccccdddddddd' // this element should be filtered
];

console.log(filterLongNumbers(numbers));
console.log(filterLongNumbers(['4763687363', '7867867862']));  // no number to filter out
console.log(filterLongNumbers([]));  // returns []
