// Nesting objects in arrays

const shoppingCart = [
    {
        product: "Jenga Classic",
        price: 6.88,
        quantity: 1
    },
    {
        product: "Echo Dart",
        price: 29.99,
        quantity: 3
    },
    {
        product: "Fire Stick",
        price: 39.99,
        quantity: 2
    }
];

let total = 0;

for (let i=0; i<shoppingCart.length; i++){
    var currentAmount = shoppingCart[i].price * shoppingCart[i].quantity;
    total += currentAmount;
}

console.log(`Total to pay: $${total.toFixed(2)}`);