//filters through the car array and returns only the cars sold in 2017
let profit2017 = cars.filter (car => car.purchase_date.split("-")[0] === "2017")
//takes the resulting array and creates a new array with the gross profit from each sale
.map(car => car.gross_profit)
//takes the resulting array and transforms it into a number by adding each item in the array together
.reduce((currentTotal, nextNumberInArray) =>currentTotal + nextNumberInArray, 0)
console.log(`${profit2017} is the total profit from 2017`)

//---------------------------------------------------------------------------------------------------------

//filtered the array of objects and only grabbed those which were sold in 2017
let mostMonthlySales2017 = cars.filter(car => car.purchase_date.split("-")[0] === "2017")
//we then reduced those object to ONE object
.reduce((newObject, car) => {
    //the variable month is equal to the purchase date, split on the -, at index 1, this is the numerical representation of the month
      const month = car.purchase_date.split("-")[1]
      //if a key already exists in the object with key named after month, iterate it's value by one
      if (month in newObject) {
        newObject[month]++
     //if the key doesnt exist, create the key and set the value equal to one
      } else {
        newObject[month] = 1
      }
      return newObject
     } , {})
//Turns the newly created object into an array containing arrays. Those inner arrays have the key as one item and the value as another
let monthsArrayFromObject = Object.entries(mostMonthlySales2017)
//sort the newly filled array in decending order by the value at index 1 of each interior array, this will put arrays in order of greatest number sales per month, to lowest.
.sort((a,b) => b[1]-a[1])
//this returns an array containing the month with the most sales and any other month with the same amount of sales
let finalreport = monthsArrayFromObject.filter(month => month === monthsArrayFromObject[0] ||month[1] === monthsArrayFromObject[0][1])
//map that new array and return only the values at index 0 of each inner array -the month-
.map(month => month[0])
console.log(`${finalreport} are the top selling months of 2017`)

//---------------------------------------------------------------------------------------------------------

let salePeople = cars.filter (car => car.purchase_date.split("-")[0] === "2017")
.map(car => [car.sales_agent.first_name, car.sales_agent.last_name].join(" "))
.reduce((newObject, seller) => {
      if (seller in newObject) {
        newObject[seller]++
      } else {
        newObject[seller] = 1
      }
      return newObject
     } , {})
//this does the same thing as the for in loop, taking and object and creating an array full of arrays where the innter array contains the key value pairs present on the objecet
let topSeller = Object.entries(salePeople)
.sort((a,b) => b[1]-a[1])[0][0]
console.log(`${topSeller} had the most sales in 2017`)

//---------------------------------------------------------------------------------------------------------

let profitPerSeller = cars.filter (car => car.purchase_date.split("-")[0] === "2017").map(car => [[car.sales_agent.first_name, car.sales_agent.last_name].join(" "), car.gross_profit])
.reduce((newObject, name) => {
    if (name[0] in newObject) {
        newObject[name[0]] += name[1];
    } else {
        newObject[name[0]] = name[1];
    }
    return newObject
}, {})
let topProfitSeller = Object.entries(profitPerSeller)
.sort((a,b) => b[1]-a[1])[0][0]

console.log(`${topProfitSeller} is the top profit seller of 2017 `)

//---------------------------------------------------------------------------------------------------------

let mostPopularCarModel = cars.filter (car => car.purchase_date.split("-")[0] === "2017")
.map(car => car.vehicle.model)
.reduce((newObject, seller) => {
      if (seller in newObject) {
        newObject[seller]++
      } else {
        newObject[seller] = 1
      }
      return newObject
     } , {})
let topModel = Object.entries(mostPopularCarModel)
.sort((a,b) => b[1]-a[1])[0][0]
console.log(`${topModel} is the top selling model of car`)

//---------------------------------------------------------------------------------------------------------


let bankLoans = cars.filter (car => car.purchase_date.split("-")[0] === "2017")
.map(car => car.credit.credit_provider)
.reduce((newObject, provider) => {
      if (provider in newObject) {
        newObject[provider]++
      } else {
        newObject[provider] = 1
      }
      return newObject
     } , {})
let mostUsedBank = Object.entries(bankLoans)
.sort((a,b) => b[1]-a[1])[0][0]
console.log(`${mostUsedBank} is the most used bank in 2017`)
