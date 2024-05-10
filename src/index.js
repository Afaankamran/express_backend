const express = require('express')
const app = express()
const { PORT } = require('../src/constants')

// initialize middleware
// Middleware to parse JSON bodies
app.use(express.json())

// import routes

const authRoutes = require('./routes/auth')

// initialize routes

app.use('/api',authRoutes)

const defaultPort = 8000

const port = PORT || defaultPort

const appstart = () => {
    try {
        app.listen(port, () => {
            console.log(`Server is running on http://localhost:${port}`)
        })
    } catch (error) {
        console.log("Server is not running", error)
    }
}

appstart()
