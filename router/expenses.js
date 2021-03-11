const express=require('express')
const router=express.Router()
const  Expense=require('../DB/schemaDetails.js')

router.get('/', async(req,res)=>{
    try{
        const exp=await Expense.find()
        res.json(exp)

    }catch(err){
        res.send('Error '+err);
    }
    
})

//find by name
router.get('/name', async(req,res)=>{
    try{
        const exp=await Expense.find({product_name:req.query.name})
        res.json(exp)

    }catch(err){
        res.send('Error '+err);
    }
    
})
//find by price
router.get('/price', async(req,res)=>{
    try{
        const exp=await Expense.find({price:req.query.price})
        res.json(exp)

    }catch(err){
        res.send('Error '+err);
    }
    
})

//find by ID
router.get('/:id', async(req,res)=>{
    try{
        const exp=await Expense.findById(req.params.id)//params because id is retrieve by url
        res.json(exp)

    }catch(err){
        res.send('Error '+err);
    }
    
})
//patch req
router.patch('/:id', async(req,res)=>{
    try{
        const exp=await Expense.findById(req.params.id)//params because id is retrieve by url
        exp.product_name=req.body.product_name;
        const updated_p1=await exp.save()
        res.send(updated_p1)

    }catch(err){
        res.send('Error '+err);
    }
    
})

//del req
router.delete('/:id', async(req,res)=>{
    try{
        const exp=await Expense.findById(req.params.id)//params because id is retrieve by url
        exp.product_name=req.body.product_name;
        const updated_p2=await exp.remove()
        res.send(updated_p2)

    }catch(err){
        res.send('Error '+err);
    }
    
})

router.post('/',async(req,res)=>{
    const prod_det=new Expense({
        product_name:req.body.product_name,
        price:req.body.price
    })
    try{
        const p1=await prod_det.save()
        res.send(p1)
        

    }catch(err){
        res.send("error "+err);
    }
})

module.exports=router