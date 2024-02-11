

require('dotenv').config()  //configure env file

const express=require('express') // import express
const cors=require('cors')
const router=require('./routes/routes')

const server=express()   //server creation
require('./db/connection')

server.use(cors())
server.use(express.json())  //convert data from frntend json to js

server.use(router)   //server to use router




const port=4000 || process.env.port  //port set


server.listen(port,()=>{
    console.log(`server starts at ${port}`);
})


