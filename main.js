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

//filters the array of objects and only grabs the cars purchased in 2017
let salePeople = cars.filter (car => car.purchase_date.split("-")[0] === "2017")
//creates an array containing arrays. Those inner arrays have the first and last name of the sales person responsible for that particular sale, those arrays are then JOINED into a string of "first name last name"
.map(car => [car.sales_agent.first_name, car.sales_agent.last_name].join(" "))
//creates an object out of the array,if the object has a key with the sellers name that value is iterated by one. If the object does NOT have the key with the sellers name, the key is created and the value is set to one
.reduce((newObject, seller) => {
      if (seller in newObject) {
        newObject[seller]++
      } else {
        newObject[seller] = 1
      }
      return newObject
     } , {})
//takes the object key/value pairs and puts in arrays, with the seller name at [0] and the number of sales they made at [1]
let topSeller = Object.entries(salePeople)
//this sorts those arrays by the value of their index [1], aka numbe of sales, and then returns the array at index [0] and the index [0] of that array (the sellers name)
.sort((a,b) => b[1]-a[1])[0][0]
console.log(`${topSeller} had the most sales in 2017`)

//---------------------------------------------------------------------------------------------------------

//filters through the array of objects and only grabsl the cars purchased in 2017
let profitPerSeller = cars.filter (car => car.purchase_date.split("-")[0] === "2017")
//creates a new array containing arrays. The inner arrays contain the first and last name of the seller, joined with a space, and their gross profit.
.map(car => [[car.sales_agent.first_name, car.sales_agent.last_name].join(" "), car.gross_profit])
//creates a new object
.reduce((newObject, name) => {
    //if the object has a key with the same name as index [0] of the array (the seller name), then add the value at index [1] (gross sales) to the value of that key
    if (name[0] in newObject) {
        newObject[name[0]] += name[1];
    //if the object DOESNT have a key with the same name as index [0], create the key and set its value equal to the value at index [1]
    } else {
        newObject[name[0]] = name[1];
    }
    return newObject
}, {})
//turns the object into an array full of arrays holding key/value pairs
let topProfitSeller = Object.entries(profitPerSeller)
//sorts those arrays by decending index [1] value and returns index [0] of the array at index [0]
.sort((a,b) => b[1]-a[1])[0][0]

console.log(`${topProfitSeller} is the top profit seller of 2017 `)

//---------------------------------------------------------------------------------------------------------

//filters through the array of objects and returns only the cars sold in 2017
let mostPopularCarModel = cars.filter (car => car.purchase_date.split("-")[0] === "2017")
//returns an array with only the vehicle model names 
.map(car => car.vehicle.model)
//creates an object out of that array
.reduce((newObject, modelName) => {
      //if the object has key of model name then incrment it
      if (modelName in newObject) {
        newObject[modelName]++
      //if not then create the key and set its value equal to one
      } else {
        newObject[modelName] = 1
      }
      return newObject
     } , {})
//turns that object into an array containing arrays with the key/value pairs from the object
let topModel = Object.entries(mostPopularCarModel)
//sorts the array by decending index [1] value and returns the value at index [0], for the array at index [0]
.sort((a,b) => b[1]-a[1])[0][0]
console.log(`${topModel} is the top selling model of car`)

//---------------------------------------------------------------------------------------------------------

// filters through the array of objects and returns only the cars sold in 2017
let bankLoans = cars.filter (car => car.purchase_date.split("-")[0] === "2017")
//returns an array with only the credit provider names names
.map(car => car.credit.credit_provider)
//creates an object out of that array
.reduce((newObject, provider) => {
      //if the object has a key matching provider name, iterate the value by one
      if (provider in newObject) {
        newObject[provider]++
      //if the object does not have a key matching the provider name, create that key, and set the value equal to one
      } else {
        newObject[provider] = 1
      }
      return newObject
     } , {})
//turns that object into an array containing arrays, each with the key/value pair as items in the array
let mostUsedBank = Object.entries(bankLoans)
//sorts the array in decending order by the value of the item at index [1], returns the value at index [0] of the array at index [0]
.sort((a,b) => b[1]-a[1])[0][0]
console.log(`${mostUsedBank} is the most used bank in 2017`)
