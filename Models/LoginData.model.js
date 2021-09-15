const mongoose = require('mongoose');
const schema = mongoose.Schema;

// Student Form Upload Model
const loginUploadSchema = new schema({
   userFullName : {
      type: String, 
      required : true
   },
   userMailID : {
      type : String, 
      required : true
   },
   userSource : {
      type : String, 
      required : true
   }
});

const LoginData = mongoose.model('logindata', loginUploadSchema);
module.exports = LoginData;