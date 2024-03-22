const express = require('express')
const app = express()


app.get('/health', (request, response) => {
    response.send('<h1> This okay full </h1>')
})

const PORT = process.env.PORT || 3002
app.listen(PORT, () => {
    console.log(`Server running on PORT ${PORT}`)
})