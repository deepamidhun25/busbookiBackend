
const mongoose=require('mongoose')

const busmasters

= mongoose.model('busmasters',{

    name:{
        type:String,
        required:true,
        trim:true
    },
    regNo:{
        type:String,
        required:true,
        trim:true
    },
    no_seats:{
        type:Number,
        required:true,
        trim:true
    },
    from:{
        type:String,
        required:true,
        trim:true
    },
    to:{
        type:String,
        required:true,
        trim:true
    },
    startTime:{
        type:String,
        required:true,
        trim:true
    },
    endTime:{
        type:String,
        required:true,
        trim:true
    },
    busfees:{
        type:Number,
        required:true
    }
})

module.exports=busmasters

