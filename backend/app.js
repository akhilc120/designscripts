const { json } = require('express')
const express = require('express')
const app = express()
app.use(express.json())
const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost/subscribers')
const db = mongoose.connection
db.on('errror', (error) => {console.error(error)})
db.once('open',()=>{console.log('db connected')})
app.use('/subscribers', require('./routers/subscribers'))
app.listen(9000, () => {
    console.log('connected in 9000')
})