'user strict';
var dbConn = require('./../../config/db.config');

//ID
//BannerTitle
//BanneImg
//LogoImg	

var FeatureCategory = function (FeatureCategory) {
    this.ID = FeatureCategory.ID;
    this.Title = FeatureCategory.Title;  
};

FeatureCategory.create = function (newEmp, result) {
    dbConn.query("INSERT INTO tbl_FeatureCategory set ?", newEmp, function (err, res) {
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
FeatureCategory.findById = function (id, result) {
    dbConn.query("Select * from tbl_FeatureCategory where ID = ? ", id, function (err, res) {
        if (err) {
            console.log("error: ", err);
            result(err, null);
        }
        else {
            result(null, res);
        }
    });
};
FeatureCategory.findAll = function (result) {
    dbConn.query("Select * from tbl_FeatureCategory", function (err, res) {
        if (err) {
            console.log("error: ", err);
            result(null, err);
        }
        else {
            console.log('tbl_FeatureCategory : ', res);
            result(null, res);
        }
    });
};
FeatureCategory.update = function (id, FeatureCategory, result) {
    dbConn.query("UPDATE tbl_FeatureCategory SET first_name=?,last_name=?,email=?,phone=?,organization=?,designation=?,salary=? WHERE id = ?", [FeatureCategory.first_name, FeatureCategory.last_name, FeatureCategory.email, FeatureCategory.phone, FeatureCategory.organization, FeatureCategory.designation, FeatureCategory.salary, id], function (err, res) {
        if (err) {
            console.log("error: ", err);
            result(null, err);
        } else {
            result(null, res);
        }
    });
};
FeatureCategory.delete = function (id, result) {
    dbConn.query("DELETE FROM tbl_FeatureCategory WHERE id = ?", [id], function (err, res) {
        if (err) {
            console.log("error: ", err);
            result(null, err);
        }
        else {
            result(null, res);
        }
    });
};

module.exports = FeatureCategory;