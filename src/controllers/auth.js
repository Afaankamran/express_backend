const db  = require('../db')
const {hash} = require('bcryptjs')
const {sign} = require('jsonwebtoken')
const {SECRET} = require('../constants')


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


    exports.login = async (req, res) => {
        let user = req.user;
        let payload = {
            id: user.user_id,
            email: user.email
        };
    
        try {
            const token = sign(payload, SECRET); // Use SECRET to sign the token
            return res.status(200).cookie('token', token, { httpOnly: true }).json({
                success: true,
                message: 'Login successful'
            });
        } catch (error) {
            console.log(error.message);
            return res.status(500).json({
                error: error.message
            });
        }
    };


    exports.dashboard = async (req, res) => {

        try{
            return res.status(200).json({
                info: 'Dashboard info',
               
            });
        }
        catch(error){
            console.log(error.message)
            
        }
        }


    exports.logout = async (req, res) => {
        try {
          
            return res.status(200).clearCookie('token', { httpOnly: true }).json({
                success: true,
                message: 'Logout successful'
            });
        } catch (error) {
            console.log(error.message);
            return res.status(500).json({
                error: error.message
            });
        }


    };



    exports.hospital = async (req, res) => {
        const {hospital_name, hospital_location, hospital_rating, estimated_waiting_time} = req.body
           try{
               
               await db.query('INSERT INTO hospitals (hospital_name, hospital_location, hospital_rating, estimated_waiting_time) VALUES ($1, $2 , $3, $4)', [hospital_name, hospital_location, hospital_rating, estimated_waiting_time])
               return res.status(201).json({
                   success: true,
                   message: 'Hospital added successfully',
               })
           }
           catch(error){
               console.log(error.message)
               return res.status(500).json({
                   error: error.message,
               })
           
           }
           }

    
    
           exports.gethospitals = async (req, res) => {

            try{
                const {rows} = await db.query('select * from hospitals')
                console.log(rows)
            }
            catch(error){
                console.log(error.message)
                
            }
            }