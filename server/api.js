/**
 * Created by vikram on 13/2/18.
 */
var express = require('express');
var router = express.Router();

var Students = require('./model/student');

//for getting data
router.get('/students', function (req, res, next) {

  console.log(req.body);
  Students.find(function (err, task) {
    console.log("task")
    console.log(task)
    if (err) {
      res.json(err);
    } else {
      res.json(task);

    }

  })
});


//for getting the data according to task name and aggined to
/*router.get('/taskRecord/:taskName/:assignedTo', function (req, res, next) {

 console.log('req.body');
 console.log(req.params);
 var taskName = req.params.taskName;
 var assignedTo = req.params.assignedTo;


 Task.findOne({ $and: [{ taskName: taskName }, { assignedTo: assignedTo }] }, function (err, task) {
 if (err) {
 res.json(err);
 } else {
 res.send(task);

 }

 })
 });*/


//for saving the data
router.post('/saveStudents', function (req, res, next) {

  var studentName = req.body.studentName;
  var studentRoll=req.body.studentRoll;

  var task = new Students(req.body);

  task.save(function (err, task) {

    if (err) {
      res.json({ msg: 'failed to save' });
    } else {
      res.json({ msg: 'tasks are saved' });
    }
  });
});


//for deleting the data
/*router.delete('/tasks/:id', function (req, res, next) {

 Task.remove({ _id: req.params._id }, function (err, result) {
 if (err) {
 res.json(err);
 } else {
 res.json({msg:'Record Deleted',result:result});
 }

 })
 });*/


module.exports = router;
