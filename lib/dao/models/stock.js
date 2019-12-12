'use strict'

const mongoose = require('mongoose')
const Schema = mongoose.Schema

const stockSchema = new Schema({
  stockId: {
    type: String,
    required: true
  },
  stockName: {
    type: String,
    required: true
  },
}, {
  versionKey: false,
  timestamps: true
})

module.exports = {
  stocks: mongoose.model('stocks', stockSchema)
}
