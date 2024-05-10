const express = require('express')
const app = express()
const cookieparser = require('cookie-parser')
const { PORT } = require('../src/constants')

// initialize middleware
// Middleware to parse JSON bodies
app.use(express.json())
app.use(cookieparser())
// import routes

const authRoutes = require('./routes/auth')

// initialize routes

app.use('/api',authRoutes)



const appstart = () => {
    try {
        app.listen(PORT, () => {
            console.log(`Server is running on http://localhost:${PORT}`)
        })
    } catch (error) {
        console.log("Server is not running", error)
    }
}

appstart()
