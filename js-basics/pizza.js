let orderCount = 0;

const takeOrder = (topping, crustType) => {
  console.log(`Order: pizza topped with ${topping} on ${crustType}`);
  orderCount++;
};

const getSubTotal = (itemCount) => {
  return itemCount * 7.5;
};

const getTax = () => {
  return getSubTotal(orderCount) * 0.06;
};

const getTotal = () => {
  return getSubTotal(orderCount) + getTax();
};

takeOrder("cheeseburger", "sugarloaf");
takeOrder("sausage", "thin crust");
takeOrder("pepperoni", "thin crust");

console.log(getSubTotal(orderCount));
console.log(getTotal());
