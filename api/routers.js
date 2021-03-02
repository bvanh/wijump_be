"use strict";
let api = require("./controls/LogController");
// let apiNews = require("./controls/NewsController");
// let multer = require("./models/upload");
// let media = require("./controls/MediaController");
module.exports = function (app) {
  // app.route("/login").post(logApi.login);
  app.route("/save").post(api.saveConfig);
};
