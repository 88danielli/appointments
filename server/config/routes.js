var appointment = require('./../controllers/appointments.js');
module.exports = function(app) {
  app.get('/appointment', function(req, res) {
    appointment.index(req, res);
  })
  app.get('/appointment/:searchString', function(req, res) {
    appointment.show(req, res);
  })
  app.post('/appointment', function(req, res) {
    appointment.create(req, res);
  })
  // app.put('/model*/:id', function(req, res) {
    // model*.update(req, res);
  // })
  app.delete('/appointment/:id', function(req, res) {
    appointment.delete(req, res);
  })
}
