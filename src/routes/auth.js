const { Router } = require('express')
const { getUsers, register, login } = require('../controllers/auth')
const router = Router()
const { validationMiddleware } = require('../middlewares/validations-middleware')
const { registerValidation, loginValidation } = require('../validators/auth')

// Define routes
router.get('/get-users', getUsers)

// Register route with middleware for validation
router.post('/register', registerValidation, validationMiddleware, register)

router.post('/login', loginValidation, validationMiddleware, login)



router.get('/', (req, res) => {
    return res.send('API is working!')
})

module.exports = router
