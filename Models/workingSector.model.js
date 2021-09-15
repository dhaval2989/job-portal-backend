const mongoose = require('mongoose');
const schema = mongoose.Schema;

const careeroptionsdataSchema = new schema({
   //Will be added later
});

const Careeroptions = mongoose.model('careeroptions', careeroptionsdataSchema);
module.exports = Careeroptions;