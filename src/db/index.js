const {Pool} = require('pg');

const pool = new Pool({ 

 host: "localhost",
 port: 5432,
 database: "sample",
 user: "postgres",
 password: "12345678"
  })
  module.exports = {

    query: (text, params) => pool.query(text, params),
  }

//   client.connect((err)=>{

//   if(err){
//         console.log('connection error',err.stack);
//     }else{
//         console.log("Connected to the database");
//     }
//   })

 // module.exports = client;