/**
 * Created by vikram on 13/2/18.
 */
var mongoose = require('mongoose');


var StudentSchema = mongoose.Schema({

  studentName: String,
  studentRoll:String

  //firstName:String,
  //lastName:String,
  //contactNumber:String

});

var Student = module.exports = mongoose.model('student', StudentSchema);
