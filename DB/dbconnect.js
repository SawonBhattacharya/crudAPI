const mongoose=require('mongoose')

const url="mongodb+srv://Sawon:Sawon123@node-conn.snu2y.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
const conparameters={
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true 
}
const connectMdb=()=>{
    mongoose.connect(url,conparameters).then(()=>{
        console.log("Connected to database")
    })
    .catch((err)=>{
        console.error('Error occured, cannot connect!!! \n ${err}');
    })

};

module.exports=connectMdb;