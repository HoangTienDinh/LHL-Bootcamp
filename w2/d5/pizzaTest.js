class Pizza {
  constructor() {
    this.toppings = ["cheese", "pepperoni"];
    this.crust = ["plain"];
  }

  changeCrust(crust) {
    this.crust.push(crust);
  }

  addTopping(topping) {
    this.toppings.push(topping);
  }

  set size(size) {
    if (size === "s" || size === "m" || size === "l") {
      this._size = size;
    }
  }


  set length(length) {
    this._length = length;
  }

  get price() {
    const basePrice = 10;
    const toppingPrice = 2;
    return basePrice + this.toppings.length * toppingPrice;
  }

  
}

let pizza1 = new Pizza();
let pizza2 = new Pizza();
const pizza = new Pizza();
pizza.price;
pizza.size = "s"
pizza.length = "20"

console.log(pizza)


// console.log(pizza1.toppings);
// pizza1.addTopping("mushrooms");
// console.log(pizza1.toppings);
// pizza1.addTopping("peppers");
// console.log(pizza1.toppings);
// pizza2.addTopping("more cheese");
// console.log(pizza2.toppings);

// console.log(pizza1)
// pizza1.changeCrust("Cheese Stuffed")
// console.log(pizza1)

