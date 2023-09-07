// Practice: passing a function as an argument to another function

/**
 * @param {string} emailAddress
 * @returns {string} - A message confirmation that an email has been sent
 */
const notifyByEmail = (emailAddress) => {
    return `Email sent to: ${emailAddress}`;
}

/**
 * @param {string} phoneNumber
 * @returns {string} - A message confirmation that a text has been sent
 */
const notifyByText = (phoneNumber) => {
    return `Text sent to: ${phoneNumber}`;
}
/**
 * @param {string} contactDetail - e.g. a phone number or text
 * @param {function} notifyFunction
 * @returns {string} - Output of calling the given function with the contactDetail
 */
const notify = (contactDetail, notifyFunction) => {
    return notifyFunction(contactDetail);
}
console.log(notify('hello@makers.tech.test', notifyByEmail));
console.log(notify('+10000000000', notifyByText));