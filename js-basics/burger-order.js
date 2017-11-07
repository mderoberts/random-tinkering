let orderCount = 0;

const orderBurger = (burgerTemp, toppings, breadType) => {
    orderCount++;
    console.log(`You want a burger cooked ${burgerTemp} with ${toppings} on ${breadType}.`)
};

console.log(orderBurger("medium", "lettuce, tomato, onion", "brioche"));
console.log(orderCount);
