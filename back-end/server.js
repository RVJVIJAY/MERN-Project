const express=require('express')
const app=express()
const mongoose=require('mongoose');
const cors=require('cors')

//Connecting mongoDB
mongoose.connect('mongodb://localhost:27017/Todo').then(()=>{
    console.log('Database Connected Succesfully...')
}).catch(()=>{
    console.log('Sorry Unable to Connect DB')
})

//schema , it just like an structure of the data and validation 
const userSchema=mongoose.Schema({
    title:{
        type:String,
        require
    },
    description:{
        type:String,
        require
    }
})

// creating model to perform api operation 
const userModel=mongoose.model('Todo',userSchema)

//In-Build Middleware to support Json data , CORS to allow sites 

app.use(express.json())
app.use(cors())


//Api Middlewares 

//method 1 to post the data in mongodb using Save() method 

/* app.post('/crud',async(req,res)=>{
    const {title,description}=req.body;
    const newdata= await new userModel({
        title,
        description
    }
    )
    await newdata.save()
    res.json(newdata)
    console.log(newdata)
}) */


//method 2 to post the data in mongodb using Create() method 
app.post('/crud',async(req,res)=>{
    try{
        const {title,description}=req.body;
        const newdata=await  userModel.create({
            title,
            description
        })
        console.log(newdata)
        res.json(newdata)
    }catch(err){
        res.status(500).send('Server error')
    }
})
//Get All Item
app.get('/crud',async(req,res)=>{
    try{
        const alldata=await userModel.find();
        res.json(alldata)
        console.log(alldata)
    }catch(err){
        res.status(500).json({ message: "Server error. Could not retrieve data." });
    }
})

//Update item

app.put('/crud/:id',async(req,res)=>{
    try{
        const {title,description}=req.body;
        const id=req.params.id;
        const updatenewdata=await userModel.findByIdAndUpdate(
            id,
            {title,description},
            {new:true}
        )
        if(!updatenewdata){
            res.status(404).json({message:'response data not found'})
        }
        res.json(updatenewdata)
        console.log(updatenewdata)
    }catch(err){
        res.status(500).json({message:'Server error , Could not update the data'})
    }
})

//Delete item

app.delete('/crud/:id',async(req,res)=>{
    try{
      const id=req.params.id
      await userModel.findByIdAndDelete(id)
      res.status(204).end();
      console.log("Delete successfully")
    }catch(err){
        console.log(error)
        res.status(500).json({message: error.message});
    }
})
const port=8000;
app.listen(port,()=>{
    try{
        console.log('server is running on port :8000')
    }catch(err){
        console.log('error to connect server')
    }
})