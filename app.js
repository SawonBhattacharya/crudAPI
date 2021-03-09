const express=require('express')
var dbConnection=require('./DB/dbconnect')
//const mongclient = require('./DB/MongoClient');

const app=express()
host='127.0.0.1';
port=9000;

const db = dbConnection.connectMdb();

const playerRouter=require('./router/cricketer.js')
app.use('/cricketer',playerRouter);

app.listen(port, host, ()=>{
    console.log("Running at: http://" + host + ":" + port)
});