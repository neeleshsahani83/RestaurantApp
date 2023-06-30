const mongoose=require('mongoose')

// mongoose.connect('mongodb://0.0.0.0:27017/restaurent')

const updateSchema=new mongoose.Schema({

    email:{
        type:String,
        required:true
    },
})

module.exports=mongoose.model("updates",updateSchema)