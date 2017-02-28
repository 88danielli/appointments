var mongoose = require('mongoose');

var Appointment = mongoose.model('Appointment');

console.log('template controller');
module.exports = {
  index: function(req,res){
    Appointment.find({}).sort('date').exec(function(err, data){
            if (err) {
                console.log(err);
            } else {
                res.json(data);
            }
        })
  },
  create: function(req,res){
    var newAppointment = new Appointment(req.body);
        console.log(newAppointment);
        newAppointment.save(function(err, data) {

            if (err) {
                console.log(err);
                res.json(err);
            } else {
                res.json(data)
            }
        });
  },
//   update: function(req,res){
//     console.log(req.params, req.body);
//     Appointment.findOne({_id: req.params.id}, function(err, data) {
//       for (var i in req.body) {
//         if (data[i] && data[i] !== req.body[i]) {
//           data[i] = req.body[i];
//         }
//       }
//       data.save(function(err, data) {
//         if (err) {
//           console.log(err);
//           res.json(err);
//         } else {
//           res.json(data);
//         }
//     }),
// }
  delete: function(req,res){
    Appointment.findOne({_id: req.params.id}, function(err, data) {
      if (err) {
        console.log(err);
        res.json(err);
      } else {
        Appointment.remove(data, function(error, datum) {
          if (error) {
            console.log(error);
            res.json(error);
          } else {
            console.log(datum);
            res.json(datum);
          }
        })
      }
    })
  },
  show: function(req,res){
    console.log(req.params);
    Appointment.find({_name: req.params.searchString}, function(err, data) {
      if (err) {
        console.log(err);
        res.json(err);
      } else {
        res.json(data);
      }
    })
}
  }
