const express = require('express')
const app = express()
const cookieparser = require('cookie-parser')
const { PORT, CLIENT_URL } = require('../src/constants')
const cors = require('cors')
const passport = require('passport')    

// initialize middleware
// Middleware to parse JSON bodies
app.use(express.json())
app.use(cookieparser())
app.use(passport.initialize())
app.use(cors({origin: CLIENT_URL, credentials: true}))
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
