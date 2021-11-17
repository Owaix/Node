'user strict';
var dbConn = require('./../../config/db.config');

//ID
//BannerTitle
//BanneImg
//LogoImg	

var FeatureVehicle = function (FeatureVehicle) {
    this.ID = FeatureVehicle.ID;
    this.CategoryID = FeatureVehicle.CategoryID;
    this.CreatedDate = FeatureVehicle.CreatedDate;
    this.Img = FeatureVehicle.Img;
    this.IsFeature = FeatureVehicle.IsFeature;
    this.Km = FeatureVehicle.Km;
    this.MakeID = FeatureVehicle.MakeID;
    this.ModelID = FeatureVehicle.ModelID;
    this.ParkedNear = FeatureVehicle.ParkedNear;
    this.Price = FeatureVehicle.Price;
    this.VehicleTypeID = FeatureVehicle.VehicleTypeID;
    this.WaterMark = FeatureVehicle.WaterMark;
};

FeatureVehicle.create = function (newEmp, result) {
    dbConn.query("INSERT INTO tbl_FeatureVehicle set ?", newEmp, function (err, res) {
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

FeatureVehicle.findById = function (id, result) {
    dbConn.query("Select * from tbl_FeatureVehicle where ID = ? ", id, function (err, res) {
        if (err) {
            console.log("error: ", err);
            result(err, null);
        }
        else {
            result(null, res);
        }
    });
};

FeatureVehicle.findAll = function (result) {
    dbConn.query("Select * from tbl_FeatureVehicle", function (err, res) {
        if (err) {
            console.log("error: ", err);
            result(null, err);
        }
        else {
            console.log('tbl_FeatureVehicle : ', res);
            result(null, res);
        }
    });
};
FeatureVehicle.update = function (id, FeatureVehicle, result) {
    dbConn.query("UPDATE tbl_FeatureVehicle SET first_name=?,last_name=?,email=?,phone=?,organization=?,designation=?,salary=? WHERE id = ?", [FeatureVehicle.first_name, FeatureVehicle.last_name, FeatureVehicle.email, FeatureVehicle.phone, FeatureVehicle.organization, FeatureVehicle.designation, FeatureVehicle.salary, id], function (err, res) {
        if (err) {
            console.log("error: ", err);
            result(null, err);
        } else {
            result(null, res);
        }
    });
};
FeatureVehicle.delete = function (id, result) {
    dbConn.query("DELETE FROM tbl_FeatureVehicle WHERE id = ?", [id], function (err, res) {
        if (err) {
            console.log("error: ", err);
            result(null, err);
        }
        else {
            result(null, res);
        }
    });
};

module.exports = FeatureVehicle;