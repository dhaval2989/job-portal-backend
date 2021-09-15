
const express = require("express");
const router = express.Router();

const nationality = require("../Models/nationalityData.model");

router.get('/', (req, res, next) => {
    res.send('Nationality Router Connected Successfully!');
});


router.get('/all', async (req, res, next) => {
    try {
        const allNationalities = await nationality.find({}, {_id:0});
        res.send({
            results : {
                'status' : '200 OK',
                'msg' : 'List of all the nationalities',
                'data' : allNationalities
            }
        });
    }  catch (error) {
        console.log(error.message);
    }
});

router.get('/searchFor/:nationalQuerry', async (req, res, next) => {
    try {
        const nationalsData = await nationality.find({'nationals' : {'$regex': '/'+req.params.nationalQuerry+'/', '$options': 'i'}}, {_id:0});
        if (Object.keys(nationalsData).length === 0) {
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
                    'data' : nationalsData
                }
            });
        }
    } catch (error) {
        console.log(error.message);
    }
});

module.exports = router;