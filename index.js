const express = require('express')
const app = express()
const path = require('path')


app.get('/', (request, response) => {
    response.sendFile(path.join(__dirname, 'index.html'))

    response.send('<h1> This thanks you very much Pipeline </h1>')
})

const PORT = process.env.PORT || 3002
app.listen(PORT, () => {
    console.log(`Server running on PORT ${PORT}`)
})

