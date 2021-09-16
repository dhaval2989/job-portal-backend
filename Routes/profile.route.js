
const express = require("express");
const router = express.Router();

const profileModel = require("../Models/ProfileData.model");

router.post('/job-seeker-details', async (req, res, next) => {

    const {
        fullName,
        dateOfBirth,
        profileImage,
        gender,
        emailId,
        mobileNumber,
        address,
        locality,
        state,
        city,
        zipCode,
        country,
        workPeriod,
        workType,
        workLocationPreference,
        educations,
        experiences,
        certificates,
        exams,
        languages,
        resume
    } = req.body;

    const profile = new profileModel({
        fullName,
        dateOfBirth,
        profileImage,
        gender,
        emailId,
        mobileNumber,
        address,
        locality,
        state,
        city,
        zipCode,
        country,
        workPeriod,
        workType,
        workLocationPreference,
        educations,
        experiences,
        certificates,
        exams,
        languages,
        resume
    });

    try {
        await profile.save();

        res.send({
            results: {
                'status': '200 OK',
                'msg': 'Profile created successfully!',
                'data': null
            }
        });
    } catch (error) {
        console.log(error.message);
    }
});

module.exports = router;