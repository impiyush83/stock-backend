'use strict'

const mongoose = require('mongoose')
const Schema = mongoose.Schema

const stockUpdatesSchema = new Schema({
  stockId: {
    type: String,
    required: true
  },
  closingPrice: {
    type: Number,
    required: true
  },
  tradedAt: {
    type: Date,
    required: true
  }
}, {
  versionKey: false,
  timestamps: true
})

module.exports = {
  stockUpdates: mongoose.model('stockUpdates', stockUpdatesSchema)
}
