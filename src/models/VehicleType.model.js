'user strict';
var dbConn = require('./../../config/db.config');

//ID
//BannerTitle
//BanneImg
//LogoImg	

var VehicleType = function (VehicleType) {
    this.ID = Make.ID;
    this.Title = Make.Title;  
    this.MakeID = Make.MakeID;
};

VehicleType.create = function (newEmp, result) {
    dbConn.query("INSERT INTO tbl_VehicleType set ?", newEmp, function (err, res) {
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

VehicleType.findById = function (id, result) {
    dbConn.query("Select * from tbl_VehicleType where ID = ? ", id, function (err, res) {
        if (err) {
            console.log("error: ", err);
            result(err, null);
        }
        else {
            result(null, res);
        }
    });
};

VehicleType.findByMakeId = function (id, result) {
    dbConn.query("Select * from tbl_VehicleType where MakeID = ? OR 0 = ?", id, function (err, res) {
        if (err) {
            console.log("error: ", err);
            result(err, null);
        }
        else {
            result(null, res);
        }
    });
};

VehicleType.findAll = function (result) {
    dbConn.query("Select * from tbl_VehicleType", function (err, res) {
        if (err) {
            console.log("error: ", err);
            result(null, err);
        }
        else {
            console.log('tbl_VehicleType : ', res);
            result(null, res);
        }
    });
};
VehicleType.update = function (id, VehicleType, result) {
    dbConn.query("UPDATE tbl_VehicleType SET first_name=?,last_name=?,email=?,phone=?,organization=?,designation=?,salary=? WHERE id = ?", [VehicleType.first_name, VehicleType.last_name, VehicleType.email, VehicleType.phone, VehicleType.organization, VehicleType.designation, VehicleType.salary, id], function (err, res) {
        if (err) {
            console.log("error: ", err);
            result(null, err);
        } else {
            result(null, res);
        }
    });
};
VehicleType.delete = function (id, result) {
    dbConn.query("DELETE FROM tbl_VehicleType WHERE id = ?", [id], function (err, res) {
        if (err) {
            console.log("error: ", err);
            result(null, err);
        }
        else {
            result(null, res);
        }
    });
};

module.exports = VehicleType;