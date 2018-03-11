var GeoJSON = require('mongoose-geojson-schema');
var mongoose = require('mongoose');

var locationSchema = new mongoose.Schema({
    complaintId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'complaint',
        required: true
    },
    area: {
        type: String,
    },
    pincode: {
        type: Number,
        minlength: 6,
        maxlength: 6,
        required: true
    },
    geometry: {
        type: mongoose.Schema.Types.Point,
        required: true
    }
});

var Location = module.exports  = mongoose.model('Location', locationSchema);

module.exports.addLocation = function(newLocation, callback) {
    newLocation.save(callback);
};