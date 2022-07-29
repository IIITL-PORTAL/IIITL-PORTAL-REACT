const mongoose = require("mongoose");


const UserSchema = new mongoose.Schema({
  Email: {
    type: String,
    required: true,
  },
  Password: {
    type: String,
  required: true,
  },

  firstName: {
  type: String,
  required: true
  },

  lastName: {
  type: String,
  required: true
  },
  
  batch: {
  type: Number,
  required: true
  },
  
 
branch: {
  type: String,
  required: true
},
  
courses: {
  type: Array
},
  
gender: {
    type: String,
    required: true
},
phoneNumber: {
    type: String,
    required: true
},
  
semester: {
  type: Number,
  required: true
},
  
  Name: {
   type: String,
  required: true,
},


 
},
{
  collection:"Users"
}



);

module.exports = new mongoose.model("Users", UserSchema);