const express = require('express');
const router = express.Router();
const { getUsers, register, login , dashboard, logout} = require('../controllers/auth')

const { validationMiddleware } = require('../middlewares/validations-middleware')
const { registerValidation, loginValidation } = require('../validators/auth')
const { userAuth } = require('../middlewares/passport-middleware')


// Define routes
router.get('/get-users', getUsers)

// Register route with middleware for validation
router.post('/register', registerValidation, validationMiddleware, register)

router.post('/login', loginValidation, validationMiddleware, login)
router.get('/dashboard', userAuth, dashboard)


router.get('/logout', userAuth, logout)




router.get('/', (req, res) => {
    return res.send('API is working!')
})

module.exports = router
