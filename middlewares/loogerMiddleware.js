const fs = require('fs');
const path = require('path')
const morgan = require('morgan')

const logData = fs.createWriteStream(path.join(__dirname, '../logs.log'), { 
    flags: 'a' 
})

const loogerMiddleware = morgan('combined', { stream: logData })

module.exports = {loogerMiddleware}
