'use strict';

const VehicleType = require('../models/VehicleType.model');

exports.findAll = function (req, res) {
    VehicleType.findAll(function (err, VehicleType) {
        console.log('controller')
        if (err)
            res.send(err);
        console.log('res', VehicleType);
        res.send(VehicleType);
    });
};


exports.create = function (req, res) {
    const new_VehicleType = new VehicleType(req.body);

    //handles null error 
    if (req.body.constructor === Object && Object.keys(req.body).length === 0) {
        res.status(400).send({ error: true, message: 'Please provide all required field' });
    } else {
        VehicleType.create(new_VehicleType, function (err, VehicleType) {
            if (err)
                res.send(err);
            res.json({ error: false, message: "VehicleType added successfully!", data: VehicleType });
        });
    }
};


exports.findById = function (req, res) {
    VehicleType.findById(req.params.id, function (err, VehicleType) {
        if (err)
            res.send(err);
        res.json(VehicleType);
    });
};

exports.findByMakeId = function (req, res) {
    VehicleType.findByMakeId(req.params.id, function (err, VehicleType) {
        if (err)
            res.send(err);
        res.json(VehicleType);
    });
};

exports.update = function (req, res) {
    if (req.body.constructor === Object && Object.keys(req.body).length === 0) {
        res.status(400).send({ error: true, message: 'Please provide all required field' });
    } else {
        VehicleType.update(req.params.id, new VehicleType(req.body), function (err, VehicleType) {
            if (err)
                res.send(err);
            res.json({ error: false, message: 'VehicleType successfully updated' });
        });
    }

};


exports.delete = function (req, res) {
    VehicleType.delete(req.params.id, function (err, VehicleType) {
        if (err)
            res.send(err);
        res.json({ error: false, message: 'VehicleType successfully deleted' });
    });
};