const testing = {
  main: {
    database: process.env.DB_NAME,
    username: process.env.DB_ADMIN,
    password: process.env.DB_PASS,
    host: process.env.DB_HOST,
    dialect: "mysql",
    timezone: "+07:00",
  },
  // database: "cubegame",
};
module.exports = {
  testing
};
