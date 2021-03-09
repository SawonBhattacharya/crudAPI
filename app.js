const express=require('express')
var dbConnection=require('./DB/dbconnect.js')

const app=express()
port=9000;

const playerRouter=require('./router/cricketer.js')
app.use('./cricketer',playerRouter);

app.listen(port,()=>{
    console.log("Running...")
});