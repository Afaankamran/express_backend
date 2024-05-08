const {Client} = require('pg');

const client = new Client({ 

 host: "localhost",
 port: 5432,
 database: "sample",
 user: "postgres",
 password: "12345678"
  })

  client.connect((err)=>{

  if(err){
        console.log('connection error',err.stack);
    }else{
        console.log("Connected to the database");
    }
  })

  module.exports = client;