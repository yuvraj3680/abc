const mysql2 =require('mysql2')
const pool = mysql2.createPool({

    host:'localhost',
    user:'root',
    password:'yuvi@123',
    database:'tushar',
    waitForConnections:true
})

module.exports =pool 