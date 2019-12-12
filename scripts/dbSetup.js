const stocksData = require('./stocks.json')
const stockUpdatesData = require('./stockUpdates.json')
const MongoConnection = require('../lib/dao/connect')
const dbStocks = require('../lib/dao/models/stock')
const dbStockUpdates = require('../lib/dao/models/stockUpdates')

const addStocks = async function (stocksData) {
  // clear entries
  await dbStocks.stocks.deleteMany()
  // insert many
  await dbStocks.stocks.insertMany(stocksData)
}

const addStockUpdates = async function (stockUpdatesData) {
  // clear entries
  await dbStockUpdates.stockUpdates.deleteMany()
  // insert many
  await dbStockUpdates.stockUpdates.insertMany(stockUpdatesData)
}

const init = async () => {
  await MongoConnection.init()
  await addStocks(stocksData)
  await addStockUpdates(stockUpdatesData)
}

init().then(() => {
  console.log('setup success')
  process.exit(1)
}).catch((err) => {
  console.log(`error in setup: ${err}`)
  process.exit(1)
})
