const express=require('express')
const router=express.Router()

router.get('/',(req,res)=>{
    res.send('Get requests');
})

module.exports=router