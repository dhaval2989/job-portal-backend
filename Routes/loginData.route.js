const express = require("express");
const logData = express.Router();

const loginData = require("../Models/LoginData.model");


logData.get('/', (req, res, next) => {
    res.send('Student Form Upload Link');
});

logData.get('/displayLogs', async (req, res, next) => {
    try {
        const loginDataResults = await loginData.findOne();
        res.send(loginDataResults);
    } catch (error) {
        console.log(error.message);
    }
});

logData.post('/uploadDataForLogin', async (req, res, next) => {

    try {
        const uploadingData = new loginData(req.body);
        const results = uploadingData.save();
        res.send({
            "results" : {
                "status" : "200 OK",
                "msg" : "User Data Uploaded Successfully"
            }
        });
    } catch (error) {
        console.log(error.message);
    }
});

module.exports = logData;