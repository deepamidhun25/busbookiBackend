

const mongoose=require('mongoose')

const bookedSeats = mongoose.model('bookedSeats',{

  bookingDate:{
    type:String,required:true
  },
 
  bookedby:{
    type:String,required:true

  },
  bookedManId:{
    type:String,required:true

  },
  busId:{
    type:String,required:true

  },
  dateTravelled:{
    type:String,required:true

  },

  from:{
    type:String,required:true
  },

  to:{
    type:String,required:true
  },

  staringTime:{
    type:String,required:true

  },
  seatsbooked:{
    type:Number,required:true

  },
  amount:{
    type:Number,required:true

  },
  amountstatus:{
    type:String

  },
  peronsTravelledwith:[]

  

})

module.exports=bookedSeats
