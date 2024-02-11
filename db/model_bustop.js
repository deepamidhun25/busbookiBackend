const mongoose=require('mongoose')

const busStops
= mongoose.model('busStops',{

    busId:{
        type:String,
        required:true
    },

    
    stopname:{
        type:String,
        required:true,
        trim:true
    }
    ,
    
    time:{
        type:String, 
        required:true,
        trim:true
    }
})

module.exports=busStops