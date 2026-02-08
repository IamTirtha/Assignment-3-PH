function newPrice(currentPrice, discount) {
  if(typeof (currentPrice)==="number" && typeof (discount)==="number") {
     if (isNaN(currentPrice) && isNaN(discount)) {
      return "Invalid";
    } else if (discount < 0 || discount > 100) {
      return "Invalid";
    } else {
      let discountedAmount = (currentPrice * discount) / 100;
      let dicountedPrice = currentPrice - discountedAmount;
      return dicountedPrice.toFixed(3);
    }
  } else {
    return "Invalid";
  }
}

let x = newPrice(100,10);
console.log(x);
