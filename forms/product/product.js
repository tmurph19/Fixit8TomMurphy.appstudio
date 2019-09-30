function product(a,b) {
  return a * b
  }
  
let arrayData = [123,433,54326,2234,1919,1123,1928,3374,23,190,33874]
let runningTotal = 1
for (i = 0; i < arrayData.length; i++) {
  runningTotal = product(arrayData[i],runningTotal)
}
console.log(`The product of those numbers is ${runningTotal}.`)

