const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();
const userRoutes = require('./routes/users.route.js');

const port = process.env.PORT || 5000;
const mongoUri = process.env.MONGO_URI;

mongoose.connect(mongoUri, {useNewUrlParser:true, useUnifiedTopology:true, useCreateIndex:true});
mongoose.connection.once('open', ()=>{
    console.log('MongoDB connected!');
})


const app = express();

app.use(cors());
app.use(express.json());
app.use('/users', userRoutes);



app.listen(port, ()=>{
    console.log(`Server is running on port ${port}`)
})