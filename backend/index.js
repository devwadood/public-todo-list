require('dotenv').config();
const express = require('express');
const app=express();
const cors=require('cors');
const { connectToDatabase } = require('./db');


connectToDatabase();

app.use(express.json());
app.use(cors());


app.use('/api', require('./api/index'));


app.listen(process.env.PORT, ()=>{
    console.log(`Server is Listing on PORT ${process.env.PORT}`);
})