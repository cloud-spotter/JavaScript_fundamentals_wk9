const User = require('./user');

const users = [
    new User('Uma'),
    new User('Josh'),
    new User('Ollie')
];

class UserBase {
    constructor(users) {
        this.users = users;
    }
    // Use map to apply the getName and getIntroduction methods
    // from the User class to all users in the new userBase class
    getNames() {
        return this.users.map(user => user.getName());
    }
    getIntroductions() {
        return this.users.map(user => user.getIntroduction());
    }
    count() {
        return this.users.length;
    }
}
const userBase = new UserBase(users);
console.log(userBase.count());
console.log(userBase.getNames());
console.log(userBase.getIntroductions());
