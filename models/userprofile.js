const con = require("../dbconf");

exports.getUser = (req, callback) => {
  return new Promise(function (resolve, reject) {
    let query = "SELECT * FROM userprofile WHERE email=? LIMIT 1";
    con.query(query, req.body.email, (err, result) => {
      if (err) {
        callback(err, null);
        return;
      }
      resolve(callback(null, result));
    });
  });
};

exports.updateProfile = (req, callback) => {
  return new Promise(function (resolve, reject) {
    let query =
      "UPDATE userprofile SET firstname=?, lastname=?,displayname=?,priphone=?,workphone=?,`location`=? WHERE id =?";

    let data = [
      req.body.firstName,
      req.body.lastName,
      req.body.displayName,
      req.body.priPhone,
      req.body.workPhone,
      req.body.location,
      req.userId,
    ];
    con.query(query, data, (err, result) => {
      if (err) {
        callback(err, null);
        return;
      }

      resolve(callback(null, result));
    });
  });
};
