var mysql = require("mysql");
var con = mysql.createConnection({
  host: "localhost",
  user: "user",
  password: "wordpass",
  database: "Qus_bank",
});

con.connect(function (err) {
  if (err) throw err;
  console.log("Connected to the database!");
});
module.exports = con;
