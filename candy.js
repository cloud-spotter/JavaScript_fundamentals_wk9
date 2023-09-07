// Classes Challenge
class Candy {
    constructor(name, price) {
        this.name = name, {/* string */},
        this.price = price; {/* num */}
    }
    getName() {
        return this.name;
    }
    getPrice() {
        return this.price;
    }
};

class ShoppingBasket {
    constructor() {
        this.basket = []
    }
    addItem(item) {
        this.basket = this.basket.concat(item);
    }
    getTotalPrice() {
        if (this.basket.length == 0) { // Deal with free items later
            return 0;
        } else {
            let total = 0;
            let prices = this.basket.map((item) => item.getPrice());
            prices.forEach((i) => total += i);
            return total
    }
}
};
