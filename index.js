'use strict'

const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const Constants = require('./lib/constants')
const MongoConnection = require('./lib/dao/connect')

const _init = async function () {
  await MongoConnection.init()
  // Turn on the server.
  app.listen(Constants.SERVER.PORT, () => console.log(`App listening on port ${Constants.SERVER.PORT}`))
}
 
try {
  _init()
} catch (err) {
  console.log(`Something went wrong while starting up the server. Exiting.\nError: ${JSON.stringify(err)}`)
  // Note: If something goes wrong while starting up the server (like mongo connection failure),
  // then server startup is terminated explicitly.
  process.exit(1)
}