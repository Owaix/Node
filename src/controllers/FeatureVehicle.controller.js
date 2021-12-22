'use strict';

const FeatureVehicle = require('../models/FeatureVehicle.model');

exports.findAll = function (req, res) {
    FeatureVehicle.findAll(function (err, FeatureVehicle) {
        console.log('controller')
        if (err)
            res.send(err);
        console.log('res', FeatureVehicle);
        res.send(FeatureVehicle);
    });
};


exports.GetVehicleSearchReult = function (req, res) {
    FeatureVehicle.GetVehicleSearchReult(function (err, FeatureVehicle) {
        console.log('controller')
        if (err)
            res.send(err);
        console.log('res', FeatureVehicle);
        res.send(FeatureVehicle);
    });
};

exports.create = function (req, res) {
    const new_FeatureVehicle = new FeatureVehicle(req.body);

    //handles null error 
    if (req.body.constructor === Object && Object.keys(req.body).length === 0) {
        res.status(400).send({ error: true, message: 'Please provide all required field' });
    } else {
        FeatureVehicle.create(new_FeatureVehicle, function (err, FeatureVehicle) {
            if (err)
                res.send(err);
            res.json({ error: false, message: "FeatureVehicle added successfully!", data: FeatureVehicle });
        });
    }
};


exports.findById = function (req, res) {
    FeatureVehicle.findById(req.params.id, function (err, FeatureVehicle) {
        if (err)
            res.send(err);
        res.json(FeatureVehicle);
    });
};

exports.findByCategoryID = function (req, res) {
    FeatureVehicle.findByCategoryID(req.params.id, function (err, FeatureVehicle) {
        if (err)
            res.send(err);
        res.json(FeatureVehicle);
    });
};

exports.update = function (req, res) {
    if (req.body.constructor === Object && Object.keys(req.body).length === 0) {
        res.status(400).send({ error: true, message: 'Please provide all required field' });
    } else {
        FeatureVehicle.update(req.params.id, new FeatureVehicle(req.body), function (err, FeatureVehicle) {
            if (err)
                res.send(err);
            res.json({ error: false, message: 'FeatureVehicle successfully updated' });
        });
    }

};


exports.delete = function (req, res) {
    FeatureVehicle.delete(req.params.id, function (err, FeatureVehicle) {
        if (err)
            res.send(err);
        res.json({ error: false, message: 'FeatureVehicle successfully deleted' });
    });
};