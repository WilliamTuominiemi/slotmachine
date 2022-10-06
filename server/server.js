const express = require('express')
const app = express()
const port = 8080

const fs = require('fs')
const path = require('path')
const dirPath = path.join(__dirname, '/texture1.png')

const cors = require('cors')
const corsOptions = {
    origin: '*',
    credentials: true, //access-control-allow-credentials:true
    optionSuccessStatus: 200,
}

app.use(cors(corsOptions)) // Use this after the variable declaration

app.get('/', (req, res) => {
    res.sendFile(dirPath)
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
