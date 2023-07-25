const db = require('../../config/db-config');

function runQuery(query, params, callback) {
  db.connect(err => { if (err) throw err });
  db.query(
    query, params, (error, results) => {
      if (error)
        throw error;
      callback(results[0]);
    });
  db.end();
}
 function getUserInfo(username) {
    runQuery("SELECT * FROM admin WHERE UserName = ?", username, result => console.log(result));
  }
 function insertQEC(username, password) {
    runQuery("INSERT INTO QEC(UserName, Password) VALUES(?, ?)", username, password, result => console.log(result));
  }


module.exports ={getUserInfo, insertQEC}