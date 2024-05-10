const db  = require('../db')
const {hash} = require('bcryptjs')
exports.getUsers = async (req, res) => {

try{
    const {rows} = await db.query('select * from users')
    console.log(rows)
}
catch(error){
    console.log(error.message)
    
}
}



exports.register = async (req, res) => {
 const {username, email, password} = req.body
    try{
        const hashpassword = await hash(password, 10)
        await db.query('INSERT INTO users (username, email, password) VALUES ($1, $2 , $3)', [username, email, hashpassword])
        return res.status(201).json({
            success: true,
            message: 'User created successfully',
        })
    }
    catch(error){
        console.log(error.message)
        return res.status(500).json({
            error: error.message,
        })
    
    }
    }