'user strict';
var dbConn = require('./../../config/db.config');

//ID
//BannerTitle
//BanneImg
//LogoImg	

var Make = function (Make) {
    this.ID = Make.ID;
    this.Title = Make.Title;  
};

Make.create = function (newEmp, result) {
    dbConn.query("INSERT INTO tbl_Make set ?", newEmp, function (err, res) {
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
Make.findById = function (id, result) {
    dbConn.query("Select * from tbl_Make where ID = ? ", id, function (err, res) {
        if (err) {
            console.log("error: ", err);
            result(err, null);
        }
        else {
            result(null, res);
        }
    });
};
Make.findAll = function (result) {
    dbConn.query("Select * from tbl_Make", function (err, res) {
        if (err) {
            console.log("error: ", err);
            result(null, err);
        }
        else {
            console.log('tbl_Make : ', res);
            result(null, res);
        }
    });
};
Make.update = function (id, Make, result) {
    dbConn.query("UPDATE tbl_Make SET Title=? WHERE id = ?", [Make.first_name, Make.last_name, Make.email, Make.phone, Make.organization, Make.designation, Make.salary, id], function (err, res) {
        if (err) {
            console.log("error: ", err);
            result(null, err);
        } else {
            result(null, res);
        }
    });
};
Make.delete = function (id, result) {
    dbConn.query("DELETE FROM tbl_Make WHERE id = ?", [id], function (err, res) {
        if (err) {
            console.log("error: ", err);
            result(null, err);
        }
        else {
            result(null, res);
        }
    });
};

module.exports = Make;