const express = require("express");
const app = express();
const mongoose = require("mongoose");


// Connecting to db
mongoose.connect("mongodb://localhost:27017/bizzhired").then(() => console.log('Connection was successfull.......'));

// Middleware
app.use(express.json());
app.use(express.urlencoded({extended:true}));



const pincodeRoute = require('./Routes/pincode.route');
const loginDataRoute = require('./Routes/loginData.route');
const nationalityRoute = require('./Routes/nationalityData.route');
const workingSectorRoute = require('./Routes/workingSector.route');
const profileRoute = require('./Routes/profile.route');

app.use('/pincodes', pincodeRoute);
app.use('/loginData', loginDataRoute);
app.use('/nationalityData', nationalityRoute);
app.use('/careerOptionsData', workingSectorRoute);
app.use('/profile', profileRoute);


// app.use(express.json);
//Routes
app.get('/', (req, res) => {
    res.send('Welcome Developer');
});


//Error Handling for Unknown Request
app.use((req, res, next) => {
    const err = new Error("Not A Valid Request..");
    err.status = 404;
    next(err);
});

//Express Error Handler
app.use((err, req, res, next) => {
    res.status(err.status || 500);
    res.send({
        error : {
            status : err.status || 500,
            message : err.message
        }
    });
});


app.listen(3001);