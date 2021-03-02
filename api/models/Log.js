const Squelize = require("sequelize");
const squelize = require("../services/databases");
//const { UserProfiles } = require("./Users");
const Config = squelize.main.define(
  "Configs",
  {
    data: Squelize.STRING,
  },
  {
    tableName: "maps",
  }
);
module.exports = { Config };
