const express=require('express')
var dbConnection=require('./DB/dbconnect')
//const mongclient = require('./DB/MongoClient');

const app=express()
host='127.0.0.1';
port=3000;

const db = dbConnection.connectMdb();

app.use(express.json());


const playerRouter=require('./router/expenses.js')
app.use('/expenses',playerRouter);


app.listen(port, host, ()=>{
    console.log("Running at: http://" + host + ":" + port)
});