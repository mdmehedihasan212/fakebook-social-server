const express = require('express')
const app = express()
require('dotenv').config()
const mongoose = require('mongoose')
const helmet = require('helmet')
const morgan = require('morgan')
const userRoute = require('./routes/users')
const authRoute = require('./routes/auth')
const port = process.env.PORT || 5000;

app.get('/', (req, res) => {
    res.send('Fakebook World!')
})

mongoose.connect(process.env.MONGODB_URL, () => {
    console.log("Connect Mongodb");
});

// middleware
app.use(express.json())
app.use(helmet())
app.use(morgan("common"))

app.use('/api/users', userRoute)
app.use('/api/auth', authRoute)





app.listen(port, () => {
    console.log(`fakebook server listening on port ${port}`)
})