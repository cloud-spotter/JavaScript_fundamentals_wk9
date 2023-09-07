// Exercise 1: Implement a User class
// Methods: getName() and getIntroduction()
// Attributes: name
class User {
    constructor(name) {
        this.name = name;  {/* string */}    
    }

    getName() {
        return this.name;
    }

    getIntroduction() {
        return `Hi, my name is ${this.name}`;
    }
};
// Instantiate the class:
const user = new User('Uma');
// Call the getName and getIntroduction methods on the new instance of the class:
console.log(user.getName()); // 'Uma'
console.log(user.getIntroduction()); // 'Hi, my name is Uma'

//module.exports = './classes_intro.js'
module.exports = User; // Export the user class
