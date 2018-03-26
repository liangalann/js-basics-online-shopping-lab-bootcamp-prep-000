var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
 // write your code here
 var price = Math.floor(Math.random()*100)
 cart.push(new Object({[item]:price}))
 return cart
}
function viewCart(item) {
  // write your code here

  if (cart.length === 0) {
    var empty = ("Your shopping cart is empty.")
    return empty
  } else {
    var sentence = ("In the cart you have")
    for (var i = 0; i < cart.length; i++) {
    for (var item in cart[i]) {
      sentence += "{itemName} at {cart[i][itemPrice]}"
      if(i!==cart.length-1){
            sentence+=","
      }
          else {
            sentence+= "."
          }
    }
      return sentence
    }
  }

}

function total() {
  // write your code here
}

function removeFromCart(item) {
  // write your code here
}

function placeOrder(cardNumber) {
  // write your code here
}

console.log(cart)
