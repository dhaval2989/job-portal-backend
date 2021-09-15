const mongoose = require('mongoose');
const schema = mongoose.Schema;

// Pincode Model
const PincodeSchema = new schema({
   //Will be added later
});

const Pincode = mongoose.model('pincodes', PincodeSchema);
module.exports = Pincode;