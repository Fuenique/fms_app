var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var Complaint = require('./../models/complaint');

var parseUrlencoded = bodyParser.urlencoded({extended: false});
// router.route('/')
// router.route('/complaints')

router.route('/complaints/newComplaint')
    .all(bodyParser.json())
    .post(parseUrlencoded, function(req, res){
        var username = req.body.username;
        var userId = req.body.userID;
        var description = req.body.description;
        var location = req.body.location;
        var geometry = req.body.geometry;
        var severity = req.body.severity;

        console.log(geometry);

        console.log(req.body.username);
        var complaint = new Complaint({
            username: username,
            userId: userId,
            _complaintId: new mongoose.Types.ObjectId,
            description: description,
            location: location,
            geometry: geometry,
            severity: severity
        });

        Complaint.createComplaint(complaint, (err, complaint)=>{
            if(err) throw err;
            console.log(complaint);
        });
    });

module.exports = router;