const express = require('express')
const app = express()
const path = require('path')


app.get('/ping', (request, response) => {
    response.sendFile(path.join(__dirname, 'index.html'))
})

const PORT = process.env.PORT || 3002
app.listen(PORT, () => {
    console.log(`Server running on PORT ${PORT}`)
})

