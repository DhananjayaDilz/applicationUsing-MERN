const express=require('express');
const dotenv=require('dotenv').config();

const app=express();

const port= 5000;

app.get('/api/contacts', (req, res) =>{
    res.send("get all conacts");
});

app.listen(port,()=>{
    console.log(`Server is running on port ${port}`);
});