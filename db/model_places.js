
const mongoose=require('mongoose')

const places = mongoose.model('places',{

    place:{
        type:String,
        required:true,
        trim:true
    }
})

module.exports=places