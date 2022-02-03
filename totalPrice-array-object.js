const products = [
  {name: 'laptop', price: 43000, quantity: 2},
  {name: 'shirt', price: 500, quantity: 8},
  {name: 'watch', price: 3680, quantity: 5},
  {name: 'phone', price: 55000, quantity: 3}
];

let totalPrice = 0;

for(const product of products){
  const subTotal = product.price * product.quantity;
  totalPrice = totalPrice + subTotal;
}

console.log(totalPrice);