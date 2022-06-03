const express = require('express')
const app = express()
require('dotenv').config()
const mongoose = require('mongoose')
const helmet = require('helmet')
const morgan = require('morgan')
const port = process.env.PORT || 5000;

app.get('/', (req, res) => {
    res.send('Fakebook World!')
})

mongoose.connect(process.env.MONGODB_URL, () => {
    console.log("Connect Mongodb");
});

app.listen(port, () => {
    console.log(`fakebook server listening on port ${port}`)
})