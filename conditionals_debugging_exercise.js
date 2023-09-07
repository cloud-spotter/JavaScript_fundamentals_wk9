const isValidLength = (phoneNumber) => {
    const validLength = 11;
    if (phoneNumber.length == validLength) {
        return true;
    } else {
        return false;
    }
}

module.exports = isValidLength;

// The colleague had left out the explicit 'return' keyword for returning
//  value at the end of each conditional

// Adding some print debugging statements
console.log("Check if 00 is valid:", isValidLength('00'));
console.log("Check if 00112233445 is valid:", isValidLength('00112233445'));