const express = require('express')
const cors = require('cors')
require('dotenv').config()
require('./config/database')
const router = require('./routes/index')
const app = express()
const PORT = process.env.PORT || 4500;


app.use(cors())
app.use(express.json())
app.use('/api', router)



app.listen(PORT, () => console.log(`Listening on port ${PORT}`))