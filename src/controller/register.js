const { validationResult } = require("express-validator");
const bcrypt = require('bcryptjs');
const db = require('../config/database');
import {getUserInfo, insertQEC} from '../utils/dbHandler';

// User Registration
exports.register = async (req, res, next) => {
  const errors = validationResult(req);
  const { body } = req;

  if (!errors.isEmpty()) {
      return res.render('register', {
          error: errors.array()[0].msg
      });
  }

  try {

      const [row] = await dbConnection.execute(
          "SELECT * FROM `users` WHERE `email`=?",
          [body._email]
      );

      if (row.length >= 1) {
          return res.render('register', {
              error: 'This email already registered'
          });
      }

      const hashPass = await bcrypt.hash(body._password, 12);

      const [rows] = await dbConnection.execute(
          "INSERT INTO `users`(`name`,`email`,`password`) VALUES(?,?,?)",
          [body._name, body._email, hashPass]
      );

      if (rows.affectedRows !== 1) {
          return res.render('register', {
              error: 'Your registration has failed due to internal server error.'
          });
      }
      
      res.render("register", {
          msg: 'You have successfully registered your account as teacher.'
      });

  } catch (e) {
      next(e);
  }
};


module.exports = {getUserInfo, insertQEC};