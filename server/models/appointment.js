var mongoose = require('mongoose');
var validator = require('node-mongoose-validator');

var AppointmentSchema = new mongoose.Schema({
        date: {type: Date, required: true},
        time: {type: Date, required: true},
        complaint: {type: String, required: true, minlength: 10},
        user: {type: String, required: true}
    }, {timestamps: true});

AppointmentSchema.path('date').validate(validator.isAfter(), "Date must be a future date!");
mongoose.model('Appointment', AppointmentSchema);
