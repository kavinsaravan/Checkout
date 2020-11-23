/*var unitPrice = [8, 3, 12, 6]

for (var i in unitPrice) {
  console.log(unitPrice[i])
}*/

var shampooPrice = 8
var handsoapPrice = 3
var papertowelPrice = 12
var conditionerPrice = 6

var salesTax = 8

function calculateTotalPrice() {
  var shampooQuantity = document.getElementById("shampoo").value
  var handsoapQuantity = document.getElementById("handsoap").value
  var papertowelQuantity = document.getElementById("papertowel").value
  var conditionerQuantity = document.getElementById("conditioner").value

  var priceBeforeTax = (shampooPrice * shampooQuantity) + (handsoapPrice * handsoapQuantity) + (papertowelPrice * papertowelQuantity) + (conditionerPrice * conditionerQuantity) 
  //total = salesTax/100 + total 
  var tax = salesTax/100 * priceBeforeTax
  var total = priceBeforeTax + tax
  document.getElementById("total").textContent = total
  return(total)
}

//var x = calculateTotalPrice()
//console.log(x)

document.getElementById("calculate").onclick = calculateTotalPrice
