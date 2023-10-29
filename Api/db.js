const mongoose = require("mongoose");
const CONFIG = require("./config/config");
const logger = require("./utils/winstonService");
const promiseRetry = require("promise-retry");

const mongooseOptions = {
  promiseLibrary: global.Promise,
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
};

promiseRetry(function (retry, number) {
  console.log("DB connection attempt number --> ", number);
  return mongoose.connect(CONFIG.DB.DB_URL, mongooseOptions).catch(retry);
}).then(
  function (value) {},
  function (err) {
    logger(0, "error in connection => " + err.toString());
  }
);

let db = mongoose.connection;

db.on("error", (err) => {
  logger(0, "error in connection opening => " + err.message.toString());
});
db.once("open", function () {
  logger(2, "DB Connected Succesfully");
});

module.exports = mongoose;
