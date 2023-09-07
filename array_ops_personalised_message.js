// Exercise - personalised messages

// const names = ['Anna', 'Laura', 'Josh', 'Min', 'Karla'];
// const personalisedMessage = (name) => {
//     return `Hi ${name}! Enjoy a 30% discount during September!`;
// };
// const generateMessages = (names, messageFunction) => {
//     return names.map(messageFunction);
// };

// console.log(generateMessages(names, personalisedMessage));
// Commented out to alter it in the challenge

// Challenge
const namesAndDiscounts = [
    { name: 'Anna', discount: 50 },
    { name: 'Laura', discount: 40 },
    { name: 'Josh', discount: 30 },
    { name: 'Min', discount: 50 },
    { name: 'Karla', discount: 60 }
];

const personalisedMessage = (name, discount) => {
    return `Hi ${name}! Enjoy a ${discount}% discount during September!`;
};
const generateMessages = (names, messageFunction) => {
    return names.map(names => messageFunction(names.name, names.discount));
};  

console.log(generateMessages(namesAndDiscounts, personalisedMessage))