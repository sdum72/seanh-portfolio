var customerOder = {
    drinkName: "tea",
    sugars: 3,
    orderReady: false,
}

console.log(customerOder.drinkName)

console.log(customerOder.sugars)

if (customerOder.orderReady) {
    console.log("Order of " + customerOder.drinkName + " with " + customerOder.sugars + " sugars, is " +  "Ready for pick-up.")
} else {
    console.log("Order of " + customerOder.drinkName + " with " + customerOder.sugars + " sugars, is " +  "Still in order queue.")
}

