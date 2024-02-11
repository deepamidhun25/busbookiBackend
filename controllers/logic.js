const places= require('../db/model_places')
const busmasters=require('../db/busMaster')
const bookedSeats=require('../db/modelBookedSeat')
// Add places

exports.placesAdd = async(req,res)=>{
    const{place}=req.body
    try{
        const newplace = await places({place})
         await newplace.save()
         res.status(200).json(newplace)

    }
    catch(error){
        res.status(401).json(error)

    }

}
//Add buses
exports.busAdd = async(req,res)=>{
    const{name,regNo, no_seats,from,to,startTime,endTime,busfees}=req.body
    try{
        const newbus = await busmasters
        ({name,regNo,no_seats,from,to,startTime,endTime,busfees})
         await newbus.save()
         res.status(200).json(newbus)

    }
    catch(error){
        res.status(401).json(error)

    }
}

//getBus confirm details

// exports.get_confirmbuses = async(req,res)=>{
//     const{id1}=req.body
// console.log(id1);
//     try{ 
//      const place=await busmasters
//      .find({id1:_id}).sort()
//      res.status(200).json(place);
   

     
//       }
//    catch(err){
//      res.status(500).json(err)
//    }
   
   
//    }



//getbus individul
exports.get_confirmbuses = async(req,res)=>{
    // const searchkey=req.query.search
    // const query={
    //   name:{$regex:searchkey, $options:"i"}
    // }/

    const id = req.params.id;
    try{ 
     const documents=await busmasters.findById(id).sort()
     res.status(200).json(documents);
   
     
   }
   catch(err){
     res.status(500).json(err)
   }
   
   

   }






















//get buses
exports.get_buses = async(req,res)=>{
    const{from,to}=req.body

    try{ 
     const place=await busmasters.find({from , to }).sort()
     res.status(200).json(place);
   
     
      }
   catch(err){
     res.status(500).json(err)
   }
   
   
   }


//get All places
exports.get_places = async(req,res)=>{
    try{ 
     const place=await places.find().sort()
     res.status(200).json(place);
   
     

      }
   catch(err){
     res.status(500).json(err)
   }
   
   

   }

//seat
  
exports.busbooking = async(req,res)=>{
  const{
     
     
      bookedby,
      bookedManId,
      busId,
      dateTravelled,from,to,
    
      staringTime,
      seatsbooked,
      amount,
      amountstatus,
      peronsTravelledwith}=req.body
      console.log(
        bookedby,
        bookedManId,
        busId,
        dateTravelled,from,to,
      
        staringTime,
        seatsbooked,
        amount,
        amountstatus,
        peronsTravelledwith);

      const today = new Date();
      const year = today.getFullYear();
      const month = today.getMonth() + 1; // Months are zero-based, so add 1
      const day = today.getDate();
      const currentDate=`${year}-${month}-${day}`
      

      try {
        const newbooking = await bookedSeats({bookingDate:currentDate,
         
          bookedby,
          bookedManId,
          busId,
          dateTravelled,from,to,
        
          
          staringTime,
          seatsbooked,
          amount,
          amountstatus,
          peronsTravelledwith})

         await newbooking.save()
         res.status(200).json(newbooking)


    }
    catch(error){
        res.status(500).json(error)

    }
 
 
 }

 //check availability
 exports.checkavailability = async(req,res)=>{
  const{busId,dateTravelled,seatbook}=req.body

  try{ 
    const result = await bookedSeats.aggregate([
      { $match: { busId, dateTravelled } }, // Match documents with the specified busId and dateTravelled
      { $group: { _id: { busId: '$busId', dateTravelled: '$dateTravelled' }, totalSeatsBooked: { $sum: '$seatsbooked' } } } // Group by busId and dateTravelled, and calculate the sum of seatsbooked
    ]);
 const totalSeatsBooked = result.length > 0 ? result[0].totalSeatsBooked : 0;
 console.log(totalSeatsBooked);
 const documents=await busmasters.findById(busId).sort()
 const busSeat = documents.no_seats
 console.log(busSeat);
  
 if((totalSeatsBooked+seatbook)<=busSeat)
   {res.status(200).json("Seat available");}
   else{
    res.status(404).json("seat Not available")
  }
 

   
  }    
 catch(err){
   res.status(500).json(err)
 }
 
 
 }


   
   