'use strict';

const Model = require('../models/Model.model');

exports.findAll = function (req, res) {
    Model.findAll(function (err, Model) {
        console.log('controller')
        if (err)
            res.send(err);
        console.log('res', Model);
        res.send(Model);
    });
};


exports.create = function (req, res) {
    const new_Model = new Model(req.body);

    //handles null error 
    if (req.body.constructor === Object && Object.keys(req.body).length === 0) {
        res.status(400).send({ error: true, message: 'Please provide all required field' });
    } else {
        Model.create(new_Model, function (err, Model) {
            if (err)
                res.send(err);
            res.json({ error: false, message: "Model added successfully!", data: Model });
        });
    }
};

exports.findById = function (req, res) {
    Model.findById(req.params.id, function (err, Model) {
        if (err)
            res.send(err);
        res.json(Model);
    });
};

exports.findByVehicleTypeID = function (req, res) {
    Model.findByVehicleTypeID(req.params.id, function (err, Model) {
        if (err)
            res.send(err);
        res.json(Model);
    });
};

exports.update = function (req, res) {
    if (req.body.constructor === Object && Object.keys(req.body).length === 0) {
        res.status(400).send({ error: true, message: 'Please provide all required field' });
    } else {
        Model.update(req.params.id, new Model(req.body), function (err, Model) {
            if (err)
                res.send(err);
            res.json({ error: false, message: 'Model successfully updated' });
        });
    }

};


exports.delete = function (req, res) {
    Model.delete(req.params.id, function (err, Model) {
        if (err)
            res.send(err);
        res.json({ error: false, message: 'Model successfully deleted' });
    });
};