var mongoose = require('mongoose');

// create complaint schema
var complaintSchema = new mongoose.Schema({
    // userId
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user',
        required: true
    },

    // complaint
    complaintId: {
        type: String,
        index: true,
        unique: true,
        trim: true
    },
    description: {
        type: String,
    },
    severity: {
        type: String,
        enum: ['high','medium','low'],
        required: true
    },
    status: {
        type: Number,
        maxlength: 1,
        requires: true
    }
});
var Complaint = module.exports = mongoose.model('Complaint', complaintSchema);

module.exports.createComplaint = function(newComplaint, callback) {
    newComplaint.save(callback);
};
