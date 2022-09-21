var shoppingCart = {
    mobile: 1,
    dress: 4,
    pant: 3,
    tshart: 4,
    shoes: 2
}
// acees on values 
var mobile = shoppingCart.mobile;
var dress = shoppingCart['dress'];
var allProperties = Object.keys(shoppingCart);
var allValues = Object.values(shoppingCart);
// set values 
shoppingCart.mobile = 4;
console.log(shoppingCart);