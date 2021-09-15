
const express = require("express");
const router = express.Router();

const careeroptions = require("../Models/workingSector.model");

router.get('/', (req, res, next) => {
    res.send('Career Options Router Connected Successfully!');
});


router.get('/all', async (req, res, next) => {
    try {
        const careeroptionsResults = await careeroptions.find();
        res.send({
            results : {
                'status' : '200 OK',
                'msg' : 'List of all the career options',
                'data' : careeroptionsResults
            }
        });
    }  catch (error) {
        console.log(error.message);
    }
});

router.get('/searchFor/:careerchoice', async (req, res, next) => {
    try {
        const regex = new RegExp(req.params.careerchoice, 'i');
        const careerData = await careeroptions.find({name : {'$regex': regex}}, {_id:0});
        if (Object.keys(careerData).length === 0) {
            res.send({
                'results' : {
                    'status' : '200 OK',
                    'msg' : 'No Data Matched'
                }
            });
        } else {
            res.send({
                'results' : {
                    'status' : '200 OK',
                    'msg' : 'Result Found',
                    'data' : careerData
                }
            });
        }
    } catch (error) {
        console.log(error.message);
    }
});

module.exports = router;