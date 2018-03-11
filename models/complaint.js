
var GeoJSON = require('mongoose-geojson-schema');
var mongoose = require('mongoose');

// create complaint schema
var complaintSchema = new mongoose.Schema({
    // user fields
    username: {
        type: String
    },
    userId: {
        type: Number,
        minlength: 10,
        maxlength: 10,
    },

    // complaint fieds
    _complaintId: {
        type: mongoose.Schema.Types.ObjectId
    },
    description: {
        type: String,
    },
    location: {
        type: String,
    },
    geometry:  {
        type: mongoose.Schema.Types.Point
    },
    severity: {
        type: String,
        enum: ['high','medium','low']
    }
});
var Complaint = module.exports = mongoose.model('Complaint', complaintSchema);

module.exports.createComplaint = function(newComplaint, callback) {
    newComplaint.save(callback);
};
