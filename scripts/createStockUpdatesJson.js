'use strict'

const fs = require('fs')


function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min
}


function createSampleData(stockUpdates) {

    //last 5 years data
    for(let i=1; i<5*365; i++){
        const oldDate = new Date(new Date() - (i * 24 * 60 * 60 * 1000))
        if (oldDate.getDay() === 6 || oldDate.getDay() === 0){
            continue
        }
        const stockUpdateINFY = {
            "stockId": "INFY",
            "closingPrice": getRandomNumber(100,200),
            "tradedAt": oldDate
        }

        const stockUpdateTCS = {
            "stockId": "TCS",
            "closingPrice": getRandomNumber(100,200),
            "tradedAt": oldDate
        }
        stockUpdates.push(stockUpdateINFY)
        stockUpdates.push(stockUpdateTCS)
    }
    return stockUpdates
}

function writeSampleDatatoJsonFile(path) {
    let stockUpdates = []
    stockUpdates = createSampleData(stockUpdates)
    fs.writeFile(path, JSON.stringify(stockUpdates), function (err) {
        if (err) throw err;
        console.log('Saved!');
      })
}


const path = 'stockUpdates.json'
writeSampleDatatoJsonFile(path)