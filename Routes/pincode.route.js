
const express = require("express");
const router = express.Router();

const pincode = require("../Models/Pincode.model");

router.get('/', (req, res, next) => {
    res.send('Router Connected Successfully!');
});

router.get('/:pin', async (req, res, next) => {
    try {
        const results = await pincode.find({}, {_id:0});
        var data  = JSON.parse(JSON.stringify(results));
        const validData = [];
        var counter = 0;
        for (var pinOBJ in data) {
            for (var postofficeObj in data[pinOBJ]['pins']) {
                for (var pinData in data[pinOBJ]['pins'][postofficeObj]['PostOffice']) {
                    if (data[pinOBJ]['pins'][postofficeObj]['PostOffice'][pinData]['Pincode'] == req.params.pin) {
                        validData.push(data[pinOBJ]['pins'][postofficeObj]['PostOffice'][pinData]);
                    }
                    
                }
            }
        }
        if (Object.keys(validData).length === 0) {
            res.send({
                'results' : {
                    'status' : '200 OK',
                    'msg' : 'No PostOffices Found!',
                }
            });
        }  else {
            res.send({
                'results' : {
                    'status' : '200 OK',
                    'msg' : 'List of all Matched PostOffices',
                    'data' : validData
                }
            });
        } 
    } catch (error) {
        console.log(error.message);
    }
});

module.exports = router;