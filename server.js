require('dotenv').config()
const express = require('express')
const app = express()
const cors = require('cors')
const PORT = process.env.PORT || 8000;

const request = require('./api/request')

app.use(cors({ origin: '*' }))
app.use(express.urlencoded({ extended: false }))
app.use(express.json())
app.use('/api/request', request)

app.get('/', (req, res) => {
    res.status(200).json({ message: 'Connected to backend' })
})

app.listen(PORT, () => {
    console.log(`Server is live on port: ${PORT}`);
})