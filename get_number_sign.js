const getNumberSign = (number) => {
    if (number > 0) {
        return 'positive'
    } else if (number < 0) {
        return 'negative'
    } else {
        return 0
    } // No semi-colon needed here (or at end of blocks)
};

module.exports = getNumberSign;

console.log(getNumberSign(3));     //'positive'

console.log(getNumberSign(0));     //'zero'

console.log(getNumberSign(-5));    //'negative'

// Using the strict equality operator (===) to check for 0
const newNumber = 0

if (newNumber === 0) {
    console.log('zero'); 
};  
console.log(newNumber)