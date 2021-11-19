'use strict';

const Make = require('../models/Make.model');

exports.findAll = function (req, res) {
    Make.findAll(function (err, Make) {
        console.log('controller')
        if (err)
            res.send(err);
        console.log('res', Make);
        res.send(Make);
    });
};


exports.create = function (req, res) {
    const new_Make = new Make(req.body);

    //handles null error 
    if (req.body.constructor === Object && Object.keys(req.body).length === 0) {
        res.status(400).send({ error: true, message: 'Please provide all required field' });
    } else {
        Make.create(new_Make, function (err, Make) {
            if (err)
                res.send(err);
            res.json({ error: false, message: "Make added successfully!", data: Make });
        });
    }
};


exports.findById = function (req, res) {
    Make.findById(req.params.id, function (err, Make) {
        if (err)
            res.send(err);
        res.json(Make);
    });
};


exports.update = function (req, res) {
    if (req.body.constructor === Object && Object.keys(req.body).length === 0) {
        res.status(400).send({ error: true, message: 'Please provide all required field' });
    } else {
        Make.update(req.params.id, new Make(req.body), function (err, Make) {
            if (err)
                res.send(err);
            res.json({ error: false, message: 'Make successfully updated' });
        });
    }

};


exports.delete = function (req, res) {
    Make.delete(req.params.id, function (err, Make) {
        if (err)
            res.send(err);
        res.json({ error: false, message: 'Make successfully deleted' });
    });
};