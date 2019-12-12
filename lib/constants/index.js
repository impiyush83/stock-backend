'use strict'

const Constants = {

  SERVER: {
    PORT: process.env.PORT || 3000
  },

  MONGO: {
    DATABASE: {
      NAME: 'stock',
      CONNECTION_URI: process.env.MONGODB_URI || `mongodb://localhost/stock`,
      TEST_CONNECTION_URI: `mongodb://localhost/stock-test`
    }
  }
}

module.exports = Constants
