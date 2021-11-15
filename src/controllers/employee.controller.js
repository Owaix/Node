'use strict';

const BannerVehincle = require('../models/BannerVehincle.model');

exports.findAll = function (req, res) {
    BannerVehincle.findAll(function (err, BannerVehincle) {
        console.log('controller')
        if (err)
            res.send(err);
        console.log('res', BannerVehincle);
        res.send(BannerVehincle);
    });
};


exports.create = function (req, res) {
    const new_BannerVehincle = new BannerVehincle(req.body);

    //handles null error 
    if (req.body.constructor === Object && Object.keys(req.body).length === 0) {
        res.status(400).send({ error: true, message: 'Please provide all required field' });
    } else {
        BannerVehincle.create(new_BannerVehincle, function (err, BannerVehincle) {
            if (err)
                res.send(err);
            res.json({ error: false, message: "BannerVehincle added successfully!", data: BannerVehincle });
        });
    }
};


exports.findById = function (req, res) {
    BannerVehincle.findById(req.params.id, function (err, BannerVehincle) {
        if (err)
            res.send(err);
        res.json(BannerVehincle);
    });
};


exports.update = function (req, res) {
    if (req.body.constructor === Object && Object.keys(req.body).length === 0) {
        res.status(400).send({ error: true, message: 'Please provide all required field' });
    } else {
        BannerVehincle.update(req.params.id, new BannerVehincle(req.body), function (err, BannerVehincle) {
            if (err)
                res.send(err);
            res.json({ error: false, message: 'BannerVehincle successfully updated' });
        });
    }

};


exports.delete = function (req, res) {
    BannerVehincle.delete(req.params.id, function (err, BannerVehincle) {
        if (err)
            res.send(err);
        res.json({ error: false, message: 'BannerVehincle successfully deleted' });
    });
};