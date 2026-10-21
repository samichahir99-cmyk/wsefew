const express =require('express');
const app =express();
const dotenv = require('dotenv');
dotenv.config();

const connectDB= config('./config/db')

const PORT = process.env.PORT;

app.listen(PORT,()=>{
    console.log("serveur fonctionne")
    
})

connectDB();
