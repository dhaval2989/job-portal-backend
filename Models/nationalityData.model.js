const mongoose = require('mongoose');
const schema = mongoose.Schema;

// Pincode Model
const nationalitySchema = new schema({
   //Will be added later
});

const Nationality = mongoose.model('nationals', nationalitySchema);
module.exports = Nationality;