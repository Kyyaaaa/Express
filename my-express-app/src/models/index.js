const { Sequelize, DataTypes } = require("sequelize");
const sequelize = require("../config/database");

// Định nghĩa model User (Ví dụ)
const User = sequelize.define("User", {
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  email: {
    type: DataTypes.STRING,
    unique: true,
    allowNull: false
  }
});

// Đồng bộ database (Tạo bảng nếu chưa có)
sequelize.sync({ alter: true })  
  .then(() => console.log("✅ Database đã đồng bộ"))
  .catch(err => console.error("❌ Lỗi khi đồng bộ database:", err));

module.exports = { sequelize, User };
