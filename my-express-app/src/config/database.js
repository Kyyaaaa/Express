const {Sequelize} = require("sequelize");

const sequelize = new Sequelize("sequelize-video", "root", "10062006As", {
    host: "localhost",
    dialect: "mysql",
});

sequelize.authenticate()
  .then(() => console.log("Thanh cong"))
  .catch(err => console.error("Khong thanh cong", err));

module.exports = sequelize;