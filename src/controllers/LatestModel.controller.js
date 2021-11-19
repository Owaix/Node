'use strict';

const LatestModel = require('../models/LatestModel.model');

exports.findAll = function (req, res) {
    LatestModel.findAll(function (err, LatestModel) {
        console.log('controller')
        if (err)
            res.send(err);
        console.log('res', LatestModel);
        res.send(LatestModel);
    });
};


exports.create = function (req, res) {
    const new_LatestModel = new LatestModel(req.body);

    //handles null error 
    if (req.body.constructor === Object && Object.keys(req.body).length === 0) {
        res.status(400).send({ error: true, message: 'Please provide all required field' });
    } else {
        LatestModel.create(new_LatestModel, function (err, LatestModel) {
            if (err)
                res.send(err);
            res.json({ error: false, message: "LatestModel added successfully!", data: LatestModel });
        });
    }
};


exports.findById = function (req, res) {
    LatestModel.findById(req.params.id, function (err, LatestModel) {
        if (err)
            res.send(err);
        res.json(LatestModel);
    });
};


exports.update = function (req, res) {
    if (req.body.constructor === Object && Object.keys(req.body).length === 0) {
        res.status(400).send({ error: true, message: 'Please provide all required field' });
    } else {
        LatestModel.update(req.params.id, new LatestModel(req.body), function (err, LatestModel) {
            if (err)
                res.send(err);
            res.json({ error: false, message: 'LatestModel successfully updated' });
        });
    }

};


exports.delete = function (req, res) {
    LatestModel.delete(req.params.id, function (err, LatestModel) {
        if (err)
            res.send(err);
        res.json({ error: false, message: 'LatestModel successfully deleted' });
    });
};