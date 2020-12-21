/*var unitPrice = [8, 3, 12, 6]

for (var i in unitPrice) {
  console.log(unitPrice[i])
}*/

var shampooPrice = 8
var handsoapPrice = 3
var papertowelPrice = 12
var conditionerPrice = 6

//var salesTax = document.getElementById("tax").value

function calculateTotalPrice() {
  var shampooQuantity = document.getElementById("shampoo").value
  var handsoapQuantity = document.getElementById("handsoap").value
  var papertowelQuantity = document.getElementById("papertowel").value
  var conditionerQuantity = document.getElementById("conditioner").value
  var salesTax = document.getElementById("tax").value
  var discountCode = document.getElementById("discount")
  if (salesTax < 0 || salesTax > 100) {
    alert("Sales tax value is invalid")
    return("")
  }
  if (discountCode == "HOLIDAY") {
    var discountCode = priceBeforeTax / 10
  }
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
