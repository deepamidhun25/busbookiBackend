const express=require('express')
const { placesAdd, get_places, busAdd, get_buses, get_confirmbuses,busbooking,checkavailability }=require('../controllers/logic')

const router=new express.Router()

//Add categories
router.post('/busbooking/places/add',placesAdd)


//get all assemblies
router.get('/busbooking/places/getplaces',get_places)

router.post('/busbooking/busadd',busAdd)

router.post('/busbooking/getbusdetails',get_buses)

router.get('/busbooking/getbusconfirmdetails/:id',get_confirmbuses)

router.post('/busbooking/details',busbooking)

router.post('/busbooking/checkavailability',checkavailability)




module.exports=router