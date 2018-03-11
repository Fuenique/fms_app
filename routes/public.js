var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var Complaint = require('./../models/complaint');
var User = require('./../models/user');
var Location = require('./../models/location');

var parseUrlencoded = bodyParser.urlencoded({extended: false});
// router.route('/')
// router.route('/complaints')

router.route('/complaints/newComplaint')
    .all(bodyParser.json())
    .post(parseUrlencoded, function(req, res){
        // user properties
        var username = req.body.username;
        var userId = req.body.userId;
        // location properties
        var area = req.body.area;
        var pincode = req.body.pincode;
        var geometry = req.body.geometry;
        // complaint properties
        var complaintId = req.body.complaintId;
        var description = req.body.description;
        var severity = req.body.severity;
        var status = req.body.status;

        // User model
        var user = new User({
            userId:  userId,
            username: username
        });
        User.addUser(user, (err, user)=>{
            if(err) throw err;
            console.log(user);
        });

        // Complaint model
        var complaint = new Complaint({
            userId: user._id,
            complaintId: complaintId,
            description: description,
            severity: severity,
            status: status
        });
        Complaint.createComplaint(complaint, (err, complaint)=>{
            if(err) throw err;
            console.log(complaint);
        });
        
        // Location model
        var location = new Location({
            complaintId: complaint._id,
            area: area,
            pincode: pincode,
            geometry: geometry
        });
        Location.addLocation(location, (err, location)=>{
            if(err) throw err;
            console.log(location);
        });
    });

module.exports = router;