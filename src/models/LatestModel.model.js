'user strict';
var dbConn = require('./../../config/db.config');

//ID
//BannerTitle
//BanneImg
//LogoImg	

var LatestModel = function (LatestModel) {
    this.ID = LatestModel.ID;
    this.Description = LatestModel.Description;
    this.MakeID = LatestModel.MakeID;
    this.ModelID = LatestModel.ModelID;
    this.Price = LatestModel.Price;
    this.VehicleTypeID = LatestModel.VehicleTypeID;
    this.IsFeature = LatestModel.IsFeature;
    this.Year = LatestModel.Year;
    this.CreatedDate = LatestModel.CreatedDate
};

LatestModel.create = function (newEmp, result) {
    dbConn.query("INSERT INTO tbl_LatestModel set ?", newEmp, function (err, res) {
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

LatestModel.findById = function (id, result) {
    dbConn.query("Select * from tbl_LatestModel where ID = ? ", id, function (err, res) {
        if (err) {
            console.log("error: ", err);
            result(err, null);
        }
        else {
            result(null, res);
        }
    });
};

LatestModel.findAll = function (result) {
    dbConn.query("Select * from tbl_LatestModel", function (err, res) {
        if (err) {
            console.log("error: ", err);
            result(null, err);
        }
        else {
            console.log('tbl_LatestModel : ', res);
            result(null, res);
        }
    });
};
LatestModel.update = function (id, LatestModel, result) {
    dbConn.query("UPDATE tbl_LatestModel SET first_name=?,last_name=?,email=?,phone=?,organization=?,designation=?,salary=? WHERE id = ?", [LatestModel.first_name, LatestModel.last_name, LatestModel.email, LatestModel.phone, LatestModel.organization, LatestModel.designation, LatestModel.salary, id], function (err, res) {
        if (err) {
            console.log("error: ", err);
            result(null, err);
        } else {
            result(null, res);
        }
    });
};
LatestModel.delete = function (id, result) {
    dbConn.query("DELETE FROM tbl_LatestModel WHERE id = ?", [id], function (err, res) {
        if (err) {
            console.log("error: ", err);
            result(null, err);
        }
        else {
            result(null, res);
        }
    });
};

module.exports = LatestModel;