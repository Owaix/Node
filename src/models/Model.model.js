'user strict';
var dbConn = require('./../../config/db.config');

//ID
//BannerTitle
//BanneImg
//LogoImg	

var Model = function (Model) {
    this.ID = Make.ID;
    this.Title = Make.Title;
    this.VehicleTypeID = Model.VehicleTypeID;
};

Model.create = function (newEmp, result) {
    dbConn.query("INSERT INTO tbl_Model set ?", newEmp, function (err, res) {
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

Model.findById = function (id, result) {
    dbConn.query("Select * from tbl_Model where ID = ? ", id, function (err, res) {
        if (err) {
            console.log("error: ", err);
            result(err, null);
        }
        else {
            result(null, res);
        }
    });
};

Model.findByVehicleTypeID = function (Catid, result) {
    dbConn.query("Select * from tbl_Model where VehicleTypeID = " + Catid + " OR 0 =  " + Catid + "  ", Catid, function (err, res) {
        if (err) {
            console.log("error: ", err);
            result(err, null);
        }
        else {
            result(null, res);
        }
    });
};

Model.findAll = function (result) {
    dbConn.query("Select * from tbl_Model", function (err, res) {
        if (err) {
            console.log("error: ", err);
            result(null, err);
        }
        else {
            console.log('tbl_Model : ', res);
            result(null, res);
        }
    });
};
Model.update = function (id, Model, result) {
    dbConn.query("UPDATE tbl_Make SET Title=? , VehicleTypeID=? WHERE id = ?", [Model.Title,Model.VehicleTypeID , id], function (err, res) {
        if (err) {
            console.log("error: ", err);
            result(null, err);
        } else {
            result(null, res);
        }
    });
};
Model.delete = function (id, result) {
    dbConn.query("DELETE FROM tbl_Model WHERE id = ?", [id], function (err, res) {
        if (err) {
            console.log("error: ", err);
            result(null, err);
        }
        else {
            result(null, res);
        }
    });
};

module.exports = Model;