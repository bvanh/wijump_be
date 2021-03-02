"use strict";
const { Config } = require("../models/Log");
const sequelize = require("sequelize");
const attributesCharges = ["data"];
module.exports = {
  saveConfig: async (req, res, next) => {
    const { config } = req.body;
    Config.update(
      {
        data: config,
      },
      {
        where: {
          map_id: 1,
        },
      }
    )
      .then((data) => {
        res.status(200).send({
          message: "Cập nhật thành công",
        });
      })
      .catch((err) => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving tutorials.",
        });
      });
  },
  getConfig: async (req, res, next) => {
    Config.findAll({
      attributes: ["data"],
      where: {
        map_id: 1,
      },
    })
      .then((data) => {
        res.status(200).send({
          message: "get thành công",
          data: data,
        });
      })
      .catch((err) => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving tutorials.",
        });
      });
  },
};
