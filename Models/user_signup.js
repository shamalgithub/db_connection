const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const user_schema = new Schema({
    name:{
        type:String,
        required:true
    },
    email:String
 } , {
       timestamps:true
   }
)


const user_data = mongoose.model('user_data' , user_schema);

module.exports = user_data;
