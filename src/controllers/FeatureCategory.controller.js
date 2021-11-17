'use strict';

const FeatureCategory = require('../models/FeatureCategory.model');

exports.findAll = function (req, res) {
    FeatureCategory.findAll(function (err, FeatureCategory) {
        console.log('controller')
        if (err)
            res.send(err);
        console.log('res', FeatureCategory);
        res.send(FeatureCategory);
    });
};


exports.create = function (req, res) {
    const new_FeatureCategory = new FeatureCategory(req.body);

    //handles null error 
    if (req.body.constructor === Object && Object.keys(req.body).length === 0) {
        res.status(400).send({ error: true, message: 'Please provide all required field' });
    } else {
        FeatureCategory.create(new_FeatureCategory, function (err, FeatureCategory) {
            if (err)
                res.send(err);
            res.json({ error: false, message: "FeatureCategory added successfully!", data: FeatureCategory });
        });
    }
};


exports.findById = function (req, res) {
    FeatureCategory.findById(req.params.id, function (err, FeatureCategory) {
        if (err)
            res.send(err);
        res.json(FeatureCategory);
    });
};


exports.update = function (req, res) {
    if (req.body.constructor === Object && Object.keys(req.body).length === 0) {
        res.status(400).send({ error: true, message: 'Please provide all required field' });
    } else {
        FeatureCategory.update(req.params.id, new FeatureCategory(req.body), function (err, FeatureCategory) {
            if (err)
                res.send(err);
            res.json({ error: false, message: 'FeatureCategory successfully updated' });
        });
    }

};


exports.delete = function (req, res) {
    FeatureCategory.delete(req.params.id, function (err, FeatureCategory) {
        if (err)
            res.send(err);
        res.json({ error: false, message: 'FeatureCategory successfully deleted' });
    });
};