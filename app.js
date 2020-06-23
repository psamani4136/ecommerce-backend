const express = require('express');
const mongoose = require('mongoose');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const cors = require('cors');
const expressValidator = require('express-validator');
require('dotenv').config();

//IMPORT ROUTES
const authRoutes = require('./routes/auth'); 
const userRoutes = require('./routes/user'); 
const categoryRoutes = require('./routes/category'); 
const productRoutes = require('./routes/product'); 

//APP
const app = express();

//DATABASE CONNECTION
mongoose.connect(process.env.DATABASE, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
}) 
.then ( () => console.log('DATABASE CONNECTED'));

//MIDDLEWARE
app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(cookieParser());
app.use(expressValidator());
app.use(cors());

//ROUTES MIDDLEWARE
app.use("/api", authRoutes);
app.use("/api", userRoutes);
app.use("/api", categoryRoutes);
app.use("/api", productRoutes);

const port = process.env.PORT || 8000;

app.listen(port, () => {
    console.log(`SERVER IS RUNNING ON PORT ${port}`);
});