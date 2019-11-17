const {DataTypes, Model} = require('sequelize');

class Home extends Model {
  static init(sequelize) {
    super.init({
    }, {
      sequelize,
      tableName: 'homes'
    })
  }

  static associate(models) {
    this.belongsTo(models.User, {foreignKey: 'user_id', as: 'user'})
  }
}

module.exports = Home;