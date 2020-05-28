// const mysql2 = require("mysql2");
//
// const connection = mysql2.createConnection({
//   host: "localhost",
//   user: "root",
//   password: "root",
//   database: "store",
// });
//
// module.exports = connection;

const Sequelize = require("sequelize");
const fs = require("fs");
const path = require("path");

module.exports = (() => {
  let instance;

  function initConnection() {
    const client = new Sequelize("store", "root", "root", {
      host: "localhost",
      dialect: "mysql",
    });

    let models = {};

    function getModels() {
      fs.readdir(path.join(process.cwd(), "db", "models"), (err, files) => {
        files.forEach((file) => {
          const [modelName] = file.split(".");
          models[modelName] = client.import(
            path.join(process.cwd(), "db", "models", modelName)
          );
        });
      });
    }

    return {
      setModels: () => getModels(),
      getModel: (modelName) => models[modelName],
    };
  }

  return {
    getInstance: () => {
      if (!instance) {
        instance = initConnection();
      }
      return instance;
    },
  };
})();
