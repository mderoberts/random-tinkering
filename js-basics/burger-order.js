let orderCount = 0;

const orderBurger = (burgerTemp, breadType) => {
    orderCount++;
    console.log(`You want a burger cooked ${burgerTemp} on ${breadType}.`)
};

console.log(orderBurger("medium", "brioche"));
console.log(orderBurger("rare", "sesame"));
console.log(orderBurger("well done", "lettuce wrap"));
console.log(orderBurger("medium-well", "kaiser"));
console.log(orderCount);

const getSubtotal = (itemCount) => {
    return itemCount * 10; 
};

const getTax = () => {
    return getSubtotal(orderCount) * 0.06;
};

const totalCost = () => {
    return getSubtotal(orderCount) + getTax();
};

console.log(totalCost());
