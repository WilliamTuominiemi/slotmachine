const express = require('express')
const app = express()
const port = 3000

const fs = require('fs')
const path = require('path')
const dirPath = path.join(__dirname, '/texture.png')

app.get('/', (req, res) => {
    console.log(__dirname + '/texture.png')
    res.sendFile(dirPath)
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
