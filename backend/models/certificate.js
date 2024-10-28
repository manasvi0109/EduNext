const mongoose = require('mongoose');

const certificateSchema = new mongoose.Schema({
    certificateID: { type: String, unique: true, required: true },
    studentName: String,
    internshipDomain: String,
    startDate: Date,
    endDate: Date,
});

module.exports = mongoose.model('Certificate', certificateSchema);
