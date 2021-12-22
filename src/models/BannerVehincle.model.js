'user strict';
var dbConn = require('./../../config/db.config');

//ID
//BannerTitle
//BanneImg
//LogoImg	

var BannerVehincle = function (BannerVehincle) {
    this.BannerTitle = BannerVehincle.BannerTitle;
    this.BanneImg = BannerVehincle.BanneImg;
    this.LogoImg = BannerVehincle.LogoImg;
    // this.status = BannerVehincle.status ? BannerVehincle.status : 1;
    // this.created_at = new Date();
    // this.updated_at = new Date();
};
BannerVehincle.create = function (newEmp, result) {
    dbConn.query("INSERT INTO tbl_BannerVehincle set ?", newEmp, function (err, res) {
        if (err) {
            console.log("error: ", err);
            result(err, null);
        }
        else {
            console.log(res.insertId);
            result(null, res.insertId);
        }
    });
};
BannerVehincle.findById = function (id, result) {
    dbConn.query("Select * from tbl_BannerVehincle where ID = ? ", id, function (err, res) {
        if (err) {
            console.log("error: ", err);
            result(err, null);
        }
        else {
            result(null, res);
        }
    });
};
BannerVehincle.findAll = function (result) {
    dbConn.query("Select * from tbl_BannerVehincle", function (err, res) {
        if (err) {
            console.log("error: ", err);
            result(null, err);
        }
        else {
            console.log('tbl_BannerVehincle : ', res);
            result(null, res);
        }
    });
};
BannerVehincle.update = function (id, BannerVehincle, result) {
    dbConn.query("UPDATE tbl_BannerVehincle SET BannerTitle=?,BanneImg=?,LogoImg=? WHERE id = ?", [BannerVehincle.BannerTitle, BannerVehincle.BanneImg, BannerVehincle.LogoImg , id], function (err, res) {
        if (err) {
            console.log("error: ", err);
            result(null, err);
        } else {
            result(null, res);
        }
    });
};
BannerVehincle.delete = function (id, result) {
    dbConn.query("DELETE FROM tbl_BannerVehincle WHERE id = ?", [id], function (err, res) {
        if (err) {
            console.log("error: ", err);
            result(null, err);
        }
        else {
            result(null, res);
        }
    });
};

module.exports = BannerVehincle;